var bigDog = (num1, num2) => {
    num1 = 22;
    num2 = 5;

if(num1 > num2) { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(num2 > num1) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }
}

  console.log(bigDog())

// function max(int1 , int2){ //I am defining two integers other way to do it but doesn't have message
//      int1 = 22;
//      int2 = 5; //here I am assigning values to these integers

//     if( int1 >= int2); //if int1 is greater than or equal to int2 
//     return int1;
//     return int2;
//     }
//     console.log(max());

