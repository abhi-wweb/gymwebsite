// MOBILE MENU

function toggleMenu() {
    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");
}


// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navMenu")
            .classList.remove("active");

    });

});


// JOIN MODAL

function openModal() {

    document.getElementById("joinModal")
        .classList.add("active");

}


function closeModal() {

    document.getElementById("joinModal")
        .classList.remove("active");

}


// CLOSE MODAL WHEN CLICKING OUTSIDE

document.getElementById("joinModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeModal();
    }

});


// SELECT MEMBERSHIP

function selectPlan(plan) {

    openModal();

    document.getElementById("plan").value = plan;

}


// FORM SUBMISSION

function submitForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const plan = document.getElementById("plan").value;

    const message = document.getElementById("formMessage");

    message.innerHTML =
        `Thank you, ${name}! Your ${plan} membership enquiry has been received.`;

    console.log({
        name: name,
        phone: phone,
        plan: plan
    });

    event.target.reset();

}


// BMI CALCULATOR

function calculateBMI() {

    const height =
        Number(document.getElementById("height").value);

    const weight =
        Number(document.getElementById("weight").value);

    const result =
        document.getElementById("bmiResult");


    if (!height || !weight || height <= 0 || weight <= 0) {

        result.innerHTML =
            "Please enter valid height and weight.";

        return;
    }


    const heightMeters = height / 100;

    const bmi =
        weight / (heightMeters * heightMeters);

    let category;


    if (bmi < 18.5) {

        category = "Underweight";

    } else if (bmi < 25) {

        category = "Normal Weight";

    } else if (bmi < 30) {

        category = "Overweight";

    } else {

        category = "Obesity";

    }


    result.innerHTML =
        `Your BMI is <strong>${bmi.toFixed(1)}</strong><br>
        Category: <strong>${category}</strong>`;

}


// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", function() {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,5,5,0.98)";

    } else {

        navbar.style.background =
            "rgba(10,10,10,0.92)";

    }

});