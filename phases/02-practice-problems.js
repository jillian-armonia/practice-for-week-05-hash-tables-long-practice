function anagrams(str1, str2) {
  const stringSet1 = new Set(str1);

  if (str1.length !== str2.length) return false;


  for (let i = 0; i < str2.length; i++){
    if (!stringSet1.has(str2[i])) return false;
  }

  return true;
}


function commonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  let filtered = arr2.filter(n => set1.has(n));

  return filtered;
}


function duplicate(arr) {
  let set = new Set();

  for (let i = 0; i < arr.length; i++){
    if (set.has(arr[i])){
      return arr[i];
    }

    set.add(arr[i]);
  }
}


function twoSum(nums, target) {
  let set = new Set(nums);
  let setKeys = set.keys();
  let constant = setKeys.next().value;

  while(constant !== undefined){
    if (target - constant !== constant && set.has(target - constant)) return true;

    constant = setKeys.next().value;
  }

  return false;
}

function wordPattern(pattern, strings) {
  let stringSet = new Set(strings).keys();
  let string = stringSet.next().value;

  let stringObject = new Object();
  let codeLetter = 65;

  while(string !== undefined){
    stringObject[String.fromCharCode(codeLetter)] = string;
    string = stringSet.next().value;
    codeLetter++;
  }

  for (let i = 0; i < pattern.length; i++){
    if (stringObject[pattern[i]] !== strings[i]) return false;
  }

  return true;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
