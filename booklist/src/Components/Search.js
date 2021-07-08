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

    handleClear (){
        this.state.input = '';
        this.props.reset();
    }

    render() {
    return (
   < div className="search-area">
    <form onSubmit={this.handleSubmit}>
        <input value= {this.state.input} onChange={this.handleSearch} type="text" />
        <button type="submit"> search </button>
    </form>
    <form onSubmit={this.handleClear}>
        <button type="submit"> clear search </button>
    </form>
  
   </div> 
     )
    }
  }

  export default Search;