import React from 'react'

class Search extends React.Component{
    constructor (props){
        super(props)
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
       
        this.state = {
           keyword : ""
        }
    }
    onChange(e){
      
        this.setState({
            keyword:e.target.value
        })
    }


    onSubmit(e){
        e.preventDefault();
        this.props.searchUsers(this.state.keyword)
    }
    render(){
        return (
            <form className='' onSubmit={this.onSubmit}>
                <div className="container my-4">
                <div className='input-group'>
                <input type="text" onChange={this.onChange} className="form-control"/>
                <div className='input-group-append'>
                    <button type='submit' className=' btn btn-primary'>Search</button>
                </div>
                </div>
                </div>
                
            </form>
        )
    }
}
export default Search
