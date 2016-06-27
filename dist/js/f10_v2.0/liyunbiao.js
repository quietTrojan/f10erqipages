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

    })
    //unitObj.showToast("这是错误提示这是错误提示这是错误提示这是错误提示!");
});
