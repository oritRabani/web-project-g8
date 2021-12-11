function hideOnLoad() {
  document.getElementById("Events").style.display="block"; //block means "Show"
  document.getElementById("EventText").style.display="none";
  document.getElementById("GoBackButton").style.display="none";
  document.getElementById("RSVP").style.display="none";
}

function getText1() {
  document.getElementById("EventText").style.display="block";
  document.getElementById("EventText1").style.display="block"; 
  document.getElementById("EventText2").style.display="none";
  document.getElementById("EventText3").style.display="none";
  document.getElementById("EventText4").style.display="none";
  document.getElementById("Events").style.display="none";
  document.getElementById("GoBackButton").style.display="block";
  document.getElementById("RSVP").style.display="block";
}

function getText2() {
  document.getElementById("EventText").style.display="block";
  document.getElementById("EventText1").style.display="none";
  document.getElementById("EventText2").style.display="block";
  document.getElementById("EventText3").style.display="none";
  document.getElementById("EventText4").style.display="none";
  document.getElementById("Events").style.display="none";
  document.getElementById("GoBackButton").style.display="block";
  document.getElementById("RSVP").style.display="block";
}

function getText3() {
  document.getElementById("EventText").style.display="block";
  document.getElementById("EventText1").style.display="none";
  document.getElementById("EventText2").style.display="none";
  document.getElementById("EventText3").style.display="block";
  document.getElementById("EventText4").style.display="none";
  document.getElementById("Events").style.display="none";
  document.getElementById("GoBackButton").style.display="block";
  document.getElementById("RSVP").style.display="block";
}

function getText4() {
  document.getElementById("EventText").style.display="block";
  document.getElementById("EventText1").style.display="none";
  document.getElementById("EventText2").style.display="none";
  document.getElementById("EventText3").style.display="none";
  document.getElementById("EventText4").style.display="block";
  document.getElementById("Events").style.display="none";
  document.getElementById("GoBackButton").style.display="block";
  document.getElementById("RSVP").style.display="block";
}

function goBack() {
  document.getElementById("Events").style.display="block";
  document.getElementById("EventText").style.display="none";
  document.getElementById("GoBackButton").style.display="none";
  document.getElementById("RSVP").style.display="none";
  }


  
  /*FAQ*/

var acc = document.getElementsByClassName("questions");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
  var acc = document.getElementsByClassName("questions");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  // registration

  // registration valid
function validUser() {
  var returnVal = true;
  let firstpassword=document.getElementById("psw").value;
  let secondpassword=document.getElementById("psw_repeat").value;
  let validEmail = document.getElementById("email").value;
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(firstpassword==secondpassword){
      if(re.test(String(validEmail).toLowerCase())){
          returnVal = true;
      }
      else{
        alert("email is not valid");
        returnVal = false;
      }
  }
  else{
      if(re.test(String(validEmail).toLowerCase())) {
          alert("password must be same!");
          returnVal = false;
      }
      else{
           alert("wrong details!");
      }
  }

  // VALIDATE BIRTHDAY
  var today = new Date();
  var nowyear = today.getFullYear();
  var nowmonth = today.getMonth();
  var nowday = today.getDate();
  var b = document.getElementById("Bday").value;

  var birth = new Date(b);

  var birthyear = birth.getFullYear();
  var birthmonth = birth.getMonth();
  var birthday = birth.getDate();

  var age = nowyear - birthyear;
  var age_month = nowmonth - birthmonth;
  var age_day = nowday - birthday;

      if (age > 100) {
          alert("Age cannot be more than 100 Years.Please enter correct age")
          returnVal = false;
      }
      if (age_month < 0 || (age_month == 0 && age_day < 0) && age!=19) {
          age = parseInt(age) - 1;
      }
      if (((age == 18 && age_month < 0 && age_day < 0) || age < 18)) {
          alert("Age should be more than 18 years.Please enter a valid Date of Birth");
          returnVal =false;
      }

      // Phone number API 
      const phoneInput = document.getElementById("PhoneNum");
      if(!phoneInput.checkValidity()){
          alert("phone number is not in the correct format please enter a correct number");
          returnVal = false;
      }
      return returnVal;
}


