import React, { Component } from 'react';
import './App.css';
import data from './data';
import Header from './Components/Header';
import BookList from './Components/BookList';
import Search from './Components/Search';
import Shelf from './Components/Shelf';


class App extends Component{
  constructor(){
    super()

    this.state = { 
        books: data,
        shelf: [],
    }

    this.addToShelf = this.addToShelf.bind(this);
  }

  addToShelf(val){
    // alert(val)
    this.setState({ shelf: [...this.state.shelf, val]})
  }

  searchBook = (searchInput) => {
    const newBooks = data.filter((book)=>{
      return (book.author.includes(searchInput) || book.title.includes(searchInput))
    } )
    this.setState ({books: [...newBooks] })
    }

reset(){
  this.setState({ books: data })
}

  render() {
    return (
<>
      <div className="Header">
      <Header/>
      </div>

      <div className="Search"> 
      <Search searchBook={this.searchBook}
      reset ={this.reset}
      />
      </div>

      <div className= 'image-container'>
      <BookList booklist={this.state.books}
       addToShelf= {this.addToShelf}
      />
      
       <div className="Shelf">
      <Shelf shelfArr= {this.state.shelf}/>
      </div>
      </div>

     

</>
    )
  }
}


export default App;