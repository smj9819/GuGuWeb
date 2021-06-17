 /*   2021-06-07
 *   #4-2 보스방 침입성공
 *
 *   [ SP1 ]
 */

 var brtn = 80 ;
 var idle = 1;
 
 async function startProgram()
 {
 
    await moveQuietly(0,15,50)
 
    exitProgram();
    
 }
 
 
 
 async function moveQuietly(angle, speed, distance) {
    playMatrixAnimation(0, true);//직진
    setHeading(angle);
    await delay(0.5);
    setSpeed(speed);
    befor_distance = getDistance();
    while (!(getDistance() >= befor_distance + distance))
    {
       if(getLuminosity() > brtn) 
       {
          clearMatrix(); 
          stopRoll();
          idle = 0;
       }
       else 
       {
          if (idle == 0)
          {
             idle = 1;
             setSpeed(speed);
             playMatrixAnimation(0, true);//직진
       
          }
       }
       await delay(0.025);
    }
    stopRoll();
    await delay(1);
 }
 
 
 registerMatrixAnimation({
    frames: 
    [
       [
          [1, 1, 1, 1, 2, 1, 1, 1], 
          [1, 1, 0, 0, 0, 0, 1, 1], 
          [1, 1, 0, 0, 0, 0, 1, 1], 
          [1, 0, 1, 1, 1, 1, 0, 1], 
          [1, 0, 1, 1, 1, 1, 0, 1], 
          [1, 0, 1, 1, 1, 1, 0, 1], 
          [1, 0, 0, 1, 1, 0, 0, 1], 
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