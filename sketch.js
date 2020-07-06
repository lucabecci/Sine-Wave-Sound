
let wave;

let button;
let playing = false;
let sliderFreq;

function setup() {
  createCanvas(400, 400);
  wave = new p5.Oscillator();

  wave.setType('sine');

  sliderFreq = createSlider(100, 1200, 440)

  button = createButton("PLAY/PAUSE");
  button.mousePressed( () =>{
    if(!playing){
      wave.start()
      wave.freq(440)
      wave.amp(0.2)
      playing = true
    }else{
      wave.stop()
      playing = false
    }
  } )
}

loaded = () =>{  
}

function draw() {
  
  wave.freq(sliderFreq.value())
  if(playing){
    background(255,100,50);
    text('use caution when using', height/2 -150, width/2);
    fill(0);
    textSize(25)
  }else{
    background(0);
    text('use caution when using', height/2 -150, width/2);
    fill(255);
    textSize(25)
  }
}


