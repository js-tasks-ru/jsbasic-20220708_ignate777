// первое решение 

// function checkSpam(str) {
//   let lower = str.toUpperCase() 
//   return lower.includes('XXX') || lower.includes('1xBet');
// }

function checkSpam(str) {
  let lower = str.toUpperCase() 
  if (lower.includes === 'XXX') {
    alert( 'СПАМ' );
  } else if (lower.includes === '1xBet') {
    alert( 'Тоже СПАМ' );
  } else {
    alert( 'все хорошо.Проходи дальше' );
  }
}
alert(checkSpam);