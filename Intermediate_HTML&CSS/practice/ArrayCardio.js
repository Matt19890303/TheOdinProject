// #############################################################################
// Array Cardio
// Video - https://www.youtube.com/watch?v=HB1ZC7czKRs
// All 30 vids https://www.youtube.com/watch?v=VuN8qwZoego&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH
// #############################################################################


   // Some data we can work with

   const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];



  
// ####################################################################################



  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's

  // let fifteen = inventors.filter(function(inventor) {
  //   if (inventor.year >= 1500 && inventor.year < 1600) {
  //     return true;
  //   }});

  // console.table(fifteen);




// ####################################################################################




  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names

// let fullNames = inventors.map(inventor => inventor.first + " " + inventor.last);
// console.table(fullNames);




// ####################################################################################




  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  // sorted uses two comparables a and b and returns 1 or -1 to move the 'inventor' up or down on the list(recreates a new list)

  // let oldestToYoungest = inventors.sort(function(a, b) {
  //   if (a.year > b.year) {
  //     return 1;
  //   } 
  //   else {
  //     return -1;
  //   } 
  // })

  // console.table(oldestToYoungest);




  // ####################################################################################




  // 5. Sort the inventors by years lived

  // let oldest = inventors.sort(function(a, b) {
  //   let firstInventor = a.passed - a.year;
  //   let nextInventor = b.passed - b.year;

  //   if (firstInventor > nextInventor) {
  //     return 1;
  //   } 
  //   else {
  //     return -1;
  //   }
  // });

  // console.table(oldest);




  // ####################################################################################




  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?


  // let totalYears = 0;
  // let totalPassed = 0;

  // for (let i = 0; i < inventors.length; i++) {
  //   totalYears += inventors[i].year;
  //   totalPassed += inventors[i].passed;
  // }

  // let total = totalPassed - totalYears;

  // console.log("Years: " + totalYears);
  // console.log("Passed: " + totalPassed);
  // console.log("Total: " + total);

  // #######################
  // the .reduce solution
  // #######################

  // the 0 is on the end because first loop there is no total so itll be 0 then add to that every other loop


  // let totalYears = inventors.reduce((total, inventor) => {
  //   return total + (inventor.passed - inventor.year);
  // }, 0);

  // console.log(totalYears);


  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];



  // ####################################################################################


 
//  6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  // // got the name '.mw-category-generated' from the dev tools on the web-page that contains the content needed.
  // let category = document.querySelector('.mw-category-generated');
  // // .querySelector returns a NodeList
  // // Array.from takes in the NodeList and makes an array of all the links on that page and names it 'a'
  // let links = Array.from(category.querySelectorAll('a'));
  // // First it maps the content into a list then filters that list with the element 'de' in it line by line
  // let de = links.map(link => link.textContent).filter(boulevards => boulevards.includes('de'));

  // console.log(de);




  // ####################################################################################




  // 7. sort Exercise
  // Sort the people alphabetically by last name

//   let alphaOrder = people.sort(function (lastName, firstName) {
//     let [alast, afirst] = lastName.split(', ');
//     let [blast, bfirst] = firstName.split(', ');
//     if (alast > blast) {
//       return 1
//     } else {
//       return-1
//     }
//   });

//   // this is a much better approach because it allows you to manipulate both fist name and surname of each person
// console.table(alphaOrder);

// // this will work but it goes on the first name which happens to be the surname of each person
// // console.table(people.sort());



  // ####################################################################################





  // // 8. Reduce Exercise
  // // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

  // // create a function that takes 2 parameters
  // let transportation = data.reduce(function(object, item) {
  //   // if item has no value make it 0 then add to it
  //   if (!object[item]) {
  //     object[item] = 0;
  //   }
  //   // each item will have a value added to it
  // // give an mpty obect at the end of the loop {} because we do not know exactly what is in the list 'car', 'walk', 'truck' ect.
  //   object[item]++;
  //   return object;
  // }, {})

  // console.log(transportation);
