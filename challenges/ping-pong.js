/*

  In this challenge you will simulate the movement of a ping-pong, bouncing back and forth across a
  table.

  Create a function `pingPong` that accepts an array, and returns the *same* array
  with the ping-pong moved one cell. Each time the ping-pong moves, you must increment the
  ping-pong's `steps` counter by 1. The direction of movement should be determined soley by the
  current state of the array and the current `steps` value of the ping-pong.

  ``` javascript
  var table = [{steps: 0}, null, null, null];

  pingPong(table); //=> [null, {steps: 1}, null, null]
  pingPong(table); //=> [null, null, {steps: 2}, null]
  pingPong(table); //=> [null, null, null, {steps: 3}]
  pingPong(table); //=> [null, null, {steps: 4}, null]
  pingPong(table); //=> [null, {steps: 5}, null, null]
  pingPong(table); //=> [{steps: 6}, null, null, null]
  pingPong(table); //=> [null, {steps: 7}, null, null]

  table; //=> [null, {steps: 7}, null, null]
  ```

  Keep in mind that I should be able start this process at *any* point:

  ```
  var table = [null, {steps: 13}, null, null];
  pingPong(table); //=> [null, null, {steps: 14}, null]
  ```

  Bonuses
  - Allow arrays of *any length*
  - We can think of the ping-pong as having an internal "speed" of 1. Allow this value to be
    explicity set at a higher number (i.e. move 2 cells at a time, or 3 cells at a time).
  - Support multiple ping-pongs.

*/

// YOUR CODE HERE

function pingPong(speed, ...tables){ //spread syntax ES6 to take multiple parameters
  var results = [];
  tables.forEach(function(table){ //find result on each table
   var i=0;
   var speedo = speed; //refresh value of the speedo for each new table
   while(speedo>0){ //going with speed N <=> going N times with speed 1
    if(table[i]!=null){
      //when mooving to the right
      if(Math.floor((table[i].steps)/(table.length-1))%2===0){
        table[i+1] = table[i];
        table[i+1].steps++;
        table[i] = null;
      }
      else{ //moving to the left
        table[i-1] = table[i];
        table[i-1].steps++;
        table[i] = null;
        i-=2; // -2 because of increment below (make just 1 step back!)
      }
      speedo--;
    }
    i++;
   }
    results.push(table);
  });
  return results; //return array of results on each table
}
