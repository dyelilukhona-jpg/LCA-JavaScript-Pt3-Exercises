// --- Grab all elements from the DOM ---
const profileCard  = document.getElementById("profileCard");
const profileName  = document.getElementById("profileName");
const profileRole  = document.getElementById("profileRole");
const profileImage = document.getElementById("profileImage");

const updateNameBtn   = document.getElementById("updateNameBtn");
const updateRoleBtn   = document.getElementById("updateRoleBtn");
const toggleStatusBtn = document.getElementById("toggleStatusBtn");


//Task 2: Update Name
updateNameBtn.addEventListener("click", () => {
  const newName = prompt("Enter a new name:");

  if (newName && newName.trim() !== "") {
    profileName.textContent = newName.trim();
  }
});


//Task 2: Update Role
updateRoleBtn.addEventListener("click", () => {
  const newRole = prompt("Enter a new role:");

  if (newRole && newRole.trim() !== "") {
    profileRole.textContent = newRole.trim();
  }
});


//Task 3: Toggle Active Status
toggleStatusBtn.addEventListener("click", () => {
  profileCard.classList.toggle("active-status");
});

//Task 4 (Bonus): Change Profile Image
const changeImageBtn = document.getElementById("changeImageBtn");
    changeImageBtn.addEventListener("click", () => {
      const newImageUrl = prompt("Enter a new image URL:");

      if (newImageUrl && newImageUrl.trim() !== "") {
        profileImage.src = newImageUrl.trim();
      }
    });