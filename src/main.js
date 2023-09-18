const menuProject = document.getElementById("quick-actions");
const iconProject = document.getElementById("icon-quick");
iconProject.addEventListener("click", function() {
    document.getElementById("quick-actions").classList.toggle("hidden");
    iconProject.ariaPressed = false; 

});


const menuDashboard = document.getElementById("my-dashboard");
const optionDashboard = document.getElementById("option-my-dashboard");
menuDashboard.addEventListener("click", function() {
    document.getElementById("option-my-dashboard").classList.toggle("hidden");
    menuDashboard.ariaPressed = false;
    menuDashboard.style.color = "#00AC9A";
});


const unique = document.getElementById("unique-dashboard");
const optionUnique = document.getElementById("option-unique-dashboard");
unique.addEventListener("click", function() {
    document.getElementById("option-unique-dashboard").classList.toggle("hidden");
    unique.ariaPressed = false;
    unique.style.color = "#00AC9A";
});

const applications = document.getElementById("applications");
const optionApplications = document.getElementById("option-applications");
applications.addEventListener("click", function() {
    document.getElementById("option-applications").classList.toggle("hidden");
    applications.ariaPressed = false;
    applications.style.color = "#00AC9A";
});

const crafted = document.getElementById("crafted");
const optionCrafted = document.getElementById("option-crafted");
crafted.addEventListener("click", function() {
    document.getElementById("option-crafted").classList.toggle("hidden");
    crafted.ariaPressed = false;
    crafted.style.color = "#00AC9A";
});


const account = document.getElementById("account");
const optionAccount = document.getElementById("option-account");
account.addEventListener("click", function() {
    document.getElementById("option-account").classList.toggle("hidden");
    account.ariaPressed = false;
    account.style.color = "#00AC9A";
});

const authentication = document.getElementById("authentication");
const optionAuthentication = document.getElementById("option-authentication");
authentication.addEventListener("click", function() {
    document.getElementById("option-authentication").classList.toggle("hidden");
    authentication.ariaPressed = false;
    authentication.style.color = "#00AC9A";
});


const level0 = document.getElementById("level-0");
const level1 = document.getElementById("option-level-0")
const level2 = document.getElementById("option-level-1");
const level3 = document.getElementById("option-level-2");
const clickLevel1 = document.getElementById("click-level-1")
const clickLevel2 = document.getElementById("click-level-2")
level0.addEventListener("click", function() {
    document.getElementById("option-level-0").classList.toggle("hidden");
    level0.ariaPressed = false;
    level0.style.color = "#00AC9A";
});
clickLevel1.addEventListener("click", function() {
    document.getElementById("option-level-1").classList.toggle("hidden");
    clickLevel1.ariaPressed = false;
    clickLevel1.style.color = "#00AC9A";
});
clickLevel2.addEventListener("click", function() {
    document.getElementById("option-level-2").classList.toggle("hidden");
    clickLevel2.ariaPressed = false;
    clickLevel2.style.color = "#00AC9A";
});


const setup = document.getElementById("setup-project");
const iconOpen = document.getElementById("icon-open-setup");
const iconClose = document.getElementById("icon-close-setup")
iconOpen.addEventListener("click", function() {
    document.getElementById("setup-project").classList.toggle("hidden");
});
iconClose.addEventListener("click", function() {
    document.getElementById("setup-project").classList.toggle("hidden"); 
});

const schedule = document.getElementById("schedule");
const openSchedule = document.getElementById("open-schedule");
const closeSchedule = document.getElementById("icon-close-schedule")
openSchedule.addEventListener("click", function() {
    document.getElementById("schedule").classList.toggle("hidden");
});
closeSchedule.addEventListener("click", function() {
    document.getElementById("schedule").classList.toggle("hidden"); 
});



