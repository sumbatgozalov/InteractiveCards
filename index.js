function func(e){
  event.preventDefault ()
  console.log("not refreshed!!!")
}



function mirrorText() {
    var inputValue = document.getElementById("card-name").value;
    document.getElementById("mirrorSpanName").textContent = inputValue;
  }
  function mirrorNum(){
    var inputValue = document.getElementById("number").value;
    document.getElementById("mirrorSpanNum").textContent = inputValue
  }
  function mirrormm(){
    var inputValue = document.getElementById("mm").value;
    document.getElementById("mirrorSpanmm").textContent = inputValue
  }
  function mirroryy(){
    var inputValue = document.getElementById("yy").value;
    document.getElementById("mirrorSpanyy").textContent = inputValue
  }
  function mirrorcvc(){
    var inputValue = document.getElementById("cvc").value;
    document.getElementById("mirrorSpancvc").textContent = inputValue
  }






  function validateInputs() {
 
 
    var number = document.getElementById("number");
    var numerror = document.getElementById("numerror");

    var isValid = true;
  
    if (!/^\d+$/.test(number.value)) {
      numerror.textContent = "Wrong format, numbers only";
      numerror.style.display = "block";
      number.style.border = "1px solid hsl(0, 100%, 66%)"
      isValid = false;
    } else {
      numerror.style.display = "none";
      number.style.border = "1px solid black"
    }


    var mm = document.getElementById("mm");
    var errM = document.getElementById("errM");
  

 
   if (!mm.value) {
     errM.textContent = "Can't be blank.";
     errM.style.display = "block";
     errM.style.border = "1 px solid red"
     isValid = false;
   } else {
     errM.style.display = "none";
     mm.style.border = "1px solid black"
   }


   var yy = document.getElementById("yy");
   var errM = document.getElementById("errY");


   if (!yy.value) {
    errY.textContent = "Can't be blank.";
    errY.style.display = "block";
    errY.style.border = "1 px solid hsl(0, 100%, 66%)"
    isValid = false;
  } else {
    errY.style.display = "none";
    yy.style.border = "1px solid black"
  }

  var cvc = document.getElementById("cvc");
  var errCVC = document.getElementById("errCVC");
  


  
  if (!cvc.value) {
    errCVC.textContent = "Can't be blank.";
    errCVC.style.display = "block";
    err.style.border = "1 px solid hsl(0, 100%, 66%)"
    isValid = false;
  } else {
    errCVC.style.display = "none";
    cvc.style.border = "1px solid black"
  }
  if (isValid) {
    // Proceed with form submission or further actions
    alert("Form submitted successfully!");
  }
  }

 