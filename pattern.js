/* let userDesiredPattern = 10;
function drawPattern(userDesiredPattern) {
    for (let starLine = 1; starLine <= userDesiredPattern; starLine++) {
        let starRow = "";
        for (let star = 1; star <= starLine; star++) {
            starRow = starRow + "*";
        }
        console.log(starRow)
    }
}

drawPattern(30) */


let userInputLine = 10;
function drawStarPattern(userInputLine) {
    for (let starLine = 1; starLine <= userInputLine; starLine++) {
        let starRow = "";
        for (let star = 1; star <= starLine; star++) {
            starRow = starRow + "*";
        }
        console.log(starRow)
    }
}
drawStarPattern(10)

function drawStarReversePattern(userInputLine) {
    for (let starLine = userInputLine; starLine >= 1; starLine--) {
        let starRow = "";
        for (let star = 1; star <= starLine; star++) {
            starRow = starRow + "*";
        }
        console.log(starRow)
    }
}
drawStarReversePattern(10)


function drawNumberPattern(userInputLine) {
    for (let line = 1; line <= userInputLine; line++) {
        let numberRow = "";
        for (let num = 1; num <= line; num++) {
            numberRow += num
        }
        console.log(numberRow)
    }
}
drawNumberPattern(10)
















function numberReversePattern(userInput) {
    for (let line = userInput; line >= 1; line--) {
        let row = "";
        for (let num = 1; num <= line; num++) {
            row = row + num;
        }

        console.log(row)
    }
}

numberReversePattern(10);

/* for (let i = 1; 1 <= 10; i++) {
    console.log(i)
} */