const findTheOldest = function (people) {
  return people
    .map((item) => {
      let calcYearOfDeath = item.yearOfDeath;
      if (!calcYearOfDeath) {
        calcYearOfDeath = new Date().getFullYear();
      }
      let age = calcYearOfDeath - item.yearOfBirth;
      item.age = age;
      return item;
    })
    .sort((a, b) => a.age - b.age)[people.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
