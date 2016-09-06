import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Home from '../components/Home.js';
import Counter from '../components/Counter.js';

// Read about shallow rendering and the jQuery-like search methods are for it:
// http://airbnb.io/enzyme/docs/api/shallow.html

describe('(Component) Home', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).to.have.length(1);
  });
});

describe('(Component) Counter', () => {
  it('renders without exploding', () => {
    const increment = () => {};
    const incrementIfOdd = () => {};
    const incrementAsync = () => {};
    const decrement = () => {};
    const counter = 5;

    const wrapper = shallow(<Counter
      increment={increment}
      incrementIfOdd={incrementIfOdd}
      incrementAsync={incrementAsync}
      decrement={decrement}
      counter={counter}
    />);
    expect(wrapper).to.have.length(1);
  });
});
