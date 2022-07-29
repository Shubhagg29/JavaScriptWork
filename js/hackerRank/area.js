function Rectangle(a, b) {
    var obj={
        length:a,
        width :b,
        area:a*b,
        perimeter: 2*(a+b)
    }
    return obj;
}
let rect =Rectangle(5,6)
console.log(rect.perimeter);
