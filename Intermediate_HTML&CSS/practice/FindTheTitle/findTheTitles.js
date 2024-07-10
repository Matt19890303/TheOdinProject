// You are given an array of objects that represent books with an author and a title that looks like this:

// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]

//   Your job is to write a function that takes the array and returns an array of titles:

// findTheTitles(books) // ['Book','Book2']

const findTheTitles = function(myArray) {
  let titlesOnly = myArray.map(bookNames => bookNames.title);
  console.log(titlesOnly);
};

// findTheTitles(books);


module.exports = findTheTitles;
