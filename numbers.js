const arrayOfNums = [0, 4, 7, 18, 21, 19, 142, 3]
let largestNumber = arrayOfNums[0]; //says largest number is going to be zero//

function findlargestNumber() {
    for (let i=0; i < arrayOfNums.length; i++) { //going to go through every number in array to see if greater//
        console.log(`Out largest number found so far is: ${largestNumber}`);
        if(arrayOfNums[i] > largestNumber) { //sees is 0 greater than 4, is 4 greater than 7 etc if not greater don't assign it largestNumber//
            console.log(`We have found a larger number. ${arrayOfNums[i]} is larger than ${largestNumber}`);
            largestNumber = arrayOfNums[i]; //trying to see in terminal if it's working//

        }
    }
    return largestNumber;
}

function findEvenNumbers() {
    let evenArray = [];
    for (let i=0; i < arrayOfNums.length; i ++) {
        if(arrayOfNums[i] % 2 == 0){                    //find out if number is even, 
            evenArray.push(arrayOfNums[i]);            //how to push number that is even into array

        }
    }

    return evenArray;
}

//anonymous function to find even nubmers SHORT HAND

const filter = (arr, fn) => {
    const result = []; 
    for (let i=0; i<arr.length; i++) {
      if (fn(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  };

  ////////shorts had to find even and odd numbers 

 const isEven = (val) => {
    return val % 2 === 0;
  };

  const isOdd = (val) => {
    return val % 2 === 1;
  };


console.log(filter(arrayOfNums, isEven));

function findOddNumber() {
    let oddArray = [];
    for (let i=0; i < arrayOfNums.length; i ++) {
        if(arrayOfNums[i] % 2 == 1) {
            oddArray.push(arrayOfNums[i]);

        }

    }


    return oddArray;
}

//console.log(findOddNumber());

//console.log(findEvenNumbers());

//console.log(findlargestNumber()); //found largest number confirmed