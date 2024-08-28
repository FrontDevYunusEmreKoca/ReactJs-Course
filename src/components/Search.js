import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import AppState from "../context/AppState";

const  Search = ({setAlert,clearUsers}) =>{
    const appContext =  useContext(AppContext)
    const [keyword, setKeyword] =useState("");


    const  onChange =(e) =>{
    console.log(e.target)
    setKeyword(e.target.value)
  }

  const onSubmit =(e)=> {
    e.preventDefault();
    if(keyword === ""){
     setAlert("Lütfen bir anahtar kelime giriniz.", "danger")
    }
    else {
     appContext.searchUsers(keyword)
      setKeyword("")
    }
  
  }
    return (
      <div className="container my-4">
        <form className="" onSubmit={onSubmit}>
          <div className="input-group">
            <input
              value={keyword}
              id="searchId"
              type="text"
              onChange={onChange}
              className="form-control"
            />
            <div className="input-group-append">
              <button type="submit" className=" btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
        <button  onClick={clearUsers} className="btn btn-secondary btn-sm w-100 my-3">Clear Results</button>
      </div>
    );
  
}
export default Search;
