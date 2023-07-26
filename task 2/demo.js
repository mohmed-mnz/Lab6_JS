function setCookie (key,value) {
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 2);
    document.cookie = key + "=" + value + ";expires=" + myDate;
}

var registBtn = document.getElementById("register-btn");

registBtn.addEventListener ('click',()=>{
    var userName = document.querySelector('#user-name').value;
    var userAge = document.querySelector('#user-age').value;
    var userGender = document.querySelector("input[name='gender']:checked").value;
    var userColor = document.querySelector("[name='color']").value;

    setCookie('name',userName);
    setCookie ('age',userAge);
    setCookie ('gender',userGender);
    setCookie ('color',userColor);
    console.log(document.cookie);
    window.location.assign('index2.html');
})
