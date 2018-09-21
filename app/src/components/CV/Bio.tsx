import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { Item } from 'semantic-ui-react';

class Bio extends React.Component<RootState, {}> {
  public render() {
    const { cv: { bio } } = this.props;
    console.log(bio);
    return (
      <Item>
        <Item.Content>
          <Item.Header>{bio && bio.title}</Item.Header>
          <Item.Description>{bio && bio.description}</Item.Description>
        </Item.Content>
      </Item>
    );
  }
}

function mapStateToProps(state: RootState) {
  return state;
}

export default connect(
  mapStateToProps,
)(Bio);