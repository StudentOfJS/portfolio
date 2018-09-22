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
    console.log(courses);
    if (courses) {
      return (
        <Item.Group>
          {
            courses.coursesList.map(course => (
              <Item key={course.id}>
                <Icon name="graduation cap" />
                <Item.Content>
                  <Item.Header>{course.name} - {course.institution}</Item.Header>
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