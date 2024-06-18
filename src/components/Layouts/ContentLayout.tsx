import styles from './styles';


export default function ContentsLayout(props:any) {

  const { GlobalWrapper, ShortWrapper, LongWrapper } = styles;

  return (
    <GlobalWrapper>
      <ShortWrapper>
      {props.mainWidget}
      </ShortWrapper>
      <LongWrapper>
      {props.children}
      </LongWrapper>
    </GlobalWrapper>
  );
}

