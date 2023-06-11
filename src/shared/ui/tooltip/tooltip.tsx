import {styled, Tooltip, tooltipClasses, TooltipProps} from "@mui/material";
import {FC, ReactElement} from "react";

const AppTooltipStyled = styled(({className, ...props}: TooltipProps) => (
  <Tooltip {...props} classes={{popper: className}}/>
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    color: '#122945',
    padding: '8px',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '400',
    textTransform: 'capitalize',
    border: '1px solid #EAF0FA',
    boxShadow: '10px 10px 50px rgba(221, 224, 231, 0.56)',
    borderRadius: '4px',}
}))

type Props = {
  children: ReactElement;
  title: string
}

export const AppTooltip: FC<Props> = ({children, title}) => {
  return (
    <AppTooltipStyled title={title} placement='bottom-end'>
        {children}
    </AppTooltipStyled>)
}