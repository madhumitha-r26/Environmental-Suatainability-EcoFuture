const navbarToggler = document.querySelector('.navbar-toggler');
const navbarHamburger = document.querySelector('#navbar-hamburger');
const navbarClose = document.querySelector('#navbar-close');

navbarToggler.addEventListener('click', () => {
  navbarHamburger.classList.toggle('d-none');
  navbarClose.classList.toggle('d-block');
});

function donate() {
  var amount = document.getElementById("exampleFormControlInput1").value;
  alert("Thanks for donating Rs." + amount);
  var modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
  modal.hide();
}