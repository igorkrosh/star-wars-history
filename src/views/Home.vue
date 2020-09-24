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
      <button class="btn-start"  @click="RouterGoTo('History')">Начать</button>
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
.home:after
{
  content: url('../assets/images/icons/shield_blue.svg');
  position: fixed;
  height: auto;
  width: 900px;
  top: 50%;
  left: -550px;
  z-index: -1;
  pointer-events: none;
  opacity: 0.1;
  transform: translateY(-50%);
}

.home:before
{
  content: url('../assets/images/icons/shield_red.svg');
  position: fixed;
  width: 900px;
  top: 50%;
  right: -550px;
  z-index: -1;
  pointer-events: none;
  opacity: 0.1;
  transform: translateY(-50%);
}

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
  height: 1px;
  background-color: #64DD17;
  box-shadow: 0px 0px 10px #64DD17;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  opacity: 0.8;
}

.btn-start
{
  padding: 5px 20px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 28px;
  color: #ffffff;
  position: relative;
  margin-top: 25px;
  transition: 0.5s;
  background: none;
  border: none;
  cursor: pointer;
}

.btn-start:before
{
  position: absolute;
  content: "";
  height: 3px;
  width: 100%;
  background: #64DD17;
  box-shadow: 0px 0px 10px #64DD17;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 3px;
  
}

.btn-start:hover:before
{
  color: #ffffff;
  
}

.btn-start:hover
{
letter-spacing: 3px;
}
</style>
