import {FC} from "react";
import styled from "@emotion/styled";
import type {Worker} from "../menu";
import {Avatar} from "shared/ui";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

type Props = {
  title: string;
  personal: Worker[];
}

const ListContainer = styled('div')`
  width: 100%;
  row-gap: 16px;
`

const ListTitle = styled('h6')`
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #5E7793;
  margin: 0 0 8px 24px;
`
const ListPerson = styled('div')`
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

const ListPersonName = styled('span')`
  font-size: 15px;
  line-height: 23px;
  font-weight: 400;
  margin-left: 8px;
  color: ${(props: App.Theme) => props.theme.color.blue500};
`


const LoginIcon = styled(LoginOutlinedIcon)`
  display: none;
  position: absolute;
  right: 24px;
  cursor: pointer;
  color: ${(props: App.Theme) => props.theme.color.blue700}
`

export const ProfileDirectorWorkerList: FC<Props> = ({title, personal}) => {

  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      {personal.map(person => {
        return (
          <ListPerson>
            <Avatar src={person.img}/>
            <ListPersonName>{person.name} {person.surname}</ListPersonName>
            <LoginIcon/>
          </ListPerson>
        )
      })}
    </ListContainer>
  )
}