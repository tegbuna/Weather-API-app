//Submiit Form
$('#form-submit').submit(function(event) {
    performSearch(event);
});
    //API Call function:
    function performSeartch(evt) {
        var request;
        evt.preventDefault();
        //API Call parameters:
        request = $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?",
            type: "GET",
            data: {
                q: $('#location').val(),
                appid: 'f23e948518e01488b4d92afa489a7f04',
                units: 'imperial'
        }
    });

    request.done(function(response){
        formatSearch(response);
    });

}

    //Write Data:
    function formatSearch(jsonObject) {
    let city_name = jsonObject.name;
    let city_weather = jsonObject.weather[0].main;
    let  city_temp = jsonObject.main.temp;

    $('#location').text(`<p> ${city_name} </p>`);
    $('#temperature').text(`<p>  ${city_temp} </p>`);
    $('#weather').text(`<p>${city_weather} F </p>`);
}

/*NOTE TO IAs:
Yet again I'm left without any error codes but my app refuses to get the data. Please tell me what I did wrong.Is it the code? Did I not load something properly?  I"m at aloss. I actually finished the proect in a couple of hours but I maxed out the rest of the time trying to get the api to data to load.  ---ugh... I hope you guys had a great weekend.  Thanks!