let s = '';
let a = '42126710446';
for (let i=1; i < a.length; i++){
    if (a[i] % 2 === a[i-1] % 2){
        s += Math.max(a[i], a[i-1])
    }
}

console.log(`https://www.gosign.de/careers/${s}`) //467446