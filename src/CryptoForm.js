import React, { Component } from 'react'
import './CryptoForm.css'

export default class CryptoForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hashText: "",
            hashAlgo: "md5"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);        
    
    }
    
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit(this.state.hashText, this.state.hashAlgo);
    }

    render() {
        //create the options for the algorithm drop down
        // `<option value='${element}'>${element}</option>`
        const algoOptions = [];
        this.props.hashAlgos.forEach(element => {
            algoOptions.push(
                <option value={element} key={element}>
                        {element}
                </option>
            );
        });

        return (
            <section id="crypto-form-section">

                <form onSubmit={this.handleSubmit} className="column">
                    {/* The hashing algorithm selector. It is populated by a call to the API in App.js  */}
                    <label>
                        Hashing algorithm   
                    </label>
                    <select 
                        name="hashAlgo"
                        value={this.state.hashAlgo}
                        onChange={this.handleInputChange}
                    >
                        {algoOptions}
                    </select><br />
                    <label>
                        Text to be hashed:   
                    </label>
                    <textarea
                        name="hashText" 
                        value={this.state.hashText}
                        onChange={this.handleInputChange}
                        maxLength="300"
                        />
                    <input type="submit" />
                </form>
                <div className="column hash-text-container">
                    <p>Hashed text in Base64 format:</p>
                    <p>{this.props.base64Text}</p>
                    <p>Hased text in hex format: </p>
                    <p>{this.props.hexText}</p>
                </div>
                
            </section>
        )
    }
}
