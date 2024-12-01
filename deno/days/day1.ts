import { puzzleInput } from "./partApuzzleInput.ts";

export function part1(): number {

  // two lists
  // const basicListOne: number[] = [3,4,2,1,3,3];
  // const basicListOne: number[] = [4,3,5,3,9,3];

  // create lists from raw data
  const listOne: number[] = [];
  const listTwo: number[] = [];

  // console.log(puzzleInput);
  const rows = puzzleInput.trim().split('\n');
  const parsedData = rows.map(row => {
    const [col1, col2] = row.trim().split(/\s+/).map(Number);
    return [ col1, col2 ]
  })
  // console.log(parsedData);
  for (let i = 0; i < parsedData.length; i++ ) {
    listOne.push(parsedData[i][0]);
    listTwo.push(parsedData[i][1]);
  }

  
  // console.log(listOne);
  
  // sort low to high
  listOne.sort((a,b) => a -b);
  listTwo.sort((a,b) => a -b);

  // find difference between each item in sorted list
  const differences: number[] = [];

  for (let i = 0; i < listOne.length; i++) {
    const difference: number = Math.abs(listTwo[i] - listOne[i]);
    differences.push(difference);
  }

  
  // sum the differences
  let sumOfDifferences = 0;
  
  for (let i = 0; i < listOne.length; i++) {
    sumOfDifferences += differences[i];
  }
  // console.log(sumOfDifferences);
  
  return sumOfDifferences;
}

export function part2(): number {

  // CREATE LISTS AGAIN FROM PROBLEM DATA
    // create lists from raw data
    const listOne: number[] = [];
    const listTwo: number[] = [];

    // console.log(puzzleInput);
    const rows = puzzleInput.trim().split('\n');
    const parsedData = rows.map(row => {
      const [col1, col2] = row.trim().split(/\s+/).map(Number);
      return [ col1, col2 ]
    })
    // console.log(parsedData);
    for (let i = 0; i < parsedData.length; i++ ) {
      listOne.push(parsedData[i][0]);
      listTwo.push(parsedData[i][1]);
    }

  // find out how often each number from left list  appears in the right list
  const listTwoAsCount: number[] = [];

  for (let i = 0; i < listOne.length; i++) {
    // find list one value in list two as array
    const listOneValueInListTwo: number[] = listTwo.filter((list2Item: number) => list2Item === listOne[i]);
    // console.log(listOneValueInListTwo.length);
    // use array length as count of occurence and push to new list
    listTwoAsCount.push(listOneValueInListTwo.length);
  }


  // multiply left list value by its count of occurence in the right list
  // calculate total similarity score by adding upo each number in the left list
  let similarityScore: number = 0;

  for (let i = 0; i < listOne.length; i++) {
    similarityScore += listOne[i] * listTwoAsCount[i];
  }
  console.log('similarity score: ', similarityScore);
  
  return similarityScore;
}