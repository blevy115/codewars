function removeNb (n) {
  var result = [];
  var range = Array.from({length: n}, (x,i) => i+1)
  var sum = 0;
  for(var i=0; i< range.length; i++){
    sum +=range[i]
  }
  for(var i=0; i< range.length; i++){
    let a = range[i]
    if ((sum-a)%(a+1)  === 0){
      let b = (sum-a)/(a+1)
      if (a < n && b < n){
        result.push([a, b])
      }
    }
  }
  return result
}
yesterdayRefactorDiscuss
function removeNb (n) {
  var result = [];
  var range = Array.from({length: n}, (x,i) => i+1)
  var sum = 0;
  for(var i=0; i< range.length; i++){
    sum +=range[i]
  }
  for(var i=0; i< range.length; i++){
    let a = range[i]
    if ((sum-a)%(a+1)  == 0){
      let b = (sum-a)/(a+1)
      if (a*b === sum -a -b && a < n && b < n){
        result.push([a, b])
      }
    }
  }
  return result
}
