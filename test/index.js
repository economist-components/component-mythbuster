import 'babel-polyfill';
import Mythbuster from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();

describe('Mythbuster', () => {
  const images = [
    {
      sources: [
        {
          url: '/assets/slide.svg',
          mime: 'image/svg+xml',
        },
      ],
    },
  ];
  const defaultSlide = 0;
  it('renders a React element', () => {
    React.isValidElement(<Mythbuster />).should.equal(true);
  });

  describe('handleInteraction', () => {
    let rendered = null;
    let mythbuster = null;
    beforeEach(() => {
      rendered = mount(<Mythbuster images={images} defaultSlide={defaultSlide} />);
      mythbuster = rendered.find('.mythbuster');
    });
    it('toggles the active class', () => {
      mythbuster.simulate('click');
      mythbuster.should.have.className('mythbuster--active');
      mythbuster.simulate('click');
      mythbuster.should.not.have.className('mythbuster--active');
    });
  });

  describe('Rendering', () => {
    let rendered = null;
    let mythbuster = null;
    beforeEach(() => {
      rendered = mount(<Mythbuster images={images} defaultSlide={defaultSlide} />);
      mythbuster = rendered.find('.mythbuster');
    });

    it('renders a top level div.mythbuster', () => {
      mythbuster.should.have.tagName('div');
      mythbuster.should.have.className('mythbuster');
    });

    it('renders a className with the active slide', () => {
      mythbuster.should.have.className('mythbuster--slide-0');
    });
  });
});
