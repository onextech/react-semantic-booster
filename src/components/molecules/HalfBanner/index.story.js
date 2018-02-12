import React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from 'semantic-ui-react';
import HalfBanner from '.';
import Block from '../../atoms/Block';
import { testImage2 } from '../../../../test/placeholders';


export const defaultExample = {
  leftCol: {
    background: {
      color: '#1f40e6',
    },
    header: {
      content: 'Center of Focus',
    },
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  rightCol: {
    background: {
      src: testImage2,
    },
    subheader: {
      content: 'Key Trends',
    },
    header: {
      content: 'We reviewed the entire process of data collection, analysis and evaluation to identify key opportunities for automation and efficient data analysis.',
    },
  },
};

const ListExample = () => (
  <List bulleted size="large" relaxed>
    <List.Item>Designed an integration for realtime financial market data population</List.Item>
    <List.Item>
      Built an automatic chart generation and product table tool
      for effortless market performance tracking
    </List.Item>
    <List.Item>Simplified reporting process with built-in language integrations</List.Item>
  </List>
);

const listBannerExample = {
  leftCol: {
    background: {
      color: '#1f40e6',
    },
    header: {
      content: 'From manual data collation to agile financial analysis in a click of a button.',
    },
  },
  rightCol: {
    body: <ListExample />,
    background: {
      color: '#eff3f7',
    },
    textcolor: '#666',
  },
};

const breakExample = {
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
    header: {
      content: 'With no digital capabilities and no value proposition for digital talent, the company needed to reinvent itself.',
    },
  },
};

const altTextExample = {
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
    header: {
      content: 'Keeping it real',
    },
    body: <p>
      With no digital capabilities and no value proposition for digital talent,
      the company needed to reinvent itself.
      We reviewed the entire process of data collection,
      analysis and evaluation to identify key opportunities for
      automation and efficient data analysis.
    </p>,
  },
};

storiesOf('HalfBanner', module)
  .add('Default', () => (
    <div>
      <Block spacer={0} vertical><HalfBanner {...listBannerExample} /></Block>
      <Block spacer={0} vertical><HalfBanner {...breakExample} /></Block>
      <Block spacer={0} vertical><HalfBanner {...defaultExample} /></Block>
      <Block spacer={0} vertical><HalfBanner {...altTextExample} /></Block>
    </div>
  ));
