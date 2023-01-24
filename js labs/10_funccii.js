============= zavd 0 ===============================
    
function Pm (a) {
    switch(a) {
        case 12: case 1: case 2:
        return "zyma";
        case 3: case 4: case 5:
        return "vesna";
        case 6: case 7: case 8:
        return "lito";
        case 9: case 10: case 11:
        return "osin'";
        default: return "wrong input"
    }
}

a = parseInt(prompt())
alert(Pm(a));

================= zavd 1 =============================

function Pm (a) {
    switch(a) {
        case 1: return "sichen'";
        case 2: return "lyutiy";
        case 3: return "berezen'";
        case 4: return "kviten'";
        case 5: return "traven'";
        case 6: return "cherven'";
        case 7: return "lypen'";
        case 8: return "serpen'";
        case 9: return "varesen'";
        case 10: return "zhvten'";
        case 11: return "lystopad";
        case 12: return "hruden'";
        default: return "wrong input"
    }
}

a = parseInt(prompt())
alert(Pm(a));

================== zavd 2 ============================

function n(a) {
    if (0<a<22) return("34 uroki")
    else if (23<a<35) return("kanikuli")
    else if (36<a<52) return("35 uroki")
    else if (a>52) return("u nas ne tak bahato tyzhniv")
}
    
let a1 = parseInt(prompt())
alert(n(a1))

====================== zavd 3 =========================

function f1(a, b, c, d) {
    return a+b+c+d
}

function f2(a, b, c, d) {
    return a*b*c*d
}

function f3(a, b, c, d) {
    return (a+b+c+d)/4
}

function f3(a, b, c, d) {
    return Math.min(a, b, c, d)
}

let a = parseInt(prompt())
let b = parseInt(prompt())
let c = parseInt(prompt())
let d = parseInt(prompt())

alert(f1(a, b, c, d))

alert(f2(a, b, c, d))

alert(f3(a, b, c, d))

alert(f4(a, b, c, d))

=================== zavd 4 ==================
    
function f1(a, b, c) {
    let count = 0
    if (a%2==0) count++;
    if (b%2==0) count++;
    if (c%2==0) count++;
    return count;
}

let a = parseInt(prompt())
let b = parseInt(prompt())
let c = parseInt(prompt())

alert(f1(a, b, c))

============== zavd 5 ======================
    
function f1(a) {
    return a/2.54
}

function f2(a) {
    return a*2,205
}

function f3(a) {
    return a/1.609
}

let a = parseInt(prompt())

alert(f1(a))
alert(f2(a))
alert(f3(a))

============== zavd 6 ======================

let t = document.querySelector('#tt');
let a = parseInt(prompt());
let b = parseInt(prompt());
function aee(a,b){
for (let i = 0; i < a; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < b; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    t.appendChild(tr);
}
}
aee(a,b);

============== zavd 7 ======================
    
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function ph() {
    let a = prompt("vvedite put k 1 photo");
    let b = prompt("vvedite put k 2 photo");
    let c = prompt("vvedite put k 3 photo");
    let d = prompt("vvedite put k 4 photo");
    let arr = [a,b,c,d];

    let i = getRandomInt(4);
    document.getElementById(img).src=arr[i];
}
ph();
