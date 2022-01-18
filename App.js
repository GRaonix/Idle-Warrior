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
  size: 200,
};

gui
  .add(config, "size", 20, 1920, 10)
  .name("Size")
  .onChange((newValue) => {
    content.style.width = `${newValue}px`;
    content.style.height = `${newValue}px`;
  });

  const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();

  $("#rect")
    .delay(500)
	  .velocity({ x: "+=200", y: "25%" })
    .velocity({ fillGreen: 255, strokeWidth: 2 })
	  .velocity({ height: 50, width: 50 })
    .velocity({ rotateZ: 90, scaleX: 0.5 })
    .velocity("reverse", { delay: 250 });


    $("#background").click(function() {
      if ($(this).hasClass("active")) {
        $("#background-scroll").show();
      } else {
        $("#background-scroll").hide();
      }
    });

  