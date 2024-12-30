import React from 'react'
import {Link} from 'react-router-dom'

function UserItem({user:{login, avatar_url}}) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
        <div class="flex-row items-center space-x-4 card-body">

            {/* Item 1 */}
            <div>
                <div class="avatar">
                    <div class="rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt="profile"/>
                    </div>
                </div>
            </div>


            {/* Item 2 */}

            <div>
                <h2 class="card-title capitalize">{login}</h2>
                <Link className='text-base-content text-opacity-50' to={`/user/${login}`}>Visit Profile</Link>
            </div>



        </div>
      
    </div>
  )
}

export default UserItem
