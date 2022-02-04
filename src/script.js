function calc(){
    let perimeter =Number( document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);

    let answer1 = perimeter * width;
    let answer2 = 2*(perimeter+ width);


    //alert(answer);
    document.getElementById("area").innerHTML="Area is "+ answer1 +" sq. mtr";
    document.getElementById("perimeter").innerHTML="Perimeter is "+ answer2 + " mtr";
}




