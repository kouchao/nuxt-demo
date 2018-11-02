
function set0(num) {
  return num < 10 ? '0' + num : '' + num
}

export const formatDate = (input) => {
  var d = new Date(input);
  var year = d.getFullYear();
  var month = set0(d.getMonth() + 1);
  var day = set0(d.getDate());
  var hour = set0(d.getHours());
  var minutes = set0(d.getMinutes());
  var seconds = set0(d.getSeconds());
  return year + '-' + month + '-' + day;
}
