import styled from '@emotion/styled';
import ClearIcon from '@mui/icons-material/Clear';
import {Avatar, Dropdown, Grade, SelectItem} from "shared/ui";

import {config} from "../../config.ts";

import {clearFilters, Filter} from "entities/call-table/model";
import {useDispatch, useSelector} from "react-redux";
import {useCallFilter} from "../../model.ts";
import {TEST_IMAGE} from "shared/config";

const {calls, errors, types, grades, workers, sources} = config;

const Wrapper = styled.div`
  display: flex;
  column-gap: 36px;
  height: 40px;
`
/* COLOR OF DROPDOWN TITLE */
const DROPDOWN_COLOR = '#5E7793';

/* just for reversing select items in an array */
const getSelectItemListFromConfig = (arr: Filter[]) => arr.map(
  (item, index) => <SelectItem
    key={ item.id }
    color={ !index ? '#002CFB' : '' }
    value={ item.title }>
    { item.title }
  </SelectItem>
)

/* TYPE FILTER */
const TypeFilter = () => {
  const [type, setType] = useCallFilter('type');


  return (
    <Dropdown title={ types[0].title } color={ DROPDOWN_COLOR } currentValue={ type } handler={ setType }>
      { getSelectItemListFromConfig(types) }
    </Dropdown>)
}

/* WORKER FILTER */
const WorkerFilter = () => {
  const [worker, setWorker] = useCallFilter('worker');

  return (
    <Dropdown title={ workers[0].title } color={ DROPDOWN_COLOR } currentValue={ worker } handler={ setWorker }>
      { workers.map((item, index) => <SelectItem
        color={ !index ? '#002CFB' : '' }
        style={ {
          display: 'flex',
          alignItems: 'center',
          columnGap: '15px',
        } }
        key={ item.title }
        value={ item.title }>
        {/* first element does need an avatar */ }
        { item.id > 0 && <Avatar src={ TEST_IMAGE }/> }
        { item.title }
      </SelectItem>) }
    </Dropdown>
  )
}

/* CALL FILTER */
const CallFilter = () => {
  const [call, setCall] = useCallFilter('call');

  return (
    <Dropdown title={ calls[0].title } color={ DROPDOWN_COLOR } currentValue={ call } handler={ setCall }>
      { getSelectItemListFromConfig(calls) }
    </Dropdown>
  )
}

/* SOURCE FILTER */
const SourceFilter = () => {
  const [source, setSource] = useCallFilter('source');

  return (
    <Dropdown title={ sources[0].title } color={ DROPDOWN_COLOR } currentValue={ source } handler={ setSource }>
      { getSelectItemListFromConfig(sources) }
    </Dropdown>
  )
}

/* ERROR FILTER */
const ErrorFilter = () => {
  const [error, setError] = useCallFilter('error');

  return (
    <Dropdown title={ errors[0].title } color={ DROPDOWN_COLOR } currentValue={ error } handler={ setError }>
      { getSelectItemListFromConfig(calls) }
    </Dropdown>
  )
}

/* GRADE FILTER */
const GradeFilter = () => {
  const [grade, setGrade] = useCallFilter('grade');

  return (
    <Dropdown title={ grades[0].title } color={ DROPDOWN_COLOR } currentValue={ grade } handler={ setGrade }>
      <SelectItem value={ grades[0].title } color={ '#002CFB' }>Все оценки</SelectItem>
      <SelectItem value={ grades[1].title }>Распознать</SelectItem>
      <SelectItem value={ grades[2].title }>Скрипт не использован</SelectItem>

      <SelectItem value={ grades[3].title }><Grade.Bad>Плохо</Grade.Bad></SelectItem>
      <SelectItem value={ grades[4].title }><Grade.Good>Хорошо</Grade.Good></SelectItem>
      <SelectItem value={ grades[5].title }><Grade.Perfect>Отлично</Grade.Perfect></SelectItem>

      <SelectItem value={ grades[6].title }><Grade.BadCircle/></SelectItem>
      <SelectItem value={ grades[7].title }><Grade.GoodCircle/></SelectItem>
      <SelectItem value={ grades[8].title }><Grade.PerfectCircle/></SelectItem>

    </Dropdown>
  )
}

const ClearButton = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #5E7793;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: ${ (props: App.Theme) => props.theme.color.blue500 };

    svg {
      color: ${ (props: App.Theme) => props.theme.color.blue500 };
    }
  }

  svg {
    font-size: 20px;
    margin-left: 10px;
  }
`

const ClearFilters = () => {
  const {filterHasNotDefaultValue} = useSelector((state: RootState) => state.calls);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearFilters());
  }


  if (!filterHasNotDefaultValue) {
    return null;
  }

  return (
    <ClearButton onClick={ handleClear }>
      <span>Сбросить фильтры</span>
      <ClearIcon/>
    </ClearButton>
  )
}

export const Filters = () => {
  return (
    <Wrapper>
      <ClearFilters/>
      <TypeFilter/>
      <WorkerFilter/>
      <CallFilter/>
      <SourceFilter/>
      <GradeFilter/>
      <ErrorFilter/>
    </Wrapper>
  )
}