
// document.getElementById("pword").ariaValueMax.pword.style.display = "none";

document.getElementById("join").onclick = function(){
    let fname = Document.getElementById("fname").value;
    let lname = Document.getElementById("1name").value;
    let emailid = Document.getElementById("emailid").value;
    let pword = Document.getElementById("pword").value;
    let pword2 = Document.getElementById("confirm-pword2").value;
    // Ensure that the First Name is filled out and not left empty
    if(fname== " "){
        alert("First Name must be filled out");
        return false;
    }
    
    // Ensure that the Last Name is filled out and not left empty
    else if(lname == " "){
        alert("Last Name must be filled out");
        return false;
    }
    // Ensure that the Email Adress is filled out and not left empty
    else if(emailid == " "){
        alert("Email Adress must be filled out");
        return false;
    }
    // Ensure that the Last Name is filled out and not left empty
    else if(pword.length < 6){
        alert("password must be filled out");
        return false;
    }
       else{
        alert('congratulation!!!!! \n you sucessfully signed up.');
       }
    
            
}