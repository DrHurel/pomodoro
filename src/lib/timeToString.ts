export default function timeToString(time: number): string {

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;

  const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${minutesString}:${secondsString}`;

}