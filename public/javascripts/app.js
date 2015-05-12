$(document).ready(function () {
    $.get("/assignment", function(data){
        for(var i = 0; i < data.length; i++){
            $(".layout").append("<li>"+ data[i].name+"<br>"+data[i].description+"<br>"+data[i].score+"</li>");
            console.log("this works");
        }
    });
})