import styles from './styles';

interface WidgetProps {
  current: string;
  location: string;
  date: string;
  descr: string;
  minMax: string;
}

export default function Widget({current, location, date, descr, minMax}: WidgetProps) {
  const widgetStyles = styles();
  return (
    <div className={widgetStyles.container}>
      <div className={widgetStyles.bgWrapper}>
        <div className={widgetStyles.temp}>{current}</div>
        <div className={widgetStyles.location}>{location}</div>
      </div>
      <div className={widgetStyles.textWrapper}>
        <p className={widgetStyles.date}>{date}</p>
        <div className={widgetStyles.descriptionWrapper}>
          <p className={widgetStyles.description}>{descr}</p>
          <p>{minMax}</p>
        </div>
      </div>
    </div>
  );
}

