import React from 'react';
import Editor from './Editor';
import Counter from './Counter';
import ProgressBar from './ProgressBar';
import SaveManager from './SaveManager';
import countWords from './countWords';
import makeFakeRequest from './makeFakeRequest';

export default class WordCounter extends React.Component {
    constructor() {
        super();
        this.state = { text: '' }
    }

    handleTextChange = (currentText) => {
        this.setState({ text: currentText })
    }

    render() {
        const { targetWordCount } = this.props;
        const { text } = this.state;
        const wordCount = countWords(text);
        const progress = wordCount / targetWordCount;
        return(
            <form>
                <Editor text={text} onTextChange={this.handleTextChange}/>
                <Counter count={wordCount}/>
                <ProgressBar completion={progress}/>
                <SaveManager saveFunction={makeFakeRequest} data={this.state}/>
            </form>
        )
    }
}