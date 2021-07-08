import React, { Component } from 'react';

class Shelf extends Component {
  constructor (props){
    super(props)
  
  }

  render(){

    const mappedTitles = this.props.shelfArr.map(element => {
      const {title} = element; 
      return (
        <div>
        <h3>  {element} </h3>
       </div>
      )
    })
  
  
      return (
        <div>
        <h2> Your Shelf</h2>
        {mappedTitles}
        <form onSubmit={this.handleClear}>
        <button type="submit"> clear search </button>
        </form>
         </div>
         
      )
    }
  }
  
  export default Shelf;


