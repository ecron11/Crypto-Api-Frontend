import './App.css';
import AppHeader from './AppHeader.js'
import CryptoForm from './CryptoForm.js'
import AppAboutSection from './AppAboutSection.js'
import HashAboutSection from './HashAboutSection.js'

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      apiResponse: {
        hexDigest: "",
        base64Digest: ""
      },
      hashAlgos: []
    }
  }

  getHash = (input, hashAlgo) => {
    console.log(input);
    console.log(hashAlgo);
    var data = {
        "input": input,
        "hashAlgo": hashAlgo
     }
     
     fetch("https://crypto.erik-longuepee.com/api/createHash", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body:  JSON.stringify(data)
     })
     .then(function(response){ 
      return response.json();   
     })
     .then((data)=>{ 
        this.setState({
            apiResponse: data
        })
     });
  }


  //calls the api to find valid hashing algorithms
  componentDidMount() {
    fetch("https://crypto.erik-longuepee.com/api/checkHashes")
    .then(response => response.json())
    .then(data => {
      this.setState({
        hashAlgos: data.Algorithms
        })
    });

    // .then(data => this.setState({
    //   hashAlgos: data.Algorithms
    // }));
    
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <main className="mainContainer">
          {/* <img id="logo" src="./logo.svg" alt="" style={{
                    height: 200,
                    width: 200,
                }}/> */}
          <CryptoForm 
            hashAlgos={this.state.hashAlgos}
            base64Text={this.state.apiResponse.base64Digest} 
            hexText={this.state.apiResponse.hexDigest} 
            handleSubmit={this.getHash}
          />
          <HashAboutSection />
          <AppAboutSection />
        </main>
        
      </div>
    )
  }
}
