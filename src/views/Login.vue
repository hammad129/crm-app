<template>

    <section class="vh-100" style="background-color: #508bfc;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Login in</h3>

            <div class="form-outline mb-4">
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" v-model="email"  />
              <label class="form-label" for="typeEmailX-2">Email</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg"   v-model="password" />
              <label class="form-label" for="typePasswordX-2">Password</label>
            </div>

          

            <button class="btn btn-primary btn-lg btn-block" type="submit" 
            @click="getUserData()">Login</button>

            <hr class="my-4">

            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<script>
import axios from "axios"
// import {router} from "vue-router";
export default{
    name : 'Login',
    data(){
        return{
            email : "",
            password : "",
            user:[],

        }

    },

    methods: {
        
  //       async getUserData() {
  //         let response = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
  // console.log("helllo");
  
  //               const user = response.data[0];
  //               console.log(user.role);
  //               if( response.status == 200 && response.data.length > 0)
  //               {
                  
  //                 console.log("hello 2");
  //                 localStorage.setItem("id",JSON.stringify(response.data[0]));
  //                 this.$router.push({name : "Admin"})
  //               }
  //               else 
  //               {
  //                 localStorage.setItem("id",JSON.stringify(response.data[1]))
  //                 this.$router.push({name : "User"})
  //               }
  //               // if(response.data )
  //               // return response.data;
            
          
            
  //       },
  async getUserData() {
  let response = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
  console.log("helllo");
  
  if (response.status == 200 && response.data.length > 0) {
    const user = response.data[0];
    console.log(user.role);
    if (user.role) {
      console.log("hello 2");
      localStorage.setItem("id", JSON.stringify(user));
      this.$router.push({name : "Admin"});
    } else {
      localStorage.setItem("id", JSON.stringify(user));
      this.$router.push({name : "User"});
    }
  }
},

       

      async  onclicklogin()
        {
               await axios.get('http://localhost:3000/user')
                .then(function (response) {

                if (response.status === 200) {
                    // Successful login, check user role
                    let user = response.data.user;
                    if (user.role === true) {
                    // Redirect to the admin page
                    window.location.href = '/admin';
                    } else {
                    // Redirect to the user page
                    window.location.href = '/user';
                    }
                } else {
                    // Login failed, display an error message
                    alert('Login failed');
                }
                })
                .catch(function (error) {
                // Handle error response
                }); 
        }
        
    },

}
</script>
