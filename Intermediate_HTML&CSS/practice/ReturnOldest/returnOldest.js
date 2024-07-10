const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


function returnOldest() {
    let oldest = people.sort(function(a, b) {
        let onePerson = a.yearOfDeath - a.yearOfBirth;
        let nextPerson = b.yearOfDeath - b.yearOfBirth;
    
        if (onePerson > nextPerson) {
            return -1;
        } 
        else {
            return 1;
        }
        });
    console.log(oldest[0].name + " is the oldest person");
};


returnOldest();

  