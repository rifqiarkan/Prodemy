//1
function myFunction(a, b) {
    return a + b ; // mengembalikan nilai dari a + b
}
//2
function myFunction(a, b) {
    return a === b ; // comparison operator
}
//3
function myFunction(a) {
    return typeof a ; // mendapatkan jenis tipe data apa dari a
}
//4
function myFunction(a, n) {
   return a[n - 1]; //
}
//5
function myFunction(a) {
    return a.slice(3);
 }
 //6
 function myFunction(str) {
    return str.slice(-3);
 }
 //7
 function myFunction(a) {
    return a.slice(0, 3);
 }
 //8
 function myFunction(a) {
    return a.indexOf('is');
 }
 //9
 function myFunction(a) {
    return a.slice(0, a.length / 2);
 }
 //10
 function myFunction(a) {
    return a.slice(0, -3);
 }
 //11
 function myFunction(a, b) {
    return b / 100 * a
  }
//12
function myFunction(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
 }
 //13
 function myFunction(a, b) {
    return a.indexOf(b) === -1 ? a + b : b + a
  }  //Use ternary operator to check if a contains b
//14
function myFunction(a) {
    return a % 2 === 0
  }
//15
function myFunction(a, b) {
    return b.split(a).length - 1
  }

//16
function myFunction(a) {
    return a - Math.floor(a) === 0 // return Math.floor(a) === a;
  }


//1
function myFunction(a, n) {
    return a[n - 1];
 }
 //2
 function myFunction(a) {
    return a.slice(3);
 }
//3
function myFunction(a) {
    return a.slice(-3);
 }
//4
function myFunction(a) {
    return a.slice(0, 3);
 }
//5
 function myFunction(a, n) {
    return a.slice(-n);
}
//6
function myFunction( a, b ) {
    return a.filter(cur => cur !== b)
}
//7
function myFunction(a) {
    return a.length;
}// menghitung ada berapa elemen dalam array a
//8
function myFunction(a) {
    return a.filter((el) => el < 0).length;
}// memfilter yang ada di a dimana elemen yang terdapat pada array kurang dari 0
//9
function myFunction( arr ) {
    return arr.sort()
}//untuk men sort dari berdasarkan alphabet
//10
function myFunction( arr ) {
    return arr.sort((a, b) => b - a)
}// untuk mnsort nomor menjadi urutan menurun
//11
function myFunction(a) {
    return a.reduce((acc, cur) => acc + cur, 0);
}// untuk menjulahkan nilai dalam aray
//12
 function myFunction( arr ) {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}// menghitung rata rata pada nilai dalam aray
//13
function myFunction( arr ) {
    return arr.reduce((a, b) => a.length <= b.length ? b : a)
} //mengambil nilai pada array dengan jumlah string yang paling panjang atau banyak
//14
function myFunction( arr ) {
    return new Set(arr).size === 1
  } //untuk menentukan element dalam array arr sama, jika iya akan true jika tidak false
//15
function myFunction( ...arrays ) {
    return arrays.flat()
}   //menggunakan operator spread pada parameter arrays untuk mengumpulkan smua argumen yang diberikan pada sebuah array
    //menggunakan method flat untuk menjadikan atau membentangkan menjadi satu dimensi
//16

//17
function myFunction(a, b) {
    return [...new Set([...a, ...b])].sort((x, y) => x - y);
  }// 
 

function fizzBuzz(n) {
    // Write your code here
      for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}