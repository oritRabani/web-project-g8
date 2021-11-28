
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

function Cash1() {
    document.getElementById('id02').style.display='block';
    let par = mediaModal(); // check screen size
    let words = '<p>' +
                     par+ 'Donate to orginiztions' +
                    '<br>'+
                    'for each cash donation 10% will be added by the organization'+
                    '<br>'+
                    'Donation price : 100 NIS' +
                '</p>';
    document.getElementById('modal_img').src="imageProject/CashPic.jpg";
    document.getElementById('target2').innerHTML = words;
}

function Cash2() {
    document.getElementById('id02').style.display='block';
    let par = mediaModal(); // check screen size
    let words = '<p>' +
                     par+ 'Donate to orginiztions' +
                    '<br>'+
                    'for each cash donation 10% will be added by the organization'+
                    '<br>'+
                    'Donation price : 200 NIS' +
                '</p>';
    document.getElementById('modal_img').src="imageProject/CashPic.jpg";
    document.getElementById('target2').innerHTML = words;
}

function Cash3() {
    document.getElementById('id03').style.display='block';
    let par = mediaModal(); // check screen size
    let words = '<p>' +
                     par+ 'Donate to orginiztions' +
                    '<br>'+
                    'for each cash donation 10% will be added by the organization'+
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
/*
let txt='מגשים מומלצים';
 let i=0;
function text() {   //inside letters animation
    if (i<txt.length ){}
    {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(text,80);
    }
}
*/
// registration valid
function validUS() {
    let firstpassword=document.getElementById("psw").value;
    let secondpassword=document.getElementById("psw_repeat").value;
    let validEmail = document.getElementById("email").value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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


