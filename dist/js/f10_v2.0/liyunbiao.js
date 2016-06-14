$(function(){
    var tableScroll = new IScroll('#rightBox', {
        scrollX:true,
        scrollY:false,
        bounce:false,
        startX:-100,
        //preventDefault:true,
        eventPassthrough:true
    });
    tableScroll.scrollTo(0,0,1000,IScroll.utils.ease.bounce);

    $('#fixBottom').on('click','li',function(){
        var curIndex=$(this).index();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

    });
    alert('ceshi_p01'+$('#ceshi_p01').height());
    alert('ceshi_p02'+$('#ceshi_p02').height());
});
