// Select all elements with the class 'panel' and store them in the variable 'panels'.
// querySelectorAll returns a NodeList of all matching elements in the document.
const panels = document.querySelectorAll('.panel')

// Loop over each panel element in the NodeList using forEach.
// forEach allows us to run a function on each item in the list.
panels.forEach(panel => {
    // Add a click event listener to the current panel.
    // addEventListener listens for the specified event (click) and runs the given function when it occurs.
    panel.addEventListener('click', () => {
        // Call the function to remove the 'active' class from all panels.
        removeActiveClasses()
        // Add the 'active' class to the panel that was clicked.
        // classList.add adds a specified class to the element's list of classes.
        panel.classList.add('active')
    })
})

// Define a function to remove the 'active' class from all panels.
function removeActiveClasses() {
    // Loop through each panel again.
    panels.forEach(panel => {
        // Remove the 'active' class from the current panel.
        // classList.remove removes a specified class from the element's list of classes.
        panel.classList.remove('active')
    })
}