/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function ` ` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE
function daysUntilDate(date){
  var day = date.split("/")[1];
  var month = date.split("/")[0];
  var year = date.split("/")[2];

  var todaysDate = new Date();
  var chosenDate = Date.parse(date);
  var difference = chosenDate - todaysDate;

  if(difference >= 0){
    return Math.floor(difference/(1000*60*60*24));
  }
  else{
    year = todaysDate.getFullYear();
    date = [month, day ,year].join("/");
    chosenDate = Date.parse(date);
    difference = chosenDate - todaysDate;
    if(difference >= 0){
      return Math.floor(difference/(1000*60*60*24));
    }
    else{
      year++;
      date = [month, day ,year].join("/");
      chosenDate = Date.parse(date);
      difference = chosenDate - todaysDate;
      return Math.floor(difference/(1000*60*60*24));
    }
  }
}

unction birthdayReminder(arr){
  var reminders = [];

  //add "birthdayIn" property to an object
  arr.forEach(function(obj){
    obj["birthdayIn"] = daysUntilDate(obj.dob) ;
  });

  //sort objects by "birthdayIn" key
  arr.sort(function(obj1, obj2){
    if(obj1.birthdayIn > obj2.birthdayIn){
      return 1;
    }
    if(obj1.birthdayIn < obj2.birthdayIn){
      return -1;
    }

    return 0;
  });

  //making an array of reminders
  arr.forEach(function(obj){
    reminders.push(obj.name + "'s " + "birsday is in " +daysUntilDate(obj.dob) +" days!");
  });

  return reminders;
}
