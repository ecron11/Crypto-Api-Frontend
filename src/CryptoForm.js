import React, { Component } from 'react'

export default class CryptoForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hashText: "",
            hashAlgo: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);        
    
    }
    
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(value);
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit(this.state.hashText, this.state.hashAlgo);
    }

    render() {
        return (
            <div>
            <img src="./logo.svg" alt="" style={{
                height: 200,
                width: 200
            }}/>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Hashing algorithm
                </label>
                <input
                    name="hashAlgo"
                    type="text" 
                    value={this.state.hashAlgo}
                    onChange={this.handleInputChange}
                    />
                <label>
                    Text to be hashed:
                </label>
                <textarea
                    name="hashText" 
                    value={this.state.hashText}
                    onChange={this.handleInputChange}
                    />
                <input type="submit" />
            </form>

            <p>Hashed text in Base64 format:</p>
            <p>{this.props.base64Text}</p>
            <p>Hased text in hex format: </p>
            <p>{this.props.hexText}</p>
        </div>
        )
    }
}
