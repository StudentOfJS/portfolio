import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { portfolio, RootAction } from './actions';
type IAppProps = {
  fetchProjects: () => Promise<void>;
  fetchCV: () => Promise<void>;
};

class App extends React.Component<IAppProps, {}> {
  public componentDidMount = async () => {
    await this.props.fetchProjects();
    await this.props.fetchCV();
  }
  public render() {

    return (
      <div>test</div>
    );
  }
}

function mapStateToProps() {
  return;
}

function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
  return {
    fetchProjects: async () => {
      await dispatch(portfolio.initializeProjects());
    },
    fetchCV: async () => {
      await dispatch(portfolio.initializeBio());
      await dispatch(portfolio.initializeCV());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);