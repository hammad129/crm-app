 <template>
    <div class="todo-list">
      <h1>Todo List</h1>
      <div class="add-task">
        <input v-model="newTask" type="text" placeholder="Enter new task" />
        <button @click="addTask">Add Task</button>
      </div>
      <div class="tasks">
        <div v-for="(task, index) in tasks" :key="index" class="task">
          <div class="task-name">{{ task }}</div>
          <div class="task-actions">
            <button @click="editTask(index)">Edit</button>
            <button @click="deleteTask(index)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'TodoList',
    data() {
      return {
        user :{
            email:"",
            password : "",
            tasks: [],
            role: false,
         },
        newTask: ''
      };
    },
    async mounted() {
      await axios
        .get('http://localhost:3000/users')
        .then(response => {
          this.tasks = response.data[0].tasks;
        })
        .catch(error => {
          console.log(error);
        });
    },
    methods: {
    //   addTask() {
    //     if (this.newTask !== '') {
    //       this.tasks.push(this.newTask);
    //       axios
    //         .put('http://localhost:3000/users/2', { tasks: this.tasks })
    //         .then(response => {
    //           console.log(response);
    //         })
    //         .catch(error => {
    //           console.log(error);
    //         });
    //       this.newTask = '';
    //     }
    //   },
      editTask(index) {
        const newTaskName = prompt('Enter new task name', this.tasks[index]);
        if (newTaskName !== null) {
          this.tasks[index] = newTaskName;

          axios
            .put('http://localhost:3000/users/2', { 
                email:this.email,
                password:this.password,
                role :false,
                tasks: this.tasks,
                
               
                
             })
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        }
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
        console.log(this.tasks);
        axios
          .put('http://localhost:3000/users/2', { tasks: this.tasks })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      },

    
    async addTask() {
        console.log(this.newTask);
   if (this.newTask !== '') {
    console.log(this.newTask);
   await axios.post('http://localhost:3000/users/',{
    role : false,
    email : this.user.email,
    tasks:this.tasks.push(this.newTask)

   })
   
      
      
      .catch(error => {
        console.log(error);
      });
    this.newTask = '';
  }
},
// editTask(index) {
//   const newTaskName = prompt('Enter new task name', this.tasks[index]);
//   if (newTaskName !== null) {
//     axios
//       .get(`http://localhost:3000/users`)
//       .then(response => {
//         const loggedInUser = response.data.find(user => !user.role);
//         loggedInUser.tasks[index] = newTaskName;
//         console.log(loggedInUser);
//         return axios.put(`http://localhost:3000/users/${loggedInUser.id}`, loggedInUser);
//       })
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//     this.$forceUpdate();
//   }
//         },
//         deleteTask(index) {
//         axios
//             .get(`http://localhost:3000/users`)
//             .then(response => {
//             const loggedInUser = response.data.find(user => !user.role);
//             loggedInUser.tasks.splice(index, 1);
//             return axios.put(`http://localhost:3000/users/${loggedInUser.id}`, loggedInUser);
//             })
//             .then(response => {
//             console.log(response);
//             })
//             .catch(error => {
//             console.log(error);
//             });
//         },

    }
  };
  </script>
  
  <style scoped>
  .todo-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
  
  .add-task {
    display: flex;
    margin-bottom: 20px;
  }
  
  .add-task input {
    flex-grow: 1;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 1.2rem;
    margin-right: 10px;
  }
  
  .add-task button {
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
  }
  
  .task {
    display: flex;
    justify-content: space-between;
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px
  }

  </style>  

<!-- async addTask() {
    if (this.newTask !== '') {
      try {
        const res = await axios.post(`http://localhost:3000/users/${this.$route.params.id}`, {
          task: this.newTask
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  }
   -->