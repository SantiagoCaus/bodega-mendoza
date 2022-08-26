// document.addEventListener("click", e => {
//     const isdropdownButton = e.target.matches("[data-dropdown-button]")
//     if (!isdropdownButton && e.target.closest('[data-dropdown]') != null) return

//     let currentDropdown
//     if (isdropdownButton ) {
//         currentDropdown = e.target.closest('[data-dropdown]')
//         currentDropdown.classList.toggle('active')
//     }
    
//     document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//         if (dropdown === currentDropdown) return
//         dropdown.classList.remove('active')
//     })

   
// })

