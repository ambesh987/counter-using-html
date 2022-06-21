// let s="cac"

// for(let i=0;i<s.length/2;i++){
//     if(s[i]!==s[s.length-1-i]){
//         console.log("it's not a palindrome");
//        return;
//     }
// }
// console.log("Yes, it is a palindrome")



// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]==sum){
//             console.log(i+" "+j);
//             return;
//         }
//     }
// }

// let arr=[1,2,3,4,5];
// let sum=6;
// for(let i=0;i<arr.length;i++){
//     let ans=sum-arr[i];
//     if(arr.includes(ans) && i!==arr.indexOf(ans)){
//         console.log(i+" "+arr.indexOf(ans));
//         return;
//     }
// }

// let arr=[-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9];
// let target=8;

// let left=arr[0];
// let right=arr[arr.length-1];
// while(right>=left){
//     let mid=left+Math.floor((right-left)/2);
//     if(arr[mid]==target){
//         console.log(mid);
//         return;
//     }
//     if(arr[mid]>target){
//         right=mid-1;
//     }else{
//         left=mid+1
//     }
// }