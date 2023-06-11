import {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Dropdown, SelectItem} from "shared/ui";
import {selectOrganization} from "entities/call-table";
import {ProfileDirector} from "entities/profile-director";

import {AnalyticsInfo, config, Search} from "features";

import {HeaderAnalyticsContainer, HeaderAnalyticsNav, HeaderContent, HeaderDateNow, HeaderWrapper} from "./styles.tsx";

const allWorkers = config.workers;

const Header = () => {
  const currentOrganization = useSelector((state: RootState) => state.calls.organization);
  const {calls} = useSelector((state: RootState) => state.calls);
  const dispatch: AppDispatch = useDispatch();
  const handleChangeOrg = (selected: string) => {
    dispatch(selectOrganization(selected));
  }

  // new call-table and all call-table
  const newCallsInfo = useMemo(() => {
    if (calls.length > 0) {
      const newCalls = calls.filter((call) => !!call.results.length).length;

      const allCalls = calls.length;

      return {
        title: `Новые звонки: `,
        endTitle: `${ newCalls } из ${ allCalls } шт`,
        value: Math.round(newCalls * 100 / allCalls)
      }
    } else {
      return {
        title: 'Загрузка',
        endTitle: '',
        value: 0
      }
    }
  }, [calls])

  // date now in YYY-MM-DD format
  const date_now = useMemo(() => new Intl
      .DateTimeFormat(
        'ru-RU',
        {weekday: "long", day: '2-digit', month: 'short'})
      .format(new Date())
      // delete dot from end
      .slice(0, -1),
    [])

  return (
    <HeaderWrapper>
      <HeaderContent>

        <HeaderDateNow>{ date_now }</HeaderDateNow>

        <HeaderAnalyticsContainer>

          <AnalyticsInfo { ...newCallsInfo } barColor={ newCallsInfo.value > 0 ? '#28A879' : '#EA1A4F' }/>
          {/*TODO: throw real props*/ }
          <AnalyticsInfo title='Качество разговоров ' endTitle={'40%'} value={ 40 } barColor='#FFD500'/>
          <AnalyticsInfo title='Конверсия в заказ ' endTitle={'67%'} value={ 67 } barColor='#EA1A4F'/>
        </HeaderAnalyticsContainer>

        <HeaderAnalyticsNav>
          {/*TODO: Throw handle props for searching */ }
          <Search/>

          <Dropdown currentValue={ currentOrganization } handler={ handleChangeOrg } width={ 180 } color='#ADBDFD'
                    title='Все организации'>
            { allWorkers.map((item, index) => {
              return (
                <SelectItem value={ item.title } key={ index }>{ item.title }</SelectItem>
              )
            }) }
          </Dropdown>

          <ProfileDirector/>

        </HeaderAnalyticsNav>
      </HeaderContent>

    </HeaderWrapper>
  )
}

export default Header;