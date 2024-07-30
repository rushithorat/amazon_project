function openpage(){
    var number = document.getElementById('phone-number').value;
    if(number.length == 10){
        console.log("Input value:", number);
      window.location.href = "./pass.html"
    } else {
      document.getElementById('phone-number').value = 'invalid';
    }
  }


//  let prat  = document.getElementById('phone-number').value;
//  document.getElementById('nw').value = '+91' + prat;



 let prat = window.opener.document.getElementById('phone-number').value;
document.getElementById('nw').value = '+91' + prat;


// function getPhoneNumber(callback) {
//     if (window.opener) {
//       let phoneNumberInput = window.opener.document.getElementById('phone-number');
//       if (phoneNumberInput) {
//         callback(phoneNumberInput.value);
//       } else {
//         console.error("Phone number input field not found");
//       }
//     } else {
//       console.error("Opener window not found");
//     }
//   }
  
//   getPhoneNumber(function(phoneNumber) {
//     document.getElementById('nw').value = '+91' + phoneNumber;
//   });



