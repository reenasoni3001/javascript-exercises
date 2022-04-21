const getDeathYear = (deathYear) => {
  if (!deathYear) {
    const currentYear = new Date().getFullYear();
    return currentYear;
  } else {
    return deathYear;
  }
};

const findOldest = (currentOldest, person) => {
  //(resultOfEachLoop,eachElementInArray)
  let currentOldestAge =
    getDeathYear(currentOldest.yearOfDeath) - currentOldest.yearOfBirth;
  let personAge = getDeathYear(person.yearOfDeath) - person.yearOfBirth;

  const oldest = currentOldestAge > personAge ? currentOldest : person;
  return oldest;
};

const findTheOldest = function (people) {
  //   const getValue = people.sort((a, b) => {
  //     let first = getDeathYear(a.yearOfDeath) - a.yearOfBirth;
  //     let second = getDeathYear(b.yearOfDeath) - b.yearOfBirth;
  //     return first > second ? -1 : 1;
  //   });

  //   return getValue[0];

  return people.reduce(findOldest);

  //return numbres.reduce(sum,0)
};

// Do not edit below this line
module.exports = findTheOldest;
