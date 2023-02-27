function unrollBad(squareArray) {
        let output = [];

        let secondArr = [];
        let thirdArr = [];
        let fourthArr = [];

        output.push(...squareArray.shift());

        secondArr.push(...squareArray.shift());
        output.push(secondArr.pop());

        thirdArr.push(...squareArray.shift());
        output.push(thirdArr.pop());

        fourthArr.push(...squareArray.shift());
        output.push(fourthArr.pop());
        output.push(fourthArr.pop());
        output.push(fourthArr.pop());
        output.push(fourthArr.pop());

        output.push(thirdArr.shift());
        output.push(secondArr.shift());
        output.push(secondArr.shift());
        output.push(secondArr.shift());

        output.push(thirdArr.pop());
        output.push(thirdArr.shift());


        // console.log(fourthArr);
        // console.log(output);
}

function unroll(squareArray){

    while( squareArray.length > 0){
        console.log(...squareArray.shift()); //remove first element of array (top)
        console.log(...squareArray.map(arrEl => arrEl.pop())); // remove last element of each array (right side)
        console.log(...squareArray.pop().reverse()); // for each num in last array pop, but in reverse order
        console.log(...squareArray.map(arrEl => arrEl.shift()).reverse()); // for each element in array shift (return first item), do this in reverse element order though
    }
    
}



const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

// unrollBad(square);
unroll(square);
  //Should return [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
module.exports = unroll;

