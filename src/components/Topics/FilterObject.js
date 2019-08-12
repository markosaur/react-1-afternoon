import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            StarWars: [
                {
                    name: 'Yoda',
                    lightSaber: 'Green',
                    age: 900,
                },
                {
                    name: 'Darth Vader',
                    lightSaber: 'Red',
                    suit: 'black',
                },
                {
                    name: 'Mace Windu',
                    lightSaber: 'Purple',
                    Level: 'Jedi Master'
                }
            ],
            
            userInput: '',
            filteredStarWars: []
        }
    }
    handleChange(val){
        this.setState({userInput:val });
    }

    filterStarWars(prop) {
        let StarWars = this.state.StarWars;
        let filteredStarWars = [];

        for( let i=0; i < StarWars.length; i++) {
            if (StarWars[i].hasOwnProperty(prop) ) {
                filteredStarWars.push(StarWars[i]);
            }
        }
     this.setState({filteredStarWars: filteredStarWars})   
    }

    render (){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.filteredStarWars, null, 10)} </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterStarWars(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredStarWars, null, 10)} </span>
            </div>
        )
    }
}