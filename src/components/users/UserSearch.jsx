import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"
import { searchUsers } from "../../context/github/GithubAction" 

function UserSearch() {

    const [text, setText]=useState('')

    const {users, dispatch, clearUsers}=useContext(GithubContext)

    const {setAlert}=useContext(AlertContext)

    const handleChange=(e)=>setText(e.target.value)

    const handleSubmit=async (e)=>{
        e.preventDefault()

        if(text===''){
            setAlert('Please enter something', 'error')
        }else{
            dispatch({
                type:"SET_LOADING",
            })
            const users=await searchUsers(text)
            dispatch({
                type:"GET_USERS",
                payload:users,
            })
            setText('')
        }

    }

    const handleClick=()=>{
        clearUsers()
    }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-control">

                    <div class="relative">
                        <input type="text" class="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder='Search' value={text} onChange={handleChange}/>
                        
                        <button class="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Go</button>

                    </div>

                </div>
            </form>
        </div>

        {users.length>0 && (
            <div>
            <button onClick={handleClick} class="btn btn-ghost bnt-lg">CLEAR</button>
        </div>
        )}
      
    </div>
  )
}

export default UserSearch
