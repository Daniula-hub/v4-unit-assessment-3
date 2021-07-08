
import React, { Component } from 'react';

class BookList extends Component {
constructor (props){
  super(props)

}

addToShelf(bookTitle){
  this.props.addToShelf(bookTitle);
}

render(){

  const mappedBooks = this.props.booklist.map(element => {
    const {title, author, img} = element; 
    return (
      <div className="book">
      <div>
      <h3>  {title} </h3>
      <h3>  {author} </h3>
      </div>
      <img  onClick={() => this.props.addToShelf(title)} src={img} />
      </div>
    )
  })


    return (
      <div className='mappedBooks'>
      {mappedBooks}
       </div>
    )
  }
}

export default BookList;