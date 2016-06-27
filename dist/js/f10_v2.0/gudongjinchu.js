$(function(){
    var headerScroll=new IScroll('#scrollHeader',{
        scrollX:true,
        scrollY:false,
        bounce:false,
        tap:true
    });
    $('#header_ul').on('tap','li',function(){
        var curIndex=$(this).index();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

});