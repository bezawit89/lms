import { Component } from "react";
import axios from "axios";

import "./userhome.css";

class UsersHome extends Component {
  state = {
    books: [],
  };

  getBooks() {
    axios
      .post("http://localhost:3002/api/getbooks")
      .then((response) => {
        this.setState({ books: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getBooks();
  }
  render() {
    return (
      <div className="userhp">
        {this.state.books.map((books, index) => (
          <ul>
            <li className="book-list">
              <p>BookName: {books.bname}</p>
              <p>BookAuther: {books.bauthor}</p>
              <p>BookCategory: {books.bcategory}</p>
              <button className="request-btn">Resquest</button>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default UsersHome;
