import { styled } from 'styled-components';
import { colors } from '@/ts/styles/colors';

export default {
  InputSearch: styled.input`
    width: 100%;
    color: ${colors.darkViolet};
    font-size: 15px;
    line-height: 24px;
    padding: 12px 12px 12px 80px;
    border-radius: 30px;
    position: relative;
    border: none;

    &:focus {
      outline: none;
    }
  `,
  IconSearchContainer: styled.div`
    position: absolute;
    z-index: 1;
    top: 8px;
    left: 22px
  `,
  LocationContainer: styled.div`
    position: absolute;
    z-index: 1;
    right: 0;
    top: -4px;
  `
}