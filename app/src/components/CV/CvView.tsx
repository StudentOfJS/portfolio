import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { portfolio, RootAction } from '../../actions';
import { Grid, Segment } from 'semantic-ui-react';
import SkillsList from './SkillsList';
import ExperienceList from './ExperienceList';
import Bio from './Bio';
import EducationList from './EducationList';

type ICvViewProps = {
  fetchCV: () => Promise<void>;
};

class CvView extends React.Component<ICvViewProps, {}> {
  public componentDidMount = async () => {
    await this.props.fetchCV();
  }
  public render() {

    return (
      <Grid stackable={true} columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Bio />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ExperienceList />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <SkillsList />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <EducationList />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
  return {
    fetchCV: async () => {
      await dispatch(portfolio.initializeBio());
      await dispatch(portfolio.initializeCV());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CvView);