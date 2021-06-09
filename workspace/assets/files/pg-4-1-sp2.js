/*   2021-05-27 
 *   #4-1 가위바위보 게임
 *   
 *   [ SP2 ]
 */

var rsp
var _messageChannels = [1, 2, 3];
// Rock = 1
// Scissors = 2
// paper = 3

async function startProgram() {
   // Write code here
   listenForIRMessage(_messageChannels);
}


async function onIRMessage(channel)
{
   switch(channel)
   {
      case 1:
         rsp = getRandomInt(1,3)
         sendIRMessage(rsp,64); //Send rsp data
         listenForIRMessage(_messageChannels);
         switch(rsp)
         {
            
            case 1: //Rock
               playMatrixAnimation(0, true);
               break;
            case 2: //Scissors 
               playMatrixAnimation(1, true);
               break;
            case 3: //paper
               playMatrixAnimation(2, true);
               break;
         }
         await delay(3);
         clearMatrix();
         break;

      case 2:
         exitProgram();
         break;
          

   }
   
}



registerEvent(EventType.onIRMessage, onIRMessage);




registerMatrixAnimation({
   frames: 
   [
      [
         [1, 1, 1, 1, 1, 1, 1, 1], 
         [1, 1, 0, 0, 1, 1, 1, 1], 
         [1, 1, 0, 0, 0, 0, 1, 1], 
         [1, 0, 0, 0, 0, 0, 0, 1], 
         [1, 0, 0, 0, 0, 0, 0, 1], 
         [1, 0, 0, 0, 0, 0, 0, 1], 
         [1, 0, 0, 0, 0, 0, 0, 1], 
         [1, 1, 0, 0, 0, 0, 1, 1]
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
         [1, 1, 1, 1, 1, 1, 1, 1], 
         [0, 0, 1, 1, 1, 0, 0, 1], 
         [1, 0, 0, 1, 1, 0, 0, 1], 
         [1, 1, 0, 0, 1, 0, 0, 1], 
         [1, 0, 0, 0, 0, 0, 0, 1], 
         [1, 0, 0, 0, 0, 0, 0, 1], 
         [1, 0, 0, 0, 0, 0, 0, 1], 
         [1, 1, 0, 0, 0, 0, 1, 1]
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
         [1, 1, 1, 1, 1, 1, 1, 1], 
         [1, 1, 0, 1, 0, 1, 0, 1], 
         [0, 1, 0, 1, 0, 1, 0, 1], 
         [0, 1, 0, 1, 0, 1, 0, 1], 
         [1, 0, 0, 0, 0, 0, 0, 1], 
         [1, 0, 0, 0, 0, 0, 0, 1], 
         [1, 0, 0, 0, 0, 0, 0, 1], 
         [1, 1, 0, 0, 0, 0, 1, 1]
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