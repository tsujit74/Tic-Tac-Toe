//TEXT-U
let textU = document.querySelector('#Text1');
let textUAnz = document.querySelector('#TextAnz');
let upper = document.querySelector('#uppr');
let lower = document.querySelector('#lowr');
let frstUp = document.querySelector('#fstUp');
let extraSpaces = document.querySelector('#extraSpace');
let clear = document.querySelector('#tclr');
let cpy = document.querySelector('#cpy');
let lngth = document.querySelector('#lnth');
let wordCnt = document.querySelector('#wrdCnt');
let sttus = document.querySelector('#status');

function givenInput() {
    let inputFields = ['sign_name','sign_Lname', 'sign_email', 'con_date', 'gender','sign_Phone','sign_City','sign_Pin','password'];
    let showFields = ['shwName','shwLast', 'shwEmail', 'shwDate', 'shwGender','shwPhone','shwCity','shwPin' ,'shwPassword'];
    document.getElementById('usrname').value=document.getElementById("sign_name").value;
    inputFields.forEach((field, index) => {
        let inputData = document.getElementById(field);
        let showData = document.getElementById(showFields[index]);

        if (inputData || showData) {
            if (field == 'gender') {
                let genderMale = document.getElementById('genderMale');
                let genderFemale = document.getElementById('genderFemale');
                let other = document.getElementById('other');
                showData.value = genderMale.checked ? genderMale.value : genderFemale.checked ? genderFemale.value : other.checked ? other.value : '';
            } else {
                showData.value = inputData.value;
            }
        } else {
            console.error(`Input or show element not found for field: ${field}`);
        }
    });
}

const inputs = document.querySelectorAll('.userProfile input');
    function toggleEditMode() {
        inputs.forEach(input => {
            input.readOnly = false;
        });
        document.getElementById('userStatus').innerText = 'Edit mode is on';
    }

    function saveChanges() {
        inputs.forEach(input => {
            input.readOnly = true;
            document.getElementById("usrname").value = document.getElementById("shwName").value;
        });
        document.getElementById('userStatus').innerText = 'Changes are saved!';
    }

    function logout() {
        window.location.href = 'index.html';
    }

