import { intervalToDuration } from 'date-fns';

export const msToTime = duration => {
  const obj = intervalToDuration({ start: 0, end: duration });
  return `${obj.hours}:${obj.minutes}:${obj.seconds}`;
};
