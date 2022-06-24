export const msToTime = ms => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor((ms / 1000 / 3600) % 24);

  const humanized = [
    hours.toString(),
    minutes.toString(),
    seconds.toString()
  ].join(':');

  return humanized;
};
