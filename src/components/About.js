import React from "react";

const AboutPage = () => {
  return (
    <>
      <p> About US</p>
    </>
  );
};

export default AboutPage;

/**
 * //higher order functions are functions that take other function as a parameter or returns another function 
//returns another function 



const functionOne = (func, message) => {
  console.log(message);
  func();
}

//we create another funciton that is passed into the higgher order fucntion 

const funcitonTwo = message => {
  console.log('message from fucntion two' + message);
}


functionOne(funcitonTwo, 'message from functionOne')



const functitonThree = message () => {
  return () => {console.log(message + 'from funciton three ')};
};

functitonThree('message')();





const updateLannisters = value => value =+ 'Lannister';


let newLannisters = newLannisters.map(updateLannisters);


//array.forEach()
//array.map()
//array.filter()
//array.reduce()
 */
