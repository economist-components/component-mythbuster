
import Mythbuster from '../src';
import React from 'react/addons';
import chai from 'chai';
const TestUtils = React.addons.TestUtils;
chai.should();
describe('Mythbuster', () => {
  it('renders a React element', () => {
    React.isValidElement(<Mythbuster />).should.equal(true);
  });

  describe('Rendering', () => {
    const renderer = TestUtils.createRenderer();
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
    it('renders a mythbuster', () => {
      renderer.render(<Mythbuster items={images} defaultSlide={defaultSlide} />);
      const render = renderer.getRenderOutput();
      render.props.className.should.equal('mythbuster mythbuster--slide-0');
      render.props.children.length.should.equal(2);
      render.props.children[1].props.children.props.activeSlide.should.equal(0);
      render.props.children[1].props.children.props.images.length.should.equal(1);
    });
  });
});
