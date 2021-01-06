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
      }
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

  //Gets a list of the hashing algorithms that can be used
  // getHashAlgos() {
  //   fetch("http://cryptoapi-env.eba-twhhdby2.us-east-2.elasticbeanstalk.com/api/checkHashes", {
  //     method: "GET"
  //   })
  // }

  //calls the api to find valid hashing algorithms
  componentDidMount() {
    //this.callApi();
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <CryptoForm 
          base64Text={this.state.apiResponse.base64Digest} 
          hexText={this.state.apiResponse.hexDigest} 
          handleSubmit={this.getHash}
        />
        <AppAboutSection />
        <HashAboutSection />
      </div>
    )
  }
}
