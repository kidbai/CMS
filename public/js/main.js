$(function(){

    $("#dataTables-fix").dataTable({
        // "processing": true,
        // "serverSide": true
        // server-side processing
        // ajax : "../ajax.json"
    });
    

    var dataTables_bill = $("#dataTables-bill").dataTable();
    $('#dataTables-bill tbody').on( 'click', 'tr', function () {
       $(this).toggleClass('selected'); 
    } );

    var functionRightMoveLength = $("#function").width() + 31;
    
    $("#setting").click(function (){
        $("#function").addClass('on');
    });
    $('[data-toggle=offcanvas]').click(function() {
        $('.content-wrap').toggleClass('on');
    });
    
    $("#login-btn").click(function (){
        $("#login-window").slideToggle("fast");
    });
    $(".resident-info .box-content ul > li").click(function (ev){
        ev.preventDefault();
        console.log($(this).children('a').attr('href'));
        var index_tab_id = $(this).children('a').attr('href');
        $("#tabs-content .tabs-content-list").removeClass('active');
        $(index_tab_id).addClass("active");
        $(".resident-info .box-content ul > li").removeClass('active');
        $(this).addClass('active');
    });
});