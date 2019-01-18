import React from 'react';

class HashRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: null,
    }
  }

  componentDidMount() {
    this.hashChangeHandler();
    window.addEventListener("hashchange", this.hashChangeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.hashChangeHandler);
  }

  hashChangeHandler = () => {
    const path = window.location.hash.replace('#', '')
    this.setState({path})
  }

  // pushHash = e => {
  //   e.preventDefault();
  //   const url = e.target.getAttribute('path').replace('/', '#');
  //   history.pushState(null, null, url);
  // }

  findComponent = path => {

    const { children } = this.props;
    let component, componentDefault;
    children.forEach(route => {

      if (route.props.path === path) {
        component !== undefined && console.warn('Do not define the same path more than one, please!');
        component = route
      }

      if (route.props.default) {
        componentDefault !== undefined && console.warn('Do not define default path more than once, please!');
        componentDefault = route
      }
    });

    return component || componentDefault;
  }

  render() {
    return <>
      {this.findComponent(this.state.path)}
    </>
  }
}

export default HashRouter;