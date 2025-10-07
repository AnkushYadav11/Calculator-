let num = 0;

let num1 = document.getElementById('num1');
num1.addEventListener('input', (e) => {
    Number(e.target.value) = btn1;
});

const btn1 = document.getElementById('btn1').addEventListener('click', (e) => {
    document.getElementById('num1').value = e.target.value
    num1 = Number(e.target.value);
    console.log(num1);
});

const btn2 = document.getElementById('btn2').addEventListener('click', (e) => {
    document.getElementById('num1').value = e.target.value
    num1 = Number(e.target.value);
    console.log(num1);
});

const btn3 = document.getElementById('btn3').addEventListener('click', (e) => {

    document.getElementById('num1').value = e.target.value;
    num1 = Number(e.target.value);
    console.log(num1);
});

const btn4 = document.getElementById('btn4').addEventListener('click', (e) => {
    document.getElementById('num1').value = e.target.value;
    num1 = Number(e.target.value);
    console.log(num1);
});

const btn5 = document.getElementById('btn5').addEventListener('click', (e) => {
    document.getElementById('num1').value = e.target.value;
    num1 = Number(e.target.value);
    console.log(num1);
});

const btn6 = document.getElementById('btn6').addEventListener('click', (e) => {
    document.getElementById('num1').value = e.target.value;
    num1 = Number(e.target.value);
    console.log(num1);
});

const btn7 = document.getElementById('btn7').addEventListener('click', (e) => {
    document.getElementById('num1').value = e.target.value;
    num1 = Number(e.target.value);
    console.log(num1);
});

const btn8 = document.getElementById('btn8').addEventListener('click', (e) => {
    document.getElementById('num1').value = e.target.value;
    num1 = Number(e.target.value);
    console.log(num1);
});

const btn9 = document.getElementById('btn9').addEventListener('click', (e) => {
    document.getElementById('num1').value = e.target.value;
    num1 = Number(e.target.value);
    console.log(num1);
});

const btn0 = document.getElementById('btn0').addEventListener('click', (e) => {
    document.getElementById('num1').value = e.target.value;
    num1 = Number(e.target.value);
    console.log(num1);
});


const btnAdd = document.getElementById('btn-add').addEventListener('click', () => {
    num += num1;
    document.getElementById('result').textContent = num;
    document.getElementById('num1').value = 0;
});

const btnSub = document.getElementById('btn-sub').addEventListener('click', () => {
    if (num1 > num) {
        num = num1 - num;
        document.getElementById('result').textContent = num;
        document.getElementById('num1').value = 0;
    }
    else {
        num = num - num1;
        document.getElementById('result').textContent = num;
        document.getElementById('num1').value = 0;
    }
})

const btnmulti = document.getElementById('btn-multi').addEventListener('click', () => {
    if (num == 0) {
        num = 1;
        num *= num1;
        document.getElementById('result').textContent = num;
        document.getElementById('num1').value = 0;
    }
    else {
        num *= num1;
        document.getElementById('result').textContent = num;
        document.getElementById('num1').value = 0;
    }
})

const btndiv = document.getElementById('btn-div').addEventListener('click', () => {
    if(num == 0){
        num = 1;
        num = num1 / num;
        document.getElementById('result').textContent = num;
        document.getElementById('num1').value = 0;
    }
    else{
        num = num / num1;
        document.getElementById('result').textContent = num;
        document.getElementById('num1').value = 0;
    }
})
const cls = document.getElementById('btn-cls').addEventListener('click', () => {
    document.getElementById('num1').value = 0;
    document.getElementById('result').textContent = 0;
    num1 = 0;
    num = 0;
})