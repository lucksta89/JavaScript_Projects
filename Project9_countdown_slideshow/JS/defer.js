
function crime() {
    var a = document.getElementById("crime").value;
    if(a == "yes"){
      var crimes = "you killed an old lady"
    }
    else if(a == "no"){
      crimes = "maybe next time"
    }
    document.getElementById("crimes").innerHTML = crimes
  }
  
  