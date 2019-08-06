var tank1ShootButton = document.getElementById("tank1ShootButton");
var tank1ChargeButton = document.getElementById("tank1ChargeButton");
var tank1Bullet = document.getElementById("tank1Bullet");
var tank1Rocket = document.getElementById("tank1Rocket");
var tank1HealthBar = document.getElementById("tank1HealthBar");
var tank1HealthText = document.getElementById("tank1HealthText");
var tank1ChargeBar = document.getElementById("tank1ChargeBar");
var tank1ChargeText = document.getElementById("tank1ChargeText");
var tank1 = document.getElementById("tank1");

var tank2ShootButton = document.getElementById("tank2ShootButton");
var tank2ChargeButton = document.getElementById("tank2ChargeButton");
var tank2Bullet = document.getElementById("tank2Bullet");
var tank2Rocket = document.getElementById("tank2Rocket");
var tank2HealthBar = document.getElementById("tank2HealthBar");
var tank2HealthText = document.getElementById("tank2HealthText");
var tank2ChargeBar = document.getElementById("tank2ChargeBar");
var tank2ChargeText = document.getElementById("tank2ChargeText");
var tank2 = document.getElementById("tank2");

var shotSound = document.getElementById("shotSound");
var chargeSound = document.getElementById("chargeSound");
var rocketSound = document.getElementById("rocketSound");
var explosionSound = document.getElementById("explosionSound");

var tank1Health = 100;
var tank1Charge = 0;

var tank2Health = 100;
var tank2Charge = 0;

tank1ShootButton.addEventListener("click", tank1Shoot);
tank1ChargeButton.addEventListener("click", tank1ChargeRocket);

tank2ShootButton.addEventListener("click", tank2Shoot);
tank2ChargeButton.addEventListener("click", tank2ChargeRocket);

function tank1Shoot() {
    tank1ShootButton.disabled = true;
    tank1ChargeButton.disabled = true;

    tank1Bullet.style.visibility = "visible";
    tank1Bullet.style.transform = "translateX(450px)";

    shotSound.pause();
    shotSound.currentTime = 0;
    shotSound.play();

    setTimeout(hitTank2, 1000);
}

function tank1ChargeRocket() {
    tank1ShootButton.disabled = true;
    tank1ChargeButton.disabled = true;

    if (tank1Charge < 100) {
        var charge = Math.floor(Math.random() * 21) + 12;
        tank1Charge = Math.min(tank1Charge + charge, 100);

        tank1ChargeBar.style.width = tank1Charge + "%";
        tank1ChargeText.innerHTML = "Charge: " + tank1Charge;

        if (tank1Charge == 100) {
            tank1ChargeButton.innerHTML = "Launch rocket";
        }

        chargeSound.pause();
        chargeSound.currentTime = 0;
        chargeSound.play();

        tank2ShootButton.disabled = false;
        tank2ChargeButton.disabled = false;
    }
    else {
        tank1Charge = 0;

        tank1ChargeBar.style.width = tank1Charge + "%";
        tank1ChargeText.innerHTML = "Charge: " + tank1Charge;

        tank1Rocket.style.visibility = "visible";
        tank1Rocket.style.transform = "translateX(450px)";

        rocketSound.pause();
        rocketSound.currentTime = 0;
        rocketSound.play();

        setTimeout(blastTank2, 1000);
    }
}

function tank2Shoot() {
    tank2ShootButton.disabled = true;
    tank2ChargeButton.disabled = true;

    tank2Bullet.style.visibility = "visible";
    tank2Bullet.style.transform = "scaleX(-1) translateX(450px)";

    shotSound.pause();
    shotSound.currentTime = 0;
    shotSound.play();

    setTimeout(hitTank1, 1000);
}

function tank2ChargeRocket() {
    tank2ShootButton.disabled = true;
    tank2ChargeButton.disabled = true;

    if (tank2Charge < 100) {
        var charge = Math.floor(Math.random() * 21) + 15;
        tank2Charge = Math.min(tank2Charge + charge, 100);

        tank2ChargeBar.style.width = tank2Charge + "%";
        tank2ChargeText.innerHTML = "Charge: " + tank2Charge;

        if (tank2Charge == 100) {
            tank2ChargeButton.innerHTML = "Launch rocket";
        }

        chargeSound.pause();
        chargeSound.currentTime = 0;
        chargeSound.play();

        tank1ShootButton.disabled = false;
        tank1ChargeButton.disabled = false;
    }
    else {
        tank2Charge = 0;

        tank2ChargeBar.style.width = tank2Charge + "%";
        tank2ChargeText.innerHTML = "Charge: " + tank2Charge;

        tank2Rocket.style.visibility = "visible";
        tank2Rocket.style.transform = "scaleX(-1) translateX(450px)";

        rocketSound.pause();
        rocketSound.currentTime = 0;
        rocketSound.play();

        setTimeout(blastTank1, 1000);
    }
}

function hitTank2() {
    var damage = Math.floor(Math.random() * 11) + 4;
    tank2Health = Math.max(tank2Health - damage, 0);

    tank2HealthBar.style.width = tank2Health + "%";
    tank2HealthText.innerHTML = "Health: " + tank2Health;

    tank1Bullet.style.visibility = "hidden";
    tank1Bullet.style.transform = "none";

    if (tank2Health > 0) {
        tank2ShootButton.disabled = false;
        tank2ChargeButton.disabled = false;
    }
    else {
        tank2.classList.add("explosion");
        tank2.setAttribute("src", "explosion.png");

        explosionSound.play();
    }
}

function blastTank2() {
    var damage = Math.floor(Math.random() * 51) + 25;
    tank2Health = Math.max(tank2Health - damage, 0);

    tank2HealthBar.style.width = tank2Health + "%";
    tank2HealthText.innerHTML = "Health: " + tank2Health;

    tank1Rocket.style.visibility = "hidden";
    tank1Rocket.style.transform = "none";

    tank1ChargeButton.innerHTML = "Charge rocket";

    if (tank2Health > 0) {
        tank2ShootButton.disabled = false;
        tank2ChargeButton.disabled = false;
    }
    else {
        tank2.classList.add("explosion");
        tank2.setAttribute("src", "explosion.png");

        explosionSound.play();
    }
}

function hitTank1() {
    var damage = Math.floor(Math.random() * 11) + 5;
    tank1Health = Math.max(tank1Health - damage, 0);

    tank1HealthBar.style.width = tank1Health + "%";
    tank1HealthText.innerHTML = "Health: " + tank1Health;

    tank2Bullet.style.visibility = "hidden";
    tank2Bullet.style.transform = "scaleX(-1)";

    if (tank1Health > 0) {
        tank1ShootButton.disabled = false;
        tank1ChargeButton.disabled = false;
    }
    else {
        tank1.classList.add("explosion");
        tank1.setAttribute("src", "explosion.png");

        explosionSound.play();
    }
}

function blastTank1() {
    var damage = Math.floor(Math.random() * 51) + 25;
    tank1Health = Math.max(tank1Health - damage, 0);

    tank1HealthBar.style.width = tank1Health + "%";
    tank1HealthText.innerHTML = "Health: " + tank1Health;

    tank2Rocket.style.visibility = "hidden";
    tank2Rocket.style.transform = "scaleX(-1)";

    tank2ChargeButton.innerHTML = "Charge rocket";

    if (tank1Health > 0) {
        tank1ShootButton.disabled = false;
        tank1ChargeButton.disabled = false;
    }
    else {
        tank1.classList.add("explosion");
        tank1.setAttribute("src", "explosion.png");

        explosionSound.play();
    }
}
