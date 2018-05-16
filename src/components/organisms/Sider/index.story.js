import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Menu, Card, Grid } from 'semantic-ui-react';
import Sider from '.';
import Block from '../../atoms/Block';
import MenuLink from '../../atoms/MenuLink';
import { testCardImage } from '../../../../test/placeholders';


export const CardExampleColored = () => (<Card.Group itemsPerRow={4}>
    <Grid stackable>
      <Grid.Row columns="equal">
        <Grid.Column>
          <Card fluid image={testCardImage} />
        </Grid.Column>
        <Grid.Column>
          <Card fluid image={testCardImage} />
        </Grid.Column>
        <Grid.Column>
          <Card fluid image={testCardImage} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns="equal">
        <Grid.Column>
          <Card fluid image={testCardImage} />
        </Grid.Column>
        <Grid.Column>
          <Card fluid image={testCardImage} />
        </Grid.Column>
        <Grid.Column>
          <Card fluid image={testCardImage} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Card.Group>);

export class ExampleMenu extends React.Component {
  state = { activeItem: 'closest' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state;

    return (
      <div style={{ padding: '1.3em' }}>
        <Menu text vertical fluid>
          <Menu.Item header>Sort By</Menu.Item>
          <Menu.Item name='closest' active={activeItem === 'closest'} onClick={this.handleItemClick} />
          <Menu.Item name='mostComments' active={activeItem === 'mostComments'} onClick={this.handleItemClick} />
          <Menu.Item name='mostPopular' active={activeItem === 'mostPopular'} onClick={this.handleItemClick} />
        </Menu>
        <Menu text vertical fluid>
          <Menu.Item header>Filter By</Menu.Item>
          <Menu.Item name='price' active={activeItem === 'price'} onClick={this.handleItemClick} />
          <Menu.Item name='dateAdded' active={activeItem === 'dateAdded'} onClick={this.handleItemClick} />
          <Menu.Item name='lame' active={activeItem === 'lame'} onClick={this.handleItemClick} />
        </Menu>
        <Menu text vertical fluid>
          <Menu.Item header>Categories</Menu.Item>
          <Menu.Item name='chocolate' active={activeItem === 'chocolate'} onClick={this.handleItemClick} />
          <Menu.Item name='milo' active={activeItem === 'milo'} onClick={this.handleItemClick} />
          <Menu.Item name='latte' active={activeItem === 'latte'} onClick={this.handleItemClick} />
        </Menu>
      </div>
    );
  }
}

export const ExampleContent = () => (<Block attached inverted textAlign="center" style={{ padding: '2em' }}>
    <Container>
      <CardExampleColored />
    </Container>
  </Block>);

export const ExampleMenuItems = () => ([
    <Menu.Menu key="left" position="left">
      <MenuLink key={1} to="/1">One</MenuLink>
      <MenuLink key={2} to="/2">Two</MenuLink>
      <MenuLink key={3} to="/3">Three</MenuLink>
    </Menu.Menu>,
    <Menu.Menu key="right" position="right">
      <MenuLink key={4} to="/4">Four</MenuLink>
      <MenuLink key={5} to="/5">Five</MenuLink>
      <MenuLink key={6} to="/6">Six</MenuLink>
    </Menu.Menu>,
]);

storiesOf('Sider', module)
  .add('Filter', () => (
    <div>
      <Block secondary attached>
        <Container>
          <h1>Hello World</h1>
        </Container>
      </Block>
      <Sider
        navScroll
        toggleProps={{ name: 'Filter', icon: 'filter', button: { primary: true } }}
        sidebar={<ExampleMenu />}
        menuItems={<ExampleMenuItems />}>
        <ExampleContent />
      </Sider>
      <Block secondary>
        <Container>
          <h3>Hello World</h3>
        </Container>
      </Block>
    </div>
  ))
  .add('Dashboard', () => {
    const DashboardMenu = () => (
      <Menu vertical fluid inverted style={{ height: '100%', borderRadius: 0 }}>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item name='closest' />
        <Menu.Item name='mostComments' />
        <Menu.Item name='mostPopular' />
      </Menu>
    );
    const DashboardNav = () => ([
      <Menu.Menu key="left" position="left">
        <MenuLink key={1} to="/1">One</MenuLink>
      </Menu.Menu>,
      <Menu.Menu key="right" position="right">
        <MenuLink key={5} to="/5">Five</MenuLink>
        <MenuLink key={6} to="/6">Six</MenuLink>
      </Menu.Menu>,
    ]);
    return (
      <div>
        <Sider
          toggleProps={{ icon: 'content', button: { primary: true } }}
          sidebar={<DashboardMenu />}
          menuItems={<DashboardNav />}>
          <Block attached secondary textAlign="center" style={{ padding: '2em' }}>
            <Container>
              <CardExampleColored />
            </Container>
          </Block>
        </Sider>
      </div>
    );
  });
