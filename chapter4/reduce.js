let oneTwoThree = [1,2,3];

result = oneTwoThree.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
  }, 0);
  // 0 1 0
  // 1 2 1
  // 3 3 2
result; // 6