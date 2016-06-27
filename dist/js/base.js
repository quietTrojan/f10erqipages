var unitObj={
    urlPara:function(){
        function getParaObj(urlStr){
            var paraObj={};
            var curParaMap=null;
            var curParaKey="";
            var curparaVal="";
            parArr=urlStr.split('&');
            for(var i= 0,max=parArr.length;i<max;i++){
                curParaMap=parArr[i].split('=');
                curParaKey=curParaMap[0];
                if(typeof curParaMap[1] != "undefined"){
                    curparaVal=encodeURIComponent(curParaMap[1]);
                }else{
                    curparaVal="";
                }
                paraObj[curParaKey]=curparaVal;
            }
            return paraObj;
        }
        return {
            getPara:function(urlStr,parName){
                if(arguments.length=1){
                    parName=urlStr;
                    urlStr=location.search.slice(1);
                }
                return getParaObj(urlStr)[parName];
            },
            getAll:function(urlStr){
                if(typeof urlStr =="undefined"){
                    urlStr=location.search.slice(1);
                }
                return getParaObj(urlStr);
            }
        }
    }(),
    showLoading:function(jsonObj){
        var isFiexd=true;
        var loadingBox=null;
        var defaultPar={
            'zIndex': 1000,
            'par': $(document.body)
        };
        var parObj=null;
        if(typeof jsonObj != "undefined"){
            if(jsonObj.par){
                isFiexd=false;
            }
            defaultPar= $.extend({},defaultPar,jsonObj);
        }
        parObj=defaultPar.par;
        loadingBox=parObj.children('.loadingBox');

        if(loadingBox.size()==0){

            loadingBox=$('<div class=loadingBox><div class=inner><img src=images/loading.png></div></div>').appendTo(defaultPar.par);
            if(!isFiexd){
                loadingBox.css({
                    'position':'absolute'
                });
                if(parObj.css('position')=="static"){
                    parObj.css({
                        'position':'relative'
                    });
                }
            }
            loadingBox.css({
                'z-index':defaultPar.zIndex
            });
        }
        loadingBox.show();
    },
    hideLoading:function(parObj) {
        var loadingBox = null;
        if (typeof parObj == "undefined") {
            parObj = $(document.body);
        }
        loadingBox = parObj.children('.loadingBox');
        loadingBox.hide();
    },
    showToast:function(tipText,delayTime){
        var toastBox=null;
        var inner=null;
        var tip_p=null;
        if(typeof delayTime == "undefined"){
            delayTime=1000;
        }
        if($('#toastBox').size()==0){
            toastBox=$('<div class="toastBox"><div class="inner"><p class="tip_p"></p></div></div>').appendTo($(document.body));
        }else {
            toastBox=$('#toastBox');
        }
        inner=toastBox.find('.inner');tip_p=toastBox.find('.tip_p');
        tip_p.text(tipText);
        toastBox.show();
        inner.css({
            'marginTop':-inner.outerHeight()/2
        });
        toastBox.delay(delayTime).hide(0);
    },
    hideToast:function(){
        $('#toastBox').hide();
    }
}
/**
 * 预加载图片
 * @param imgList
 */
function aheadLoadImg(imgList){
    if(Object.prototype.toString.call(imgList) != '[object Array]'){
        imgList=[imgList];
    }
    imgList.forEach(function(item,index){
        var newImg=new Image();
        newImg.src = item;
        if(newImg.complete){
            newImg=null;
            return;
        }else{
            newImg.onload=function(){
                newImg=null;
                return;
            }
        }
    });
}
