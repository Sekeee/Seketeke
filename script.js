// 1
function splitBySpace(string) {
    let arr = [];

    let temp = '';
    for (let i = 0; i < string.length; i ++) {

        if (string[i] !== ' ') {
            temp += string[i];
        } else {
            arr.push(temp);
            temp = '';
        }
    }

    return arr;
}

const someText = 'Dolor sapiente fugiat ab culpa reiciendis.';
console.log(splitBySpace(someText))



// 2
function merge(arr1 , arr2){
    let array = [];
    for(let i = 0  ; i < arr1.length ; i++){    
        array.push(arr1[i]);
    }
    for(let i = 0  ; i < arr2.length ; i++){    
        array.push(arr2[i]);
    }
    return array;
}  
let arr = merge([1, 2, 3, 4] , [3, 4, 5]); 
console.log(arr);
// console.log(merge([1, 2, 3, 4] , [3, 4, 5]));





// 3
function joinArray(arr , char){
    let result = '';
    for(i = 0 ; i < arr.length - 1 ; i++){
        result = result + arr[i];
        result = result + char;
    }
    result = result + arr[arr.length-1];
    return result;
}
console.log(joinArray(["hello", "world", "this","is","Setgel"] , ', '));



// 4
function whereIs(arr , char){
    
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === char){
            return i;
        }
    }
    return -1;   
}
console.log(whereIs(["Hello" , "world" , "this" , "is" , "Setgel"] , "Setgel"));

//arr.indexOf('Setgel')




// 5
function cutFromArr(arr , from , to){
    let Arr = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(i >= from && i < to){
            Arr.push(arr[i]);
        }
    }
    return Arr;
}
let cut = cutFromArr(['a', 'b', 'c', 'd', 'e', 'f'] , 2 , 5);
console.log(cut);
//arr.slice(2,5);



//問題１
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// result ['I', 'love', 'teaching', 'and', 'empowering', 'people', 'I', 'teach', 'HTML', 'CSS', 'JS', 'React', 'Python']
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let text2 = text.split(' ');
console.log(text2);
// bro.join(', ');
// console.log(bro);


