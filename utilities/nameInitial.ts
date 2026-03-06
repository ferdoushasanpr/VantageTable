export const getNameInitial = (name: string): string => {
  const arr = name.split(" ");
  let str = "";
  arr.forEach((element) => {
    str += element[0];
  });

  return str;
};
