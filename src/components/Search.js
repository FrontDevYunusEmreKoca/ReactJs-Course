import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      keyword: "",
    };
  }
  onChange(e) {
    this.setState({
      keyword: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.searchUsers(this.state.keyword);
 
    this.setState({
      keyword: "",
    });
  }


  render() {
    return (
      <div className="container my-4">
        <form className="" onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              value={this.state.keyword}
              id="searchId"
              type="text"
              onChange={this.onChange}
              className="form-control"
            />
            <div className="input-group-append">
              <button type="submit" className=" btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
        <button  onClick={this.props.clearUsers} className="btn btn-secondary btn-sm w-100 my-3">Clear Results</button>
      </div>
    );
  }
}
export default Search;
