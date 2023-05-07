function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const isResponsive = true
const mediaSmall = 768
const mediaMedium = 991
const mediaLarge = 1023

let libraryUsed = [
  fontAwesome,
  2,
  { menuIcon: true, loginIcon: true}
]

const groupName = [
  "Kelechi Anomneze", "Blessing"
]

const thingsLearnt = [
  "Javascript", 
  "httpStatusCodes",
  { javaEngineChrome: v8, javaEngineFireFox: spiderMonkey },
  DOM = "Document Object Model",
  "declaration",
  "assignment",
  "const",
  "let",
  "var",
  format,
  { snake: something-user, pascal: SomethingUser, camel: somethingUser },
  individualResearch = "buttons with Javascript",
]

function alertUser(event) {
  event .preventDefault();
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
}

console.log(isResponsive, mediaSmall, mediaMedium, mediaLarge, libraryUsed, groupName, thingsLearnt)