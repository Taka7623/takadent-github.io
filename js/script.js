function FixedAnime() {
  //ヘッダーの高さを取得
  var headerH = $('#header').outerHeight(true);
  var scroll = $(window).scrollTop();
  var wind = window.innerWidth;
  if (wind <= 900 && wind > 650){//ヘッダーの高さ以上までスクロールしたら
    $('.openbtn1').addClass('fadeDown');//.openbtnにfadeDownというクラス名を付与して
    $('#header').addClass('mini');//#headerにdnoneというクラス名を付与
   
  }else if (scroll >= headerH){//ヘッダーの高さ以上までスクロールしたら
      $('.openbtn1').addClass('fadeDown');//.openbtnにfadeDownというクラス名を付与して
      $('#header').addClass('dnone');//#headerにdnoneというクラス名を付与
    }else{//それ以外は
      $('.openbtn1').removeClass('fadeDown');//fadeDownというクラス名を除き
      $('#header').removeClass('dnone');//dnoneというクラス名を除く
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});


//ボタンをクリックした際のアニメーションの設定
$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#header").toggleClass('panelactive');//ヘッダーにpanelactiveクラスを付与
});
$("#g-navi li a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#header").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
});


//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
    $('#g-navi li a').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top-0;
  $('body,html').animate({scrollTop: pos}, 1000);
  return false;
});
$(function(){
  // #navi直下のli要素をマウスオーバー
  $("#navi li").hover(function(){
    // 下層ナビゲーションの表示を切り替える
    $(this).children("ul").stop().slideToggle(300);
  });
});
$(function(){
  // #navi直下のli要素をマウスオーバー
  $('#g-navi li ').hover(function(){
    // 下層ナビゲーションの表示を切り替える
    $(this).children("ul").stop().slideToggle(300);
  });
});

$('.slider').slick({
  fade:true,//切り替えをフェードで行う。初期値はfalse。
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
  speed:1000,//スライドの動きのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  arrows: true,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
  pauseOnFocus: false,//フォーカスで一時停止を無効
  pauseOnHover: false,//マウスホバーで一時停止を無効
  pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.slider').slick('slickPlay');
});

$(function(){
  // #navi直下のli要素をマウスオーバー
  $("#navi").children("li").hover(function(){
    // 下層ナビゲーションの表示を切り替える
    $(this).children("ul").stop().slideToggle(100);
  });
});

$(function () {
  $(".js-fade").on("inview", function () {
      $(this).addClass("inview");
  });
});


Chart.plugins.register({
  afterDatasetsDraw: function (chart, easing) {
      var ctx = chart.ctx;

      chart.data.datasets.forEach(function (dataset, i) {
          var meta = chart.getDatasetMeta(i);
          if (!meta.hidden) {
              meta.data.forEach(function (element, index) {
                  // 値の表示
                  ctx.fillStyle = 'rgb(0, 0, 0,0.8)';//文字の色
                  var fontSize = 20;//フォントサイズ
                  var fontStyle = 'bold';//フォントスタイル
                  var fontFamily = 'Arial';//フォントファミリー
                  ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                  var dataString = dataset.data[index].toString();
        
                  // 値の位置
                  ctx.textAlign = 'center';//テキストを中央寄せ
                  ctx.textBaseline = 'middle';//テキストベースラインの位置を中央揃え

                  var padding = 5;//余白
                  var position = element.tooltipPosition();
                  ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
  
              });
          }
      });
  }
});
var ctx = document.getElementById('myChart');
var myDoughnutChart = new Chart(ctx, {
    type: 'pie',
    data:{//グラフのデータ
      labels:["むし歯","歯周病","歯の破折","その他",],//データの名前
      datasets:[{
         
          backgroundColor:["#BB5179","#AAFA6C", "#E8A27C","#58A27C"],//グラフの背景色
          data:["32","42","11","15",]//データ
        }]
    },
   
      options:{//グラフのオプション
        maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
        legend:{
          display:true//グラフの説明を表示
        },
        tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
          callbacks:{
              label: function (tooltipItem, data) {
            return data.labels[tooltipItem.index]+ ": "+ data.datasets[0].data[tooltipItem.index] + "%";//%を最後につける
          }
          }, 
        },
       
        title:{//上部タイトル表示の設定
          display: true,
          fontSize:30,
          text: '歯が抜ける主な原因 単位：%'
        },
        pieceLabel: {
          render: 'label',
          position: 'border',
          fontSize:35,
          fontColor: '#000',
          fontFamily: '"Helvetica , "游ゴシック", sans-serif'
      },
      
  },
      });   

//=========== 棒グラフ（縦） ============//


  var ctx=document.getElementById("Chart01");//グラフを描画したい場所のid
  var chart=new Chart(ctx,{
  type:'bar',//グラフのタイプ
  data:{//グラフのデータ
    labels:["15~24歳","25~34歳","35~44歳","45~54歳","55~64歳","65~74歳","75歳~",],//データの名前
    datasets:[{
        label:"残っている歯の数",//グラフのタイトル
        backgroundColor:"#0584C5",//グラフの色
        data:["28.4","28.7","28.2","27.0","24.5","20.8","15.7",]//横列に並ぶデータ
      }]
  },
  options:{//グラフのオプション
    maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
    legend:{
      display: true//グラフの説明を非表示
    },
    tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
      callbacks:{
          label: function(tooltipItems, data) {
              if(tooltipItems.yLabel == "0"){
                  return "";
              }
              return data.datasets[tooltipItems.datasetIndex].label + "：" + tooltipItems.yLabel + "本";//人を最後につける
          }
      }
    },
  title:{//上部タイトル表示の設定
    display: true,
    fontSize:30,
      text: '年齢階級別一人あたりの歯の数　単位：本'
    },
  scales:{
      yAxes:[//グラフ縦軸（Y軸）設定
        {
          ticks:{
            beginAtZero:true,//0からスタート
            suggestedMax: 30,//最大が1000
            suggestedMin: 0,//最小が0
            stepSize: 5,//100づつ数値が刻まれる
            fontSize: 19,     
            callback: function(value){
              return  value +  '本'//数字＋人で表示         
          }
        },
        scaleLabel: {                  // 軸ラベル
          display: true,                 // 表示の有無
          labelString: '本数',     // ラベル
          fontFamily: "sans-serif",      // フォントファミリー
          fontColor: "blue",             // 文字の色
          fontSize: 16                   // フォントサイズ
      },
      }
    ],
      xAxes:[//グラフ縦軸（X軸）設定
        {
          scaleLabel: {                 // 軸ラベル
            display: true,                // 表示設定
            labelString: '年齢階級',    // ラベル
            fontColor: "red",             // 文字の色
            fontSize: 18                  // フォントサイズ
        },
          barPercentage:0.4,//バーの太さ
          ticks: {                       // 目盛り
            min: 0,                        // 最小値
            max: 25,                       // 最大値
            stepSize: 5,                   // 軸間隔
            fontColor: "blue",             // 目盛りの色
            fontSize: 20                  // フォントサイズ
        },
        }
      ]
    }
  }
  })
  
  $(".btnripple").click(function () {
  $(this).toggleClass('active');});
  
