const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const formatDate = (date = "") => {
  if (!date) return "";
  const dateInStandardFormat = new Date(date);
  const time = dateInStandardFormat.toTimeString();
  const timeArr = time.split(":");
  return `${timeArr[0]}:${
    timeArr[1]
  }, ${dateInStandardFormat.toLocaleDateString("en-IN", options)}`;
};
