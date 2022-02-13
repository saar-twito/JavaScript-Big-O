
// O(1)
const run1 = () => {
  // O(1) - It doesn't matter if we have 50 items in the array
  // because this operation's time data[i] always be the same.
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  data[5]
}

// O(log n)
const run2 = () => {
  // search/sort algorithms. 
  // usually the most efficient approach when dealing with large collections. 
  // Instead of looking through the components one by one, 
  // they split the data in chunks and discard a large amount on every iteration, usually the half, or log base 2.
}

// O(n)
const run2 = () => {
  // O(n) - print as much as the data length.
  // This is 1:1, we have 4 item, print 4 times
  const data = [1, 2, 3, 4];
  for (let i = 0; i < data.length; i++) console.log(data[i]);
}

// O(n + a)
const run3 = () => {
  // O(n + a) - same thing as run2, but now we have another for loop
  const data1 = [1, 2, 3, 4];
  const data2 = ["A", "B", "C", "D"];

  for (let i = 0; i < data1.length; i++) console.log(data1[i]);
  for (let i = 0; i < data2.length; i++) console.log(data2[i]);
}

// O (n * a)
const run4 = () => {
  // O (n * a) on each item in data1 print all
  // the data in data2, so data1.length * data2.length = 8
  const data1 = [1, 2];
  const data2 = ["A", "B", "C", "D"];

  for (let j = 0; j < data1.length; j++)
    for (let i = 0; i < data2.length; i++)
      console.log(data2[i]); // Output: A B C D A B C D
}

// O(n^2)
const run5 = () => {
  // O(n^2) 3^2 = 9
  const data = [1, 2, 3];
  for (let j = 0; j < data.length; j++)
    for (let i = 0; i < data.length; i++)
      console.log(data[i]);
}

// O(n^2 + n)
const run6 = () => {
  // O(n^2 + n) we care about the worts,
  // so we just write O(n^2)
  const data = [1, 2, 3];
  for (let j = 0; j < data.length; j++)
    for (let i = 0; i < data.length; i++)
      console.log(data[i]);

  const data = [1, 2, 3];
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}
