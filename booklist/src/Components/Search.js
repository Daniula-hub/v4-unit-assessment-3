import React, { Component } from 'react';

class Search extends Component{
    constructor(props){
        super(props);
    
        this.state={
            searchField: ''
        }
    }
    
    
    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.searchBook(this.state.searchField)
    }

    render() {
    return (
   < div className="search-area">
    <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleSearch} type="text" />
        <button type="submit"> search </button>
    </form>
   </div> 
     )
    }
  }

  export default Search;