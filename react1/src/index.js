import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
function BookList() {
  return (
    <>
      <div className='book-list'>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
      </>
      )
}

function Book() {
  return (
    <>
      <div className='Book'>
        <img src="https://m.media-amazon.com/images/I/512V7zylZPL._SY445_SX342_.jpg" alt="" />
        <h2>Introduction</h2>
        <p>This book is the  Introduction to Programming</p>
      </div>
    </>
  )
}
ReactDOM.render(<BookList />, document.querySelector("#root"))