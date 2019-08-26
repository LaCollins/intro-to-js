console.log('arrays');
const indexAndPrint = (arr, index) => {
    console.log(arr[index]);
}

const myArray = [1, 2 ,8, 'bee', 'last', 'first'];

indexAndPrint(myArray, 2);

const isThereGreg = (names) => {
    const doesIncludeGreg = names.includes('Greg');
        if (doesIncludeGreg) {
            console.log('Greg is in the array!');
        }
        else {
            console.log('Greg is not in the array');
        }
    }


const myNames = ['Tom', 'George', 'Sam', 'Max', 'Guybrush', 'Greg'];
const myOtherNames = ['Tom', 'George', 'Sam', 'Max', 'Guybrush'];

isThereGreg(myNames);
isThereGreg(myOtherNames);

const isItAPalindrome = (str) => {
    const arrayFromString = str.split('');
    const reversedArray = arrayFromString.reverse();
    const opposite = reversedArray.join('');

    // const opposite = str.split('').reverse().join('');

    if (str === opposite) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isItAPalindrome('cat'));
console.log(isItAPalindrome('racecar'));
console.log(isItAPalindrome('mom'));
console.log(isItAPalindrome('bear'));
