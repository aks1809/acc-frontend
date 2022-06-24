import moment from 'moment';

export const msToTime = data => {
  return moment.utc(data).format('HH:mm:ss');
};
