export const makeDate = (date) => {
  const milisegundos =
    date.seconds * 1000 + Math.round(date.nanoseconds / 1000000);
  const fecha = new Date(milisegundos);
  return fecha.toLocaleDateString();
};
