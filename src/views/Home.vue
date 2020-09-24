<template>
  <div class="home">
    <BgVideo :source="this.bgVideoSource" :video="this.bgVideoPath"/>
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

</style>
