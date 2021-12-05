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