// product page

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === document.getElementById('id01')) {
      document.getElementById('id01').style.display = "none";
  }
  else if (event.target === document.getElementById('id02')){
      document.getElementById('id02').style.display = "none";
  }
  else if(event.target === document.getElementById('id03')){
      document.getElementById('id03').style.display = "none";
  }
}
//PJ product - clothes & home
function CH_product3() {
  document.getElementById('id01').style.display='block'; // show the
  let par = mediaModal(); // check screen size
  let words ='<p>' +
                  par+ 'Pajamas' +
                  '<br>'+
                  '2 sets of pajamas ,'+
                  '<br>'+
                  '(for male or female) ' +
                  '<br>'+
                  'Donation price : 100 NIS' +
              '</p>';
  document.getElementById('modal_img').src="imageProject/Pjs.png";
  document.getElementById('target').innerHTML = words;
}
//Pots and pans product - clothes & home
function CH_product2() {
  document.getElementById('id01').style.display='block';
  let par = mediaModal(); // check screen size
  let words ='<p>' +
                  par+ 'Pots & Pans set inculdes:' +
                  '<br>'+
                  'Pot x 3 sizes- S,M,L '+
                  '<br>'+
                  'Pan x 2 size M' +
                  '<br>'+
                  'Donation price : 200 NIS' +
              '</p>';
  document.getElementById('modal_img').src="imageProject/PotsAndPans.jfif";
  document.getElementById('target').innerHTML = words;
}
//Pillows and blankets product - clothes & home
function CH_product1() {
  document.getElementById('id01').style.display='block';
  let par = mediaModal(); // check screen size
  let words ='<p>' +
                  par+ 'Pillows and Blankets set :' +
                  '<br>'+
                  'Pillow x 2'+
                  '<br>'+
                  'Blanket x 1' +
                  '<br>'+
                  'Donation price : 250 NIS' +
              '</p>';
  document.getElementById('modal_img').src="imageProject/PillowsAndBlankets2.jfif";
  document.getElementById('target').innerHTML = words;
}

//Food basket product - food
function F_product1() {
  document.getElementById('id01').style.display='block';
  let par = mediaModal(); // check screen size
  let words = '<p>' +
                   par+ 'Food Basket includes: ' +
                  '<br>'+
                  'wine, rice, oil, sugar, '+
                  '<br>'+
                  'flour, tuna,cans, pasta' +
                  '<br>'+
                  'Donation price : 120 NIS' +
              '</p>';
  document.getElementById('modal_img').src="imageProject/food\ basket.jpg";
  document.getElementById('target').innerHTML = words;
}
// hot food product - food
function F_product2() {
  document.getElementById('id01').style.display='block';
  let par = mediaModal(); // check screen size
  let words = '<p>' +
                   par+ 'Hot food from catering: ' +
                  '<br>'+
                  'Single hot meal for one person '+
                  '<br>'+
                  'Donation price : 40 NIS' +
              '</p>';
  document.getElementById('modal_img').src="imageProject/warm\ food.jpg";
  document.getElementById('target').innerHTML = words;
}
// candies basket product - food 
function F_product3() {
  document.getElementById('id01').style.display='block';
  let par = mediaModal(); // check screen size
  let words ='<p>' +
                  par+ 'Candies Basket' +
                  '<br>'+
                  'chocolates and snacks packages'+
                  '<br>'+
                  'to put a big smile on thier face' +
                  '<br>'+
                  'Donation price : 60 NIS' +
              '</p>';
  document.getElementById('modal_img').src="imageProject/candis.png";
  document.getElementById('target').innerHTML = words;
}
// cash - 100 NIS
function Cash1() {
  document.getElementById('id02').style.display='block';
  let par = mediaModal(); // check screen size
  let words = '<p>' +
                   par+ 'Donate to orginiztions' +
                  '<br>'+
                  '10% will be added by the organization'+
                  '<br>'+
                  '<br>'+
                  'Donation price : 100 NIS' +
              '</p>';
  document.getElementById('modal_img').src="imageProject/CashPic.jpg";
  document.getElementById('target2').innerHTML = words;
}
// cash 200 NIS
function Cash2() {
  document.getElementById('id02').style.display='block';
  let par = mediaModal(); // check screen size
  let words = '<p>' +
                   par+ 'Donate to orginiztions' +
                  '<br>'+
                  '10% will be added by the organization'+
                  '<br>'+
                  '<br>'+
                  'Donation price : 200 NIS' +
              '</p>';
  document.getElementById('modal_img').src="imageProject/CashPic.jpg";
  document.getElementById('target2').innerHTML = words;
}
// cash - other price
function Cash3() {
  document.getElementById('id03').style.display='block';
  let par = mediaModal(); // check screen size
  let words = '<p>' +
                   par+ 'Donate to orginiztions' +
                  '<br>'+
                  '10% will be added by the organization'+
                  '<br>'+
                  '<br>'+
                  'Donation price : your choice' +
              '</p>';
  document.getElementById('modal_img').src="imageProject/CashPic.jpg";
  document.getElementById('target3').innerHTML = words;
}

function mediaModal(){  //check if it mobile screen size
  let mediaQuery = window.matchMedia('(min-width: 768px)')
  let  par = '<b style="font-size: 5vw">';
  if (mediaQuery.matches){
     par = '<b>';
  }
  return par;  // returns tag needed
}

// registration validation
// validate that the emil is valid
function validUS() {
  let firstpassword=document.getElementById("psw").value;
  let secondpassword=document.getElementById("psw_repeat").value;
  let validEmail = document.getElementById("email").value;
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// check that the user enterd the same password twice
  if(firstpassword==secondpassword){
      if(re.test(String(validEmail).toLowerCase())){
      return true;
      }
      else{
        alert("email is not valid");
        return false;
      }
  }
  else{
      if(re.test(String(validEmail).toLowerCase())) {
          alert("password must be same!");
          return false;
      }
      else{
           alert("wrong details!");
      }
  }
}
// procced to checkout button
function goToCheckout(){
  window.location.href='checkout.html';
}
// reset my choices button
function reset(){
  window.location.href='productPage.html';
}
