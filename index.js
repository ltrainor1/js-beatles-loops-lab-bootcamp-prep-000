function theBeatlesPlay(musicians, instruments){
  var beatles = {};
  for(var i = 0; i < musicians.length; i++){
  
    Object.assign({},beatles,`${musicians[i]} plays the ${instruments[i]}`)
  }
  return beatles;
}