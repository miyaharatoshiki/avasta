$( document ).on( 'ready page:load', function()
{
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
        height: 300,
        // コンテンツの高さ(px)
        contentHeight: 300,
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

	        exp=new Date();

	        exp.setTime(exp.getTime()+1000*60*60*24*1);

        	ckstr = escape(date.format());

        	document.cookie = "ASH_jsc=" + ckstr + "; expires=" + exp.toGMTString();

          location.reload()
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

function getck(){
	//alert('◎cookie文字列全体\n'+document.cookie);

	cklng = document.cookie.length;

	ckary = document.cookie.split("; ");

	ckstr = "";

	i = 0;

	while (ckary[i]){
		if (ckary[i].substr(0,8) == "ASH_jsc="){
			ckstr = ckary[i].substr(8,ckary[i].length);
			break;
		}
		i++;
	}

	alert('◎抽出された文字列\n'+ckary[i]);

	ckary = ckstr.split("%00");

	if (ckary[0]) document.forms[0].usr.value = unescape(ckary[0]);

  var date1 = new Date();

  date1.setTime(0);

  document.cookie = "counts=;expires="+date1.toGMTString();

}

function delCookie()
{
  document.cookie = "ASH_jsc=0";
}