// let sent = document.getElementById("sent");
let submit = document.getElementById("Btn")
let enq = document.getElementById("enq")
let sup = document.getElementById("sup")




function pick() {
  if (enq.checked) {
    // result.textContent = "You Selected to Fahrenheit";
   
  } else{
      // result.textContent = "You Selected to Celsius";
      alert("Pls u must click on it")
    }
   if(sup.checked){
    result.textContent = "Select a unit";
  }
}



submit.onclick = function () {
    document.getElementById("sent").style.display = "block";
}