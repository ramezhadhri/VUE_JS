<template>
  <h1>Log In</h1>
  <div class="register">
    <input type="email" v-model="email" placeholder=" ENTRER VOTRE EMAIL  " />
    <input
      type="text"
      v-model="password"
      placeholder=" ENTRER VOTRE PASSWORD  "
    />
    <button v-on:click="login">Log In</button>
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
        let res = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
        console.warn(res);
        if(res.status==200 && res.data.length>0){
            alert("compte disponible");
            localStorage.setItem("user-info", JSON.stringify(res.data));
             this.$router.push({
                   name: "Home",
                });
        }
    },
    
  },
};
</script>
