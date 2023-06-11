import {useDispatch, useSelector} from "react-redux";
import {ChangeEvent} from "react";
import styled from '@emotion/styled';
import {CallList} from "entities/call-table/ui";
import {Filters, Search, TimePicker, UserBalance} from "features";
import {formatPhoneNumber, searchByPhoneNumber} from "entities/call-table";

const CallsPageContainer = styled.main`
  position: absolute;
  margin-left: 242px;
  margin-top: 64px;
  width: calc(100% - 242px);
  background: transparent;
`

const CallsPageContent = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 30px auto 0;

  & > div:not(:first-child) {
    margin-top: 36px;
  }
`

const CallsPageFeatures = styled.div`
  display: flex;
  align-items: center;
  column-gap: 50px;
  justify-content: flex-end;
  position: relative;
`

const CallsPageSearchAbsolute = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`

const CallsPage = () => {
  const {value} = useSelector((state: RootState) => state.calls.searchPhoneNumber)
  const dispatch = useDispatch();

  const handleSearchPhoneNumber = (e: ChangeEvent<HTMLInputElement> | string) => {
    let value;
    // TODO FIX
    if (typeof e === 'string') {
      value = e;
    } else {
      value = e.currentTarget.value
    }

    dispatch(searchByPhoneNumber({value: formatPhoneNumber(value)}))
  }
  return (
    <CallsPageContainer>

      <CallsPageContent>

        <CallsPageFeatures>
          <UserBalance/>
          <TimePicker/>
        </CallsPageFeatures>

        <CallsPageFeatures>
          <CallsPageSearchAbsolute>
            <Search placeholder={ 'Поиск по звонкам' } value={ value } handler={ handleSearchPhoneNumber }/>
          </CallsPageSearchAbsolute>
          <Filters/>
        </CallsPageFeatures>

        <CallList/>
      </CallsPageContent>

    </CallsPageContainer>
  )
}

export default CallsPage;