<template>
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder=" ENTRER VOTRE NOM  " />
    <input type="text" v-model="email" placeholder=" ENTRER VOTRE EMAIL  " />
    <input
      type="text"
      v-model="password"
      placeholder=" ENTRER VOTRE PASSWORD  "
    />
    <button v-on:click="signUp">Sign Up</button>
    <p>
      <router-link to="/log-in">Log In</router-link>
    </p> 
    
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/user", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        alert("signup done" +this.name);
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({
          name: "Home",
        });
      }
    },
    mounted() {
      let user = localStorage.getItem("user-info");
      if (user) {
        this.$router.push({
          name: "Home",
        });
      }
    },
  },
};
</script>
<style>
*{
  margin-top:30px;
}
.register input {
  display: block;
  padding-left: 21px;
  border: 1px solid blue;
  width: 300px;
  height: 40px;

  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}
.register button {
  text-align: center;
  background: green;
  color: aliceblue;
  padding: 15px 20px;
  border-radius: 4px;
  width: 320px;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
}
.register button:hover {
  background: orange;
}
</style>
