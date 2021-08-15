import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookDetail from './BookDetalis';
import * as BooksAPI from '../BooksAPI';


class SearchPage extends Component {
  state = {
      books: [],
      allbook :[],
      fainal:[],
      query: ''
      
  };
  componentDidMount() {
    
}

  handleUpdateQuery(query) {
      BooksAPI.search(query).then(books => books ? this.setState({ books }) : []);
      this.setState({ query });
      BooksAPI.getAll().then(allbook => this.setState({ allbook }));
      let flag =false;
      let f=[];
      for(let i = 0; i < this.state.books.length; i++) {
        for(let j = 0; j < this.state.allbook.length; j++) {
            if(this.state.books[i].id === this.state.allbook[j].id) {
              f.push(this.state.allbook[j]);
              flag=true;
              break;
            }
            
        }
        if(flag==true){
          flag=false;
        }
        else{
          let r =this.state.books[i];
          r.shelf='none';
          f.push(r);
          

        }
    }
    this.state.fainal=f;
      console.log(this.state.books);
      console.log(this.state.allbook);
      console.log(this.state.fainal);

  }

  handleBookShelf(book, shelf) {
    BooksAPI.update(book, shelf)
        .then(() => shelf !== 'none' ? alert(`${book.title} has been added to your shelf!`) : null)
        .catch(() => alert('Something went wrong! Please try again!'));
  }

  renderSearchResults() {
      const  books = this.state.fainal;
      const  query = this.state.query;

      if (query) {
          return books.error ?
              <div>No results found</div>
              : books.map((book, index) => {
                  return (
                      <BookDetail
                          key={index}
                          book={book}
                          handleBookShelf={this.handleBookShelf.bind(this)}
                      />
                  );
              });
      }
  }


    render() {
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              to='/'
              className='close-search'
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                  type="text"
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={e => this.handleUpdateQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {this.renderSearchResults()}
            </ol>
          </div>
        </div>
      );
  }
}

export default SearchPage;