
function mainProcess(){

    var point1 = {x:document.getElementById('point1x').value, y:document.getElementById('point1y').value};
    var point2 = {x:document.getElementById('point2x').value, y:document.getElementById('point2y').value};
    console.log(point1.x+"  "+point2);
    showEquation(point1, point2);
    calculateDistance(point1,point2);
}

//calculate the slope of line
function calculateGrad(point1, point2)
{
    var m = (point2.y-point1.y)/(point2.x-point1.x);
    console.log("Value of gradient: "+m);
    return m;
}

//calculate Distance
function calculateDistance(point1, point2)
{
    var dis = Math.sqrt((point2.x-point1.x)*(point2.x-point1.x) + (point2.y-point1.y)*(point2.y-point1.y))
    console.log("value of distance: "+dis);
    document.getElementById("distance").innerHTML = dis;

}

//find out the equation

function showEquation(point1, point2) {
    var slope = calculateGrad(point1, point2);
    var output = point1.y - slope*point1.x;
    var result = "y -"+slope+"x="+output;
    document.getElementById("result").innerHTML = result.toString();
}
