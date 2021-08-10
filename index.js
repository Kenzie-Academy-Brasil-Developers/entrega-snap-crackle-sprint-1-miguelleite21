function snapCrackle(maxValue){
const result = []

    for(n = 1; n <= maxValue; n++){

if(n%2 === 0){
    if(n%5 === 0){
    result.push('Crackle')}
    else {
    result.push(n)}
}   
else if (n%2 === 1){
    if(n%5 === 0){
    result.push('SnapCrackle')}
    else {
    result.push('Snap')   
    }   
}

}
  return result
}  

