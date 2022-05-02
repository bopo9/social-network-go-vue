<template>
  <canvas id="matrix"></canvas>
</template>

<script>
export default {
  name: "DigitalRain",
  data(){
    return {
      katakana: "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン",
      latin: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      nums: "0123456789",
      fontSize: 16,
      canvas: null,
      context: null,
      rainDrops: [],
      columns: null,
    }
  },
  computed: {
    getAlphabet(){
      return this.katakana + this.latin + this.nums;
    }
  },
  props: {
    height: String,
    width: String,
  },
  mounted() {
    this.canvas = document.getElementById("matrix");
    this.context = this.canvas.getContext("2d");
    this.columns = this.canvas.offsetWidth/this.fontSize;

    console.log(this.canvas)
    console.log(this.context)
    console.log(this.columns)

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    for( let x = 0; x < this.columns; x++ ) {
      this.rainDrops[x] = 1;
    }

    setInterval(this.draw, 30);
  },
  destroyed() {

  },
  methods: {
    draw(){
      this.context.fillStyle = "rgba(255,255,255,0.05)";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.context.fillStyle = "#48a59e";
      this.context.font = this.fontSize + 'px monospace';

      for(let i = 0; i < this.rainDrops.length; i++)
      {
        const text = this.getAlphabet.charAt(Math.floor(Math.random() * this.getAlphabet.length));
        this.context.fillText(text, i*this.fontSize, this.rainDrops[i]*this.fontSize);

        if(this.rainDrops[i]*this.fontSize > this.canvas.height && Math.random() > 1){
          this.rainDrops[i] = 0;
        }
        this.rainDrops[i]++;
      }
    }

  }
}
</script>

<style lang="scss" scoped>


</style>