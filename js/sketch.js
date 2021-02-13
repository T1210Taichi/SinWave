class Wave {
  constructor(fr,vl,ph,di){
    this.frequency = fr;//周波数
    this.volume = vl;//ボリューム
    this.phase = ph;//初期位相
    this.diff = di;//1サンプルで移動する位相量
  }

  getY(hei){
    var y;
    this.phase += this.diff;
    y = Math.sin(this.phase);
    //センターラインの位置とボリュームで調整
    y = y * this.volume + height/hei;
    return y;
  }
  getFrequency(){
    return this.frequency;
  }
  setDiff(diff){
    this.diff = diff;
  }
}

let waveA,waveB,waveC;

function setup() {
  createCanvas(800, 600);
  //オブジェクトの生成
  waveA = new Wave(2,50,0,0);
  waveB = new Wave(100,10,0,0);
  waveC = new Wave(10,50,0,0);
}


function draw() {
  background(250);
  
  //まとめて
  //センターライン
  stroke(125,125,125);
  line(0,height/4,width,height/4);
  line(0,height/2,width,height/2);
  line(0,height*(3/4),width,height*(3/4));

  // スタート時点のy座標
  var lastpointsA = waveA.getY()/2;
  var lastpointsB = waveB.getY();
  var lastpointsC = waveC.getY()*(3/2);
  //周波数でサンプリング数で割る
  waveA.setDiff(TWO_PI * waveA.getFrequency() / width);
  waveB.setDiff(TWO_PI * waveB.getFrequency() / width);
  waveC.setDiff(TWO_PI * waveC.getFrequency() / width);
  //サンプル（横幅）分繰り返す
  for (var i = 1; i < width; i++) {
    var yA = waveA.getY(4);
    var yB = waveB.getY(2);
    var yC = waveA.getY(4) + waveB.getY(2);
    //波形描画
    //波形の色
    stroke(125,125,1);
    line(i-1,lastpointsA,i,yA);
    lastpointsA = yA;
    //波形の色
    stroke(125,1,1);
    line(i-1,lastpointsB,i,yB);
    lastpointsB = yB;
    //波形の色
    stroke(1,1,1);
    line(i-1,lastpointsC,i,yC);
    lastpointsC = yC;
  }
  /*
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
  */
}