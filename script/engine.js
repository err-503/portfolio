let mute = "false";
let element = document.getElementById("darkmodetoggleable");

if(localStorage.getItem('darkmodestatus') == 'false'){
    element.classList.remove("dark-mode");
} else {
    element.classList.add("dark-mode");
}

function darkmodetoggle(){
    if(localStorage.getItem('darkmodestatus') == 'false'){
        if(mute == "false"){
            let audio = new Audio("./assets/audio/click" + (Math.floor(Math.random() * 7) + 1) + ".mp3");
            audio.load();
            audio.play();
        }
        element.classList.add("dark-mode");
        localStorage.setItem('darkmodestatus', 'true');
    } else {
        if(mute == "false"){
            let audio = new Audio("./assets/audio/click" + (Math.floor(Math.random() * 7) + 1) + ".mp3");
            audio.load();
            audio.play();
        }
        element.classList.remove("dark-mode");
        localStorage.setItem('darkmodestatus', 'false');
    }
}

function soundeffects(){
    let audio1 = new Audio("./assets/audio/soundon" + (Math.floor(Math.random() * 2) + 1) + ".mp3");
    let audio2 = new Audio("./assets/audio/soundoff" + (Math.floor(Math.random() * 2) + 1) + ".mp3");
    let ond = document.getElementById("sound-on");
    let offd = document.getElementById("sound-off");
    let onm = document.getElementById("sound-on-mobile");
    let offm = document.getElementById("sound-off-mobile");
    switch(ond.style.width){
        case '24px':
            ond.style.width = '0px';
            onm.style.width = '0px';
            audio2.load();
            audio2.play();
            offd.style.width = '24px';
            offm.style.width = '24px';
            return mute = "true";
        case '0px':
            ond.style.width = '24px';
            onm.style.width = '24px';
            audio1.load();
            audio1.play();
            offd.style.width = '0px';
            offm.style.width = '0px';
            return mute = "false";
        default:
            ond.style.width = '24px';
            onm.style.width = '24px';
            offd.style.width = '0px';
            offm.style.width = '0px';
            return mute = "false";
    }
}

function mobilenavtoggle(){
    let window = document.getElementById("mobile_portal");
    let ham1 = document.getElementById("mobile_hamburger_close");
    let ham2 = document.getElementById("mobile_hamburger_open")
    let audio3 = new Audio("./assets/audio/menu" + (Math.floor(Math.random() * 4) + 1) + ".mp3")
    switch(window.style.display){
        case 'none':
            window.style.display = "block";
            window.style.overflow = "auto";
            ham1.style.display = "block";
            ham2.style.display = "none";
            document.body.style.overflow = "hidden";
            if(mute == "false"){
                audio3.load();
                audio3.play();
            }
            break;
        case 'block':
            window.style.display = "none";
            window.style.overflow = "none";
            ham1.style.display = "none";
            ham2.style.display = "block";
            document.body.style.overflow = "auto";
            if(mute == "false"){
                audio3.load();
                audio3.play();
            }
            break;
        default:
            window.style.display = "none";
            window.style.overflow = "none";
            ham1.style.display = "none";
            ham2.style.display = "block";
            document.body.style.overflow = "auto";
            break;
    }
}