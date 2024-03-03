const inputLogic = () => {
  const searchBtn = document.getElementById("search-btn");
  const searchBox = document.getElementById("search-box");
  searchBtn.addEventListener("click", () => {
    // eraseData();
    const user = searchBox.value.trim();
    stalk(user);
  });
  searchBox.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
      const user = searchBox.value.trim();
      stalk(user);
    }
  });
};

async function stalk(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (response.ok) {
      const jsonList = await response.json();
      //   displaying user's data
      displayData(jsonList);
    } else {
      throw new Error(`Please Enter Valid Username`);
    }
  } catch (error) {
    const errMsg = error.message;
    // function for errorpopup
    errorPopup(errMsg);
  }
}

function errorPopup(errMsg) {
  const profileCard = document.getElementById("profile-card");
  profileCard.style.animation = "successPopup 600ms linear";
  profileCard.style.border = "none";
  profileCard.style.display = "flex";
  const details = document.getElementById("details");
  details.style.display = "none";
  const avatarUrl = document.getElementById("logo");
  avatarUrl.style.display = "none";
  const cross = document.getElementById("x-mark");
  cross.addEventListener("click", () => {
    // profileCard.style.animation = "successPopdn 600ms linear";
    // profileCard.style.transform = "translateY(-1000px)";
    // isPopupOpen = false;
    profileCard.style.display = "none";
  });
  const profileName = document.getElementById("profile-name");
  profileName.innerHTML = errMsg;
  const profileUserName = document.getElementById("profile-username");
  profileUserName.innerHTML = "Error!";
  const bio = document.getElementById("bio");
  bio.innerHTML = "";
}

const displayData = (jsonList) => {
  console.log(jsonList);
  const profileCard = document.getElementById("profile-card");
  profileCard.style.animation = "successPopup 600ms linear";
  profileCard.style.display = "flex";
  profileCard.style.border = "5px solid white";
  const details = document.getElementById("details");
  details.style.display = "flex";
  const cross = document.getElementById("x-mark");
  cross.addEventListener("click", () => {
    // profileCard.style.animation = "successPopdn 600ms linear";
    // profileCard.style.transform = "translateY(-1000px)";
    // isPopupOpen = false;
    profileCard.style.display = "none";
  });

  const avatarUrl = document.getElementById("logo");
  avatarUrl.style.display = "block";
  avatarUrl.src = jsonList.avatar_url;

  const profileName = document.getElementById("profile-name");
  profileName.innerHTML = jsonList.name ? jsonList.name : "";

  const profileUserName = document.getElementById("profile-username");
  profileUserName.innerHTML = jsonList.login ? jsonList.login : "";

  const bio = document.getElementById("bio");
  bio.innerHTML = jsonList.bio ? jsonList.bio : "";

  const location = document.getElementById("loc");
  location.innerHTML = jsonList.location
    ? jsonList.location
    : "Location not found";

  const repos = document.getElementById("repo");
  repos.innerHTML = jsonList.public_repos
    ? jsonList.public_repos
    : "No Public Repositories";

  const company = document.getElementById("company");
  company.innerHTML = jsonList.company ? jsonList.company : "Company not found";

  const followers = document.getElementById("followers");
  followers.innerHTML = jsonList.followers ? jsonList.followers : "0";

  const following = document.getElementById("following");
  following.innerHTML = jsonList.following ? jsonList.following : "0";
};

inputLogic();
