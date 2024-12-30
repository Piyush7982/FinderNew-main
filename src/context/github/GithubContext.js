import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext=createContext();

export const GithubProvider=({children})=>{

    const initialState={
        users:[],
        user:{},
        loading:false,
    }

    const [state, dispatch]=useReducer(githubReducer, initialState)


    // Clear users from state

    const clearUsers=()=>dispatch({
        type:"CLEAR_USERS"
    })


    return (<GithubContext.Provider value={{
        ...state,
        dispatch,
        clearUsers,
    }}>{children}</GithubContext.Provider>)


    }


export default GithubContext