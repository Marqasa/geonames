$("#submit1").click(function () {
  $.ajax({
    url: "libs/php/getGeonames.php",
    type: "POST",
    dataType: "json",
    data: {
      endpoint: "neighbours",
      country: $("#country").val(),
    },

    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#results").html("");
        $("#results").append("<h3>Neighbours</h3>");

        $(result["data"]).each(function (i) {
          $("#results").append("<p>" + result["data"][i]["name"] + "</p>");
        });
      }
    },

    error: function (jqXHR, textStatus, errorThrown) {
      $("#results").html("There was an error retrieving the results.");
    },
  });
});

$("#submit2").click(function () {
  $.ajax({
    url: "libs/php/getGeonames.php",
    type: "POST",
    dataType: "json",
    data: {
      endpoint: "timezone",
      latitude: $("#latitude").val(),
      longitude: $("#longitude").val(),
    },

    success: function (result) {
      if (result.status.name == "ok") {
        $("#results").html("");
        $("#results").append("<h3>Timezone</h3>");

        $countryName = result["data"]["countryName"];
        $timezoneId = result["data"]["timezoneId"];
        $gmtOffset = result["data"]["gmtOffset"];

        if ($countryName) {
          $("#results").append("<p>Country: " + $countryName + "</p>");
        }

        if ($timezoneId) {
          $("#results").append("<p>Timezone: " + $timezoneId + "</p>");
        }

        if ($gmtOffset) {
          $("#results").append("<p>GMT Offset: " + $gmtOffset + "</p>");
        }
      }
    },

    error: function (jqXHR, textStatus, errorThrown) {
      $("#results").html("There was an error retrieving the results.");
    },
  });
});

$("#submit3").click(function () {
  $.ajax({
    url: "libs/php/getGeonames.php",
    type: "POST",
    dataType: "json",
    data: {
      endpoint: "weather",
      north: $("#north").val(),
      south: $("#south").val(),
      east: $("#east").val(),
      west: $("#west").val(),
    },

    success: function (result) {
      console.log(result);
      if (result.status.name == "ok") {
        $("#results").html("");
        $("#results").append("<h3>Weather</h3>");

        $observations = result["data"]["weatherObservations"][0];
        $clouds = $observations["clouds"];
        $temperature = $observations["temperature"];
        $humidity = $observations["humidity"];

        if ($clouds) {
          $("#results").append("<p>Clouds: " + $clouds + "</p>");
        }

        if ($temperature) {
          $("#results").append("<p>Temperature: " + $temperature + "</p>");
        }

        if ($humidity) {
          $("#results").append("<p>Humidity: " + $humidity + "</p>");
        }
      }
    },

    error: function (jqXHR, textStatus, errorThrown) {
      $("#results").html("There was an error retrieving the results.");
    },
  });
});
