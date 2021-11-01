// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']


const returnFirstTwoDrivers = (drivers) =>  drivers.slice(0,2); 



const returnLastTwoDrivers = function (drivers) {
  
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


//takes in one argument that is an integer and returns a function that will multiply a fair for a ride accordingly 

function createFareMultiplier(integer){
    return function(fare) {
        return integer * fare ;
    }
}

let fair = createFareMultiplier()



function fareDoubler(fair){
return fair * 2
}

function fareTripler(fair) {
    return fair * 3
}


// let firstTwo = returnFirstTwoDrivers()

// let lastTwo = returnLastTwoDrivers()


function selectDifferentDrivers(arrayOfDrivers, secondArgument) { 

    if (arrayOfDrivers === drivers) {
        return drivers
    } else if (secondArgument === returnFirstTwoDrivers){
        return drivers.slice(0,2)
    } else if (secondArgument === returnLastTwoDrivers) {
        return drivers.slice(2, 4)
    }
}


// console.log(selectingDrivers[0])

// console.log(returnFirstTwoDrivers(drivers))

// console.log(returnLastTwoDrivers(drivers))



const loopThruArray = function(array) {
    for (let item of array); {
    console.log(item)
    }
  }
  
//   let newArray = [1,3,4,5,6,7,8]

//   loopThruArray(newArray);


//   function handleBooks(fun) {
//       let books = {
//           author : "No one cares",
//           title : "gtfo",
//           year : "doesn't matter",
//           publisher : "not getting published",
//       }

//       fun(books);
//   }

//   const capitalizeArray = function (array) {
//       for of 
//   }

//   handleBooks(loopThruArray);