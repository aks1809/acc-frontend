export const msToTime = ms => {
  // 1- Convert to seconds:
  let seconds = ms / 1000; // 2- Extract hours:
  const hours = parseInt(seconds / 3600, 10); // 3600 seconds in 1 hour
  seconds = parseInt(seconds % 3600, 10); // extract the remaining seconds after extracting hours // 3- Extract minutes:

  const minutes = parseInt(seconds / 60, 10); // 60 seconds in 1 minute // 4- Keep only seconds not extracted to minutes:

  seconds = parseInt(seconds % 60, 10); // 5 - Format so it shows a leading zero if needed

  const hoursStr = `00${hours}`.slice(-2);
  const minutesStr = `00${minutes}`.slice(-2);
  const secondsStr = `00${seconds}`.slice(-2);

  return `${hoursStr}:${minutesStr}:${secondsStr}`;
};
