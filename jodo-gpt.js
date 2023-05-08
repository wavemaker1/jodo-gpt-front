function hello() {
  //로그인 요청
  var reqURL = "http://localhost:3000"; // 요청 주소

  var ret = "0";
  $.ajax({
    // [요청 시작 부분]
    url: reqURL, //주소
    type: "GET", //전송 타입
    async: true, //비동기 여부
    timeout: 5000, //타임 아웃 설정
    dataType: "TEXT", //응답받을 데이터 타입 (XML,JSON,TEXT,HTML,JSONP)
    contentType: "application/json; charset=utf-8", //헤더의 Content-Type을 설정
    success: function (response) {
      (response) => response.json();
      var results = JSON.stringify(response);
      ret = results;
      alert(results);
    },
    error: function (response, status, error) {
      alert(response + "/" + status + "/" + error);
    },
  });
}

function calc() {
  var reqURL = "http://localhost:3000"; // 요청 주소

  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  var mydata = { num1: num1, num2: num2 };

  var ret = "0";

  $.ajax({
    // [요청 시작 부분]
    url: reqURL, //주소
    type: "POST", //전송 타입
    async: true, //비동기 여부
    timeout: 5000, //타임 아웃 설정
    dataType: "JSON", //응답받을 데이터 타입 (XML,JSON,TEXT,HTML,JSONP)
    data: JSON.stringify(mydata),
    contentType: "application/json; charset=utf-8", //헤더의 Content-Type을 설정

    success: function (response) {
      (response) => response.json();
      var results = JSON.stringify(response);
      ret = results;
      console.log(results);
      alert(results);
    },
    error: function (response, status, error) {
      alert(response + "/" + status + "/" + error);
    },
  });
}
