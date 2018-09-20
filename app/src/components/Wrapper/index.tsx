import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { portfolio, RootAction } from '../../actions';

type WrapperState = {
  complete: boolean;
};

type WrapperProps = {
  children: JSX.Element[];
  fetchCV: () => Promise<void>;
};

class Wrapper extends React.Component<WrapperProps, WrapperState> {
  public state = { complete: false };
  public async componentDidMount() {
    await this.props.fetchCV();
    this.setState({ complete: true });
  }
  public render() {
    return (
      <React.Fragment>
        {this.state.complete ? this.props.children : <div>...loading</div>}
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
  return {
    fetchCV: async () => {
      await dispatch(portfolio.listCV());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Wrapper);