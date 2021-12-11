/* DROP DOWN card type */
var activeDropdown;
window.onload = function(){
    var cardDrop = document.getElementById('card-dropdown');  
    cardDrop.addEventListener('click',function(){
      var node;
      for (var i = 0; i < this.childNodes.length-1; i++)
        node = this.childNodes[i];
        if (node.className === 'dropdown-select') {
          node.classList.add('visible');
           activeDropdown = node; 
        };
    })
}

/* DROP DOWN - visa or mastercaed */
window.onclick = function(e) {
  console.log(e.target.tagName)
  console.log('dropdown');
  console.log(activeDropdown)
  if (e.target.tagName === 'LI' && activeDropdown){
    if (e.target.innerHTML === 'Master Card') {
      document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Master Card';
    }
    else if (e.target.innerHTML === 'Visa') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Visa';
    }
  }
  else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
    activeDropdown.classList.remove('visible');
    activeDropdown = null;
  }
}

/* checking that experation date of card is valid */
function checkExpire(){
    const today = new Date();
    const mm = today.getMonth() +1; //January is 0 - need to add 1
    const yyyy = today.getFullYear();
    var inputMonth = document.getElementById("expireMonth").value;
    var inputYear = document.getElementById("expireYear").value;
   
   if(inputYear < yyyy){
        document.getElementById("message").innerHTML = "Experation year is incorrect";  
        return false;
   }
   else if(inputYear == yyyy && inputMonth < mm){
        document.getElementById("message").innerHTML = "Experation month is incorrect";
        return false;
   }
   else if (inputYear < yyyy && inputMonth < mm){
        document.getElementById("message").innerHTML = "Experation date is incorrect";
        return false;
   }
   return true;
}

/* Back to product page button */
function goBackToProductPage(){
    window.location.href="productPage.html";
}



