/**
 * Created by Administrator on 2016/12/19.
 */
var themename1='电信诈骗';
var themename2='港澳台';
function left() {
    function place() {
        //this.ajax_method='GET'; // body...
    }
    place.prototype= {
        call_request:function(url,callback) {
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                async: true,
                success:callback
            });
        },
    };
    function territory(data) {
        var data=eval(data);
        // $(".pretwomd").text(data.event_num);
        var myChart = echarts.init(document.getElementById('txtleft'));
        var thingname=[],thingnum=[],leng=[];
        var s_series=[];
        for (var key in data.river_data){
            thingname.push(key);
            leng.push(data.river_data[key].length);
            var nums2=[];
            $.each(data.river_data[key],function (index,item) {
                nums2.push(item[1]);
            });
            s_series.push({
                name: key,
                type: 'line',
                data: nums2
            });
        };
        var xx=[];
        var xmax=Math.max.apply(null, leng);
        for (var x=0;x<xmax;x++){
            xx.push(x+1);
        };
        var option = {
            title: {
                // text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                // data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                data:thingname,
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                // data: ['周一','周二','周三','周四','周五','周六','周日']
                data:xx,
            },
            yAxis: {
                type: 'value'
            },
            series: s_series
        };
        myChart.setOption(option);
    };
    function place2() {
        //this.ajax_method='GET'; // body...
    }
    place2.prototype= {
        call_request:function(url,callback) {
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                async: true,
                success:callback
            });
        },
    };
    function territory2(data) {
        var data=eval(data);
        // $(".pretwomd").text(data.event_num);
        var myChart = echarts.init(document.getElementById('txtright'));
        var thingname=[],thingnum=[],leng=[];
        var s_series=[];
        for (var key in data.river_data){
            thingname.push(key);
            leng.push(data.river_data[key].length);
            var nums2=[];
            $.each(data.river_data[key],function (index,item) {
                nums2.push(item[1]);
            });
            s_series.push({
                name: key,
                type: 'line',
                data: nums2
            });
        };
        var xx=[];
        var xmax=Math.max.apply(null, leng);
        for (var x=0;x<xmax;x++){
            xx.push(x+1);
        };
        var option = {
            title: {
                // text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                // data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                data:thingname,
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                // data: ['周一','周二','周三','周四','周五','周六','周日']
                data:xx,
            },
            yAxis: {
                type: 'value'
            },
            series: s_series
        };
        myChart.setOption(option);
    }

    var place=new place();
    var place2=new place2();
    function nums() {
        var url = '/theme/theme_river/?theme_name='+themename1;
        var url2 = '/theme/theme_river/?theme_name='+themename2;
        place.call_request(url,territory);
        place2.call_request(url2,territory2);
    }
    nums();
}
function right() {
    var myChart = echarts.init(document.getElementById('txtright'));
// app.title = '单轴散点图';
    var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];
    var days = ['Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

    var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],
        [0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],
        [0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],
        [0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],
        [1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],
        [1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],
        [2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],
        [2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],
        [2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],
        [3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],
        [3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],
        [3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],
        [4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],
        [4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],
        [4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],
        [5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],
        [5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],
        [6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],
        [6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];
    myChart.setOption(option = {
        tooltip: {
            position: 'top'
        },
        title: [],
        singleAxis: [],
        series: []
    }, true);
    echarts.util.each(days, function (day, idx) {
        option.title.push({
            textBaseline: 'middle',
            top: (idx + 0.5) * 100 / 7 + '%',
            text: day
        });
        option.singleAxis.push({
            left: 150,
            type: 'category',
            boundaryGap: false,
            data: hours,
            top: (idx * 100 / 7 + 5) + '%',
            height: (100 / 7 - 10) + '%',
            axisLabel: {
                interval: 2
            }
        });
        option.series.push({
            singleAxisIndex: idx,
            coordinateSystem: 'singleAxis',
            type: 'scatter',
            data: [],
            symbolSize: function (dataItem) {
                return dataItem[1] * 4;
            }
        });
    });
    echarts.util.each(data, function (dataItem) {
        option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
    });
    myChart.setOption(option);
}
left();
// right();
