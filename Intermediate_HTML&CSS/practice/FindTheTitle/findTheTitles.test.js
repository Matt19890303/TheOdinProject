const findTheTitles = require('./findTheTitles')

describe('findTheTitles', () => {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]

  test('gets titles', () => {
    expect(findTheTitles(books)).toEqual(['Book','Book2']);
  });
});
