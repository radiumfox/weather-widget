import {createUseStyles} from 'react-jss';
import { colors } from '@/ts/styles/colors';

export default createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '246px',
    height: '332px',
    borderRadius: '16px',
    position: 'relative',
    background: `linear-gradient(45deg, ${colors.yellow68} 50%, ${colors.yellowMain} 100%)`,
  },
  bgWrapper: {
    padding: '24px',
    color: colors.white,
  },
  temp: {
    fontSize: '40px',
    fontWeight: 600,
    lineHeight: '40px',
    width: '100px',
    textAlign: 'center'
  },
  location: {
    fontSize: '15px',
    fontWeight: 700,
    lineHeight: '15px',
    textTransform: 'uppercase'
  },
  textWrapper: {
    padding: '16px',
    background: colors.white,
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
  },
  title: {
    marginBottom: '6px',
    fontSize: '15px',
    lineHeight: '15px',
    fontWeight: 700,
    color: colors.greyDark
  },
  descriptionWrapper: {
    marginBottom: '6px',
    fontSize: '12px',
    lineHeight: '12px',
    fontWeight: 700,
    color: colors.greyLight
  },
  description: {
    marginBottom: '6px',
  },
  date: {
    marginBottom: '6px',
    color: colors.greyDark,
    fontSize: '15px',
    lineHeight: '15px',
    fontWeight: 700,
  }
})