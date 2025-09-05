//I used a simple bruteforcing algorithm for this problem that checks each and every element of the list for solutions

function twoSum(nums, target) {
    if (nums.length<2||nums.length>10000){
        console.log("invalid input");
    }else{
        for (i=0;i<nums.length;i++){
            for (j=i+1;j<nums.length;j++){
                if(nums[i]+nums[j]==target){
                    return [i,j];
                }
            }
        }
    }
    
};
