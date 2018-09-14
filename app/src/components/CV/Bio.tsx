import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { Bio } from '../../proto/portfolio_pb';
import { Item } from 'semantic-ui-react';

interface EducationProps {
  bio: Bio.AsObject;
}

class BioList extends React.Component<EducationProps, {}> {
  public render() {
    const { bio } = this.props;
    if (bio) {
      return (
        <Item>
          <Item.Content>
            <Item.Header>{bio.title}</Item.Header>
            <Item.Description>{bio.description}</Item.Description>
          </Item.Content>
        </Item>
      );
    }
    return;
  }
}

function mapStateToProps(state: RootState) {
  return {
    bio: state.cv.bio,
  };
}

export default connect(
  mapStateToProps,
)(BioList);