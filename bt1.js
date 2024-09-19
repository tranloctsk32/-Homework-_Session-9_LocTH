let year = +prompt("Mời bạn nhập vào năm sinh: ");
if (Number.isNaN(year)) {
    console.log("Năm sinh không hợp lệ! ");
} else {
    let age = 2024 - year;
    age;
    console.log("Tuổi của bạn là:" + age);
}
