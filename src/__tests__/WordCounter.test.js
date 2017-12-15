import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import WordCounter from '../WordCounter'
import Editor from '../Editor'
import Adapter from 'enzyme-adapter-react-16';
import Counter from '../Counter'
import ProgressBar from '../ProgressBar'
import countWords from '../countWords'

configure({ adapter: new Adapter() });

describe("When I type some words", () => {
  const target = 10;
  const inputString = "one two three four five"
  const wordCounter = shallow(<WordCounter targetWordCount={target}/>)
  const textArea = wordCounter.find(Editor).dive().find('textarea')

  textArea.simulate('change', { target: { value: inputString }});
  wordCounter.update();

  it("displays the correct count as a number", () => {
    const counter = wordCounter.find(Counter)
    expect(counter.prop('count')).toBe(countWords(inputString));
  })

  it("displays the correct progress", () => {
    const progressBar = wordCounter.find(ProgressBar)
    expect(progressBar.prop("completion")).toBe(countWords(inputString)/target)
  })
})
