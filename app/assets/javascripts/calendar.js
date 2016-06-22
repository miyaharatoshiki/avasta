$(document).ready(function() {
    $('#calendar').fullCalendar({
        // ヘッダーのタイトルとボタン
        header: {
            // title, prev, next, prevYear, nextYear, today
            left: 'prev today',
            center: 'title',
            right: 'next'
        },
        // jQuery UI theme
        theme: false,
        // 最初の曜日
        firstDay: 1, // 1:月曜日
        // 土曜、日曜を表示
        weekends: true,
        // 週モード (fixed, liquid, variable)
        weekMode: 'fixed',
        // 週数を表示
        weekNumbers: false,
        // 高さ(px)
        height: 400,
        // コンテンツの高さ(px)
        contentHeight: 350,
        // カレンダーの縦横比(比率が大きくなると高さが縮む)
        //aspectRatio: 1.35,
        // ビュー表示イベント
        viewDisplay: function(view) {
            //alert('ビュー表示イベント ' + view.title);
        },
        // ウィンドウリサイズイベント
        windowResize: function(view) {
            //alert('ウィンドウリサイズイベント');
        },
        // 日付クリックイベント
        dayClick: function (date, allDay, jsEvent, view) {
          $(this).css('background-color','red');
          //var date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);
          alert(date.format());
        },
        // 初期表示ビュー
        defaultView: 'month',
        // 終日スロットを表示
        allDaySlot: true,
        // 終日スロットのタイトル
        allDayText: '終日',
        // スロットの時間の書式
        axisFormat: 'H(:mm)',
        // スロットの分
        slotMinutes: 15,
        // 選択する時間間隔
        snapMinutes: 15,
        // TODO よくわからない
        //defaultEventMinutes: 120,
        // スクロール開始時間
        firstHour: 9,
        // 最小時間
        minTime: 6,
        // 最大時間
        maxTime: 20,
        // 表示する年
        year: 2012,
        // 表示する月
        month: 12,
        // 表示する日
        day: 31,
        // 時間の書式
        timeFormat: 'H(:mm)',
        // 列の書式
        columnFormat: {
            month: 'ddd',    // 月
            week: "d'('ddd')'", // 7(月)
            day: "d'('ddd')'" // 7(月)
        },
        // タイトルの書式
        titleFormat: {
            month: 'YYYY年M月',                             // 2013年9月
            week: "yyyy年M月d日{ ～ }{[yyyy年]}{[M月]d日}", // 2013年9月7日 ～ 13日
            day: "yyyy年M月d日'('ddd')'"                  // 2013年9月7日(火)
        },
        // ボタン文字列
        buttonText: {
            prev:     '先月', // <
            next:     '来月', // >
            today:    '今日',
            month:    '月',
            week:     '週',
            day:      '日'
        },
        // 月名称
        monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        // 月略称
        monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        // 曜日名称
        dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
        // 曜日略称
        dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
        // 選択可
        selectable: true,
        // 選択時にプレースホルダーを描画
        selectHelper: true,
        // 自動選択解除
        unselectAuto: true,
        // 自動選択解除対象外の要素
        unselectCancel: '',
        // イベントソース
        eventSources: [
            {
                events: [
                    {
                        title: 'event1',
                        start: '2013-01-01'
                    },
                    {
                        title: 'event2',
                        start: '2013-01-02',
                        end: '2013-01-03'
                    },
                    {
                        title: 'event3',
                        start: '2013-01-05 12:30:00',
                        allDay: false // will make the time show
                    }
                ]
            }
        ]

      // カレンダーの再描画
      //$('#calendar').fullCalendar('rendar');
    });


    // 動的にオプションを変更する
    //$('#calendar').fullCalendar('option', 'height', 700);

    // カレンダーをレンダリング。表示切替時などに使用
    //$('#calendar').fullCalendar('render');

    // カレンダーを破棄（イベントハンドラや内部データも破棄する）
    //$('#calendar').fullCalendar('destroy')
});