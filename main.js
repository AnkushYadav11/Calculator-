let num = 0;
let num1 = document.getElementById('num1');
num1.addEventListener('input', (e) => {
    num1 = Number(e.target.value);
});

const btn1 = document.getElementById('btn1').addEventListener('click', (e) => {
    num1 = e.target.value;
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
    num = 0;
    num /= num1;
    document.getElementById('result').textContent = num;
    document.getElementById('num1').value = 0;
})
const cls = document.getElementById('btn-cls').addEventListener('click', () => {
    document.getElementById('num1').value = 0;
    document.getElementById('result').textContent = 0;
    num1 = 0;
    num = 0;
})