import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from '../../../theme';

const StyledIcon = styled(Icon)`
  color: white;
  &:hover{
    cursor: pointer;
    color: orange;
  }
`;

const SocialContainer = styled.div`
  padding-top: 20px;
`;
const SocialRow = styled.div`
  padding: 5px;
`;

const Social: React.SFC = () => (
  <SocialContainer>
    <SocialRow>
      <a href="https://twitter.com/StudentOfJS" target="_blank">
        <StyledIcon link={true} size="big" name="twitter square" aria-label="twitter StudentOfJS" />
      </a>
      <a href="https://github.com/StudentOfJS" target="_blank">
        <StyledIcon link={true} size="big" name="github square" aria-label="github StudentOfJS" />
      </a>
      <a href="https://www.linkedin.com/in/rod-lewis-6859a629/" target="_blank">
        <StyledIcon link={true} size="big" name="linkedin square" aria-label="linkedin Rod Lewis" />
      </a>
    </SocialRow>
    <SocialRow>
      <a href="callto://+1234567890">
        <StyledIcon link={true} size="big" name="call" aria-label="call Rod Lewis" />
      </a>
      <a href="hhttps://exercism.io/profiles/StudentOfJS" target="_blank">
        <StyledIcon link={true} size="big" name="fire" aria-label="exercism StudentOfJS" />
      </a>
      <a href="mailto:rodlewis45@gmail.com?subject=Enquiry from Portfolio Site" target="_blank">
        <StyledIcon link={true} size="big" name="mail" aria-label="email Rod Lewis" />
      </a>
    </SocialRow>
  </SocialContainer>
);

export default Social;
