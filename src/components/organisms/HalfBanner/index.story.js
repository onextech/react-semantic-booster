import React from 'react';
import { storiesOf } from '@storybook/react';
import HalfBanner from './index';
import Block from '../../atoms/Block/index';
import { testImage2 } from '../../../../test/placeholders';


export const defaultExample = {
  leftCol: {
    background: {
      color: '#1f40e6',
    },
    copy: {
      header: {
        content: 'Center of Focus',
      },
    },
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  rightCol: {
    background: {
      src: testImage2,
    },
    copy: {
      subheader: {
        content: 'Key Trends',
      },
      header: {
        content: 'We reviewed the entire process of data collection, analysis and evaluation to identify key opportunities for automation and efficient data analysis.',
      },
    },
  },
};

export const listBannerExample = {
  leftCol: {
    background: {
      color: '#1f40e6',
    },
    copy: {
      header: {
        content: 'From manual data collation to agile financial analysis in a click of a button.',
      },
    },
  },
  rightCol: {
    copy: {
      list: {
        size: 'large',
        items: [
          'Designed an integration for realtime financial market data population',
          'Built an automatic chart generation and product table tool',
          'Simplified reporting process with built-in language integrations',
        ],
      },
      color: '#666',
    },
    background: {
      color: '#eff3f7',
    },
  },
};

export const breakExample = {
  leftCol: {
    background: {
      src: testImage2,
      overlay: false,
    },
  },
  rightCol: {
    background: {
      color: '#1f40e6',
    },
    copy: {
      header: {
        content: 'With no digital capabilities and no value proposition for digital talent, the company needed to reinvent itself.',
      },
    },
  },
};

export const altTextExample = {
  leftCol: {
    background: {
      src: testImage2,
      overlay: false,
    },
  },
  rightCol: {
    background: {
      color: '#1f40e6',
    },
    copy: {
      header: {
        content: 'Keeping it real',
      },
      body: 'With no digital capabilities and no value proposition for digital talent, the company needed to reinvent itself. We reviewed the entire process of data collection, analysis and evaluation to identify key opportunities for automation and efficient data analysis.',
    },
  },
};

storiesOf('HalfBanner', module)
  .add('Default', () => (
    <div>
      <Block spacer={0} attached><HalfBanner {...listBannerExample} /></Block>
      <Block spacer={0} attached><HalfBanner {...breakExample} /></Block>
      <Block spacer={0} attached><HalfBanner {...defaultExample} /></Block>
      <Block spacer={0} attached><HalfBanner {...altTextExample} /></Block>
    </div>
  ));
