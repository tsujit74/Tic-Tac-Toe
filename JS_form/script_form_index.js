var textU = document.querySelector('#Text1');
var textUAnz = document.querySelector('#TextAnz');
var upper = document.querySelector('#uppr');
var lower = document.querySelector('#lowr');
var frstUp = document.querySelector('#fstUp');
var extraSpaces = document.querySelector('#extraSpace');
var clear = document.querySelector('#tclr');
var cpy = document.querySelector('#cpy');
var lngth = document.querySelector('#lnth');
var wordCnt = document.querySelector('#wrdCnt');
var sttus = document.querySelector('#status');

textU.addEventListener("input", function () {
    textUAnz.textContent = textU.value;
    var inputText = textU.value;
    var length = inputText.length;
    lngth.innerHTML = length;

    inputText = inputText.trim();
    var words = inputText.split(/\s+/);
    words = words.filter(function (word) {
        return word.length > 0;
    })

    var wordCount = words.length;
    wordCnt.innerHTML = wordCount;
    sttus.innerHTML = "";
});

upper.addEventListener("click", function () {
    var inputText = textU.value;
    var length = inputText.length;
    if (length > 0) {
        textU.value = textU.value.toUpperCase();
        sttus.innerHTML = "Converted to Uper Case.."
    } else {
        sttus.innerHTML = "Enter some text!";
    }
})
lower.addEventListener("click", function () {
    var inputText = textU.value;
    var length = inputText.length;
    if (length > 0) {
        textU.value = textU.value.toLowerCase();
        sttus.innerHTML = "Converted to lower Case.."
    } else {
        sttus.innerHTML = "Enter some text!";
    }
})
frstUp.addEventListener("click", function () {
    var inputValue = textU.value;
    var inputText = textU.value;
    var length = inputText.length;
    if (length > 0) {
        textU.value = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
        sttus.innerHTML = "Sucess.."
    } else {
        sttus.innerHTML = "Enter some text!";
    }
})
clear.addEventListener("click", function () {
    var inputText = textU.value;
    var length = inputText.length;
    if (length > 0) {
        if (window.confirm("Are you sure want to clear the box!")) {
            textU.value = "";
            sttus.innerHTML = "Box cleared"
        } else {
            sttus.innerHTML = "Not cleared"
        }
    } else {
        sttus.innerHTML = "Enter some text!";
    }
})
cpy.addEventListener("click", function () {
    var inputValue = document.getElementById('Text1');
    // var textCpy = inputValue.value;
    var inputText = textU.value;
    var length = inputText.length;
    if (length > 0) {
        // sttus.innerHTML = "Enter some text!";
        navigator.clipboard.writeText(inputValue.value);
        sttus.innerHTML = "Copied..";
    } else {
        sttus.innerHTML = "Enter some text!";
    }
})
extraSpaces.addEventListener("click", function () {
    let inputValue = textU.value;
    var inputText = textU.value;
    var length = inputText.length;
    if (length > 0) {
        textU.value = inputValue.replace(/\s+/g, " ");
        sttus.innerHTML = "Space Removed.."
    } else {
        sttus.innerHTML = "Enter some text!";
    }
});


//form part
document.addEventListener('DOMContentLoaded', function () {
    const navIcon = document.getElementById('nav-btn');
    const navMnu = document.getElementById('nav-mnu');
    const cntntbdy = document.getElementById('cntnt');

    navIcon.addEventListener("click", function () {
        navMnu.style.display = (navMnu.style.display === "block") ? "none" : "block";
    });
});

function submitE() {
    let sendMsg = "Name:";
    var name1 = document.getElementById('name').value;
    var email2 = document.getElementById('email').value;
    var msg3 = document.getElementById('msg').value;

    sendMsg += name1 + "\nemail:" + email2;
    alert(sendMsg);
}

function validate() {
    const acemal = document.getElementById('acess1').value;
    const acpass = document.getElementById('acess2').value;
    const spclA = document.getElementById('admin1').value;
    const spusr = document.getElementById('usrname').value;

    if (spclA == 0) {
        if (acemal.length != 0) {
            document.getElementById('acemsg').textContent = "";
            if (acpass.length != 0) {
                document.getElementById('acpmsg').textContent = "";
                if (acpass == "123321") {
                    document.getElementById('ascnt1').style.display = "none";
                    document.getElementById('viewPage').style.display = "block"
                    document.getElementById('allitem').style.display = 'block';
                }
                else {
                    document.getElementById('acmsg').textContent = "Invalid Password!";
                }
            } else {
                document.getElementById('acpmsg').textContent = "must required!";
                document.getElementById('acmsg').textContent = "";
            }
        } else {
            document.getElementById('acemsg').textContent = "must required";
            document.getElementById('acmsg').textContent = "";
        }
    }
    else if (spclA == "****") {
        document.getElementById('ascnt1').style.display = "none";
        document.getElementById('viewPage').style.display = "block"
        document.getElementById('allitem').style.display = 'block';
        document.getElementById('username').value = "welcome ADMIN";
        document.getElementById('usrname').value = "ADMIN";
    }
}

function spcl() {
    document.getElementById('admin1').style.display = "none";
    document.getElementById('acmsg').textContent = "";
}

function input_usr(value) {
    document.getElementById('username').value = "Welcome " + value;
    document.getElementById('usrname').value = value;
    document.getElementById('acess2').value = "123321";
}

