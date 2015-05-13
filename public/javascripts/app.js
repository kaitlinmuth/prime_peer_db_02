
$(document).ready(function () {
    $.get("/assignment", function(data){
        for(var i = 0; i < data.length; i++){
            $(".layout").append("<li id='"+data[i]._id"'>"+ data[i].name+"<br>"+data[i].description+"<br>"+data[i].score+"<div class='btn removeBtn'>Remove</div></li>");
            console.log("this works");
        }
    });

    $('.submit').on('click', function(){
        $.post("/assignment",
            {
                name: $('#name').val(),
                description: $('#description').val(),
                finished: $('#completion').val(),
                score: $('#score').val(),
                gold_stars: $('#gold_stars').val()
            },
            function(data,status){
                document.getElementById("assignmentForm").reset();
                $(".layout").append("<li>"+ data.name+"<br>"+data.description+"<br>"+data.score+"<div class='btn removeBtn'>Remove</div></li>");
            });
    });

    $('.removeBtn').on('click', function(){
        $.get("/assignment/"+)
    })
});