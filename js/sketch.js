var wave = {
  Set:{
    frequency:10,//周波数
    volume:50,//ボリューム
    phase:0,//初期位相
    diff:0,//1サンプルで移動する位相量
  },
  getY:function(hei){
    var y;
    this.Set.phase += this.Set.diff;
    y = Math.sin(this.Set.phase);
    //センターラインの位置とボリュームで調整
    y = y * this.Set.volume + height/hei;
    return y;
  }
};

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(250);

  //上記波形
  //センターライン
  stroke(220,220,220);
  line(0,height/4,width,height/4);
  //波形の色
  stroke(125,125,125);
  // スタート時点のy座標
  var lastpointsA = wave.getY()/2;
  //周波数でサンプリング数で割る
  wave.Set.diff = TWO_PI * wave.Set.frequency / width;
  //サンプル（横幅）分繰り返す
  for (var i = 1; i < width; i++) {
    var y = wave.getY(4);
    //波形描画
    line(i-1,lastpointsA,i,y);
    lastpointsA = y;
  }


  //下記波形
  //センターライン
  stroke(220,220,220);
  line(0,height/2,width,height/2);
  //波形の色
  stroke(125,125,125);
  // スタート時点のy座標
  var lastpointsB = wave.getY();
  //周波数でサンプリング数で割る
  wave.Set.diff = TWO_PI * wave.Set.frequency / width;
  //サンプル（横幅）分繰り返す
  for (var i = 1; i < width; i++) {
    var y = wave.getY(2);
    //波形描画
    line(i-1,lastpointsB,i,y);
    lastpointsB = y;
  }

  //合成波形
  //センターライン
  stroke(220,220,220);
  line(0,height*(3/4),width,height*(3/4));
  //波形の色
  stroke(125,125,125);
  // スタート時点のy座標
  var lastpointsC = wave.getY();
  //周波数でサンプリング数で割る
  wave.Set.diff = TWO_PI * wave.Set.frequency / width;
  //サンプル（横幅）分繰り返す
  for (var i = 1; i < width; i++) {
    //var y = wave.getY(1.35);
    var y = (wave.getY(2)-height/2)+(wave.getY(4)-height/4) + height/1.35;
    //波形描画
    line(i-1,lastpointsC,i,y);
    lastpointsC = y;
  }
}