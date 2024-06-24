const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
  sidebar.classList.toggle("translate-x-0");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Optional: close sidebar when clicking outside menu on mobile
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !menuButton.contains(e.target)) {
    sidebar.classList.add("-translate-x-full");
    sidebar.classList.remove("translate-x-0");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});


function sign_out() {
  Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel',
      reverseButtons: true
  }).then((result) => {
      if (result.isConfirmed) {
          // Jika pengguna mengonfirmasi logout
          $.removeCookie('mytoken', { path: '/' });
          Swal.fire({
              title: 'Logged Out!',
              text: 'You have been logged out successfully.',
              icon: 'success',
              timer: 1500,
              timerProgressBar: true,
              showConfirmButton: false
          }).then(() => {
              // Redirect ke halaman login setelah logout
              window.location.href = '/';
          });
      }
  });
}