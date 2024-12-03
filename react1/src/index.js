import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function Booklist() {
  return (
    <>
      <div className="card-container">
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
      <div className="card">
        <div className="card-image">
          <img src="https://www.schandpublishing.com/Handler/ImageHandler.ashx?width=314&height=404&imgpath=~/Upload/BookImage/9789358701401.jpg" />
        </div>
        <div className="card-content">
          <h3 >Wren & Martin</h3>
          <p>Wren N Martin book for Secondary and High School to learn English Grammer</p>
        </div>

      </div>
    </>
  )
}
ReactDOM.render(<Booklist />, document.querySelector("#root"))