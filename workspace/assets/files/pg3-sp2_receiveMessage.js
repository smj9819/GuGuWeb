/* 
 * [ SP2 ]
 *
 */

var _messageChannels = [0,1,2,3,4,5,6,7];

var password_cnt = 0;


async function startProgram()
{
   recMessage();
}

async function recMessage()
{
   listenForIRMessage(_messageChannels);
}

async function onIRMessage(channel)
{
   password[password_cnt] = channel;
   password_cnt++;
   if ( password_cnt >= 4 )
   {
      await scrollMatrixText(buildString(password[0], password[1], password[2], password[3]), { r: 255, g: 55, b: 40 }, 11, true);
      exitProgram();
   }
   else
   {
      listenForIRMessage(_messageChannels);
   }   
}
         
registerEvent(EventType.onIRMessage, onIRMessage);

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
