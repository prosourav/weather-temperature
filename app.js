document.getElementById("search-btn").addEventListener("click",function(){
    const searchBox = document.getElementById("search-box").value;
    const id = "9216a7e266ae268b7727d9f3890d4020"; 


// fetch("http://api.openweathermap.org/data/2.5/weather?q="+searchBox+"&APPID=9216a7e266ae268b7727d9f3890d4020")
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBox}&appid=${id}`)
.then(response => response.json())
.then(data => {
    console.log(data);
    document.getElementById("city").innerText = data.name ; 
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("desc").innerText = data.weather[0].description;

    // document.getElementById('picture').setAttribute('src',`https://openweathermap.org/img/wn/`+data.weather[0].icon+`.png`);
    document.getElementById('picture').setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
})

});
    

  

// fetch("http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=9216a7e266ae268b7727d9f3890d4020")
// .then(response => response.json())
// .then((data) => console.log(data));


