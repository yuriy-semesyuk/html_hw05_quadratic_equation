const a = Number(prompt('Введіть перше число'));
const b = Number(prompt('Введіть друге число'));
const c = Number(prompt('Введіть третє число'));

const result = solveQuard(a, b, c);
document.write(result);

function solveQuard(a, b, c) {
    const d = discr(a, b, c);
    let result;
    if (d > 0) {
        const x_1 = ((-b) - Math.sqrt(d)) / (2 * a);
        const x_2 = ((-b) + Math.sqrt(d)) / (2 * a);
        result = 'x1=' + x_1 + "<br>" + 'x2=' + x_2;
    }else if (d === 0) {
        const x_1 = -(b/(2*a));
        const x_2 = ((-b) + Math.sqrt(d)) / (2 * a);
        result = 'x1='+x_1 + "<br>" + 'x2='+x_2;
    }else {
        result = 'Коренів рівняння немає';
    }
    return result
}

function discr(a, b, c) {
    const d = square(b)-(4 * a * c);
    return d
}

function square(a) {
    return square = a * a;
}