function checkcreds (){
    console.log("checkcreds() started");
    var firstName = document.getElementById("fname").value;
    var lastName =  document.getElementById("lname").value;
    var badgeNumb =  document.getElementById("badgeID").value;
    var fullname = firstName + " " + lastName; 
    
    console.log("Full name is" + fullname);

    if(fullname.length > 20 || fullname.length < 2){
    document.getElementById("loginStatus").innerHTML= "Invalid Full name! Please submit a valid full name."; 
    }else if (badgeNumb > 999 || badgeNumb < 0){ 
    document.getElementById("loginStatus").innerHTML= "Invalid Badge Number! Please submit a valid Badge Number.";
}else {
     alert("Access granted, Welcome " + fullname);
 location.replace("UATSpacePage.html");
    }
}  
