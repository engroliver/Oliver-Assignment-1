let sugbtn = document.querySelector('#suggest-btn')

sugbtn.addEventListener('click',function(){

    let nameTooShort = false;
    let lati = document.querySelector("#latitude");
    let longi = document.querySelector("#longtitude");
    let lat = num => isFinite(num) && Math.abs(num) <= 90;
    let long = num => isFinite(num) && Math.abs(num) <= 180;

    let name = document.querySelector('#name').value;
   let ediv = document.querySelector("#errordiv")
    ediv.innerHTML = '';
    if (name.length < 5 ) {
        nameTooShort = true;
    }
  
     if (nameTooShort){
        ediv.innerHTML += "<p>name is too short please provide atleast five characters</P>"
     }
    // if (!lati || !longi) {
    //     invalidlatlong = true
    //     ediv.innerHTML += "<p>please enter valid latitude and longtitude</p>"
    // }
    // if (!lat.lati || !long.longi) {
    //     invalidlatlong = true
    //     ediv.innerHTML += "<p>please enter valid latitude and longtitude</p>"
    // }

else {
    
    ediv.style.display = 'none';
    alert("Submission successful!");
}


})