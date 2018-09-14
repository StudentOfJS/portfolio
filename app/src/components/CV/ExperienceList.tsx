import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { Experience } from '../../proto/portfolio_pb';
import { Item } from 'semantic-ui-react';

interface ExperienceProps {
  jobs: Experience.AsObject;
}

class ExperienceList extends React.Component<ExperienceProps, {}> {
  public render() {
    const { jobs } = this.props;
    if (jobs) {
      return (
        <Item.Group>
          {
            jobs.jobsList.map(job => (
              <Item>
                <Item.Image size="tiny" src={job.logoUrl} />

                <Item.Content>
                  <Item.Header>{job.jobTitle}</Item.Header>
                  <Item.Meta>
                    <span className="price">{job.company}</span>
                    <span className="stay">{job.location}</span>
                    <span className="stay">{job.dates}</span>
                  </Item.Meta>
                  <Item.Description>{job.description}</Item.Description>
                </Item.Content>
              </Item>
            ))
          }
        </Item.Group>
      );
    }
    return;
  }
}

function mapStateToProps(state: RootState) {
  return {
    jobs: state.cv.experience,
  };
}

export default connect(
  mapStateToProps,
)(ExperienceList);