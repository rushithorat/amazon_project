function validatePassword(password) {
    
    if (password.length !== 8) {
        return false;
    }
    
    var n = /\d/.test(password);
    var a = /[a-zA-Z]/.test(password);
    var c = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return n && a && c;
}

function verify() {
    var m = document.getElementById('mobile').value;
   
    var Passw = document.getElementById('pass').value;

    if (validatePassword(Passw) && (m.length == 10)) 
        {
        window.location.href = "https://www.amazon.in/s?k=login+amazon+account&adgrpid=59671903835&ext_vrnc=hi&hvadid=590652406969&hvdev=c&hvlocphy=9299342&hvnetw=g&hvqmt=b&hvrand=18198556037262090819&hvtargid=kwd-294882733100&hydadcr=24542_2265395&tag=googinhydr1-21&ref=pd_sl_2cwzc6x246_b";
    } 
    else if(m.length != 10)
        {
        document.getElementById('invalid-m').value = "Mobile number should be of 10 digits";
    }
else{
    document.getElementById('invalid').value = "Format of password is incorrect";
}
}


