import styled from "@emotion/styled";
import {LinearProgress} from "@mui/material";
import {FC} from "react";

const AnalyticsInfoWrapper = styled.div`
  width: 180px;
  height: 34px;
  display: flex;
  flex-direction: column;
`
const AnalyticsInfoTitle = styled.h5`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  margin: 0;
`

type LinearProgressProps = {
  barColor: string
}

const AnalyticsInfoLinearProgress = styled(LinearProgress)`
  height: 6px;
  width: 95%;
  margin: 7px auto 0;
  && {
    background-color: #DEE6F5;
  }
`

type AnalyticsInfoProps = LinearProgressProps & {
  title: string;
  endTitle: string;
  value: number;
}

export const AnalyticsInfo: FC<AnalyticsInfoProps> = (props) => {
  const {title,endTitle, value, barColor} = props;

  return (
    <AnalyticsInfoWrapper>
      <AnalyticsInfoTitle>
        {title}
        <span style={{color: barColor}}>{endTitle}</span>
      </AnalyticsInfoTitle>
      <AnalyticsInfoLinearProgress
        variant='determinate'
        value={value}
        sx={ {
          "& .MuiLinearProgress-bar": {
            backgroundColor: barColor
          }
        }}
      />
    </AnalyticsInfoWrapper>
  )
}