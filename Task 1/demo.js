function getUserData() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    var tbody = document.getElementById("content");
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var userData = JSON.parse(xhr.response);
        for(var i=0;i<10;i++){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        td1.innerHTML = userData[i].id;
        td2.innerHTML = userData[i].name;
        td3.innerHTML = userData[i].email;

        tr.append(td1, td2, td3);
        tbody.appendChild(tr);
        }
      }
    }
  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send("");
}
