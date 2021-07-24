import React, { Component } from "react";
// import './App.css';
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : ""
    }
  }
  componentDidMount(){
    axios.get("http://localhost:3001/api/products").then((r) => {
      this.setState({products: r.data});
    });
  }

  render() {
    return <div className="App">
      {this.state.products && this.state.products.map(element => {
        return (<div key={element._id}>
          <h2>{element.productName}</h2>
          <p>{element.unitPrice}</p>
          <p>{element.unitPrice}</p>
          <p>{element.unitPrice}</p>
          <p>{element.unitPrice}</p>
          <p>{element.unitPrice}</p>
        </div>)
      })}
    </div>;
  }
}

export default App;
