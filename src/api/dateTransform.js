export const dateTransform = (date) => {
  let d = new Date(date);
  return d.toLocaleString("en-US", {weekday: 'short'});
};