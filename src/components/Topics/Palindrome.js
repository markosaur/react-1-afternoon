import React, {Component} from 'react';
export default class Palindrome extends Component{
     
    constructor() {
        super();

        this.state = {
            userInput: "",
            palindrome: ""
        }

    }
        handleChange(val){
            this.setState({userInput:val})
        }

        areWePalindrome(userInput){
           let forwards = userInput;
           let backwards = userInput;
           backwards = backwards.split('');
           backwards = backwards.reverse();
           backwards = backwards.join('');
           if( forwards === backwards ) {
               this.setState({palindrome: 'True'});
           }else {
               this.setState({palindrome: 'False'});
           }
           
        }
        
    render(){
        return(
            <div className = "puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className = "inputLine" onChange = { (event) => this.handleChange(event.target.value) }></input>
                <button className = "confirmationButton" onClick = { () => this.areWePalindrome(this.state.userInput)}>Check</button>
                <span className = "resultsBox">Palindrome: {this.state.palindrome} </span>

            </div>
        )
    }
}