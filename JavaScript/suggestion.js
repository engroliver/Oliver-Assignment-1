let sugbtn = document.querySelector('#suggest-btn')

sugbtn.addEventListener('click',function(){

    let nameTooShort = false;
    let lati = document.querySelector("#latitude");
    let longi = document.querySelector("#longtitude");
    // let lat = num <= 90 & num >= -90;
    // let long = num <= 180 & num >= -180;

    let name = document.querySelector('#name').value;
   let ediv = document.querySelector("#errordiv")
    ediv.innerHTML = '';
    if (name.length < 5 ) {
        nameTooShort = true;
    }
  
     if (nameTooShort){
        ediv.innerHTML += "<p>name is too short please provide atleast five characters</P>"
     }
  

else {
    
    ediv.style.display = 'none';
    alert("Submission successful!");
}


})