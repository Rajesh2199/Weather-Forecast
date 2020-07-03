

$("button").on("click", function(){
 
    var search = $("#search").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +  search + "&appid=83beb72dde865eab81bb5879cb273d6c" ;               
    var uvindex="http://api.openweathermap.org/data/2.5/uvi?appid={83beb72dde865eab81bb5879cb273d6c}&lat={lat}&lon={lon}";
  console.log(uvindex);
    console.log(search);
// ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
        
      })
    
      
// console logging the query and response.
      .then(function(response) {
          console.log(queryURL);
          console.log(response);

      
      //Assigning data to the divs.
      $(".city").html(  response.city.name);
      $(".date").html("Date:"+ response.list[0].dt_txt);
      $(".wind").html("Wind:" + response.list[0].wind.speed);
      $(".humidity").html("Humidity:" + response.list[0].main.humidity);
      $(".temp").html("Temperature:" + response.list[0].main.temp_kf);
      //Assigining data to day1 div.
      
       $(".date1").html("Date:"+ response.list[1].dt_txt);
       $(".wind1").html("Wind:" + response.list[1].wind.speed);
       $(".humidity1").html("Humidity:" + response.list[1].main.humidity);
       $(".temp1").html("Temperature:" + response.list[1].main.temp_kf);
      //Assigining data to day2 div.
      $(".date2").html("Date:"+ response.list[2].dt_txt);
      $(".wind2").html("Wind:" + response.list[2].wind.speed);
      $(".humidity2").html("Humidity:" + response.list[2].main.humidity);
      $(".temp2").html("Temperature:" + response.list[2].main.temp_kf);
      //Assigining data to day3 div.
      $(".date3").html("Date:"+ response.list[3].dt_txt);
      $(".wind3").html("Wind:" + response.list[3].wind.speed);
      $(".humidity3").html("Humidity:" + response.list[3].main.humidity);
      $(".temp3").html("Temperature:" + response.list[3].main.temp_kf);
      //Assigining data to day4 div.  
      $(".date4").html("Date:"+ response.list[4].dt_txt);
      $(".wind4").html("Wind:" + response.list[4].wind.speed);
      $(".humidity4").html("Humidity:" + response.list[4].main.humidity);
      $(".temp4").html("Temperature:" + response.list[4].main.temp_kf);         
      //Assigining data to day5 div.
      $(".date5").html("Date:"+ response.list[5].dt_txt);
      $(".wind5").html("Wind:" + response.list[5].wind.speed);
      $(".humidity5").html("Humidity:" + response.list[5].main.humidity);
      $(".temp5").html("Temperature:" + response.list[5].main.temp_kf);
        console.log(response.list[5].main.humidity);

      // Storing Input into local storage.
      function rendersearch() {
      var local = $("#search").val();
      var mylocal= JSON.stringify(local);
      console.log(local);
      localStorage.setItem("City Name",mylocal);

      //Retrieving data from local storage.
     
      text = localStorage.getItem("City Name");
      obj = JSON.parse(text);

      $(".history").html(mylocal);    
      return;
      }
      rendersearch();

      
      });
    });


// function renderLastRegistered() {
//   var email = localStorage.getItem("email");
//   var password = localStorage.getItem("password");

//   if (!email || !password) {
//     return;
//   }

//   userEmailSpan.textContent = email;
//   userPasswordSpan.textContent = password;
// }

// signUpButton.addEventListener("click", function(event) {
//   event.preventDefault();

//   var email = document.querySelector("#email").value;
//   var password = document.querySelector("#password").value;

//   if (email === "") {
//     displayMessage("error", "Email cannot be blank");
//   } else if (password === "") {
//     displayMessage("error", "Password cannot be blank");
//   } else {
//     displayMessage("success", "Registered successfully");

//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//     renderLastRegistered();
//   }
// });




   
       