class UI {
    constructor() {
      this.profile = document.getElementById("profile");
    }
  
    showProfile(user) {
      this.profile.innerHTML = `
      <div class="d-flex justify-content-center">
      <div class="col-lg-4 col-md-6 mb-4">
            <!-- Card Regular -->
            <div class="card card-cascade">

                <!-- Card image -->
                <div class="view view-cascade overlay">
                        <img class="card-img-top" src="${user.avatar_url}" alt="Card image cap">
                    <a>
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>
                
                <!-- Card content -->
                <div class="card-body card-body-cascade text-center">
            
                <!-- Title -->
                    <h4 class="card-title"><strong>Billy Coleman</strong></h4>
                    <!-- Subtitle -->
                    <h6 class="font-weight-bold indigo-text py-2">Web developer</h6>
                    <div class="preview pb-4">

                        <span class="badge badge-default">Public Repos : ${user.public_repos}</span>
                        <span class="badge badge-warning ml-2">Public Gists : ${user.public_gists}</span>
                        <span class="badge badge-primary ml-2">Followers : ${user.followers}</span>
                        <span class="badge badge-success ml-2">Following : ${user.following}</span>
                    </div>
                    <!-- Text -->
                    <h6 class="font-weight-400 indigo-text text-left py-2">Company : ${user.company}</h6>
                    <h6 class="font-weight-400 indigo-text text-left py-2">Location : ${user.location}</h6>
                    <h6 class="font-weight-400 indigo-text text-left py-2">Member Since : ${user.created_at}</h6>

                
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae.
                    Facere modi sunt, quod quibusdam.
                    </p>
            
                <!-- Facebook -->
                    <a type="button" class="btn-floating btn-small btn-fb"><i class="fab fa-facebook-f"></i></a>
                <!-- Twitter -->
                    <a type="button" class="btn-floating btn-small btn-tw"><i class="fab fa-twitter"></i></a>
                <!-- Google + -->
                    <a type="button" class="btn-floating btn-small btn-dribbble"><i class="fab fa-dribbble"></i></a>
            
                </div>
            
            </div>
        <!-- Card Regular -->
        </div>
        </div>
      `;
    }
  
    showAlert(message, className) {
      this.clearAlert();
      // Create div
      const div = document.createElement("div");
  
      div.className = className;
  
      div.appendChild(document.createTextNode(message));
  
      const container = document.querySelector(".searchContainer");
  
      const search = document.querySelector(".search");
  
      container.insertBefore(div, search);
  
      // Timeout after 3 sec
      setTimeout(() => {
        this.clearAlert();
      }, 3000);
    }
  
    // Clear alert message
    clearAlert() {
      const currentAlert = document.querySelector(".alert");
  
      if (currentAlert) {
        currentAlert.remove();
      }
    }
  
    clearProfile() {
      this.profile.innerHTML = "";
    }
  }