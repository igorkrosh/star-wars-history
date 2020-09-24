<template>
  <div class="bg-video">
      <video :autoplay="this.options.autoplay" :autobuffer="this.options.autobuffer" :loop="this.options.loop" :muted="this.options.muted">
          <source :src=GetSourceVideo()>
      </video>
      <a v-if="this.source !== 'none'" class="source-link" :href="this.source">
          <span class="use-source">Use the Source, Luke</span>
          <img src="@/assets/images/icons/youtube.svg" alt="">
      </a>
  </div>
</template>

<script>
export default {
    name: 'BgVideo',
    props: {
        source: {
            type: String,
            default: function() {
                return 'none';
            }
        }, // Ссылка на YouTube-источник
        video: String, // Путь до файла с видео. Путь пишется относительно папки assets/videos/
        options: {
            type: Object,
            default: function() {
                return {
                    autoplay: true, // Автовоспроизведение видео
                    autobuffer: true, // Автоматическое начало буфферизации
                    loop: true, // Зациклить видео
                    muted: true, // Выключение звука
                }
            }            
        }
    },
    methods: {
        GetSourceVideo() {
            return require("../assets/videos/" + this.video);
        }
    }
}
</script>

<style>
.bg-video
{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -5;
}

.bg-video:after
{
    content: "";
    position: absolute;
    width:100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.6;
    z-index: 0;
}

.bg-video video
{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
}
.source-link
{
    position: absolute;
    bottom: 15px;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
}

.source-link img
{
    height: 42px;
    margin-left: 15px;
}

.source-link .use-source
{
    opacity: 0;
    transition: 0.5s;
    font-size: 20px;
    text-transform: uppercase;
    color: #ffffff;
    position: absolute;
    pointer-events: none;
    width: 215px;
    right: 100%;
}

.source-link:hover .use-source
{
    opacity: 1;
}
</style>