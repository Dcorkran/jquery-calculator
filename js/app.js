// $(document).ready(function(){

  var total = '';
  // var setDisplayNum = $('#screen').text(num);
  var operator = '';
  var num = '';

  function doMathFinal(operator,num){
    switch (operator) {
      case '*':
        total = eval('total *= num');
        num = total;
        setDisplayNum(total);
        break;
      case '/':
        total = eval('total /= num');
        num = total;
        setDisplayNum(total);
        break;
      case '+':
        total = parseInt(total,10);
        num = parseInt(num,10);
        total += num;
        num = String(num);
        total = String(total);
        num = total;
        setDisplayNum(total);
        break;
      case '-':
        total = eval('total -= num');
        num = total;
        setDisplayNum(total);
        break;

      default: 'Error'

    }
  }

  function setDisplayNum(num){
    $('#screen').text(num);
  }


  $('span:eq( 0 )').on('click',function(){
    total = 0;
    num = '';
    setDisplayNum(num);
  });

  $('span:eq( 1 )').on('click',function() {
    operator = '/';
    total = num;
    num = '';
  });

  $('span:eq( 2 )').on('click',function() {
    operator = '*';
    total = num;
    num = '';
  });

  $('span:eq( 3 )').on('click',function() {
    num += '7';
    setDisplayNum(num);
  });

  $('span:eq( 4 )').on('click',function() {
    num += '8';
    setDisplayNum(num);
  });

  $('span:eq( 5 )').on('click',function() {
    num += '9';
    setDisplayNum(num);
  });

  $('span:eq( 6 )').on('click',function() {
    operator = '-';
    total = num;
    num = '';
  });

  $('span:eq( 7 )').on('click',function() {
    num += '4';
    setDisplayNum(num);
  });

  $('span:eq( 8 )').on('click',function() {
    num += '5';
    setDisplayNum(num);
  });

  $('span:eq( 9 )').on('click',function() {
    num += '6';
    setDisplayNum(num);
  });

  $('span:eq( 10 )').on('click',function() {
    operator = '+';
    total = num;
    num = '';
  });

  $('span:eq( 11 )').on('click',function() {
    num += '1';
    setDisplayNum(num);
  });

  $('span:eq( 12 )').on('click',function() {
    num += '2';
    setDisplayNum(num);
  });

  $('span:eq( 13 )').on('click',function() {
    num += '3';
    setDisplayNum(num);
  });

  $('#equals').on('click',function() {
    doMathFinal(operator,num);
  });






// });
