import {ChangeEvent, useMemo, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from '@emotion/styled';
import {IconButton, InputBase, Popper} from "@mui/material";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

import {changeBalance} from "entities/profile-director/model";

const Container = styled.div`
  background: white;
  border-radius: 48px;
  padding: 10px 12px;

  && {
    &:hover {
      background: white;

      svg, b {
        color: ${ (props: App.Theme) => props.theme.color.blue700 };
      }
    }
  }
`

const Count = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  color: ${ (props: App.Theme) => props.theme.color.gray600 };

  b {
    margin-left: 4px;
    color: #122945;
    font-weight: 500;
  }
`

const IncrementButton = styled(IconButton)`
  margin-left: 10px;
  padding: 0;
  color: ${ (props: App.Theme) => props.theme.color.blue400 };

`

type ColorProps = {
  error: boolean
}

const Rubble = styled(CurrencyRubleIcon)`
  color: ${ ({error}: ColorProps) => error ? '#EA1A4F' : '#121212' };
  font-size: 20px;
`

const BalanceMenuInput = styled(InputBase)`
  width: 150px;
  height: 50px;
  font-size: 16px;
  padding: 16px 13px;
  line-height: 21px;
  font-weight: 400;
  font-family: "SF Pro Display", sans-serif;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${ ({error}: ColorProps) => error ? '#EA1A4F' : 'rgba(173, 191, 223, 0.4)' } !important;
  display: flex;
  background-color: white;

  &:hover {
    border-color: rgba(0, 44, 251, 0.32);
  }

  &:focus {
    border-color: rgba(0, 44, 251, 0.8);

    input {
      border-color: rgba(0, 44, 251, 0.8);

    }
  }
`

const Error = styled('span')`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  position: relative;
  left: 0;
  display: inline;
  color: #EA1A4F;
`

export const UserBalance = () => {
  const {balance} = useSelector((state: RootState) => state.profile);
  const [input, setInput] = useState<string>('3850');
  const [showError, setShowError] = useState<boolean>(false);
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  const dispatch = useDispatch();
  const ref = useRef(null);

  const error = useMemo(() => {
    if (!input.length) {
      return 'Введите сумму'
    }
  }, [input])

  const handleChangeBalance = () => {
    if (!anchor) {
      setAnchor(ref.current);
      return
    }

    if (error || !input.length) {
      setShowError(true);
    } else {
      dispatch(changeBalance(Number(input)));
      setAnchor(null);
      setShowError(false);
    }

  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (!Number.isNaN(+value)) {
      setInput(value)
    }
  }

  return (
    <>
      <Container disableRiffle={ true } ref={ref}>
        <Count>
          Баланс:<b>{ balance }₽</b>
          <IncrementButton onClick={ handleChangeBalance }>
            <AddCircleSharpIcon/>
          </IncrementButton>
        </Count>
      </Container>

      <Popper open={ !!anchor } anchorEl={ anchor }>
        <BalanceMenuInput
          disableRiffle
          disableFocus
          onChange={ handleInput }
          error={ showError }
          value={ input }
          endAdornment={ <Rubble error={ showError }/> }/>
        { (showError && error) && <Error>{ error }</Error> }
      </Popper>

    </>
  )
}