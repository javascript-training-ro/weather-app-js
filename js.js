   
                  
function getForecastData(lat, lon) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=7a13b39d6e8e0ad7bc6d10fed36b42d1&units=metric")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
          
            const z = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
            for (var i=1; i<data.daily.length; i++ ){
                var numeZi = z[(new Date(data.daily[i].dt * 1000)).getDay()];               
                var dayElement = document.createElement("div");
                var icon2 = document.createElement("IMG");
                
                var nameElement = document.createElement("div");
                var maxElement = document.createElement("div");
                var minElement = document.createElement("div");
                 var minMax = document.createElement("div");
                
                maxElement.innerText = Math.round(data.daily[i].temp.max);
                maxElement.className = "max";
                nameElement.innerText = numeZi;
                nameElement.className = "name";
                minElement.innerText = Math.round(data.daily[i].temp.min);
                minElement.className = "min";
                
                var iconcod = data.daily[i].weather[0].icon;
                var iconurl2 = "http://openweathermap.org/img/w/" + iconcod + ".png";
                icon2.src = iconurl2;

                dayElement.appendChild(nameElement);
                dayElement.appendChild(icon2);
                dayElement.appendChild(minMax);
                minMax.appendChild(maxElement);
                minMax.appendChild(minElement);   
                icon2.className = "icon2";
                minMax.className = "minMax";

                dayElement.className = "day";
                document.getElementsByClassName("week")[0].appendChild(dayElement);
            }            
        })
        .catch(function(error) {
            console.log(error);
        })
  
}

           
var temp;      

function search(){
    var ciudad = document.getElementById("city").value;

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=7a13b39d6e8e0ad7bc6d10fed36b42d1&units=metric")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            

            var iconcode= data.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            document.getElementById("icon").src = iconurl;

            
            
            temp = Math.round(data.main.temp);
            document.getElementById("temp").innerText = temp + "\u2103";

            const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                        const d = new Date();
                        let day = weekday[d.getDay()];
                        let hour = d.getHours();
                        let min= d.getMinutes(); 
                    
            document.getElementById("day").innerHTML = day + " " +  hour +":" + min;
            document.getElementById("rain").innerText = data.main.humidity + "%";
            document.getElementById("cloudy").innerText = data.weather[0].main; 

            // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=7a13b39d6e8e0ad7bc6d10fed36b42d1&units=metric
              
            getForecastData(data.coord.lat, data.coord.lon);

            
        })
        .catch(function(error) {
            console.log(error);
        })
}
function faren(){
             var fahrenheit=Math.round((temp*9)/5)+32;
             document.getElementById("temp").innerText = fahrenheit + " \u2109";
                  
}
function celsius(){
    document.getElementById("temp").innerText = temp +"\u2103";
    console.log(temp);
}
