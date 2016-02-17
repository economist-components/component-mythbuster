
import Mythbuster from '..';
import React from 'react/addons';
import Slides from '@economist/component-gallery/lib/slides';
import chai from 'chai';
const TestUtils = React.addons.TestUtils;
chai.should();
describe('Mythbuster', () => {
  it('is compatible with React.Component', () => {
    Mythbuster.should.be.a('function')
      .and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<Mythbuster/>).should.equal(true);
  });

  describe('Rendering', () => {
    const renderer = TestUtils.createRenderer();
    const images = [
      {
        sources: [
          {
            url: '/assets/slide.svg',
            width: 297,
            height: 297,
            dppx: 1,
          },
        ],
        alt: 'Mythbusting outta here',
      },
    ];
    const defaultSlide = 0;
    it('renders a mythbuster', () => {
      renderer.render(<Mythbuster items={images} defaultSlide={defaultSlide} />, {});
      const render = renderer.getRenderOutput();
      /* eslint-disable react/jsx-handler-names */
      const html = (
        <div
          className="mythbuster"
          onMouseEnter={render.props.onMouseEnter}
          onMouseLeave={render.props.onMouseLeave}
          onClick={render.props.onClick}
        >
          <div className="mythbuster__header">
            <img className="mythbuster__header-image" src="/assets/election-brand.svg" />
          </div>
          <div className="gallery">
            <Slides images={images} activeSlide={defaultSlide} />
          </div>
        </div>
      );
      render.should.deep.equal(html);
      /* eslint-enable react/jsx-handler-names */
    });
  });
});
