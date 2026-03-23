<template>
  <div class="transfer-function">
    <canvas ref="canvas" width="256" height="200" class="transfer-function__canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'TransferFunction',
  props: {
    curve: { type: Float32Array, default: null }
  },
  watch: {
    curve() { this.draw() }
  },
  mounted() { this.draw() },
  methods: {
    draw() {
      const canvas = this.$refs.canvas
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      const w = canvas.width
      const h = canvas.height

      ctx.fillStyle = '#0a0a0e'
      ctx.fillRect(0, 0, w, h)

      // Grid
      ctx.strokeStyle = '#1a1a24'
      ctx.lineWidth = 0.5
      ctx.beginPath()
      ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h)
      ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2)
      ctx.stroke()

      if (!this.curve || this.curve.length === 0) return

      ctx.strokeStyle = '#4ade80'
      ctx.lineWidth = 1.5
      ctx.beginPath()

      const len = this.curve.length
      for (let i = 0; i < len; i++) {
        const x = (i / (len - 1)) * w
        const y = (1 - (this.curve[i] + 1) / 2) * h
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
    }
  }
}
</script>

<style lang="sass">
.transfer-function
  &__canvas
    width: 100%
    height: 200px
    border-radius: 2px
</style>
