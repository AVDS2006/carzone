/* Search Cars */

function searchCar() {

    let input = document
        .getElementById("search")
        .value
        .toLowerCase();

    let cars = document
        .getElementsByClassName("car-card");

    for (let i = 0; i < cars.length; i++) {

        let name = cars[i]
            .getElementsByTagName("h2")[0]
            .innerText
            .toLowerCase();

        if (name.includes(input)) {

            cars[i].style.display = "block";

        } else {

            cars[i].style.display = "none";

        }
    }
}


/* Car Information */

function showCar(car) {

    if (car === "BMW") {

        alert(
            "BMW\n\n" +
            "BMW is known for luxury, performance " +
            "and modern design."
        );

    }

    else if (car === "Tesla") {

        alert(
            "Tesla\n\n" +
            "Tesla is known for electric vehicles " +
            "and advanced technology."
        );

    }

    else if (car === "Mercedes") {

        alert(
            "Mercedes\n\n" +
            "Mercedes offers luxury, comfort " +
            "and powerful performance."
        );

    }

    else if (car === "Audi") {

        alert(
            "Audi\n\n" +
            "Audi combines modern design, technology " +
            "and performance."
        );

    }
}


/* Blog */

function readBlog(topic) {

    alert(
        "Auto Blog: " + topic +
        "\n\n" +
        "This is a simple automobile blog about " +
        topic + "."
    );

}


/* Contact Form */

let form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        let name =
            document.getElementById("name").value;

        alert(
            "Thank you, " + name +
            "!\nYour message has been submitted."
        );

        form.reset();

    });

}