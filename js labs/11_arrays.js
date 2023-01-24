=================== zavd 1 ===================
  
  let arr = [12, 32, 45, 5, 76, 7, 9]
const a = arr.reduce((partial_sum, a) => partial_sum + a,0)/arr.length
if(a>=4) console.log('vidminnyk')
else if(3<=a<4) console.log('horoshyst')
else console.log('dvoyoshnyk') 

=================== zavd 2 ===================

let arr = [13, 32, 45, 5, 76, 7, 9]

arr.forEach((item) => {
    if(item<20) console.log(item+'<20') 
});
arr.forEach((item, index) => {
    if(index<5) console.log(item) 
});
console.log(arr[arr.length -1]+arr[arr.length -2])

arr.sort((a,b) => a-b)
console.log(arr[0]+'-min')
console.log(arr[arr.length - 1]+'-max')

=================== zavd 3 ===================
  
let arr = ['sdf', 'sadf', 'adsfs', 'sddsaf', 'asd', 'Ivan', 'Ivan']
let s = 0 ;
arr.forEach((item) => {
    if(item==='Ivan') s++;  
});
console.log(s)

=================== zavd 4 ===================
  
let a = (min,max)=>{
    return Math.floor(Math.random()*(max-min+1)+min)
}
let s= 0;
let a1 = Array.from({length: 10}, () => a(-500, 500))
for(let i =0; i<10; i++) {
let b = prompt()
if (b!=null) {
    b = parseInt(b)
    s += a1[b-1];
}
}
console.log(s)

=================== zavd 1+ ===================
  
let arr = [1243, 23432, 4234, 32, 4234, 4234, 4234, 5, 46, 34534, 34, 344]
let sum = 0;
arr.forEach((item, index) => {
    if (index<6) sum+=item;
});
console.log(sum)
sum = 0;
arr.forEach((item, index) => {
    if (index>6) sum+=item;
});
console.log(sum)
console.log(arr[5]+arr[6]+ arr[7])
console.log(arr[4]+arr[5]+ arr[6])

=================== zavd 2+ ===================
  
let arr = [1, 2, 3, 4, 5, 1, 3, 4, 5, 1, 2, 3]
let sum = 0;
arr.forEach((item, index, array) => {
    if (item==2) sum+=1;
});
console.log(sum)
sum = 0;
arr.forEach((item, index, array) => {
    if (item>3) sum+=1;
});
console.log(sum)
console.log(arr.length-sum)

=================== zavd 3+ ===================
  
let arr = [13213, 232, 3213, 4213, 235, 143, 33, 4432, 5342, 1324, 342, 3324]
let arr1 = ['jeyj','dsh','htdfht','hgdfj','thrf','th','jgh','kru','fgdh','hgfdh','dgfh','hg']
let s = parseInt(prompt());
arr.forEach((item, index) => {
    if (item<=s) console.log(arr[index] + ' ' + arr1[index]);
});
