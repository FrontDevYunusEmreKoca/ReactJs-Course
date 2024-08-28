

const AppReducer = (state,action)=> {
    switch(action.type){
        case "SEARCH_USER":
            return {
                ...state,
                users:action.payload, //payload servisten donen cevap
                loading:false
            }
        case "SET_LOADING":
            return {
                ...state,
                loading:true 
            }
         default:   
            return state
    }   
}
export default AppReducer;