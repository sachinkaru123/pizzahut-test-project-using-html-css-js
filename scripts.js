function myfunc(){
    try {
        // window.alert("welcome");
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var address= document.getElementById("address");
    var ptype=document.getElementById("pizza");
    var number= document.getElementById("number");
    
    // validation
    // name
    if(name.value != ''){
        if((name.value.length) <2){
        document.getElementById("nameErr").innerHTML="Enter Correct name";
        }
    }
    else{
        document.getElementById("nameErr").innerHTML="Please Enter Name";  
    }
// email
if(email.value != ''){
    if((email.value.length) <2){
    document.getElementById("mailErr").innerHTML="Enter Correct Mail";
    }
}
else{
    document.getElementById("mailErr").innerHTML="Please Enter mail";  
}

//address err
if(address.value != ''){
    if((address.value.length) <2){
    document.getElementById("addrErr").innerHTML="Enter Correct address";
    }
}
else{
    document.getElementById("addrErr").innerHTML="Please Enter Address";  
}

//number err

if(number.value != ''){
    if((number.value.length) <2){
    document.getElementById("numErr").innerHTML="Enter Correct pizza number";
    }
}
else{
    document.getElementById("numErr").innerHTML="Please Enter pizza number";  
}




    } catch (error) {
        window.alert("error");
    }

    
}