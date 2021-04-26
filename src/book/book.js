import { useState } from "react";
import axios from "axios";

import "./book.css";

const Book = () => {
  const [bid, setBid] = useState("");
  const [bname, setBname] = useState("");
  const [bcategory, setBcategory] = useState("");
  const [bauthor, setBauthor] = useState("");
  const [bquantity, setBquantity] = useState("");

  const [bookState, setBookState] = useState("");

  let showbookState = bookState;

  const bookHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/api/addbook", {
        bid: bid,
        bname: bname,
        bauthor: bauthor,
        bcategory: bcategory,
        bquantity: bquantity,
      })
      .then((respose) => {
        setBookState(`added book ${bname}`);
        console.log(respose.data);
      });
  };

  return (
    <div className="addbook">
      <div className="container">
        <div className="row">
          <form className="col s12 l5 md6 add-book-form">
            <div className="input-field">
              <input
                type="text"
                placeholder="book id"
                onChange={(e) => {
                  setBid(e.target.value);
                }}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="book name"
                onChange={(e) => {
                  setBname(e.target.value);
                }}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="book author"
                onChange={(e) => {
                  setBauthor(e.target.value);
                }}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="book category"
                onChange={(e) => {
                  setBcategory(e.target.value);
                }}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="book quantity"
                onChange={(e) => {
                  setBquantity(e.target.value);
                }}
              />
            </div>
            <button className="add-book-bnt" onClick={bookHandler}>
              Add
            </button>
          </form>
          <h1>{showbookState}</h1>
        </div>
      </div>
    </div>
  );
};

export default Book;
