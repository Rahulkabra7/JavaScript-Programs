class Area{

    areaRec(len, wid){
        var area = len * wid;
        return area;
    }

    areaCircle(radius){
    var area_circle = Math.PI * radius * radius;
    return area_circle;
    }

    areaSqu(side){
    var area_squ = side * side;
    return area_squ;
    }

    areaTriangle(base, height){
    var area_triangle = 0.5 * base * height;
    return area_triangle;
    }
}

var myObj = new Area();

console.log(myObj.areaRec(20,15));
console.log(myObj.areaCircle(10));
console.log(myObj.areaSqu(25));
console.log(myObj.areaTriangle(10,15));
