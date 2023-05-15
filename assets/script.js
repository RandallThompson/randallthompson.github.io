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
                                                            
})