// ----------------------------------------------------------->  1. <-----------------------------------------------------------
// 1. Funksiya yazacaqsız, funksiya 2 parametr qəbul edir, 1 - cisi array 2 - cisi number(ex.myFunc([1, 2, 3, 4, 5], 4)).
// Həmin funksiyanın nəticəsi 0 - cı indeks - dən number -in sayı qədər array -in içindən ədədləri götürüb yeni array - ə 
// yığmalısız(myFunc([1, 2, 3, 4, 5], 4) => [1, 2, 3, 4])

                                // Push metodu ile
const addArr = []

function arrFunction(arr, num){
    for(let i = 0; i < num; i++){
        addArr.push(arr[i])
    }
    return addArr
}

const Arr = [5, 11, 17, 25, 40]
let Number = 4
console.log(arrFunction(Arr, Number))

                                // Slice metodu ile


function Myfunction(array, number) {
    return array.slice(0, number)
}

const myArr = [5, 11, 17, 25, 40]
let myNumber = 4
console.log(Myfunction(myArr, myNumber))

// ----------------------------------------------------------->  2. <-----------------------------------------------------------

// 2. findMultiples adlı funksiya yazacaqsız, 2 number parametri alır(ex.findMultiples(number, limit)) - 
// number - dan limitə qədər limitdə daxil olmaqla yeni array - ə number -in 2 - yə hasillərini əlavə edəcəksiz, taki limitə çatana qədər.
// (ex findMultiples(2, 6) = > result =[2, 4] or findMultiples(5, 30) = > result =[5, 10, 20])


const newArr = []

function findMultiples(number, limit){
    for(let i = number ; i < limit ; i*=2 ){
        newArr.push(i)
    }
    return newArr
}

console.log(findMultiples(5, 30));


// ----------------------------------------------------------->  3. <-----------------------------------------------------------

// 3. Count funksiyası verilir, 1 number parametri alır, 1 - dən həmin number - a qədər yeni array yaradın
//     (ex.count(10) => result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

const arr = []
function Count(number){
    for(let i = 1; i <= number; i++){
        arr.push(i)
    }
    return arr
}

console.log(Count(10))