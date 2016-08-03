var thirty = []
var fourty =[]
var fifthy = []
var sixty = []
var seventy = []
var eighty = []
var ninety = []
var apikey = "a81f4d73eac00f15e8cac914a2569420";
var zipcode = 76013;



// <a href="http://www.accuweather.com/en/us/new-york-ny/10007/weather-forecast/349727" class="aw-widget-legal">
// <!--
// By accessing and/or using this code snippet, you agree to AccuWeather’s terms and conditions (in English) which can be found at http:www.accuweather.com/en/free-weather-widgets/terms and AccuWeather’s Privacy Statement (in English) which can be found at http:www.accuweather.com/en/privacy.
// -->
// </a><div id="awtd1470156267998" class="aw-widget-36hour"  data-locationkey="" data-unit="f" data-language="en-us" data-useip="true" data-uid="awtd1470156267998" data-editlocation="true"></div><script type="text/javascript" src="http://oap.accuweather.com/launch.js"></script>

window.onload = function() {
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/forecast/weather?zip=" + zipcode + ",us&APPID=" + apikey, 
		success: function(data){
    	    var temp = data.list[0].main.temp
	    }
	});
}