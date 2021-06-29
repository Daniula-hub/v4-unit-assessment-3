import React, { Component } from 'react';

class BookList extends Component {
constructor (props){
  super(props)

}

render(){
  
  const mappedBooks = this.props.booklist.map(element => {
    const {id,title, author, img} = element; 
    return (
      <div>
      <h3> {id} </h3>
      <h3 >  {title} </h3>
      <h3 >  {author} </h3>
      <h3 >  {img} </h3>
       </div>
    )
  })

  
    return (
      <div>
      {mappedBooks}
       </div>
    )
  }
}

export default BookList;