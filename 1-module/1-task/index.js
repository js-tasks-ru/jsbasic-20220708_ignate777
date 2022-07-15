function factorial(n) {

  if (n === 0 || n === 1) //что факториал 0 и 1 равен 1. Это важно и нужно учесть в решении.
  return 1;

  for (let i = 2; i <= n; i++) { 
    n *= i; //n = n * i
   } 
   return n
}



