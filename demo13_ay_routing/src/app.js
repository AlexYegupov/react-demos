import React from 'react';
import Page from './page';


// TODO: debug (display error of right code place)

export default class App extends React.Component{

  constructor(props) {
    super(props);
    console.log(`App`, props)
    this.render = this.render.bind(this);
    this.state = {
      items: this.props.items,
      disabled: true,
      url: props.url
    };
  }

  componentDidMount() {
    console.log(`cdm`, this.props, this.state)
    this.setState({
      disabled: false,
      //histCurrent: location.href
    })
  }

  handleClick() {
    this.setState({
      items: this.state.items.concat('Item ' + this.state.items.length)
    })
  }

  handleRedirect() {
    MYERROR
    history.pushState({page2: 'PaGe2'}, 'my page2 title', '/page2')
    this.setState({ url: '/page2' })
  }

  render() {
    console.log(`r`, this.state)
    return (
      <div>
        <h1>url: {this.state.url}</h1>
        <button onClick={this.handleClick.bind(this)} disabled={this.state.disabled}>Add Item</button>
        <ul>
        {
          this.state.items.map(function(item, index) {
            return <li key={index}>{item}</li>
          })
        }
        </ul>
        <button onClick={this.handleRedirect.bind(this)}>go page2</button>
        <hr />
        <Page url={this.state.url} />
      </div>
    )
  }
};
