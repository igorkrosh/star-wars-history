<template>
  <div class="home">
    <BgVideo :source="this.bgVideoSource" :video="this.bgVideoPath"/>
    <div class="container">
      <div class="main-page-logo">
        <img src="@/assets/images/republic_imperial.png" alt="">
      </div>
      <div class="main-page-text">
        <span>Star Wars: История</span>
        Познай историю Звездных Войн с нами!
      </div>
      <button class="btn-start"  @click="RouterGoTo('History')"><span>Начать</span></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BgVideo from '@/components/BgVideo.vue'

export default {
  name: 'Home',
  components: {
    BgVideo
  },
  data() {
    return {
      bgVideoSource: "https://youtu.be/X3sAnC0FpeU",
      bgVideoPath: "homepagebg.webm",
    }
  }
}
</script>

<style>

.main-page-logo
{
  margin-top: 35px;
}

.main-page-logo img
{
  height: 250px;
}

.main-page-text span
{
  font-family: 'Russo One', sans-serif;
  display: block;
  font-size: 76px;
  text-transform: uppercase;
}

.main-page-text 
{
  font-size: 32px;
  font-weight: 300;
  padding-bottom: 25px;
  position: relative;
}
.main-page-text:after
{
  position: absolute;
  content: "";
  width: 250px;
  height: 2px;
  background-color: #E03232;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  opacity: 0.8;
}

.btn-start
{
  color: #ffffff;
  text-transform: uppercase;
  font-size: 16px;
  font-family: 'Jost', sans-serif;   
  text-align: left;
  position: relative;
  transition: 0.5s;
  background: rgba(224, 50, 50, 1);
  margin-top: 25px;
  border: none;
  width: 200px;
  height: 55px;
}

.btn-start:before
{
    content: url("../assets/images/icons/btn_arrow.svg");
    position: absolute;
    width: 8px;
    right: 25px;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 5;
    transition: 0.5s;
}

.btn-start span
{
  position: absolute;
  top: 17px;
  left: 40px;
  transition: 0.5s;
}

.btn-start:hover span
{
  left: 50%;
  transform: translateX(-50%);
}

.btn-start:hover:before
{
  opacity: 0;
}
</style>
