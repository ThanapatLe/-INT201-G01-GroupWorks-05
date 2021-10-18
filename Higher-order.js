//High Order Functions
function calculate(opera, FirstValue, numbers) {             //ฟังก์ชั่น calculate รับพารามิตเตอร์ opera เป้นตัวดำเนินการ FirstValue เป็นตัวตั้งต้น numbers เป็นตัวเลขที่เราเอามาดำเนินการ
    let total = FirstValue;                                  //เก็บ FirstValue ในตัวแปร total 
    for (const number of numbers) {                          //วนลูปทุกตัวในตัวแปร number
      total = opera(total, number);                          //เรียกใช้ฟังก์ชันจากพารามิตเตอร์ opera โดยในฟังก์ชั่นมีพารามิตเตอร์เป็น total กับ number
    }
    return total;                                            //คืนค่า total
  }
  function sum(n1, n2) {                                     //ฟังก์ชัน sum รับค่าพารามิตเตอร์เป็น n1 กับ n2 
    return n1 + n2;                                          //คืนค่า n1 + n2
  }
  function multiply(n1, n2) {                                //ฟังก์ชัน multiply รับค่าพารามิตเตอร์เป็น n1 กับ n2
    return n1 * n2;                                          //คืนค่า n1 * n2
  }
  function minus(n1, n2) {                                   //ฟังก์ชัน minus รับค่าพารามิตเตอร์เป็น n1 กับ n2
    return n1 - n2;                                          //คืนค่า n1 - n2   
  }
  function devine(n1, n2) {                                 //ฟังก์ชัน minus รับค่าพารามิตเตอร์เป็น n1 กับ n2
    return n1 / n2;                                         //คืนค่า n1 / n2
  }
 
  console.log(calculate(sum, 3, [1, 2, 4]));
  console.log(calculate(multiply, 1, [1, 2, 4]));
  
    