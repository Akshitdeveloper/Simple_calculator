
function calc(opt){
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out;
    if(opt == "Add"){
        out = `Sum of number is ${Number(a)+Number(b)}`
    }else if (opt == "Sub"){
        out = `Sub of number is ${Number(a)-Number(b)}`
    }else if(opt == "Mul"){
        out = `Mul of number is ${Number(a) * Number(b)}`
    }else if(opt == "Div"){
        out = `Divisor of number is ${Number(a) / Number(b)}`
    }else if(opt == "Power"){
        out = `Power of number is ${Number(a) ** Number(b)}`
    }else if(opt == "Percentage"){
        out = `Percentage of number is ${Number(a) % Number(b)}`
    }
    document.getElementsByClassName('out')[0].innerText=out
}




// function add(){
//     let a = document.getElementById('first').value;
//     let b = document.getElementById('second').value;
//     let out = Number(a)+Number(b)
//     document.getElementsByClassName('out')[0].innerText=`Sum of number is ${out}`
// }
// function sub(){
//     let a = document.getElementById('first').value;
//     let b = document.getElementById('second').value;
//     let out = Number(a)-Number(b)
//     document.getElementsByClassName('out')[0].innerText=`Sub of number is ${out}`
// }