
var data=[{name:"政府",y:30},{name:"电信",y:20},{name:"计算机软件",y:50}];
$(function(){
    $('#pieBox').highcharts({
        chart: {
            margin: 0,
            backgroundColor: '#252530',
            type: 'pie'
        },
        credits: {
            enabled:false
        },
        colors: ['#CE5757','#DEB16E','#819AC9'],
        legend:{
            enabled:false
        },
        title: {
            text: '<div class="pieTitle">总股本</div>',
            useHTML: true,
            y:32
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    formatter:function(){
                        return parseInt(this.percentage)+'%';
                    },
                    distance:-13,
                    style:{
                        fontSize:'10px',
                        color:'#fff',
                        fontWeight:'normal'
                    }
                },
                innerSize: '50',
                size:100,
                borderWidth: 0,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            },
            //通用配置
            series: {
                animation: false
            }
        },
        series: [{
            data: data
        }]
    });

//    区域图&&走势图
    $('.trendTag').each(function(){
        $(this).highcharts({
            chart: {
                spacing:0,
                margin:0,
                backgroundColor:'rgba(255,255,255,0)'
            },
            title: {
                text:null //让title标题隐藏
            },
            xAxis: {
                title: {
                    text: null
                },
                lineWidth:0,
                tickWidth:0,
                labels: {
                    style: {
                        color: '#A5AFB3'
                    },
                    staggerLines: 1,
                    align: 'center',
                    formatter:function(){
                        if(this.isFirst  || this.isLast){
                            return this.value;
                        }
                    }
                }
            },
            yAxis: {
                title: {
                    text:null
                },
                gridLineWidth:0,
                labels:{
                    enabled:false
                }
            },
            tooltip: {
                crosshairs: {
                    width: 1,
                    color: 'rgba(255,255,255,0.5)',
                    dashStyle: 'solid'
                },
                shared: true,
                formatter:function(){
                    return '<div class="trendToolTip"><span>'+this.points[0].y+'</span><br><span>'+this.points[1].y+'</span></div>';
                },
                backgroundColor:null,
                borderWidth:0,
                useHTML:true
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                //区域图
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, 'rgba(255,156,60,0.3)'],
                            [1,'rgba(255,156,60,0)']
                        ]
                    },
                    lineColor:'#ff9c3c'
                },
                //折线图
                line:{
                    lineColor:'#81AEC8'
                },
                //通用配置
                series: {
                    animation: false,
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1,
                            halo:false
                        }

                    },
                    marker: {
                        enabled: false,
                        fillColor:'#fff',
                        symbol: 'circle',
                        states: {
                            hover: {
                                radius:2
                            }
                        }
                    }
                }
            },
            credits: {
                enabled: false // 禁用版权信息
            },
            series: [
                {
                    type: 'area',
                    data: [[1,2],[2,3],[3,3],[4,6],[5,8],[6,2]]
                },
                {
                    type: 'line',
                    data: [[1,6],[2,5],[3,2],[4,9],[5,3],[6,4]]
                }
            ]
        });
    });

    $('#fixBottom').on('click','li',function(){
        var curIndex=$(this).index();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

    })
});
