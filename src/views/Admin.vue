<template>
    <div class="box">    
     <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark box1" style=" height: 100vh;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-4">Admin Dashboard</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li 
      
      class="nav-item">
      <router-link  to="/createuser"   class="nav-link active"        @click="" aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"/></svg>
          Create User

        </router-link>  
        <hr/>
        <router-link  to="/" class="nav-link active"        @click="" aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"/></svg>
          View User
          </router-link>
        <hr/>
      </li>
      
    </ul>
    
    
      
    <router-link  to="/login/">  <button >Logout</button></router-link> 
      
     
    
  </div>
  <div class="box2 p-4">
            <h1>Admin Page</h1>
            <div>
                <div class="d-flex justify-content-center">
                    <div class="card mt-3 w-100">
                        <div class="card-header bg-light">
                            <h4><button @onclick="display">User List</button></h4>
                        </div>
                        <div class="card-body">
                            <ul class="list-group mt-3">
                                <li class="list-group-item d-flex align-items-center justify-content-between"
                                    v-for="user in users" :key="user.id">
                                    <span class="message"><strong>ID: </strong>{{ user.id }}</span>
                                    <span class="message"><strong>Email: </strong>{{ user.email }}</span>
                                    <span class="message"><strong>Password: </strong>{{ user.password }}</span>
                                    <span class="message"><strong>Role: </strong>{{ user.role }}</span>
                                    <div class="btn-group d-flex gap-3">
                                        <router-link :to="'/edituser/' + user.id"><button class="btn btn-dark">
                                                Edit</button></router-link>
                                        <button class="btn btn-dark" @click="deleteUser(user.id)">Delete</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
</div>
  
  

</template>


<script>
import axios from 'axios';
export default{

    name : 'Admin',
    
    data()
    {
        return {

            users: []

            
        }
        
    },
    methods:{
    async display() {
      console.log ("hello");
      const response = await axios.get(`http://localhost:3000/users/`)
      console.log(response);
      this.users = response.data;
    
  },
  mounted() {
    console.log("hello1")
    this.display();
  },
    }
}

</script>
<style>
.box{
  display: flex;
}
.box1{
  flex-basis: 20%;

}
.box2{
  flex-basis: 80%;
}
</style>