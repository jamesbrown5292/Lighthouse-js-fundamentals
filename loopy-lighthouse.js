/* 
Next, pick a condition you want to start with, 
for example printing out "Loopy" instead of multiples of 3. 
Figure out how you're going to check whether a number is 
a multiple of 3, then write your if statement. 
To verify that it works, consider calculating a few multiples of 3 
by hand in a notebook (for example, 102, 105, 108, etc.),
 then making sure they're being replaced with "Loopy" in your output.
Repeat the previous step with your remaining conditions 
one at a time until they all work.
 It may help you be confident in your result if you've also
calculated by hand a few multiples of 4 and a few of both 3 and 4. */ 

for (let num = 100; num <= 200; num++ ) {
  
  if (num % 3 == 0 && num % 4 == 0) {
    console.log("LoopyLighthouse");
  } else if (num % 3 == 0) {
    console.log("Loopy");
  } else if (num % 4 == 0) {
    console.log("Lighthouse");
  } else {
    console.log(num);
  }
}
  
  
  