const iconDown1 = document.querySelector("#my-dashboard");
  const icon1 = document.querySelector("#icon-my-dashboard");

  iconDown1.addEventListener("click", function() {
    // Kiểm tra lớp của biểu tượng và thay đổi nó
    if (icon1.classList.contains("fa-chevron-right")) {
      icon1.classList.remove("fa-chevron-right");
      icon1.classList.add("fa-chevron-down");
    } else {
      icon1.classList.remove("fa-chevron-down");
      icon1.classList.add("fa-chevron-right");
    }
  });

  const iconDown2 = document.querySelector("#unique-dashboard");
  const icon2 = document.querySelector("#icon-unique");

  iconDown2.addEventListener("click", function() {
    // Kiểm tra lớp của biểu tượng và thay đổi nó
    if (icon2.classList.contains("fa-chevron-right")) {
      icon2.classList.remove("fa-chevron-right");
      icon2.classList.add("fa-chevron-down");
    } else {
      icon2.classList.remove("fa-chevron-down");
      icon2.classList.add("fa-chevron-right");
    }
  });

  const iconDown3 = document.querySelector("#applications");
  const icon3 = document.querySelector("#icon-applications");

  iconDown3.addEventListener("click", function() {
    // Kiểm tra lớp của biểu tượng và thay đổi nó
    if (icon3.classList.contains("fa-chevron-right")) {
      icon3.classList.remove("fa-chevron-right");
      icon3.classList.add("fa-chevron-down");
    } else {
      icon3.classList.remove("fa-chevron-down");
      icon3.classList.add("fa-chevron-right");
    }
  });

  const iconDown4 = document.querySelector("#crafted");
  const icon4 = document.querySelector("#icon-crafted");

  iconDown4.addEventListener("click", function() {
    // Kiểm tra lớp của biểu tượng và thay đổi nó
    if (icon4.classList.contains("fa-chevron-right")) {
      icon4.classList.remove("fa-chevron-right");
      icon4.classList.add("fa-chevron-down");
    } else {
      icon4.classList.remove("fa-chevron-down");
      icon4.classList.add("fa-chevron-right");
    }
  });

  const iconDown5 = document.querySelector("#account");
  const icon5 = document.querySelector("#icon-account");

  iconDown5.addEventListener("click", function() {
    // Kiểm tra lớp của biểu tượng và thay đổi nó
    if (icon5.classList.contains("fa-chevron-right")) {
      icon5.classList.remove("fa-chevron-right");
      icon5.classList.add("fa-chevron-down");
    } else {
      icon5.classList.remove("fa-chevron-down");
      icon5.classList.add("fa-chevron-right");
    }
  });

  const iconDown6 = document.querySelector("#authentication");
  const icon6 = document.querySelector("#icon-authentication");

  iconDown6.addEventListener("click", function() {
    // Kiểm tra lớp của biểu tượng và thay đổi nó
    if (icon6.classList.contains("fa-chevron-right")) {
      icon6.classList.remove("fa-chevron-right");
      icon6.classList.add("fa-chevron-down");
    } else {
      icon6.classList.remove("fa-chevron-down");
      icon6.classList.add("fa-chevron-right");
    }
  });

  const iconDown7 = document.querySelector("#level-0");
  const icon7 = document.querySelector("#icon-level-0");

  iconDown7.addEventListener("click", function() {
    // Kiểm tra lớp của biểu tượng và thay đổi nó
    if (icon7.classList.contains("fa-chevron-right")) {
      icon7.classList.remove("fa-chevron-right");
      icon7.classList.add("fa-chevron-down");
    } else {
      icon7.classList.remove("fa-chevron-down");
      icon7.classList.add("fa-chevron-right");
    }
  });

  const iconDown8 = document.querySelector("#click-level-1");
  const icon8 = document.querySelector("#icon-level-1");

  iconDown8.addEventListener("click", function() {
    // Kiểm tra lớp của biểu tượng và thay đổi nó
    if (icon8.classList.contains("fa-chevron-right")) {
      icon8.classList.remove("fa-chevron-right");
      icon8.classList.add("fa-chevron-down");
    } else {
      icon8.classList.remove("fa-chevron-down");
      icon8.classList.add("fa-chevron-right");
    }
  });

  const iconDown9 = document.querySelector("#click-level-2");
  const icon9 = document.querySelector("#icon-level-2");

  iconDown9.addEventListener("click", function() {
    // Kiểm tra lớp của biểu tượng và thay đổi nó
    if (icon9.classList.contains("fa-chevron-right")) {
      icon9.classList.remove("fa-chevron-right");
      icon9.classList.add("fa-chevron-down");
    } else {
      icon9.classList.remove("fa-chevron-down");
      icon9.classList.add("fa-chevron-right");
    }
  });

const myNotes = document.getElementById("my-notes");
const openNote = document.getElementById("icon-open-my-notes");
const closeNote = document.getElementById("icon-close-my-notes")
openNote.addEventListener("click", function() {
    document.getElementById("my-notes").classList.toggle("hidden");
});
closeNote.addEventListener("click", function() {
    document.getElementById("my-notes").classList.toggle("hidden"); 
});