import styled from '@emotion/styled';
import {FC, useMemo} from "react";
import {useTheme} from "@emotion/react";

type CircleColor = {
  color: 'red' | 'green' | 'gray'
}

const CircleStyled = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
`


const Circle: FC<CircleColor> = ({color}) => {
  // TODO FIX
  const theme = useTheme() as App.Theme['theme'];

  const circle_color = useMemo(() => {
    if (color === 'red') {
      return theme.color.red500;
    }
    if (color === 'gray') {
      return theme.color.gray500;
    }
    if (color === 'green') {
      return theme.color.green500;
    }
  }, [theme])

  return <CircleStyled style={ {background: circle_color} }></CircleStyled>
}

 const GradeBad = styled.div`
  border: 1px solid #EA1A4F;
  border-radius: 4px;
  background-color: #FEE9EF;
  color: #EA1A4F;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  padding: 6px;
`

 const GradeGood = styled.div`
  border: 1px solid #ADBFDF;
  border-radius: 4px;
  background-color: #D8E4FB;
  color: #122945;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  padding: 6px;

`

 const GradePerfect = styled.div`
  border: 1px solid #28A879;
  border-radius: 4px;
  background-color: #DBF8EF;
  color: #00A775;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  padding: 6px;

`

 const CircleWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
`

 const CircleRed = () => <Circle color={ 'red' }></Circle>

 const CircleGray = () => (
  <CircleWrapper>
    <Circle color={ 'gray' }></Circle>
    <Circle color={ 'gray' }></Circle>
  </CircleWrapper>
)


 const CircleGreen = () => (
  <CircleWrapper>
    <Circle color={ 'green' }></Circle>
    <Circle color={ 'green' }></Circle>
    <Circle color={ 'green' }></Circle>
  </CircleWrapper>
)
export const Grade = {

  Bad: GradeBad,
  BadCircle: CircleRed,

  Good: GradeGood,
  GoodCircle: CircleGray,

  Perfect: GradePerfect,
  PerfectCircle: CircleGreen

}
