function drawTriangle(a,b) { var k='';
  if (a.length != 1 || isFinite(b)==false) {  console.log('Вы ввели некорректные данные'); }
  else if (b<3) {
    for (var i=0; i<3; i++) {
      k=k+a;
    console.log(k);
      
    }
  }
  else {
    for (var i=0; i<b; i++) {
      k=k+a;
     console.log(k);
          }
  }
  }


var symbol= prompt ('Введите 1! символ для треугольника');
var height= prompt ('Введите высоту треугольника');

drawTriangle(symbol,height);
// drawTriangle('#',6);