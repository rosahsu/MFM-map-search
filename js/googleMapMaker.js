var data;
var markers = []; //Empty array
var infowindows = [];

/**
 * Initializes map with markers and data
 */

function initMap() {
    var csvFile = 'tweak.csv' //CSV  with farmer's market data
    var boston = {lat: 42.359884, lng: -71.058813}; //Location of Boston
    var map = new google.maps.Map(
        document.getElementById('map-area'), {zoom: 8, center: boston}); //Creates map centered on Boston
    Papa.parse(csvFile, { //Gets data from the CSV
        header: true,
        download: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: function (results) {
            console.log(results);
            data = results.data;


            for (var i = 0; i < data.length; i++) {
                if (data[i].Latitude != 0 && data[i].Longitude != 0) {
                    var location = {lat: data[i].Latitude, lng: data[i].Longitude}; //Gets location of each farmer's market
                    var marker = new google.maps.Marker({position: location, map: map}) //Creates a marker and places it on the map
                    markers.push(marker);
                    //Stores marker in array

                    //info for creating info-window for each marker
                    var name = data[i]["Market Name"];
                    var days = data[i]["Days of Week"];
                    var open_time = data[i]["Open"];
                    var close_time = data[i]["Close"];
                    var start_date = data[i]["Start Date"];
                    var end_date = data[i]["End Date"];

                    var contentString =  '<b>' + name + '</b>' +
                        '<p><u>Dates:</u> ' + start_date + "-" + end_date + '</p>' +
                        '<p><u>Hours:</u> ' + open_time + "-" + close_time + '</p>' +
                        '<p><u>Days Open:</u> ' + days + '</p>'
                    ;

                    var infowindow = new google.maps.InfoWindow ({
                        content : contentString
                    });
                    marker.infowindow = infowindow;
                    google.maps.event.addListener(marker,'click',function(e) {
                        this.infowindow.open(map,this);
                        infowindow.close();
                    });
                    infowindows.push(infowindow);
                }

            }

        }

    })
}