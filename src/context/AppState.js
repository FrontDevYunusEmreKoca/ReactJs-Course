import { useReducer } from "react"
import AppReducer from "./AppReducer" 
import AppContext from "./AppContext"
import axios from "axios";

const AppState = (props) => {
    //baslangic state
    const initialState = {
        users:[],
        user:{},
        repos:[],
        loading:false
    }
    const [state,dispatch] = useReducer(AppReducer,initialState)
    // dispatch reducerdan gelen elemanlar olacak.

    const searchUsers = (keyword)=> {
        // apiye ulastik
        setLoading()
        setTimeout(() => {
          axios
            .get(`https://api.github.com/search/users?q=${keyword}`)
            .then(res =>{
               dispatch({
                type:"SEARCH_USER",
                payload:res.data.items
                 })
            });
        }, 1000);
      }

      const setLoading =() => {
        dispatch({type:"SET_LOADING"})
      }

    return <AppContext.Provider   
        value={{
            // buradaki state useReducerdan donen state olacak
            users:state.users,
            user:state.user,
            repos:state.repos,
            loading:state.loading,
            searchUsers
            
            }}>
                {props.children}
    </AppContext.Provider>
}
export default AppState;