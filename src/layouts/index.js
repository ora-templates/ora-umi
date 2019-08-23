import { Component } from 'react';
import withRouter from 'umi/withRouter';
import './index.css'

class Layout extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;

    return <>
      <h3>Welcome To Ora-umi</h3>
      { children }
    </>
  }
}

export default withRouter(Layout);