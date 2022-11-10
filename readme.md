Exercise 1

- A simple representation of responsive page using bootstrap library.

Exercise 2

- Created in VueJs 3 with bootstrap library for styling. 


---------------------------------------------------------------------------------

Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

- The ('b' + 'a') get added up as "ba" then a double ('+') sign followed by ('a') will attempt to convert the string into a number as it is a unary operator in javascript. Because it is a string ('a'), it will convert it into NaN instead which is not a number. Then the last will add up the ('a') that when you combined everything is is written as 'baNaNa'. toLoweCase() function will convert it into 'banana'.
