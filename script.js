// complete the given function

function palindrome(str){
	// convert string to an array
    const arrayValues = str.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(str == reverseString) {
        return true;
    }
    else {
        return false;
    }
}
module.exports = palindrome
