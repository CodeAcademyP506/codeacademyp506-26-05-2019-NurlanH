//Qeydler:

/*
2 ci meseleni anlamadim

ve butun meseleleri bir funksiya daxilinde yazdimki yoxlamasi
asand olsun ve bir birlerine qariwmasin.
*/

// exercise 1
function findNumDigit(num) {
  console.log(`${num}`.length);
}

// exercise 2
function rectangular(a, b, x, y, z) {
  if ((0 < a, b, x, y, z < 10)) {
    console.log("1");
  } else {
    console.log("0");
  }

  // bu meselenin sertini anlamadim ancaq ex-e baxdim ona uygun bir wey yazmaga calishdim. bunun izahini verersiniz zehmet olmasa :D ))
}

// exercise 3

function maxElementArray() {
  var num = [5, 7, 4, 8, 6, 9, 15, 24, 77, 0, 3, 1];
  var check = true;
  var max = num[0];
  while (check) {
    check = false;
    for (var i = 0; i < num.length; i++) {
      if (num[i] > max) {
        check = true;
        max = num[i];
      }
    }
  }
  console.log(max);
}

// exercise 4
function minElementArray() {
  var num = [5, 7, 4, 8, 6, 9, 15, 24, 77, 3, 1];
  var check = true;
  var min = num[0];
  while (check) {
    check = false;
    for (var i = 0; i < num.length; i++) {
      if (num[i] < min) {
        check = true;
        min = num[i];
      }
    }
  }
  console.log(min);
}

// exercise 5

function findFactorial() {
  var num = 5;
  var sum = 1;

  for (var i = num; i > 0; i--) {
    sum = sum * i;
  }

  console.log(sum);
}

//exercise 6
function find2MaxElement() {
  var num = [1, 2, 5, 7, 3, 9, 11, 16, 9, 18, 14];
  var check = true;
  var max1;
  var max2;
  while (check) {
    check = false;
    for (var i = 0; i < num.length; i++) {
      if (num[i] > num[i + 1]) {
        check = true;
        var temp = num[i + 1];
        num[i + 1] = num[i];
        num[i] = temp;
      }
      max1 = num[i];
      max2 = num[i - 1];
    }
  }
  console.log(max1 * max2);
}

// console.log(max1*max2);

// exercise 7
function oddEvenArray() {
  var a = [1, 2, 5, 8, 268, 533, 41, 89, 11, 12, 14];

  var evenAlist = [];
  var oddAlist = [];

  for (var i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
      evenAlist.push(a[i]);
    } else {
      oddAlist.push(a[i]);
    }
  }

  console.log("Numbers array:", a);
  console.log("Even numbers array:", evenAlist);
  console.log("Odd numbers array:", oddAlist);
}
