<template>
  <div>
    <h1>URL Shortener</h1>

    <input type="text" placeholder="Insert URL" v-model="longUrl" />

    <button v-on:click="shortUrl" class="button button1">
      Go!
    </button>

    <section>
      <div>
        <h3>Shorten URL List</h3>
      </div>
      <div class="list">
        {{ urlList }}
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data: () => ({
    urlList: [],
    longUrl: ""
  }),
  methods: {
    shortUrl() {
      axios({
        method: "post",
        url: "http://localhost:3000/shorten",
        headers: { "Access-Control-Allow-Origin": "*" },
        data: { longUrl: this.longUrl }
      }).then(response => {
        this.urlList.push(response.data.shortUrl);
      });
    }
  },
  mounted: function() {
    axios({
      method: "get",
      url: "http://localhost:3000/list",
      headers: { "Access-Control-Allow-Origin": "*" }
    }).then(response => {
      this.urlList = [];
      response.data.forEach(url => {
        this.urlList.push(url.shortUrl);
      });
    });
  }
};
</script>
