import { Component } from 'react';
import { withRouter, RouteComponentProps, RouteProps } from 'react-router-dom';

// tslint:disable-next-line:no-any
class ScrollToTop extends Component<RouteComponentProps<any>> {
  componentDidUpdate(prevProps: RouteProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);