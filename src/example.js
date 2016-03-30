import Mythbuster from './';
import React from 'react';
const props = {
  defaultSlide: 0,
  items: [
    {
      header: '/assets/brexit-logo.svg',
      id: 'brexit-myth-1',
      sources: [
        {
          url: '/assets/brexit-slide-1.svg',
          mime: 'image/svg+xml',
        },
      ],
    },
  ],
};
export default (
  <Mythbuster {...props} />
);
