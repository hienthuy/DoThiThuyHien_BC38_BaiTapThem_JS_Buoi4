// ||
/**
 * BÀI Tập 2: Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày
 * Input: nhập tháng, năm
 * Process: 
 * 1. Khai báo biến month, year, 
 * 2. Đối với các tháng 1,3,5,7,8,10,12 sẽ có 31 ngày
 * 3. Đối với các tháng 4,6,9,11 sẽ có 30 ngày
 * 4. tháng 2, nếu là năm nhuận sẽ có 29 ngày. Ngược lại là 28 ngày.
 * 5. In ra kết quả số ngày của tháng, năm đó
 * Output: Số ngày 
 * 
 * 
 * 
 */

function dayNumber(){
    var month=document.getElementById("month").value*1;
    var year=document.getElementById("year").value*1;
    content=""
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            content="Tháng "+ month+  " năm " +year+ " có 31 ngày" ;
        break;
        case 4:
        case 6:
        case 9:
        case 11:
            content="Tháng "+ month+  " năm " +year+ " có 30 ngày" ;
            break;
        case 2:
            if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
            {
                content="Tháng "+ month+  " năm " +year+ " có 29 ngày" ;
            }else
            {
                content="Tháng "+ month+  " năm " +year+ " có 28 ngày" ;
            }
                           
    }
    document.getElementById("soNgay").innerHTML=content;
}

/***
 * BÀI TẬP 4: Cho biết tọa độ của trường đại học. Viết chương
        trình in tên sinh viên xa trường nhấ
 * Input: tên, tọa độ của 3 sinh viên. Tọa độ của trường học
 * Process: 
 * 1. khai báo biến d1, d2, d3 tương ứng là khoảng cách từ tọa độ của sinh viên 1,2,3 đến trường
 * 2. Tìm sinh viên xa trường nhất bằng cách tìm ra số lớn nhất trong 3 số d1, d2, d3
 * Nếu d1>d2 và d1>d3 thì sv1 xa trường nhất
 * Nếu d2>d1 và d2>d3 thì sv2 xa trường nhất
 * Nếu d3>d1 và d3>d2 thì sv3 xa trường nhất
 * 3. In kết quả ra màn hình
 * Output: Sinh viên xa trường nhất 
 * 
 */
function furthest(){
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;
    var name3=document.getElementById("name3").value;
    var x1=document.getElementById("x1").value;
    var x2=document.getElementById("x2").value;
    var x3=document.getElementById("x3").value;
    var y1=document.getElementById("y1").value;
    var y2=document.getElementById("y2").value;
    var y3=document.getElementById("y3").value;
    var x=document.getElementById("x").value;
    var y=document.getElementById("y").value;
    var d1=Math.sqrt(Math.pow(x1-x,2) + Math.pow(y1-y, 2));
    var d2=Math.sqrt(Math.pow(x2-x,2) + Math.pow(y2-y, 2));
    var d3=Math.sqrt(Math.pow(x3-x,2) + Math.pow(y3-y, 2));
    content="";
    if ((d1>d2) && (d1>d3))
    {
        content="Sinh viên xa trường nhất: " + name1;
    }else if ((d2>d1) && (d2>d3))
    {
        content="Sinh viên xa trường nhất: " + name2;
    }else
    {
        content="Sinh viên xa trường nhất: " + name3;
    }
    document.getElementById("sinhVienXaNhat").innerHTML=content;

}
/**
 * Bài Tập 3: 
 * 
 */

 function readNumber() {
    var abc = document.getElementById("abc").value * 1;
  
  
    var a = Math.floor(abc / 100);
    var b = Math.floor((abc % 100) / 10);
    var c = abc % 10;
    content ="";
    switch (a) {
      case 1:
          a = "Một";
        break;
      case 2:
          a = "Hai";
        break;
      case 3:
         a = "Ba";
        break;
      case 4:
          a = "Bốn";
        break;
  
      case 5:
          a = "Năm";
        break;
  
      case 6:
          a = "Sáu";
        break;
  
      case 7:
          a = "Bảy";
        break;
      case 8:
          a = "Tám";
        break;
      case 9:
          a = "Chín";
        break;
  
      default:
          a = "không hợp lệ";
          
    }
  
    switch (b) {
      case 0:
          b = "lẻ";
        break;
      case 1:
          b = "một";
        break;
      case 2:
          b = "hai";
        break;
      case 3:
          b = "ba";
        break;
      case 4:
          b = "bốn";
        break;
  
      case 5:
          b = "năm";
        break;
  
      case 6:
          b = "sáu";
        break;
  
      case 7:
          b = "bảy";
        break;
      case 8:
          b = "tám";
        break;
      case 9:
          b = "chín";
        break;
  
      default:
          b = "không hợp lệ";
    }
  
    switch (c) {
      case 0:
          c = "";
          // if (b=0)
          // {
          //     content= a +" trăm";
          // }else if (b=1) 
          // {
          //     content= a + " trăm mười" ;
          // }else content= a + " trăm" +b + " mươi";
      
        break;
      case 1:
          c = "một";
        break;
      case 2:
          c = "hai";
        break;
      case 3:
          c = "ba";
        break;
      case 4:
          c = "bốn";
        break;
  
      case 5:
          c = "năm";
        break;
  
      case 6:
          c = "sáu";
        break;
  
      case 7:
          c = "bảy";
        break;
      case 8:
          c = "tám";
        break;
      case 9:
          c = "chín";
        break;
  
      default:
          c = "không hợp lệ";
  }
    content = (a + " trăm "+ b + " mươi "+c);
    document.getElementById("showUp").innerHTML = content;
  }
  