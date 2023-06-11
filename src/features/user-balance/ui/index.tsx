import {ChangeEvent, useMemo, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from '@emotion/styled';
import {Popper} from "@mui/material";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import {changeBalance} from "entities/profile-director/model";
import {IncrementButton, Count, Container, BalanceMenuInput, Rubble} from './styles.tsx';
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