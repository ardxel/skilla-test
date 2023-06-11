import {FC} from "react";
import type {Worker} from "../menu";
import {Avatar} from "shared/ui";
import {ListContainer, ListPerson, ListPersonName, ListTitle, LoginIcon} from "./styles.tsx";

type Props = {
  title: string;
  personal: Worker[];
}

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