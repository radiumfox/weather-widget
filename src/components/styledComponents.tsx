import { styled } from 'styled-components';
import { colors } from '@/ts/styles/colors';

export default {
  Container: styled.div`
    width: 246px;
    border-radius: 16px;
    position: relative;
    background: ${colors.white}
  `,
  BgContainer: styled.div`

  `,
  TemperatureWrapper: styled.div`
    width: 80px;
    color: ${colors.white}
  `,
  Temperature: styled.p`
    font-size: 40px;
    line-height: auto;
    font-weight: 600;
  `,
  Location: styled.p`
    font-size: 15px;
    font-weight: 700;
    line-height: auto;
    text-transform: uppercase;
  `,
  TextContainer: styled.div`
    padding: 16px;
  `,
  Title: styled.p`
    margin-bottom: 6px;
    font-size: 15px;
    font-weight: 700;
    line-height: auto;
    color: ${colors.greyDark};
  `,
  Descr: styled.div`
    margin-bottom: 6px;
    font-size: 12px;
    font-weight: 700;
    line-height: auto;
    color: ${colors.greyLight};
  `,
  Icon: styled.div`
    position: absolute;
    bottom: 23px;
    right: 20px;
    width: 30px;
    height: 30px;
  `
}