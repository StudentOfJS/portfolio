import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from '../../../theme';

interface RatingProps {
  rating: number;
}

const RatingContainer = styled.div`
  border-bottom: 2px solid grey;  
  margin: 1px 0 10px 0;
`;

const Rating: React.SFC<RatingProps> = ({ rating }) => {
  const good = Array(rating).fill(0).map((_, i) => <Icon key={i} name="star" size="large" color="orange" />);
  const bad = Array(10 - rating).fill(0).map((_, i) => <Icon key={i} name="star outline" size="large" color="grey" />);
  return (
    <RatingContainer>
      {good}{bad}
    </RatingContainer>
  );
};

export default Rating;