//About PArt
function toggleContent(contentId) {
    let content = document.getElementById(contentId);
    if (content.style.display == "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
//TExt-U part
textU.addEventListener("input", function () {
    textUAnz.textContent = textU.value;
    let inputText = textU.value;
    let length = inputText.length;
    lngth.innerHTML = length;

    inputText = inputText.trim();
    let words = inputText.split(/\s+/);
    words = words.filter(function (word) {
        return word.length > 0;
    })

    let wordCount = words.length;
    wordCnt.innerHTML = wordCount;
    sttus.innerHTML = "";

    if (length == 25000) {
        sttus.textContent = "Character Limit Reached.";
    }
});

upper.addEventListener("click", function () {
    let inputText = textU.value;
    let length = inputText.length;
    if (length > 0) {
        textU.value = textU.value.toUpperCase();
        sttus.innerHTML = "Converted to Uper Case.."
    } else {
        sttus.innerHTML = "Enter some text!";
    }
})
lower.addEventListener("click", function () {
    let inputText = textU.value;
    let length = inputText.length;
    if (length > 0) {
        textU.value = textU.value.toLowerCase();
        sttus.innerHTML = "Converted to lower Case.."
    } else {
        sttus.innerHTML = "Enter some text!";
    }
})
frstUp.addEventListener("click", function () {
    let inputValue = textU.value;
    let inputText = textU.value;
    let length = inputText.length;
    if (length > 0) {
        textU.value = inputValue.replace(/\b\w/g, (match) => match.toUpperCase());
        sttus.innerHTML = "Sucess.."
    } else {
        sttus.innerHTML = "Enter some text!";
    }
})
clear.addEventListener("click", function () {
    let inputText = textU.value;
    let length = inputText.length;
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
    let inputValue = document.getElementById('Text1');
    // let textCpy = inputValue.value;
    let inputText = textU.value;
    let length = inputText.length;
    if (length > 0) {
        navigator.clipboard.writeText(inputValue.value);
        sttus.innerHTML = "Copied..";
    } else {
        sttus.innerHTML = "Enter some text!";
    }
})
extraSpaces.addEventListener("click", function () {
    let inputValue = textU.value;
    let inputText = textU.value;
    let length = inputText.length;
    if (length > 0) {
        textU.value = inputValue.replace(/\s+/g, " ");
        sttus.innerHTML = "Space Removed.."
    } else {
        sttus.innerHTML = "Enter some text!";
    }
});

const navIcon = document.getElementById('nav-btn');
const navMnu = document.getElementById('nav-mnu');
const cntntbdy = document.getElementById('cntnt');

navIcon.addEventListener("click", function () {
    if (navMnu.style.display == "block") {
        navMnu.style.display = "none";
    } else {
        navMnu.style.display = "block";
    }
});

function submitE() {
    let sendMsg = "Name:";
    let name1 = document.getElementById('name').value;
    let email2 = document.getElementById('email').value;
    let msg3 = document.getElementById('msg').value;

    sendMsg += name1 + "\nemail:" + email2;
    alert(sendMsg);
}

function validateLogin() {
    const acEmail = document.getElementById('acess1').value;
    let acPassword = document.getElementById('acess2').value;
    let adminPassword = document.getElementById('admin1').value;

    if (adminPassword.length === 0) {
        if (acEmail.length !== 0) {
            document.getElementById('acemsg').textContent = "";
            if (acPassword.length !== 0) {
                document.getElementById('acpmsg').textContent = "";
                if (acPassword.length >= 5) {
                    // Continue with successful login logic
                    document.getElementById('ascnt1').style.display = "none";
                    document.getElementById('viewPage').style.display = "block";
                    document.getElementById('allitem').style.display = 'block';
                    document.getElementById('overlay').style.display = "none";
                    let userName = acEmail;
                    document.getElementById('usrname').value = userName;
                    document.getElementById('username').value = "Welcome " + userName;
                } else {
                    document.getElementById('acmsg').textContent = "Password must be 5 numbers or characters";
                }
            } else {
                document.getElementById('acpmsg').textContent = "Password is required!";
                document.getElementById('acmsg').textContent = "";
            }
        } else {
            document.getElementById('acemsg').textContent = "Name is required";
            document.getElementById('acmsg').textContent = "";
        }
    } else if (adminPassword === "****") {
        // Continue with admin login logic
        document.getElementById('ascnt1').style.display = "none";
        document.getElementById('viewPage').style.display = "block";
        document.getElementById('allitem').style.display = 'block';
        document.getElementById('username').value = "Welcome ADMIN";
        document.getElementById('usrname').value = "ADMIN";
        document.getElementById('lgps').value = adminPassword;
        document.getElementById('overlay').style.display = "none";
    }
}

document.getElementById("lbt").addEventListener("click", validateLogin);

document.getElementById('ascnt1').addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        validateLogin();
    }
});


function spcl() {
    document.getElementById('admin1').style.display = "none";
    document.getElementById('acmsg').textContent = "";
}

function nam(value) {
    document.getElementById('tic').value = value;
}

function viwPage() {
    document.getElementById('acmsg').textContent = "Acess";
    document.getElementById('acmain').style.display = 'none';
}

//SIGNUP FORM

document.getElementById('SignUp').addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        signupsbmtBox();
    }
});

function samePass() {
    let pass = document.getElementById('password').value;
    let cpass = document.getElementById('cpaswrd').value;
    let cpmsg = document.getElementById('cpswrdmsg');
    if (pass == cpass) {
        cpmsg.textContent = "same";
    } else {
        cpmsg.textContent = "not same";
    }
}

function signupsbmtBox() {
    let checkbox = document.getElementById("signcck");
    let signmsg = document.getElementById('signupmsg');
    let pass = document.getElementById('password').value;
    let cpass = document.getElementById('cpaswrd').value;
    let cpmsg = document.getElementById('cpswrdmsg');
    let name = document.getElementById('sign_name').value;
    let email = document.getElementById('sign_email').value;
    let date = document.getElementById('con_date').value;

    if (name != '' && email != '' && date != '') {
        if (pass == cpass) {
            if (checkbox.checked) {
                document.getElementById('SignUp').style.display = "none";
                document.getElementById('password').value = "";
                document.getElementById('cpaswrd').value = "";
            } else {
                signmsg.textContent = "Accept term & condition";
            }
        } else {
            signmsg.textContent = "Password not same";
        }
    } else {
        alert("All field required!");
    }
}

