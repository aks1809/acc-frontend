export const msToTime = data => {
  return new Date(data).toISOString().slice(11, 19);
};
