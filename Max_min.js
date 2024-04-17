//Tìm và in ra chỉ số của số nhỏ nhất (lớn nhất) trong mảng, nếu có nhiều số có cùng giá
// trị nhỏ nhất thì in ra chỉ số đầu tiên ( cuối cùng).
let arr = [];
let n = +prompt('Input size of array');
for (let i = 0; i < n; i++) {
    arr[i] = +prompt(i);
}
// in ra chi so cua Max
// let max = arr[0];
// let index;
// for (let i = 1; i < n ; i++) {
//     if (arr[i]>max){
//         max = arr[i];
//         index = i;
//     }
// }
// document.write('Index of Max = '+index);

// in ra chi so cua Min
// let min = 1e9;
// let index;
// for (let i = 0; i < n; i++) {
//     if(arr[i]<min){
//         min = arr[i];
//         index = i;
//     }
// }
// document.write('Index of Min = '+index);

// in ra chi so cuoi cung cua Max neu co 2 so Max = nhau
/*let max = arr[0];
let index;
for (let i = 1; i < n ; i++) {
    if (arr[i]>=max){
        max = arr[i];
        index = i;
    }
}
document.write('Index of Max = '+index);*/

// in ra chi so cuoi cung cua Min neu co 2 so Min = nhau
let min = 1e9;
let index;
for (let i = 0; i < n; i++) {
    if(arr[i]<=min){
        min = arr[i];
        index = i;
    }
}
document.write('Index of Min = '+index);