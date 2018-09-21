import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { PortfolioActionTypes } from '../../actions/portfolioActions';
import { listCV } from '../../actions/portfolioActions';
import { RootState } from '../../store';

type WrapperProps = {
  loading: boolean,
  fetchCV: () => void,
};

class Wrapper extends React.Component<WrapperProps> {
  public async componentDidMount() {
    await this.props.fetchCV();
  }
  public render() {
    const { children, loading } = this.props;
    return (
      <React.Fragment>
        {!loading ? children : <div>...loading</div>}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    loading: state.cv.loading,
  };
}

function mapDispatchToProps(dispatch: Dispatch<PortfolioActionTypes>) {
  return {
    fetchCV: () => {
      dispatch(listCV());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);