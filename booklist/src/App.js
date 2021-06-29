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
    this.setState({ addBook: val})
  }

  searchBook = (searchInput) => {
    const newBooks = data.filter((book)=>{
      return (book.author.includes(searchInput) || book.title.includes(searchInput))
    } )
    this.setState ({books: [...newBooks] })
    }

    

  render() {
    return (
      <div>
      <Header/>
      <Search searchBook={this.searchBook}/>
      <BookList booklist={this.state.books}
       addToShelf= {this.addToShelf}
      />
      <Shelf shelfArr= {this.state.shelf}/>
      </div>
    )
  }
}


export default App;