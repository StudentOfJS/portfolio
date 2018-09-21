import * as React from 'react';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react';
import { Experience } from '../../../proto/portfolio_pb';
import { RootState } from '../../../store';
import styled from '../../../theme';

const EListItem = styled.li`
  box-shadow: 1px 1px 10px grey;
  border-radius: 5px
  height: 180px;
  list-style: none;
  margin: 20px;
  min-width: 300px;
  padding: 10px;
  width: 30%;
`;

const ElistContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 80vh;
  justify-content: space-evenly;
  width: 100vw;
`;

interface ExperienceProps {
  jobs: Experience.AsObject;
}

class ExperienceList extends React.Component<ExperienceProps, {}> {
  public render() {
    const { jobs } = this.props;
    if (jobs) {
      return (
        <ElistContainer>
          {
            jobs.jobsList.map(job => (
              <EListItem key={job.id}>
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
              </EListItem>
            ))
          }
        </ElistContainer>
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