import { styled } from 'styled-components';
import { colors } from '@/ts/styles/colors';

export default {
  Wrapper: styled.div`
    width: 347px;
  `,
  WeatherImage: styled.image.attrs<{ src?: string }>(props => ({
    src: props.src
  }))`
    width: 347px;
    height: 347px;
    margin-bottom: 43px;
    display: block;
  `,
  Temperature: styled.span`
    color: ${colors.white};
    font-size: 92px;
    line-height: 106px;
    font-weight: 700;
    margin-bottom: 40px;
  `,
  MinMaxWrapper: styled.div`
    color: ${colors.typographyLight};
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  `,
  TemperatureMin: styled.span`
    color: ${colors.typographyLight};
  `,
  TemperatureMax: styled.span`
    color: ${colors.white};
  `,
  Text: styled.span`
    color: ${colors.white};
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
  `
}