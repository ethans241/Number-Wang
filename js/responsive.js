
// Add Section Tip Buttons
// Add Button 1
const btn1 = document.getElementById('theButtonAdd1');
const myText1 = document.getElementById('addTip1');

btn1.addEventListener('click', function(){
  const addTipText1 = 'Try using your fingers to count when adding smaller numbers. For example, to solve 4 + 2, you can start at 4 and count up two more on their fingers (5, 6).';
myText1.innerHTML = addTipText1;
});

// Add Button 2
const btn2 = document.getElementById('theButtonAdd2');
const myText2 = document.getElementById('addTip2');

btn2.addEventListener('click', function(){
  const addTipText2 = 'Look for numbers that add up to 10. For example, 7 + 3 equals 10, and this helps with mental math later on.';
myText2.innerHTML = addTipText2;
});

// Add Button 3
const btn3 = document.getElementById('theButtonAdd3');
const myText3 = document.getElementById('addTip3');

btn3.addEventListener('click', function(){
  const addTipText3 = 'Use everyday things like counting snacks, toys, or steps. For example, "You have 3 apples, and I give you 2 more. How many do you have now?';
myText3.innerHTML = addTipText3;
});

// Minus Section Tip Buttons
// Minus Button 1
const btn4 = document.getElementById('theButtonMinus1');
const myText4 = document.getElementById('addTip4');

btn4.addEventListener('click', function(){
  const addTipText4 = 'A number line can help visualize subtraction. Start at the larger number and move left (backwards) by the value of the number you’re subtracting. For example, to solve 7 - 3, start at 7 and move 3 spaces to the left to land on 4.';
myText4.innerHTML = addTipText4;
});

// Minus Button 2
const btn5 = document.getElementById('theButtonMinus2');
const myText5 = document.getElementById('addTip5');

btn5.addEventListener('click', function(){
  const addTipText5 = 'If you find subtraction tricky, try counting up from the smaller number to the larger one. This helps you see how much you need to add to reach the larger number. For example, to solve 9 - 4, start at 4 and count up to 9 (5, 6, 7, 8, 9) so the answer is 5.';
myText5.innerHTML = addTipText5;
});

// Minus Button 3
const btn6 = document.getElementById('theButtonMinus3');
const myText6 = document.getElementById('addTip6');

btn6.addEventListener('click', function(){
  const addTipText6 = 'Subtraction is everywhere in daily life. For example, when shopping, you can subtract prices from a budget. This can help reinforce subtraction skills in a practical way.';
myText6.innerHTML = addTipText6;
});

// multiplication Section Tip Buttons
// Times Button 1
const btn7 = document.getElementById('theButtonTimes1');
const myText7 = document.getElementById('addTip7');

btn7.addEventListener('click', function(){
  const addTipText7 = 'The quicker you know the multiplication table, the faster you will be at multiplying. Start with easier numbers like 2, 5, and 10 and work your way up.';
myText7.innerHTML = addTipText7;
});

// Times Button 2
const btn8 = document.getElementById('theButtonTimes2');
const myText8 = document.getElementById('addTip8');

btn8.addEventListener('click', function(){
  const addTipText8 = 'If one number is even, you can halve one of the numbers and double the other to make multiplication easier. For example, 16x25 can be rewritten as 8x50 = 400.';
myText8.innerHTML = addTipText8;
});

// Times Button 3
const btn9 = document.getElementById('theButtonTimes3');
const myText9 = document.getElementById('addTip9');

btn9.addEventListener('click', function(){
  const addTipText9 = 'When multiplying by small numbers, skip count. For example For 3x4, you can count by 4s: 4, 8, 12, Or, for 3x4, count by 3s: 3, 6, 9, 12.';
myText9.innerHTML = addTipText9;
});

// Division Section Tip Buttons
// Divide Button 1
const btn10 = document.getElementById('theButtonDivide1');
const myText10 = document.getElementById('addTip10');

btn10.addEventListener('click', function(){
  const addTipText10 = 'Division can be seen as repeatedly subtracting the divisor from the dividend until you can no longer subtract. For example, 12 ÷ 3 = 4 because 12 - 3 - 3 - 3 - 3 = 0.';
myText10.innerHTML = addTipText10;
});

// Divide Button 2
const btn11 = document.getElementById('theButtonDivide2');
const myText11 = document.getElementById('addTip11');

btn11.addEventListener('click', function(){
  const addTipText11 = 'Use your knowledge of multiplication to help with division. If you know the multiplication table, you can figure out how many times the divisor fits into the dividend. For example, 24 ÷ 6 = 4 because 6x4 = 24.';
myText11.innerHTML = addTipText11;
});

// divide Button 3
const btn12 = document.getElementById('theButtonDivide3');
const myText12 = document.getElementById('addTip12');

btn12.addEventListener('click', function(){
  const addTipText12 = 'Recognizing patterns in division, especially for small divisors like 2, 5, and 10, can make the process faster. For example, dividing by 2 is the same as halving the number.';
myText12.innerHTML = addTipText12;
});