document.getElementById('my_form').addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        checkBox();
    }
});

function checkBox() {
    let checkbox = document.getElementById("cck");
    let chck = document.getElementById('chmsg');
    let signmsg = document.getElementById('signupmsg');
    let lgem = document.getElementById('lgem');
    let lgpass = document.getElementById('lgps');
    let acpass = document.getElementById('acess2').value;
    let spclA = document.getElementById('admin1').value;
    let pass = document.getElementById('password').value;
    if (checkbox.checked) {
        if (lgpass.value == acpass || lgpass.value == spclA) {
            document.getElementById('usrname').value = lgem.value;
            close_form();
        } else {
            chck.textContent = "Invalid Password";
        }
    }
    else {
        chck.textContent = "Accept term & condition";
        signmsg.textContent = "Accept term & condition";
    }
}

function signup_open() {
    document.getElementById('SignUp').style.display = "block";
    close_form();
}

function signup_close() {
    document.getElementById('SignUp').style.display = "none";
    open_form()
    document.getElementById('signupmsg').textContent = "";
    document.getElementById('password').value = '';
    document.getElementById('cpaswrd').value = '';
    document.getElementById('cpswrdmsg').textContent = '';
}

function open_form() {
    document.getElementById("my_form").style.display = "block";
}
function close_form() {
    document.getElementById('my_form').style.display = "none";
    let lgmsg = "";
    let chck = document.getElementById('chmsg');
    chck.textContent = lgmsg;

}

document.addEventListener("DOMContentLoaded", function () {
    let formSubmitted = false;
    document.getElementById("acmain").style.display = "none";
    setTimeout(function () {
        if (!formSubmitted) {
             document.getElementById("overlay").style.display = "block";
             document.getElementById("acmain").style.display = "block";
        }
        
        document.body.addEventListener("click", function () {
            closeForm();
        });

        document.getElementById("acmain").addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }, 5000);

    function closeForm() {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("acmain").style.display = "none";
        document.getElementById('viewPage').style.display = "none";
    
        setTimeout(function () {
            document.getElementById("overlay").style.display = "none";
            document.getElementById("acmain").style.display = "block";
            formSubmitted = true;
        }, 10000);
    }
});

//Function of close First Acesss page


//PAGE CHANGE
function openPage(pageName, elmnt) {
    let i, tabcontent, tlinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tlinks = document.getElementsByClassName("tlink");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tlinks[i].style.color = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.color = "yellow";
}
document.getElementById("defaultOpen").click();


//CALCUALTOR PART

function openPageCalc(pageName, elmnt) {
    let i, tab, calctlink;
    tab = document.getElementsByClassName('tab');
    calctlink = document.getElementsByClassName('clctlink');
    for (i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
        calctlink[i].style.color = "";
    }

    document.getElementById(pageName).style.display = "block";
    elmnt.style.color = "yellow";
}
document.getElementById("defaultOpencalc").click();

//
function input_v(value) {
    document.getElementById("data").value += value;
}

function ALL_clear() {
    let s = '';
    document.getElementById('data').value = s;
}

function backspace() {
    let data = document.getElementById('data');
    data.value = data.value.slice(0, -1);
}

function calculateCalc() {
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

let playerInfo = document.getElementById('info');
let showPlayer = document.getElementById('showPlayer');
let player1 = document.getElementById('playerName1');
let player2 = document.getElementById('playerName2');
let name1 = document.getElementById('name1');
let name2 = document.getElementById('name2');

let curntPlayer = "X";
let curentPlayer = "X";
const box = document.querySelectorAll(".board_box");
const message = document.getElementById('message');
let resetbord = document.getElementById('rstboard');

function startGame() {
    playerInfo.style.display = "block";
    resetBoard();
}

function playerNam1() {
    name1.value = player1.value;
    name2.value = player2.value;
    playerInfo.style.display = 'none';
    showPlayer.style.display = "block";
}

function nxtmove(boxIndex) {
    if (!box[boxIndex].textContent) {
        box[boxIndex].textContent = curntPlayer;
        curntPlayer = curntPlayer === 'X' ? 'O' : 'X';
        message.textContent = `Player " ${curntPlayer} " turn`;

        if (chckWinner()) {
            highLightWinner();
            box.forEach((box) => (box.style.pointerEvents = 'none'));
            if (curntPlayer != "X") {
                name1.value = name1.value.toUpperCase();
                name1.style.color = "red";
                message.textContent = `Player "${name1.value}" Winner`;
            } else {
                name2.value = name2.value.toUpperCase();
                name2.style.color = "red";
                message.textContent = `Player "${name2.value}" Winner`;
            }
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
    });
}

function highLightWinner() {
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
        if (box[a].textContent && box[a].textContent === box[b].textContent && box[a].textContent === box[c].textContent) {
            box[a].style.color = "red";
            box[b].style.color = "red";
            box[c].style.color = "red";
        }
    });
}

