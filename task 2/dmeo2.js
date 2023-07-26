function getCookie(cookieName) {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName + "=")) {
        return cookie.substring(cookieName.length + 1);
      }
    }
    return false;
  }
  var visitsCount =0;

function getAllCookies() {
    var cookies = document.cookie.split(";");
    var result = {};
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      var separatorIndex = cookie.indexOf("=");
      var name = cookie.substring(0, separatorIndex);
      var value = cookie.substring(separatorIndex + 1);
      result[name] = value;
    }
    if (result.gender == 'female') {
       var myImg = document.createElement ('img');
       myImg.src = './2.jpg';
       document.body.appendChild(myImg)
    } else{
        var myImg = document.createElement ('img');
       myImg.src = './1.jpg';
       document.body.appendChild(myImg)
    }
    window.onload = function (){

      var test = getCookie('count');

        document.cookie = `count=${parseInt(test)+1}`;
      
    }
    var myText = `Hello <span style='color:${result.color}'>${result.name}</span> your age is <span style='color:${result.color}'>${result.age}</span> Your Count Visits is <span style='color:${result.color}'>${getCookie('count')}</span>`
    var myP = document.createElement ('p');
    myP.innerHTML = myText;
    document.body.appendChild (myP);

    return result;

  };
  console.log(getAllCookies());