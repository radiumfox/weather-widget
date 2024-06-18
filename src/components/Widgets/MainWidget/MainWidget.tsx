import styles from './styles';

export default function MainWidget(props:any) {
  const {
    Wrapper,
    Temperature,
    TemperatureMax,
    TemperatureMin,
    WeatherImage,
    Text,
    MinMaxWrapper
  } = styles;

  return (
    <Wrapper>
      <WeatherImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgOJNsvjE3XZRjHGQUdxfrqPVA57TMVvo-g&s"></WeatherImage>
      <Temperature>{props.current}</Temperature>
      <MinMaxWrapper>
        <TemperatureMax>{props.max}</TemperatureMax>/<TemperatureMin>{props.min}</TemperatureMin>
      </MinMaxWrapper>
      <Text>{props.descr}</Text>
    </Wrapper>
  );
}

