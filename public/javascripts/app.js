
$(document).ready(function () {
    $.get("/assignment", function(data){
        for(var i = 0; i < data.length; i++){
            $(".layout").append("<li id= '"+data[i]._id+"' data-id= '"+data[i]._id+"'>"+ data[i].name+"<br>"+data[i].description+" Completed: "+data[i].completed+", Score: "+data[i].score+", Gold Stars: "+data[i].gold_stars+"<br><div class='btn removeBtn'>Remove</div></li>");
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
                $(".layout").append("<li id= '"+data._id+"' data-id= '"+data._id+"'>"+ data.name+"<br>"+data.description+" Completed: "+data.completed+", Score: "+data.score+", Gold Stars: "+data.gold_stars+"<br><div class='btn removeBtn'>Remove</div></li>");
            });
    });

    $('.layout').on('click', '.removeBtn', function(){
        console.log("clicked!");
        var id = $(this).parent().data("id");
        console.log(id);
        $.ajax({
           type: 'DELETE',
            url: '/assignment/'+id,
            crossDomain: false,
            success: function(data){
                $('.layout').find('#'+id).slideUp("fast", function(){
                    $(this).remove();
                    })
            },
            error: function(xhr, status){
                alert('Error: '+status);
            }
        });
    });
});