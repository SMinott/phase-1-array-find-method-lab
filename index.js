// code your solution here



//1st Code
// TEST 1
// const sadReality = function noWins(element){
//     return (element = 'N/A')
// }

// function superbowlWin(){
    
//     if (record.find === 'W'){
//         return record.year
//     } else{
//         return undefined
//     } 
// };

// TEST 3
function superbowlWin(arr){
    const yearBroncosWon = arr.find((arr) => arr.result === 'W');
    if (yearBroncosWon){
        return arr.year
    } else{
        return undefined
    }
};
superbowlWin(record)


// function superbowlWin(record){
//     if (record.find === 'W'){
//         return record.year
//     } else{
//         return undefined
//     } 
// };



