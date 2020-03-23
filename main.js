$(function(){
        var myChart = echarts.init(document.getElementById('main'));
        var myHand = $('#hand');

        var hData = [['Java',1,'降','-0.01%'],
                     ['C',2,'升','+2.44%'],
                     ['Python',3,'升','+1.41%'],
                     ['C++',4,'降','-2.58%'],
                     ['C#',5,'升','+2.07%'],
                     ['Visul Basic .NET',6,'降','-1.17%'],
                     ['JavaScript',7,'降','-0.85%']
                    ];
        var xData = [2000,2005,2010,2015,2020],
            yData = [6,9,8,8,7];

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'JavaScript语言排名变化'
            },
            tooltip: {},
            xAxis: {
                data:xData
            },
            yAxis: {},
            series: [{
                name: '信息量',
                type: 'line',
                data: yData
            }]
        };

        //指定表格的配置项
        var option2 = new Handsontable(myHand.get(0),{
          data:hData,
          colWidths:150,
          //lRowResize: !0,
          //manualColumnResize: !0,
          className:'htCenter',
          rowHeaders: false,
          colHeaders: ["语言名称", "排名", "升或降", "变化幅度"]
        })
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
})
