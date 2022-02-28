
function search(){
    var ciudad = document.getElementById("city").value;

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=7a13b39d6e8e0ad7bc6d10fed36b42d1&units=metric")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            console.log(data.main.temp);
            var iconcode= data.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            document.getElementById("icon").src = iconurl;
            
            document.getElementById("temp").innerText = data.main.temp;
            document.getElementById("day").innerHTML = new Date();
            document.getElementById("rain").innerText = data.main.humidity;
            document.getElementById("cloudy").innerText = data.weather[0].main; 
               
        })
        .catch(function(error) {
            console.log(error);
        })
}
