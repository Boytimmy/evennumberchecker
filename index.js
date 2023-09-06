function check(){
  var songeven = new Audio ('/audio/swoosh-transition-with-metal-overtones-142375.mp3')
  var songodd = new Audio('/audio/wind-blow-141288.mp3')
    if (score.value % 2 == 0){
      console.log("Even number")
      show.innerHTML ="Even number"
      songeven.play()
    } else if (score.value % 2 != 0){
      console.log ('Odd number')
      show.innerHTML ="Odd number"
      songodd.play()
    }
}