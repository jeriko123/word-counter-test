import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import WordCounter from '../WordCounter';
import countWords from '../countWords';
import Counter from '../Counter';
import Editor from '../Editor';
import ProgressBar from '../ProgressBar';

describe('When i type some words', () => {
  const target = 10;
  const inputString = 'One Two three four';
  const wordCounter = shallow(<WordCounter targetWordCount={target}/>);
  const textArea = wordCounter.find(Editor).dive().find('textarea');
  textArea.simulate('change', {target: {value: inputString}});
  it('displays the correc', () => {
    const counter = wordCounter.find(Counter);
    expect(counter.prop('count')).toBe(countWords(inputString));
  })
});