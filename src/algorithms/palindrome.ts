export function isPalindrome(s: string) {
    let startIndex = 0;
    let endIndex = s.length;
    s = s.toLowerCase();
    const w = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    while(startIndex < endIndex){
        if (!w.includes(s[startIndex])) {
            startIndex++;
            continue;
        }
        if (!w.includes(s[endIndex])) {
            endIndex--;
            continue;
        }
        
        if (s.charAt(startIndex) !== s.charAt(endIndex)){
            return false;
        }
        startIndex++;
        endIndex--;
    }
    return true;
};


/**
Convert linked list to array
once it's an array, check for numerical palindrome on the array:
start at the beginning and end (keep a startIndex and an endIndex)
iterate through the array comparing the two
**/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// function isNumbersPalindrome (head: any) {
//     let array = getNumericalArray(head);
//     let endIndex = array.length;
// };

// function getNumericalArray(head: any){
//     let array = [];

//     while(head.next != null){
//         array.push(head.value);
//     }
//     return array;
// }





/*
We need a function to check for palindrome.
Then we should check if the string itself is a palindrome. If it is, then it's by definition the longest palindrome.
If it isn't, then we need to check the next shortest string, which is the entire string minus the last character.
If we still can't find one, then we need to advance our check by 1 and check from the second character on.
For each character in the string, we want to check if the substring between it and the end of the string is a palindrome
If it isn't, then we want to check again, but this time skip the last character.
As soon as we find one, that one is the longest substring.
If we reach the end without finding one, then there isn't a palindrome anywhere.

babad
s.length = 5
*/

export function longestPalindrome(checkString: string) {
    let longestPalindrome = checkString.charAt(0);
    let resultStartIndex = 0;
    let resultEndIndex = 0;

    if (checkString.length === 1) return {resultStartIndex,resultEndIndex};
    
    for(let startIndex=0; startIndex<checkString.length; startIndex++){
        for(let endIndex=0; endIndex<checkString.length; endIndex++){
            let checkSubstring = checkString.slice(startIndex,checkString.length-endIndex);
            if (checkPalindrome(checkSubstring)){
                if (checkSubstring.length > longestPalindrome.length) {
                    longestPalindrome = checkSubstring;
                    resultStartIndex = startIndex;
                    resultEndIndex = checkString.length-endIndex;
                    break;
                }
            }
        }
        if (longestPalindrome.length > (checkString.length-startIndex))
            break;
    }
    return {resultStartIndex, resultEndIndex};
};

function checkPalindrome(s: string) {
    let startIndex = 0;
    let endIndex = s.length-1;
    
    while(startIndex < endIndex) {
        if (s.charAt(startIndex) === s.charAt(endIndex)){
            startIndex++;
            endIndex--;
        } else return false;
    }
    return true;
}





/*
Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

We want to find the part that isn't palindromic and then "pivot" around it
Take everything after that part, mirror it, and append it in the beginning
If I have dedabc, then the palindromic part is ded. I need to take the rest of it (the abc) and reverse it and stick it at the beginning
First we need a mirrored copy of the string
Then we need to compare the beginning of the original to the end of the reversed
dedabc -> cbaded
The 'ded' part matches, so we need the rest of it, which will be the remainder of the flipped string
*/

// var shortestPalindrome = function(s: string) {
//     if (s.length == 0) return "";
    
//     let reversed = s.split("").reverse().join("");
//     let startSubstring = "";
//     let endSubstring = "";
    
//     for (let index = 0; index < s.length; index++){
//         startSubstring = s.substring(0, s.length - index);
//         endSubstring = reversed.substring(index, reversed.length);
        
//         if (startSubstring == endSubstring){
//             return reversed.substring(0, index)+s;
//         }
//     }
//     return "error";
// };


/**
 check whether an integer is a palindrome

We want to split the number into halves.
1221 should turn into 12 and 21
Then we need to reverse one of the halves
We can get the rightmost digit by doing a modulo of 10
reversed = 1221 % 10 = 1
We then can remove that digit from the original:
x = Math.floor(x/10); = 122
If we then do a modulo of 10 again we'd get 2
secondDigit = 122%10 = 2
We can then multiply the previous stuff by 10 and add the new result to reverse it
reversed*10 = 10 + secondDigit = 12

we'll need to keep going until the length of the result is <= x.length/2

We know we're done when the value of the reversed number is larger than the original X
It would have more digits, so therefore be longer

An edge case would be when the number has an odd number of digits
12321
we'd get:
1232 1
123 12
12 123
If we check our exit condition, 123 is larger than 12, so we should quit.
In this case we can get rid of the right-most digit with Math.floor(123/10);

So the end condition is if either 12 == 12 or if 12 == (123/10)*/

// function isIntegerPalindrome(x:number) {
//     if ( (((x%10) == 0)&&(x!=0)) || x<0) return false;
//     if (x<10) return true;
    
//     let reversed = 0;
    
//     while(x > reversed){
//         reversed = reversed * 10;
//         reversed += x % 10;
        
//         x = Math.floor(x / 10); // remove the digit we just moved to reversed
//     }
    
//     if ((x == reversed) || (x == Math.floor(reversed/10)))
//         return true;
    
//     return false;
// }