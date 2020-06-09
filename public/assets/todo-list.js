$(document).ready(function(){
    $('form').on('submit', function(){

        var item = $('form input');
        var todo = {item: item.val()};

        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,

            //Receive the data from res.json(data)
            success: function(data){
                location.reload();
            }
        });
        return false;
    });

    $("li").on("click", function(){

        var dashed_item = $(this).text().trim().replace(/ /g, "-");

        $.ajax({
            type: "DELETE",
            url: "/todo/" + dashed_item,

            success: function(data){
                location.reload();
            }
        });
    });
});