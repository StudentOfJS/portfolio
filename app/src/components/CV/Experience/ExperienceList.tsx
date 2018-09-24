import * as React from 'react';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react';
import { Experience } from '../../../proto/portfolio_pb';
import { RootState } from '../../../store';
import styled from '../../../theme';

const EListItem = styled.li`
  background-color: white;
  box-shadow: 2px 2px 8px #666666;
  border-radius: 5px
  height: 300px;
  list-style: none;
  margin: 20px;
  padding: 10px;
  text-align: center;
  width: 300px;
`;

const ElistContainer = styled.div`
  align-items: space-evenly;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-evenly;
  max-width: 1100px;
  min-height: 80vh;
  width: 100%;
`;

const Span = styled.span`
  font-family: ${props => props.theme.fontFamily};
  font-weight: 600;
  font-size: 12px;
`;
const BlueSpan = styled(Span)`
  color: darkblue;
`;
const H3 = styled.h3`
  color: darkgrey;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 700;
  font-size: 18px;
  padding: 10px;
`;

const InnerBox = styled.div`
  padding: 20px;
  text-align: left;
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
                  <Item.Header>
                    <Item.Image size="tiny" src={job.logoUrl} />
                  </Item.Header>
                  <Item.Content>
                    <Item.Header><H3>{job.jobTitle}</H3></Item.Header>
                    <Item.Meta>
                      <BlueSpan>{job.company}, </BlueSpan>
                      <Span>{job.location}</Span>
                    </Item.Meta>
                    <Item.Meta>
                      <Span>{job.dates}</Span>
                    </Item.Meta>
                    <InnerBox>
                      <Item.Description>{job.description}</Item.Description>
                    </InnerBox>
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