module.exports = function solveEquation(equation) {
  // equation example: a * x^2 + b * x + c
  // extract elements a, b, c
  let elements = equation.split(' ');
  let a = +elements[0];
  let signB = elements[3];
  let b = +elements[4];
  let signC = elements[7];
  let c = +elements[8]; 

  if(signB == '-') b = -b;
  if(signC == '-') c = -c;
  
  // solve equation
  let D = b * b - 4 * a * c;
  if(D > 0) {
    sqrtD = Math.sqrt(D);
    let x1 = (-b - sqrtD) / (2 * a);
    let x2 = (-b + sqrtD) / (2 * a);
    return [ Math.round(x1), Math.round(x2) ].sort( (a, b) => a-b );
  }

  return null;
}
