let currSum=0;
let mod=1000000007

function findAllPossibleSolution(currSum){
    if(currSum===n){
        return 1;
    }
    if(currSum >n){
        return 0;
    }
    let possibleSolutionCount=0
    if(dp[currSum] !== -1){
        return dp[currSum];
    }
        for(let i=3;i<=n;i=i+2){
            possibleSolutionCount+=findAllPossibleSolution(currSum+i)
        }
        dp[currSum]=possibleSolutionCount % mod
        return possibleSolutionCount % mod
    
}

let n=90;
let dp=Array(n).fill(-1);
console.log(findAllPossibleSolution(currSum))