function resetBoard() {
    box.forEach((box) => {
        box.textContent = '';
        box.style.pointerEvents = 'auto';
        box.style.color = "white";
    });
    curntPlayer = 'O';
    message.textContent = "Player X turn";
    name1.style.color = "black";
    name2.style.color = "black";
}
resetBoard();

//INTREST PART SCRIPT
function calculate() {
    let amount = document.getElementById('number1').value;
    let rate = document.getElementById('number2').value;
    let month = document.getElementById('number3').value;
    let day = document.getElementById('number4').value;
    let shwInterest = document.getElementById('interest');
    let principal = document.getElementById('principal');
    let total = document.getElementById('total');

    let amountval = parseFloat(amount);
    let rateval = parseFloat(rate);
    let monthval = parseFloat(month);
    let dayval = parseFloat(day);

    if ((amountval > 0 && rateval > 0)) {
        let intrstMonth = (amountval * rateval * monthval) / 100;
        let intrstDay = (amountval * rateval * dayval) / (30 * 100);

        let intrst = intrstMonth + intrstDay;

        shwInterest.textContent = "Interest Earned: ₹ " + intrst.toFixed(2);
        principal.textContent = "Principal: ₹" + amountval.toFixed(2);
        let totalSum = intrst + amountval;
        total.textContent = "Total Amount: ₹" + totalSum.toFixed(2);
    } else {
        shwInterest.textContent = "Please fill all Field."
    }
}

function disableMonth() {
    let mnthmsg = document.getElementById('mnthmsg');
    let mnthInput = document.getElementById('number3');
    let enablemnth = document.getElementById('enableMonth');
    mnthInput.disabled = !enablemnth.checked;
    if (!enablemnth.checked) {
        mnthInput.value = 0;
        mnthInput.style.backgroundColor = "#630d3272";
        mnthmsg.textContent = "Off"
    } else {
        mnthmsg.textContent = "On"
        mnthInput.value = 0;
        mnthInput.style.backgroundColor = "#43082237";
    }
}

function disableDay() {
    let dayMsg = document.getElementById('daymsg');
    let daysInput = document.getElementById('number4');
    let enableDays = document.getElementById('enableDays');
    daysInput.disabled = !enableDays.checked;
    if (!enableDays.checked) {
        daysInput.value = 0;
        daysInput.style.backgroundColor = "#630d3272";
        dayMsg.textContent = "Off"
        calculate();
    } else {
        dayMsg.textContent = "On"
        daysInput.value = 0;
        daysInput.style.backgroundColor = "#43082237";
        calculate();
    }
}
//Show password

let chckPass = document.getElementById('chckpass');
let inptPass = document.getElementById('acess2');

chckPass.addEventListener("click", function () {
    if (inptPass.type === "password") {
        inptPass.type = "text";
    } else {
        inptPass.type = "password";
    }
})

//text Animation

const textToType = "5UJ1T";
const typingContainer = document.getElementById("txtTyp");
let charIndex = 0;
let typingTimeout;

function typeText() {
    typingContainer.innerHTML = textToType.slice(0, charIndex).split('').map(char => `<font color="${getRandomColor()}">${char}</font>`).join('');
    charIndex++;

    if (charIndex > textToType.length) {
        charIndex = 1;
    }
    typingTimeout = setTimeout(typeText, 900);
}

function getRandomColor() {
    const colors = ["#f23566", "#ff9966", "#0f52ba", "#753422", "#00CID4"];
    return colors[Math.floor(Math.random() * colors.length)];
}

typeText();