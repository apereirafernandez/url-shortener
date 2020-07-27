import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// const express =require('express');

// const app = express();

// app.use(express.json({ extended:false}));

// const PORT = 5000;

// app.listen(PORT,() => console.log ("Server running on port ${PORT}"));

Vue.config.productionTip = false;

new Vue({
  router,

  render: h => h(App)
}).$mount("#app");

