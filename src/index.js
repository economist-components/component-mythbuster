import React from 'react';
import Slides from '@economist/component-gallery/lib/slides';
import content from './content';

export function handleInteraction(event) {
  if (!event && !event.currentTarget) {
    return;
  }
  const element = event.currentTarget;
  element.classList.toggle('mythbuster--active');
}

export default function Mythbuster({
  defaultSlide = 0,
  items = content,
}) {
  return (
    <div
      className={`mythbuster mythbuster--slide-${ defaultSlide }`}
      onMouseEnter={handleInteraction}
      onMouseLeave={handleInteraction}
      onClick={handleInteraction}
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

if (process.env.NODE_ENV !== 'production') {
  Mythbuster.propTypes = {
    items: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        sources: React.PropTypes.arrayOf(
          React.PropTypes.shape({
            url: React.PropTypes.string,
            width: React.PropTypes.number,
            height: React.PropTypes.number,
            dppx: React.PropTypes.number,
          })
        ),
        alt: React.PropTypes.string,
      })
    ),
    defaultSlide: React.PropTypes.number,
  };
}
