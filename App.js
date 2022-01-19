let app = Vue.createApp({
    data: function() {
        return {
            greeting: 'Hello warrior !'
        }
    }
})
app.mount('#app')

const gui = new dat.GUI({ name: "My GUI" });
const content = document.getElementsByClassName("content")[0];
const scene = document.getElementById("scene");

const config = {
  size: 2000,
};



  