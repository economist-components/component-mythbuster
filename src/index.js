import React from 'react';
import Slides from '@economist/component-gallery/lib/slides';
import content from './content';
import { findDOMNode as findDomNode } from 'react-dom';

export default class Mythbuster extends React.Component {
  constructor(args) {
    super(...args);
    this.handleInteraction = this.handleInteraction.bind(this);
  }

  handleInteraction() {
    const element = findDomNode(this);
    element.classList.toggle('mythbuster--active');
  }

  render() {
    const { items, defaultSlide } = this.props;
    return (
      <div
        className="mythbuster"
        onMouseEnter={this.handleInteraction}
        onMouseLeave={this.handleInteraction}
        onClick={this.handleInteraction}
      >
        <div className="mythbuster__header">
          <img className="mythbuster__header-image" src="/assets/election-brand.svg" />
        </div>
        <div className="gallery">
          <Slides images={items} activeSlide={defaultSlide} />
        </div>
      </div>
    );
  }
}

Mythbuster.defaultProps = {
  defaultSlide: 0,
  items: content,
};

if (process.env.NODE_ENV !== 'production') {
  Mythbuster.propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.object),
    defaultSlide: React.PropTypes.number,
  };
}
