import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function Booklist() {
  return (
    <>
      <div className="book-list">
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
        <Books />
      </div>
    </>
  )
}

function Books() {
  return (
    <>
      <div className="Book">
        <img src="https://static.toiimg.com/photo/104701845/104701845.jpg" />
        <h2>My Books</h2>
        <p>Hello this is My Book</p>
      </div>
    </>
  )
}

ReactDOM.render(<Booklist />, document.querySelector("#root"))