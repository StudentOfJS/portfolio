import * as React from 'react';
import { Icon } from 'semantic-ui-react';
interface RatingProps {
  rating: number;
}

const Rating: React.SFC<RatingProps> = ({ rating }) => {
  const good = Array(rating).fill(<Icon name="star" size="small" color="orange" />);
  const bad = Array(10 - rating).fill(<Icon name="star outline" />);
  return (
    <div>
      {good}{bad}
    </div>
  );
};

export default Rating;