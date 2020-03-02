//入門コース３－２で使ったファイル

'use strict';
const memo = new Map(); //memoという名のMapを作成
memo.set(0,0); //0番目は最初から定義されているので
memo.set(1,1); //1番目も最初から定義されているので

function fib(n){
    if (memo.has(n)){ //Mapにnをキーとした値があれば
        return memo.get(n);  //nをキーとした値を返す
    } else
    const value = fib(n - 1) + fib(n - 2); //それ以外のフィボナッチ数列の計算
    memo.set(n,value); //Mapにnをキーとして計算結果を代入
    return value;
}

const length = 40; //40番目までやるので40を代入。あとで数字を変えるために変数に。
for (let i = 0; i <= length; i++){
    console.log(fib(i)); //0番目から40番目まで出力
}