import styledComponents from './styledComponents';

export default function Widget(props:{
  current: string;
  location: string;
  date: string;
  descr: string;
  min: string;
  max: string;
}) {
  const {
    Container,
    TemperatureWrapper,
    TextContainer,
    BgContainer,
    Title,
    Descr,
    Temperature,
    Location
  
  } = styledComponents;
  return (
    <Container>
      <BgContainer>
        <TemperatureWrapper>
          <Temperature>{props.current}</Temperature>
          <Location>{props.location}</Location>
        </TemperatureWrapper>
      </BgContainer>
      <TextContainer>
        <Title>{props.date}</Title>
        <Descr>
          <p>{props.descr}</p>
          <p>{props.min}/{props.max}</p>
        </Descr>
      </TextContainer>
    </Container>
  );
}

