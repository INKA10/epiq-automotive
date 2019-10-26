// /api/Recalls/vehicle/modelyear/2000/make/saturn/model/ls?format=json
// Web page link: https://one.nhtsa.gov/webapi/Default.aspx?Recalls/API/83
// Sample API call: https://one.nhtsa.gov/webapi/api/Recalls/vehicle/modelyear/2000/make/saturn/model/LS?format=json

    // Get vehicle year,make, and model inputs from the user
    // var carYear = $(".recallYear").val();
    // var carMake = $(".carMake").val();
    // var carModel = $(".carModel").val();

    var carYear = "2012";
    var carMake = "Honda";
    var carModel = "Accord";
    var response = {};
    // Make a call to the recall api with user input
    // Performing GET requests to the nhtsa web API and logging the responses to the console
    $.ajax({
        url: "https://one.nhtsa.gov/webapi/api/Recalls/vehicle/modelyear/" + carYear + "/make/" + carMake + "/model/" + carModel + "?format=json",
        method: "GET",
        dataType: 'JSONP',
        crossDomain: true,
      }).then(function(response) {
        // Handle API response - Diplay inside of modal
        console.log(response);
        $(".recallOutput").text("These are the recalls for your " + carYear + " " + carMake + " " + carModel+ ":" + "\n" +response.Results[0].Component + "\n" +response.Results[0].Conequence);
      });

    // These are the recalls for your $carYear, $carMake, $carModel
    // Component form object 
    // Conequence from response object