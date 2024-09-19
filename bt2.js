let num = +prompt("Mời bạn nhập vào 1 số bất kỳ");
if(Number.isInteger(num)){
    if(num % 2 === 0){
        console.log("Đây là số chẵn");
    } else {
        console.log("Đây là số lẻ");
    }
} else {
    console.log("Đây là số không hợp lệ");
}