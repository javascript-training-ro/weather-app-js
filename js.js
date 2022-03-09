   
document.getElementById("city").value = localStorage.getItem("orasul");
console.log('aici');

function getForecastData(lat, lon) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=7a13b39d6e8e0ad7bc6d10fed36b42d1&units=metric")
        .then(function(res) {
            return res.json();
            
        })
        .then(function(data) {
          console.log(data);

            
          var iconcode= data.current.weather[0].icon;
          var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
          document.getElementById("icon").src = iconurl;

          
          
          temp = Math.round(data.current.temp);
          document.getElementById("temp").innerText = temp + "\u2103";

          const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                      const d = new Date();
                      let day = weekday[d.getDay()];
                      let hour = d.getHours();
                      let min= d.getMinutes(); 
                  
          document.getElementById("day").innerHTML = day + " " +  hour +":" + min;
          document.getElementById("rain").innerText = "Humidity " + data.current.humidity + "%";
          document.getElementById("cloudy").innerText = data.current.weather[0].main; 

          
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
             

            showHourlyData(data.hourly);


            var indiceuv = document.createElement("div");
            var wind = document.createElement("div");
            var windDirection = document.createElement("img");
            var sr = document.createElement("div");
            var ss = document.createElement("div");
            var hum = document.createElement("div");
            var vis = document.createElement("div");
            var air = document.createElement("div");            
            indiceuv.id = "indiceUV";         
            wind.id = "windSpeed";
            windDirection.id = "direction";
            windDirection.src = "direction.png";
            windDirection.style.transform = "rotate(" + data.current.wind_deg + "deg)";
            sr.id = "sunrise";
            ss.id = "sunset";
            hum.id = "humidity";
            vis.id = "visibility";
            air.id = "airQ"
            div1.appendChild(indiceuv);
            div2.appendChild(windDirection);            
            div2.appendChild(wind);
            div3.appendChild(sr);
            div3.appendChild(ss);
            div4.appendChild(hum);
            div5.appendChild(vis);
            div6.appendChild(air);

            document.getElementById("indiceUV").innerText = data.daily[0].uvi;
            document.getElementById("progress").style = "width:" + ((data.daily[0].uvi)*7) + "%";
            document.getElementById("windSpeed").innerText = Math.round((data.daily[0].wind_speed * 3600) / 1000)  + " Km/h";
            document.getElementById("sunrise").innerText = (new Date(data.daily[0].sunrise * 1000)).getHours() + ":" + (new Date(data.daily[0].sunrise * 1000)).getMinutes();
            document.getElementById("sunset").innerText = (new Date(data.daily[0].sunset * 1000)).getHours() + ":" + (new Date(data.daily[0].sunset * 1000)).getMinutes();
            document.getElementById("humidity").innerText = (data.daily[0].humidity) + "%";
            document.getElementById("visibility").innerText = (data.current.visibility)/1000 + " Km";
            document.getElementById("airQ").innerText = data.daily[0].dew_point;

            if (data.current.wind_deg < 23 && data.current.wind_deg > 123 ) {
                    document.getElementById("direccion").innerText = "N";
            }else if (data.current.wind_deg < 33.75 && data.current.wind_deg > 11.25 ){
                    document.getElementById("direccion").innerText = "NNE";
            }else if (data.current.wind_deg < 56.25 && data.current.wind_deg > 33.75 ){
                    document.getElementById("direccion").innerText = "NE";
            }else if (data.current.wind_deg < 78.75 && data.current.wind_deg > 56.25 ){
                    document.getElementById("direccion").innerText = "ENE";
            }else if (data.current.wind_deg < 101.25 && data.current.wind_deg > 78.75 ){
                document.getElementById("direccion").innerText = "E";
            }else if (data.current.wind_deg < 123.75 && data.current.wind_deg > 101.25 ){
                document.getElementById("direccion").innerText = "ESE";
            }else if (data.current.wind_deg < 146.25 && data.current.wind_deg > 123.75 ){
                document.getElementById("direccion").innerText = "SE";
            }else if (data.current.wind_deg < 168.75 && data.current.wind_deg > 146.25 ){
                document.getElementById("direccion").innerText = "SSE";
            }else if (data.current.wind_deg < 191.25 && data.current.wind_deg > 168.75 ){
                document.getElementById("direccion").innerText = "S";
            }else if (data.current.wind_deg < 213.75 && data.current.wind_deg > 191.25 ){
                document.getElementById("direccion").innerText = "SSW";
            }else if (data.current.wind_deg < 236.25 && data.current.wind_deg > 213.75 ){
                document.getElementById("direccion").innerText = "SW";
            }else if (data.current.wind_deg < 258.75 && data.current.wind_deg > 236.25 ){
                document.getElementById("direccion").innerText = "WSW";
            }else if (data.current.wind_deg < 281.25 && data.current.wind_deg > 258.75 ){
                document.getElementById("direccion").innerText = "W";
            }else if (data.current.wind_deg < 303.75 && data.current.wind_deg > 281.25 ){
                 document.getElementById("direccion").innerText = "WNW";
            }else if (data.current.wind_deg < 326.25 && data.current.wind_deg > 303.75 ){
                 document.getElementById("direccion").innerText = "NW";
            }else if (data.current.wind_deg < 348.75 && data.current.wind_deg > 326.25 ){
                document.getElementById("direccion").innerText = "NNW";
            }        
        })
        .catch(function(error) {
            console.log(error);
        })
  
}

     

