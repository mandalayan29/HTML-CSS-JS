function save(){
    console.log("Submit clicked");
    let username= document.getElementById("username").value;
    let password= document.getElementById("password").value;
    let obj= {
        "username": username,
        "password": password
    };
    console.log(obj);
    let cookieData= {
        "jwt": obj,
        "developer": "Ayan Mandal"
    }
    document.cookie= JSON.stringify(cookieData);
    return false;
}

function printCookie(){
    let data= document.cookie;
    let obj= JSON.parse(data);
    console.log(obj.jwt);
    console.log(obj);
}