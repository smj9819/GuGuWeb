/*   2021-05-27 
 *   #4-1 가위바위보 게임
 *   
 *   [ SP1 ]
 */

var rsp
var _messageChannels = [1, 2, 3];
// Rock = 1
// Scissors = 2
// paper = 3

async function startProgram() {
   // Write code here
   Start_Game();
}
async function Start_Game()
{
   rsp = getRandomInt(1,3)
   sendIRMessage(1,64); //Send rsp data
   listenForIRMessage(_messageChannels);
}

async function onIRMessage(channel)
{   
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
         break
   }
   await delay(3);
   clearMatrix();
   
   switch(channel)
   {
      case 1: //Rock
         if(rsp == 1) //draw
         {
            await scrollMatrixText('Draw', { r: 0, g: 255, b: 0 }, 10, true);
            Start_Game();
         }
         else if ( rsp == 2 ) // Lose
         {
            await scrollMatrixText('Lose', { r: 255, g: 0, b: 0 }, 10, true);
            Start_Game();

         }
         else if ( rsp == 3 ) // Win
         {
            await scrollMatrixText('Win', { r: 0, g: 0, b: 255 }, 10, true);
            sendIRMessage(2,64); //Send rsp data
            await delay(1);
            exitProgram();

         }
         break;
         
      case 2: //Scissors 
         if(rsp == 1) //Win
         {
            await scrollMatrixText('Win', { r: 0, g: 0, b: 255 }, 10, true);
            sendIRMessage(2,64); //Send rsp data
            await delay(1);
            exitProgram();

         }
         else if ( rsp == 2 ) // draw
         {
            await scrollMatrixText('Draw', { r: 0, g: 255, b: 0 }, 10, true);
            Start_Game();
   

         }
         else if ( rsp == 3 ) // Lose
         {
            await scrollMatrixText('Lose', { r: 255, g: 0, b: 0 }, 10, true);
            Start_Game();
         }
         break;
         
      case 3: //paper
         if(rsp == 1) //Win
         {
            await scrollMatrixText('Lose', { r: 255, g: 0, b: 0 }, 10, true);
            Start_Game();
         }
         else if ( rsp == 2 ) // Lose
         {
            await scrollMatrixText('Win', { r: 0, g: 0, b: 255 }, 10, true);
            sendIRMessage(2,64); //Send rsp data
            await delay(1);
            exitProgram();
         }
         else if ( rsp == 3 ) // draw
         {
            await scrollMatrixText('Draw', { r: 0, g: 255, b: 0 }, 10, true);
            Start_Game();
         }
         break
   }
   listenForIRMessage(_messageChannels);
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