export const dateDiffInDays = (str1: Date, str2: Date) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  // const date1 = +new Date(str1);
  // const date2 = +new Date(str2);

  const diffTime = Math.abs(+str1 - +str2);

  return Math.ceil(diffTime / _MS_PER_DAY)
}