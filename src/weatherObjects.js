import ClearIcon from "./assets/clearIcon.svg";
import ClearNightIcon from "./assets/clearNightIcon.svg";
import CloudsIcon from "./assets/cloudyIcon.svg";
import RainIcon from "./assets/rainIcon.svg";
import DrizzleIcon from "./assets/drizzleIcon.svg";
import SnowIcon from "./assets/snowIcon.svg";
import ThunderIcon from "./assets/thunderIcon.svg";

function getIcon(weathercon) {
  let iconLink;
  switch (weathercon) {
    case "Clouds":
      iconLink = CloudsIcon;
    case "Clouds":
      iconLink = `${CloudsIcon}`;
      break;
    case "Clear":
      iconLink = `${ClearIcon}`;
      break;
    case "clearNight":
      iconLink = `${ClearNightIcon}`;
      break;
    case "Snow":
      iconLink = `${SnowIcon}`;
      break;
    case "Rain":
      iconLink = `${RainIcon}`;
      break;
    case "Drizzle":
      iconLink = `${DrizzleIcon}`;
      break;
    case "Thunderstorm":
      iconLink = `${ThunderIcon}`;
      break;
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      iconLink = `${CloudsIcon}`;
      break;
    default:
      iconLink = null;
  }
  return iconLink;
}

export { getIcon };
