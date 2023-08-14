function qSolve(a, b, c) {

    // ax^2 + bx + c

    let sqrtValue = Math.sqrt(b * b - 4 * a * c);

    let root1 = (-b + sqrtValue) / (2 * a);
    let root2 = (-b - sqrtValue) / (2 * a);

    console.log("root1 is :", root1, " \nroot2 is :", root2);
}


qSolve(2, 5, 3);