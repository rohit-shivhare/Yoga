const ScrollToTop = {
            init(buttonText = "↑", scrollThreshold = 100) {
                const btn = document.createElement("button");
                btn.id = "scrollToTopBtn";
                btn.innerText = buttonText;
                btn.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 1000;
                    display: none;
                    background-color: #333;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    padding: 10px 15px;
                    font-size: 18px;
                    cursor: pointer;
                `;
                document.body.appendChild(btn);

                window.addEventListener("scroll", () => {
                    btn.style.display = document.documentElement.scrollTop > scrollThreshold ? "block" : "none";
                });

                btn.addEventListener("click", () => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                });
            }
        };