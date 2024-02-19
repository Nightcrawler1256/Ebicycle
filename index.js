
const dropdowns = document.querySelectorAll(".dropdown")

dropdowns.forEach(element => {
    element.children[0].addEventListener("click", () => {
        if (element.classList.length === 1) {
            dropdowns.forEach(ele => {
                ele.classList = "dropdown"
            })
            element.classList = "dropdown show"
        }
        else {
            dropdowns.forEach(ele => {
                ele.classList = "dropdown"
            })
        }
    })
})

