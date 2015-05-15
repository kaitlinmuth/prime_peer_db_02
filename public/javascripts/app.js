function writeResults(data) {
    for (var i = 0; i < data.length; i++) {
        writeResult(data[i]);
    }
}

function writeResult(data) {
    $(".layout").append("<li id= '" + data._id + "' data-id= '" + data._id + "'>" + data.name + "<br>" + data.description + " Completed: " + data.completed + ", Score: " + data.score + ", Gold Stars: " + data.gold_stars + "<br><div class='btn removeBtn'>Remove</div></li>");
}

function search(name, order){
    var searchData = {};
    console.log("name is ", name);
    if(name)

        searchData.name = name;

    if(order)
        searchData.sort = order;

    console.log("searchData ", searchData);

    $.ajax({
            url: "/assignment",
            method: 'get',
            data: searchData,
            error: function (err){
                console.log(err);
            },
            success: function (data) {
                $('.layout').empty();
                console.log("emptied DOM");
                $('.layout').append("<ul></ul>");
                writeResults(data);
            }
        }
    );
}

$(document).ready(function () {
    search(null, 1);

    $('.up').on('click', function () {
        console.log("clicked!");
        search(null, 1);
    });

    $('.down').on('click', function () {
        console.log("clicked!");
        search(null, -1);
    });

    $('#search').keyup(function(event) {
        // If key is enter: act like you clicked the search button
        if (event.keyCode == 13) {
            console.log('entered!');
            var searchTerm = $('#search').val();
            console.log("searchTerm is", searchTerm);
            search(searchTerm, 1);
        }
    });

    $('.submit').on('click', function () {
        $.post("/assignment",
            {
                name: $('#name').val(),
                description: $('#description').val(),
                finished: $('#completion').val(),
                score: $('#score').val(),
                gold_stars: $('#gold_stars').val()
            },
            function (data, status) {
                document.getElementById("assignmentForm").reset();
                $.get("/assignment/", function (data) {
                    $('.layout').empty();
                    $('.layout').append("<ul></ul>");
                    writeResults(data);
                });
            });
    });

    $('.layout').on('click', '.removeBtn', function () {
        console.log("clicked!");
        var id = $(this).parent().data("id");
        console.log(id);
        $.ajax({
            type: 'DELETE',
            url: '/assignment/' + id,
            crossDomain: false,
            success: function (data) {
                $('.layout').find('#' + id).slideUp("fast", function () {
                    $(this).remove();
                })
            },
            error: function (xhr, status) {
                alert('Error: ' + status);
            }
        });
    });
});