document.querySelector("form").addEventListener("submit", function(event) {
        let name = document.querySelector("#name").value;
            let email = document.querySelector("#email").value;
                let message = document.querySelector("#message").value;

                    if (name === "" || email === "" || message === "") {
                            alert("Please fill out all fields before submitting.");
                                    event.preventDefault();
                                        } else if (!email.includes("@")) {
                                                alert("Please enter a valid email address.");
                                                        event.preventDefault();
                                                            }
                                                            });
                                                            
let nav = document.querySelector('nav ul');
document.querySelector('#menu').addEventListener('click', function() {
    nav.classList.toggle('show');
    });
/* Existing code... */

document.querySelector("#get-started").addEventListener('click', function() {
    alert("Thank you for your interest! We will be in touch soon.");
    });

    /* ... */
/* Existing code... */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
            e.preventDefault();

                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                                behavior: 'smooth'
                                        });
                                            });
                                            });

                                            /* ... */
/* Existing code... */

let nameField = document.querySelector("#name");
let nameError = document.querySelector("#name-error");
nameField.addEventListener("input", function() {
    if (nameField.value === "") {
            nameError.textContent = "Name is required.";
                } else {
                        nameError.textContent = "";
                            }
                            });

                            let emailField = document.querySelector("#email");
                            let emailError = document.querySelector("#email-error");
                            emailField.addEventListener("input", function() {
                                if (emailField.value === "") {
                                        emailError.textContent = "Email is required.";
                                            } else if (!emailField.value.includes("@")) {
                                                    emailError.textContent = "Please enter a valid email address.";
                                                        } else {
                                                                emailError.textContent = "";
                                                                    }
                                                                    });

                                                                    let messageField = document.querySelector("#message");
                                                                    let messageError = document.querySelector("#message-error");
                                                                    messageField.addEventListener("input", function() {
                                                                        if (messageField.value === "") {
                                                                                messageError.textContent = "Message is required.";
                                                                                    } else {
                                                                                            messageError.textContent = "";
                                                                                                }
                                                                                                });

                                                                                                /* ... */
/* ...Existing code... */

let details = document.querySelector("#story-details");
let detailsTitle = document.querySelector("#details-title");
let detailsContent = document.querySelector("#details-content");

function showDetails(story) {
    details.style.display = "block";

        // For simplicity, we're just using static content here.
            // In a real website, you might fetch this content from a server.
                if (story === "story1") {
                        detailsTitle.textContent = "Story 1";
                                detailsContent.textContent = "Full details of story 1...";
                                    } else if (story === "story2") {
                                            detailsTitle.textContent = "Story 2";
                                                    detailsContent.textContent = "Full details of story 2...";
                                                        }
                                                        }

                                                        function hideDetails() {
                                                            details.style.display = "none";
                                                            }

                                                            /* ...Existing code... */
                                                            

