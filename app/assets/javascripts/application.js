// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .

$(function () {
    $('#container').highcharts({
        chart: {
            type: 'waterfall'
        },

        title: {
            text: 'Ninefold Support Coverage'
        },

        xAxis: {
            type: 'category'
        },

        yAxis: {
            title: {
                text: 'Time of Day'
            }
        },

        legend: {
            enabled: false
        },

        tooltip: {
            pointFormat: '<b>${point.y:,.2f}</b> USD'
        },

        series: [{
            upColor: Highcharts.getOptions().colors[2],
            color: Highcharts.getOptions().colors[3],
            data: [{
                name: 'Sunday',
                y: 8
            }, {
                name: 'Monday',
                y: -12
            }, {
                name: 'Tuesday',
                y: 6
            }, {
                name: 'Wednesday',
                isIntermediateSum: true,
                color: Highcharts.getOptions().colors[1]
            }, {
                name: 'Thursday',
                y: 24
            }, {
                name: 'Friday',
                y: -9
            }, {
                name: 'Saturnday',
                isSum: true,
                color: Highcharts.getOptions().colors[1]
            }],
            dataLabels: {
                enabled: false,
                formatter: function () {
                    return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                },
                style: {
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    textShadow: '0px 0px 3px black'
                }
            },
            pointPadding: 0
        }]
    });
});
