import { styled } from 'styled-components';
import { colors } from '@/ts/styles/colors';

export default {
  GlobalWrapper: styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
  `,
  LongWrapper: styled.div`
    width: 100%;
    padding: 53px 0 24px;
    background: ${colors.lightViolet}
  `,
  ShortWrapper: styled.div`
    width: 100%;
    padding: 53px 0 24px;
    background: ${colors.darkViolet}
  `

}