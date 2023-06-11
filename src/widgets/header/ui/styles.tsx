import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  background: white;
  position: absolute;
  top: 0;
  left: 242px;
  box-shadow: 0 4px 5px 0 rgba(233, 237, 243, 1);
  z-index: 99;
  width: calc(100% - 242px);
  height: 64px;
  display: flex;
  align-items: center;
  
  @media (min-width: 1866px) {
    justify-content: space-between;
  }
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
`

export const HeaderDateNow = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: ${(props: App.Theme) => props.theme.color.gray600};
  text-transform: capitalize;
`

export const HeaderAnalyticsContainer = styled.div`
  margin-left: 86px;
  display: flex;
  column-gap: 56px;
  position: relative;
`

export const HeaderAnalyticsNav = styled.nav`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  display: flex;
  align-items: center;
  //margin-right: 120px;
`