$(function(){
    var headerScroll=new IScroll('#scrollHeader',{
        scrollX:true,
        scrollY:false,
        bounce:false
    });
    $('#header_ul').on('click','li',function(){
        var curIndex=$(this).index();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

    });
});