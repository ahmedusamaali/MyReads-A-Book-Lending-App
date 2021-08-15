import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'

import BooksApp from './component/BooksApp'
import SearchApp from './component/SearchApp'


class Home extends React.Component {

  render() {
    return (
      <div className="app">
        <Route path="/" exact component={BooksApp} />
        <Route path="/search" component={SearchApp}/>
      </div> )
  }
}

export default Home
