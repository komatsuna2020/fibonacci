'use strict';
function fib(n){
    if (n === 0){  //0番目は0を返す処理
        return 0;
    } else if (n === 1){  //1番目は1を返す処理
        return 1;
    }

    //それ以外の場合、n番目の前と前の前のフィボナッチ数を足した数を返す処理
    return fib(n - 1) + fib(n - 2);  
}

const length = 40; //40番目までやるので40を代入。あとで数字を変えるために変数にした。
for (let i = 0; i <= length; i++){
    console.log(fib(i)); //0番目から40番目まで出力
}