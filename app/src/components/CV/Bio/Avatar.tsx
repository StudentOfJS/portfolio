import * as React from 'react';
import LazyLoad from 'react-lazyload';
import styled from '../../../theme';

const Image = styled.img`
  border-radius: 100%;
  height: 100px;
  transition: opacity 0.5s linear;
  width: 100px;
`;

export interface AvatarProps {
  alt: string;
  images: string[];
}

export interface AvatarState {
  image: number;
}

export default class Avatar extends React.Component<AvatarProps, AvatarState> {
  public state = {
    image: 0,
  };
  public handleImageLoaded = () => {
    if (this.state.image < (this.props.images.length - 1)) {
      setTimeout(() => this.setState(prevState => ({ image: prevState.image + 1 })), 500);
    }
  }

  public render() {
    return (
      <LazyLoad height={100} offset={1}>
        <Image
          alt={this.props.alt}
          src={this.props.images[this.state.image]}
          onLoad={this.handleImageLoaded}
        />
      </LazyLoad>
    );
  }
}
