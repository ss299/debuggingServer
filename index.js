function checkTime(){
    fetch("api/checkTime")
    .then(response => response.text())
    .then(function(responseText){
        console.log(responseText)
        document.getElementById("results").innerHTML = responseText;
    })
    .catch(function(error){
        document.getElementById("results").innerHTML = "There was an error" + error
    });
}