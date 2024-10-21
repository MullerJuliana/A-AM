
//PUSH

  function push (newNum){

    let nums = [1, 2, 3, 4];
    // create empty array 'newNums' to hold values
    let newNums = [];

      //loop through each number of nums array
      for (let i = 0; i < nums.length; i++) {
        //Copy all the numbers from nums to newnums so they are all stored in there
        newNums[i] = nums[i];
      }

      //Add new number to the end of newnum's array lenght 
      newNums[newNums.length] = newNum;

      console.log(nums, newNums);
  }
  // call function push and then insert number 5 at the end of array 
  push(5);


//POP

  function pop (){

    let nums = [1, 2, 3, 4];
    // create empty array 'newNums' to hold values
    let newNums = [];

      //loop through each number of nums, except for the last one (-1)
      for (let i = 0; i < nums.length-1; i++) {
        //Copy all the numbers from nums to newnums so they are all stored in there
        newNums[i] = nums[i];
      } 

      // Log the original 'nums' array and the modified 'newNums' array to the console
      console.log(nums, newNums);
  }
  //call function pop 
  pop();


//TO STRING

  function toString (){

    let nums = [1, 2, 3, 4];
    // create empty array 'newNums' to hold values
    let newNums = [];

      //loop through each number/element of nums array
      for (let i = 0; i < nums.length; i++){
        newNums+= nums[i];

        // Check if the current number is less than the length of the array
        // This condition is intended to add a comma if the current number is not the last element
        if (nums[i] < nums.length){
        newNums += ',';  // Add a comma after the number if it's not the last one
        }
      } 

      console.log(nums, newNums);
  }
  toString();

//JOIN

  // Define a function named 'join' that takes one parameter 'char'
  function join (char){

    let nums = [1, 2, 3, 4];
    // create empty array 'newNums' to hold values
    let newNums = [];

     //loop through each number/element of nums array
      for (let i = 0; i < nums.length; i++){
        //join current number to 'newNums'
        newNums+= nums[i];

        // Check if the current index is less than the last index
        // This condition is intended to add the specified character if it's not the last element
        if (nums[i] < nums.length){
        newNums += char;  // Add the character after the number if it's not the last one
        }
      } 
      console.log(nums, newNums);
      // console.log(newNums, nums);
  }
  //call function join and then add your character 
  join('^');

//CONCAT
 
  let nums = [1, 2, 3, 4];
  let otherNums = [5, 6, 7, 8];

  // Define a function named 'concat' that takes one parameter 'array'
  function concat(array){
    // Create a new empty array to hold the concatenated values
    let newNums = [];
    let indexLeftOff = 0;
    //keeps track of what numbers we stopped at/Keeps track of where to start adding elements from 'array'

    // Loop through the 'nums' array and copy its elements to 'newNums'
    for (let i = 0; i < nums.length; i++){
      newNums[i] = nums[i]; // Copy each element from 'nums' to 'newNums'
      indexLeftOff = i      // Update indexLeftOff to the next position
    }
  // 1,2,3,4 will be placed in the empty array

    // Loop through the 'array' (which is 'otherNums') and add its elements to 'newNums'
    for (let i = 0; i < array.length; i++){
      newNums[indexLeftOff] = array[i]; // Place each element from 'array' into 'newNums'
      indexLeftOff++; // Move to the next index             
    }

    // Assign the concatenated result back to 'nums'
    nums = newNums;
    
    console.log(nums)
  }
  // Call the function 'concat' with 'otherNums' as the argument
  concat(otherNums);