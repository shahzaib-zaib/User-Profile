const github = new Github();

const ui = new UI();

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;

  if (userText !== "") {
    github
      .getUser(userText)
      .then(response => response.json())
      .then(data => {
        if (data.message === "Not Found") {
          ui.showAlert("User not found", "alert alert-danger");
        } else {
          ui.showProfile(data);
        }
      });
  } else {
    ui.clearProfile();
  }
});