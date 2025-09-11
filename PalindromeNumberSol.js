//In this solution, I used Math.floor function to help check if the number is a palindrome or not

function isPalindrome(x) {
        let rev=0;
        for (let i=x;i>0;i=Math.floor(i/10)){
            rev=rev*10+i%10;
        }
        if (x===rev){
            return true;
        }else{
            return false;
        }
};
