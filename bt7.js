let a = +prompt("Mời bạn nhập vào số a");
let b = +prompt("Mời bạn nhập vào số b");

if(Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0 && a >= b){
    for(let i = b; i <= a; i = i + 1){
        if(i % b === 0){
            console.log(i);
        }
    }
} else {
    console.log("Số a và b không hợp lệ");
}