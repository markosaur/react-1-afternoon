import React, {Component} from 'react';

export default class TopicBrowser extends Component{

    constructor(){
        super()

        this.state = {
            names: ['James', 'Jessica', 'Melody', 'Patrick', 'Blake', 'Brian', 'Cameron', 'Kyle', 'Kourtney'],
            userInput: "",
            filteredNames: []
        };
    }
    handleChange(val) {
        this.setState({userInput:val});
    }

    filterNames(userInput) {
        let names = this.state.names;
        let filteredNames = [];
        
        for (let i = 0; i < names.length; i++) {
            if(names[i].includes(userInput)) {
                filteredNames.push(names[i]);
            }
        }
        this.setState({filteredNames: filteredNames});
    }

   
    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Names: {JSON.stringify(this.state.names, null, 10)}</span>
                <input className="inputLine" onChange = {(e) => this.handleChange(e.target.value ) }></input>
                <button className="confirmationButton" onClick ={ () => this.filterNames(this.state.userInput)}> Filter </button> 
                {/* we do not need an e because we are not passing anything into the button, we are just pushing the button and we need an argument so it doesn't fire off when the page loads,  E stands for Event */}
                <span className="resultsBox filterStringRB"> Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}</span>
            </div>
        )
    }
}
