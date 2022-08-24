// ------------------CÂU 1 : TÍNH THUẾ THU NHẬP CÁ NHÂN ---------------
function Tax() {
    var fullName = "Nguyen Hoang Duy Khang";
    var salary = 500000000; //500 tr
    var user = 1;
    var my_Tax = 0;
    my_Tax = salary - 4000000 - 1 * 1600000 * 0.25;
    console.log('Thue thu nhap ca nhan: ', my_Tax.toLocaleString())
}
// Tax();



// ------------------CÂU 2 : TÍNH TIỀN CÁP  ---------------
function sellCap() {
    var A = 'nha dan';
    var B = 'doanh nghiep';
    var channel = 30;
    var connect = 15;
    var customer = 'doanh nghiep';
    var totalSell = 0;
    if (customer === A) {
        totalSell = 4.5 + 20.5 * connect + 7.5 * channel;
        console.log('Hóa đơn tiền cáp: ', totalSell);

    }
    else if (customer === B) {
        totalSell = 15 + 75 * connect + ((connect - 5) * 5) + 50 * channel;
        console.log('Hóa đơn tiền cáp: ', totalSell);
    }
    else {
        console.log('Thuộc loại khách hàng khác');
    }
}
sellCap();

