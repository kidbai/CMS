$(function (){
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var calendar = $("#calendar").fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        height : 600,
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        today: ["今天"],
        buttonText: {
            today: '本日',
            month: '月',
            week: '周',
            day: '日',
            prev: '上一月',
            next: '下一月'
        },
        defaultView : 'month',
        editable : 'true',
        selectable : 'true',
        events: [
            {
                title: '维修水管',
                start: '2015-04-01'
            },
            {
                title: '我家的窗户坏了',
                start: '2015-04-07',
            },
            {
                title: '我家的门坏了',
                start: '2015-04-09T16:00:00'
            },
            {
                title: '地板坏了',
                start: '2015-04-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2015-04-11',
            },
            {
                title: 'Meeting',
                start: '2015-04-12T10:30:00',
                end: '2015-04-13T12:30:00'
            }
        ],
        eventClick: function (event) {
            $("#calendarModal").modal("show");
        }
    });
});