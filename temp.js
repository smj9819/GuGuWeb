/*
 *   [ SP2 ]
 */

var _messageChannels = [0,1,2,3,4,5,6,7];

var password = [4,7,6,5];



async function startProgram()
{
   sendMessage();
   
}

async function sendMessage()
{
   
   playMatrixAnimation(2, true);//직진
   await move(0,40,15)
   
   for(var i=0 ; i<4 ; i++)
   {
      sendIRMessage(password[i],64); //Send rsp data
      await delay(3);
   }

   exitProgram();
}


//registerEvent(EventType.onIRMessage, onIRMessage);

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
         [0, 0, 1, 1, 1, 1, 1, 1]
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
      { r: 204, g: 27, b: 126 }
   ],
   fps: 10,
   transition: MatrixAnimationTransition.None
});
