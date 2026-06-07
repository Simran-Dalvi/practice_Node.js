// Debug and fix Syntax, Runtime and logical errors

function calculateArea (width, height) {
    return (width * height);
};

let width = 10;
let height = 5;

area = calculateArea(width, height);

if (area > 100) {
    console.log("The area is Large");
}
else {
    console.log("The area is small");
}

if ((width + height) > 100){
    console.log("Area is greater than or equal to 100");
}

