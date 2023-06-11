import styled from '@emotion/styled';
import {FC, HTMLAttributes} from "react";

const Container = styled('div')`
  position: relative;
  width: 40px;
  height: 40px;
`

const Image = styled('img')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 50%;
`

type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
  size?: number;
}

export const Avatar: FC<AvatarProps> = ({src,size, ...rest}) => {
  return (
    <Container {...rest} style={{
      width: size ? `${size}px` : '40px',
      height: size ? `${size}px` : '40px'
    }}>
      <Image src={src}/>
    </Container>
  )
}
