   
   
   
                 const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                        const d = new Date();
                        let day = weekday[d.getDay()];
                        let hour = d.getHours();
                        let min= d.getMinutes();   
function getForecastData(lat, lon) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=7a13b39d6e8e0ad7bc6d10fed36b42d1&units=metric")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data); 
            console.log(data.daily[0].temp.day); 
                 
            document.getElementById("day1").innerText = Math.round (data.daily[1].temp.day);
            document.getElementById("day1").innerText = Math.round (data.daily[1].temp.night);
                const z = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                var luni = (new Date(data.daily[1].dt * 1000)).getDay();
                var marti = (new Date(data.daily[2].dt * 1000)).getDay();
                var miercuri = (new Date(data.daily[3].dt * 1000)).getDay();
                var joi = (new Date(data.daily[4].dt * 1000)).getDay();
                var vineri = (new Date(data.daily[5].dt * 1000)).getDay();
                var sambata = (new Date(data.daily[6].dt * 1000)).getDay();
                var duminica = (new Date(data.daily[7].dt * 1000)).getDay();
                
           
            document.getElementById("luni").innerText = z[luni];
            document.getElementById("marti").innerText = z[marti];
            document.getElementById("miercuri").innerText = z[miercuri];
            document.getElementById("joi").innerText = z[joi];
            document.getElementById("vineri").innerText = z[vineri];
            document.getElementById("sambata").innerText = z[sambata];
            document.getElementById("duminica").innerText = z[duminica];
            
        })
        .catch(function(error) {
            console.log(error);
        })
                // var dayNames = ["duminica", "luni", "marti", "miercuri", "joi", "vineri", "sambata"];
                //     for(i=0; i<dayNames.length; i++){
                //         new Date(dayNames[i].dt * 1000)
                //             //console.log(dayNames[i]);
                //     }
        
}

      

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
            var temp=Math.round (data.main.temp);
            document.getElementById("temp").innerText = temp + "\u2103";
                    
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




//3

// dayNames[day - 1]

//new Date(asda[i].dt * 1000)