// const largestof5 = [-5, -2, -6, 0, -1]

// for (let i=0; i < largestof5.length; i++) { //going to go through every number in array to see if greater//
    
//     console.log(`Our largest number found so far is: ${largestof5}`);
//     if(largestof5[i] > largestof5) { //sees is 0 greater than 4, is 4 greater than 7 etc if not greater don't assign it largestNumber//
//         console.log(`We have found a larger number. ${largestof5[i]} is larger than ${largestNumber}`);
//         largestNumber = largestof5[i]; //trying to see in terminal if it's working//

//     }
// return largestof5;
// }

a=-5;
b=-2;
c=-6;
d= 0;
f=-1;
if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}


