let a = [5,23,662,1234,12,232,12,12321,451224]


function BubbleSort(arr){
    let al = arr.length;
    for(let i=0;i<al-1;i++){
        for(let j=0;j<al-1-i;j++){
            if(arr[j+1]<arr[j]){
                [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
            }
        }
    }
    return arr;
}
console.log(BubbleSort(a));

console.log(a.sort());