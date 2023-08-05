const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)

isRightTriangle(3, 4, 5);

//the call stack is essentially the order functions are called in
//when a function is read, it is added to the stack, and removed from it when something is returned
//in this example, it would call isRightTriangle(3), which then would call square(3), which in turn calls multiply(3,3)
//this returns 9, so multiply is removed, square also returns 9 and is thus removed, and finally 9 is placed into the isRightTriangle function
//it'll repeat this for the other two numbers of isRightTriangle until it eventually returns true (in this scenario at least)
