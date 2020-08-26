export const displayDateAndTime = (date, option) => {
  var dt = new Date(date);
  var DD = ("0" + dt.getDate()).slice(-2);
  var MM = ("0" + (dt.getMonth() + 1)).slice(-2);
  var YYYY = dt.getFullYear();
  var hh = ("0" + dt.getHours()).slice(-2);
  var mm = ("0" + dt.getMinutes()).slice(-2);
  switch (option) {
    case "time":
      return hh + ":" + mm;
    case "date":
      return YYYY + "-" + MM + "-" + DD;
    default:
      return YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm;
  }
};