function nam(value) {
    document.getElementById('tic').value = value;
}

function viwPage() {
    document.getElementById('acmsg').textContent = "Acess";
    //document.getElementById('view1').style.display = "block"
    document.getElementById('acmain').style.display = 'none';
}

function signupsbmtBox() {
    const sbmit = document.getElementById('signsbmt');
    var checkbox = document.getElementById("signcck");
    let signmsg = document.getElementById('signupmsg');
    let pass = document.getElementById('paswrd').value;
    let cpass = document.getElementById('cpaswrd').value;
    let cpmsg = document.getElementById('cpswrdmsg');

    if (pass == cpass) {
        cpmsg.textContent = "same";
        sbmit.disabled = false;
    } else {
        cpmsg.textContent = "*not same";
        sbmit.disabled = true;
    }

    if (checkbox.checked) {
        signmsg.textContent = "Account created!";
    }
    else {
        signmsg.textContent = "Accept term & condition";
    }
}

function checkBox() {
    var checkbox = document.getElementById("cck");
    let chck = document.getElementById('chmsg');
    let signmsg = document.getElementById('signupmsg');

    if (checkbox.checked) {
        chck.textContent = "Login Sucessfully!";
        signmsg.textContent = "Account created!";
    }
    else {
        chck.textContent = "Accept term & condition";
        signmsg.textContent = "Accept term & condition";
    }

}

function signup_open() {
    document.getElementById('SignUp').style.display = "block";
    document.getElementById('my_form').style.display = "none";
}

function signup_close() {
    document.getElementById('SignUp').style.display = "none";
    document.getElementById('my_form').style.display = "block";
    document.getElementById('signupmsg').textContent = "";
    document.getElementById('paswrd').value = '';
    document.getElementById('cpaswrd').value = '';
    document.getElementById('cpswrdmsg').textContent = '';
}

function open_form() {
    document.getElementById("my_form").style.display = "block";
    document.getElementById('mor_opt').style.display = "none";
}
function close_form() {
    document.getElementById('my_form').style.display = "none";
    let lgmsg = "";
    let chck = document.getElementById('chmsg');
    chck.textContent = lgmsg;

}

function openPage(pageName, elmnt) {
    var i, tabcontent, tlinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
}

document.getElementById("defaultOpen").click();

function input_v(value) {
    document.getElementById("data").value += value;
}

function ALL_clear() {
    let s = '';
    document.getElementById('data').value = s;
}

function backspace() {
    var data = document.getElementById('data');
    data.value = data.value.slice(0, -1);
}

function calculate() {
    try {
        document.getElementById("data").value = eval(document.getElementById('data').value);
    }
    catch (err) {
        document.getElementById("data").value = 'error';
    }
}

function exponention() {
    const inputValue = parseFloat(document.getElementById('data').value);
    if (!isNaN(inputValue)) {
        document.getElementById('data').value = Math.pow(inputValue, 2);
    }
    else {
        document.getElementById('data').value = 'Error';
    }
}

function percantage() {
    const inputValue = parseFloat(document.getElementById('data').value);
    document.getElementById('data').value = (inputValue / 100);
}

function calculateSin() {
    const inputValue = parseInt(document.getElementById('data').value);
    if (!isNaN(inputValue)) {
        document.getElementById('data').value = Math.sin(inputValue).toFixed(1);
    }
    else {
        document.getElementById('data').value = 'Error';
    }
}

function calculateCos() {
    const inputValue = parseInt(document.getElementById('data').value);
    if (!isNaN(inputValue)) {
        document.getElementById('data').value = Math.cos(inputValue).toFixed(1);
    }
    else {
        document.getElementById('data').value = 'Error';
    }
}

function calculateTan() {
    const inputValue = document.getElementById('data').value;
    if (!isNaN(inputValue)) {
        document.getElementById('data').value = Math.tan(inputValue).toFixed(1);
    }
    else {
        document.getElementById('data').value = 'Error';
    }
}

//TIC TAc part
let curntPlayer = "X";
let curentPlayer = "X";
const box = document.querySelectorAll(".board_box");
const message = document.getElementById('message');

function nxtmove(boxIndex) {
    if (!box[boxIndex].textContent) {
        box[boxIndex].textContent = curntPlayer;
        curntPlayer = curntPlayer === 'X' ? 'O' : 'X';
        message.textContent = `Player " ${curntPlayer} " turn`

        if (chckWinner()) {
            box.forEach((box) => (box.style.pointerEvents = 'none'));
            curentPlayer = curntPlayer === 'X' ? 'O' : 'X';
            message.textContent = `Player " ${curentPlayer} " Winner`

        }
        else if ([...box].every((box) => box.textContent !== '')) {
            message.textContent = "Match Draw";
        }
    }
}

function chckWinner() {
    const group = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    return group.some((combination) => {
        const [a, b, c] = combination;
        return box[a].textContent && box[a].textContent === box[b].textContent && box[a].textContent === box[c].textContent;
        message.textContent = "winner";
    });
}

function resetBoard() {
    box.forEach((box) => {
        box.textContent = '';
        box.style.pointerEvents = 'auto';
    });
    curntPlayer = 'X';
    message.textContent = "Player X turn";
}
resetBoard();

//Light part

