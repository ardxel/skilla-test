import styled from '@emotion/styled';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

export const ListContainer = styled('div')`
  width: 100%;
  row-gap: 16px;
`

export const ListTitle = styled('h6')`
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #5E7793;
  margin: 0 0 8px 24px;
`
export const ListPerson = styled('div')`
  width: calc(100% - 48px);
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 8px;
  padding: 0 24px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 44, 251, 0.13);
    svg {
      display: block;
    }
    h6 {
      color: ${(props: App.Theme) => props.theme.color.blue700};
    }
  }
`

export const ListPersonName = styled('span')`
  font-size: 15px;
  line-height: 23px;
  font-weight: 400;
  margin-left: 8px;
  color: ${(props: App.Theme) => props.theme.color.blue500};
`


export const LoginIcon = styled(LoginOutlinedIcon)`
  display: none;
  position: absolute;
  right: 24px;
  cursor: pointer;
  color: ${(props: App.Theme) => props.theme.color.blue700}
`