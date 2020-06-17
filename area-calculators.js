
let calculateRectangleArea = function (length, width) {
  let result;
  length < 0 || width < 0 ? (result = undefined) : (result = length * width);
  return result;
};


let calculateTriangleArea = function (base, height) {
  let result;
  base < 0 || height < 0 ? (result = undefined) : (result = base * (height / 2));
  return result;
};

let calculateCircleArea = function (radius) {
  let result;
  radius < 0 ? (result = undefined) : (result = Math.PI * (radius * radius));
  return result;
};


calculateRectangleArea(5, 6);