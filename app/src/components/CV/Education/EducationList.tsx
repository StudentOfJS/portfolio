import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import { Education } from '../../../proto/portfolio_pb';
import { Item, Icon } from 'semantic-ui-react';

interface EducationProps {
  courses: Education.AsObject;
}

class EducationList extends React.Component<EducationProps, {}> {
  public render() {
    const { courses } = this.props;
    if (courses) {
      return (
        <Item.Group style={{ padding: '60px 5px' }}>
          {
            courses.coursesList.map(course => (
              <Item key={course.id}>
                <Item.Content>
                  <Item.Header><Icon name="graduation cap" />{' '}{course.institution}</Item.Header>
                  {' '}
                  <Item.Header>{course.name}</Item.Header>
                  <Item.Meta>
                    <span className="stay">{course.dates}</span>
                  </Item.Meta>
                  <Item.Description>{course.description}</Item.Description>
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
    courses: state.cv.education,
  };
}

export default connect(
  mapStateToProps,
)(EducationList);