function search(lat, long) {
    var ciudad = document.getElementById("city").value;
    localStorage.setItem("orasul", ciudad); 

    console.log(ciudad); 
    

    document.getElementById("saptamana").innerText = "";
    document.getElementById("today").innerText = "";

    var searchQuery = '';

    if (lat && long) {
        searchQuery = 'lat=' + lat + '&lon=' + long;
    } else {
        searchQuery = 'q=' + ciudad;
    }


    fetch("https://api.openweathermap.org/data/2.5/weather?" + searchQuery + "&appid=7a13b39d6e8e0ad7bc6d10fed36b42d1&units=metric")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            

           document.getElementById('city').value = data.name + ', ' + data.sys.country;

            // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=7a13b39d6e8e0ad7bc6d10fed36b42d1&units=metric
              
            getForecastData(data.coord.lat, data.coord.lon);
            

            

            
        })
        .catch(function(error) {
            console.log(error);
        })
}
function getLocation(){
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude, position.coords.longitude);
        search(position.coords.latitude, position.coords.longitude);
    }, function (error) {
        console.log('eroare', error);
    });
}
function faren(){
             var fahrenheit=Math.round((temp*9)/5)+32;
             document.getElementById("temp").innerHTML = fahrenheit + " \u2109 ";
                  
}
function celsius(){
    document.getElementById("temp").innerText = temp +"\u2103" ;
    
}

function showHourlyData (hourlyData) {

    // console.log('hourly', hourlyData);
    for(var i=2 ; i<=14; i+=2){
        var mainDiv = document.createElement('div');
       
        var divHora = document.createElement('div');
        divHora.innerText = (new Date(hourlyData[i].dt * 1000)).getHours() + ":" + (new Date(hourlyData[i].dt * 1000)).getMinutes() + "0";
        var divIcon = document.createElement("img");
        divIcon.src = "http://openweathermap.org/img/w/" + hourlyData[i].weather[0].icon  + ".png";
        var divTemp = document.createElement("div");
        divTemp.innerText = Math.round(hourlyData[i].temp) + "\u2103";

        mainDiv.append(divHora,divIcon,divTemp);
        mainDiv.className = "hour";
        today.appendChild(mainDiv);
        
        
    }
}

function day(){
    document.getElementsByClassName("details")[0].classList.remove("saptamana");
}

function week() {
    document.getElementsByClassName("details")[0].classList.add("saptamana");  
}