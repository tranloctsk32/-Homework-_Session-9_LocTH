let x = +prompt("Mời bạn nhập vào thứ trong tuần: ");
switch (x) {
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    case 8:
        console.log("Sunday");
        break;
    default:
        console.log("Thứ trong tuần không hợp lệ");
        break;
}