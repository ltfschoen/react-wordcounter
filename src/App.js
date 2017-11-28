import React from 'react';
import WordCounter from './WordCounter';
import Timer from './Timer';

export default class App extends React.Component {
    constructor() {
        super();
        this.timer = null;
        this.state = { timeNow: new Date() }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            let timeNow = new Date();
            this.setState(() => ({ timeNow }))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div className="measure sans-serif pa4">
                <WordCounter targetWordCount={10}/> 
                <Timer timeNow={this.state.timeNow}/>
            </div>
        )
    }
}