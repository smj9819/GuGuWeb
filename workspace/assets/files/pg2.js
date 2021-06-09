var _messageChannels = [1];


async function startProgram()
{
   Start_Miro();
   
}

async function Start_Miro()
{
   playMatrixAnimation(2, true);//직진
   await move(0,40,32);
   playMatrixAnimation(0, true);//우회전
   await delay(1);
   playMatrixAnimation(2, true);//직진
   await move(90,40,15);
   
   playMatrixAnimation(1, true);//좌회전
   await delay(1);
   playMatrixAnimation(2, true);//직진
   await move(0,40,5);
   playMatrixAnimation(1, true);//좌회전
   await delay(1);
   playMatrixAnimation(2, true);//직진
   await move(270,40,16);
   playMatrixAnimation(0, true);//우회전
   await delay(1);
   playMatrixAnimation(2, true);//직진
   await move(0,40,18);
   playMatrixAnimation(0, true);//우회전
   await delay(1);
   
   playMatrixAnimation(2, true);//직진
   await move(90,150,35)
   playMatrixAnimation(0, true);//우회전
   await delay(1);
   playMatrixAnimation(2, true);//직진
   await move(180,40,33)
   playMatrixAnimation(0, true);//우회전
   await delay(1);
   
   playMatrixAnimation(2, true);//직진
   await move(270,40,10)
   playMatrixAnimation(0, true);//우회전
   await delay(1);
   playMatrixAnimation(2, true);//직진
   await move(0,40,18)
   playMatrixAnimation(1, true);//좌회전
   await delay(1);
   
   playMatrixAnimation(2, true);//직진
   await move(270,40,11)
   playMatrixAnimation(1, true);//좌회전
   await delay(1);
   playMatrixAnimation(2, true);//직진
   await move(180,40,32)
   playMatrixAnimation(1, true);//좌회전
   await delay(1);
   
   
   playMatrixAnimation(2, true);//직진
   
   await move(90,40,15)
   playMatrixAnimation(0, true);//우회전
   await delay(1);
   playMatrixAnimation(2, true);//직진
   await move(180,40,5)
   playMatrixAnimation(0, true);//우회전
   await delay(1);
   playMatrixAnimation(2, true);//직진
   await move(270,40,12)
   playMatrixAnimation(1, true);//좌회전
   await delay(1);
   playMatrixAnimation(2, true);//직진
   await move(180,40,3)
   playMatrixAnimation(1, true);//좌회전
   await delay(1);
   playMatrixAnimation(2, true);//직진
   await move(90,40,20)
   exitProgram();

   //to do list 
   //미로 값 찾기
   
   
}


async function onIRMessage(channel)
{
   // Write code here
   if(channel != 1) return;
   await scrollMatrixText('Like that...', { r: 255, g: 255, b: 255 }, 12, true);
   
   Start_Miro();
   ListenForIRMessage(_messageChannels);
}


registerEvent(EventType.onIRMessage, onIRMessage);

async function move(angle, speed, distance) {
   setHeading(angle);
   await delay(0.5);
   setSpeed(speed);
   befor_distance = getDistance();
   while (!(getDistance() >= befor_distance + distance))
      await delay(0.025);
   stopRoll();
   await delay(1);
}

registerMatrixAnimation({
   frames: 
   [
      [
         [1, 1, 1, 1, 1, 0, 1, 1], 
         [1, 1, 1, 1, 1, 0, 0, 1], 
         [0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 0, 0, 0, 0, 0, 0], 
         [0, 0, 1, 1, 1, 0, 0, 1], 
         [0, 0, 1, 1, 1, 0, 1, 1], 
         [0, 0, 1, 1, 1, 1, 1, 1], 
         [0, 0, 1, 1, 1, 1, 1, 1]]
      ],
   palette: 
   [
      { r: 255, g: 255, b: 255 }, 
      { r: 0, g: 0, b: 0 }, 
      { r: 255, g: 0, b: 0 }, 
      { r: 255, g: 64, b: 0 }, 
      { r: 255, g: 128, b: 0 }, 
      { r: 255, g: 191, b: 0 }, 
      { r: 255, g: 255, b: 0 }, 
      { r: 185, g: 246, b: 30 }, 
      { r: 0, g: 255, b: 0 }, 
      { r: 185, g: 255, b: 255 }, 
      { r: 0, g: 255, b: 255 }, 
      { r: 0, g: 0, b: 255 }, 
      { r: 145, g: 0, b: 211 }, 
      { r: 157, g: 48, b: 118 }, 
      { r: 255, g: 0, b: 255 }, 
      { r: 204, g: 27, b: 126 }
   ],
   fps: 10,
   transition: MatrixAnimationTransition.None
});
registerMatrixAnimation({
   frames: 
   [
      [
         [1, 1, 0, 1, 1, 1, 1, 1], 
         [1, 0, 0, 1, 1, 1, 1, 1], 
         [0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0],
         [1, 0, 0, 1, 1, 1, 0, 0],
         [1, 1, 0, 1, 1, 1, 0, 0], 
         [1, 1, 1, 1, 1, 1, 0, 0], 
         [1, 1, 1, 1, 1, 1, 0, 0]
      ]
   ],
   palette: 
   [
      { r: 255, g: 255, b: 255 }, 
      { r: 0, g: 0, b: 0 }, 
      { r: 255, g: 0, b: 0 }, 
      { r: 255, g: 64, b: 0 }, 
      { r: 255, g: 128, b: 0 }, 
      { r: 255, g: 191, b: 0 }, 
      { r: 255, g: 255, b: 0 }, 
      { r: 185, g: 246, b: 30 }, 
      { r: 0, g: 255, b: 0 }, 
      { r: 185, g: 255, b: 255 }, 
      { r: 0, g: 255, b: 255 }, 
      { r: 0, g: 0, b: 255 }, 
      { r: 145, g: 0, b: 211 }, 
      { r: 157, g: 48, b: 118 }, 
      { r: 255, g: 0, b: 255 }, 
      { r: 204, g: 27, b: 126 }
   ],
   fps: 10,
   transition: MatrixAnimationTransition.None
});
registerMatrixAnimation({
   frames: 
   [
      [
         [1, 1, 1, 0, 0, 1, 1, 1], 
         [1, 1, 0, 0, 0, 0, 1, 1], 
         [1, 0, 0, 0, 0, 0, 0, 1], 
         [1, 1, 1, 0, 0, 1, 1, 1], 
         [1, 1, 1, 0, 0, 1, 1, 1], 
         [1, 1, 1, 0, 0, 1, 1, 1], 
         [1, 1, 1, 0, 0, 1, 1, 1], 
         [1, 1, 1, 0, 0, 1, 1, 1]
      ]
   ],
   palette: 
   [
      { r: 255, g: 255, b: 255 }, 
      { r: 0, g: 0, b: 0 }, 
      { r: 255, g: 0, b: 0 }, 
      { r: 255, g: 64, b: 0 }, 
      { r: 255, g: 128, b: 0 }, 
      { r: 255, g: 191, b: 0 }, 
      { r: 255, g: 255, b: 0 }, 
      { r: 185, g: 246, b: 30 }, 
      { r: 0, g: 255, b: 0 }, 
      { r: 185, g: 255, b: 255 }, 
      { r: 0, g: 255, b: 255 }, 
      { r: 0, g: 0, b: 255 }, 
      { r: 145, g: 0, b: 211 }, 
      { r: 157, g: 48, b: 118 }, 
      { r: 255, g: 0, b: 255 }, 
      { r: 204, g: 27, b: 126 }],
   fps: 10,
   transition: MatrixAnimationTransition.None
});
