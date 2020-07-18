/*

1. Pyramid Program
    *
   * *
  * * *
 * * * *
* * * * *

*/

let userInput = "";

function drawPyramidPattern(userInput) {
    for (let line = 1, k = 0; line <= userInput; line++, k = 0) {

        for (let space = 1; space <= userInput - line; space++) {

            console.log(" ")
        }
        while (k != 2 * line - 1) {

            console.log("* ")
            k++;
        }
    }

}

drawPyramidPattern(5);