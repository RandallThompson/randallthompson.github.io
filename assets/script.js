// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
            e.preventDefault();

                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                                behavior: 'smooth'
                                        });
                                            });
                                            });

                                            // Navigation highlight
                                            let mainNavLinks = document.querySelectorAll("nav ul li a");

                                            window.addEventListener("scroll", event => {
                                              let fromTop = window.scrollY;

                                                mainNavLinks.forEach(link => {
                                                    let section = document.querySelector(link.hash);

                                                        if (
                                                              section.offsetTop <= fromTop &&
                                                                    section.offsetTop + section.offsetHeight > fromTop
                                                                        ) {
                                                                              link.classList.add("current");
                                                                                  } else {
                                                                                        link.classList.remove("current");
                                                                                            }
                                                                                              });
                                                                                              });

                                                                                              // Form validation
                                                                                              let form = document.querySelector("form");
                                                                                              let nameInput = document.querySelector("input[type='text']");
                                                                                              let emailInput = document.querySelector("input[type='email']");
                                                                                              let messageInput = document.querySelector("textarea");

                                                                                              form.addEventListener("submit", function(event) {
                                                                                                if (!nameInput.value || !emailInput.value || !messageInput.value) {
                                                                                                    alert("Please fill in all fields.");
                                                                                                        event.preventDefault();
                                                                                                          }
                                                                                                          });
                                                                                                          