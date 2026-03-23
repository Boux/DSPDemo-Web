<template>
  <div class="multi-slider">
    <canvas
      ref="canvas"
      :height="height"
      class="multi-slider__canvas"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
      @mouseleave="onMouseUp"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: 'DrawableMultiSlider',
  props: {
    modelValue: { type: Array, default: () => new Array(256).fill(0) },
    height: { type: Number, default: 100 },
    minVal: { type: Number, default: 0 },
    maxVal: { type: Number, default: 1 },
    color: { type: String, default: '#00CC66' }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      drawing: false,
      lastX: -1
    }
  },
  watch: {
    modelValue() { this.draw() }
  },
  mounted() {
    this.resizeCanvas()
    window.addEventListener('resize', this.resizeCanvas)
    this.draw()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resizeCanvas)
  },
  methods: {
    resizeCanvas() {
      const canvas = this.$refs.canvas
      if (!canvas) return
      canvas.width = canvas.parentElement.getBoundingClientRect().width
      this.draw()
    },
    getBarIndex(e) {
      const canvas = this.$refs.canvas
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      return Math.floor((x / canvas.width) * this.modelValue.length)
    },
    getValue(e) {
      const canvas = this.$refs.canvas
      const rect = canvas.getBoundingClientRect()
      const y = e.clientY - rect.top
      const t = 1 - (y / canvas.height)
      return this.minVal + t * (this.maxVal - this.minVal)
    },
    setBar(e) {
      const idx = this.getBarIndex(e)
      const val = Math.max(this.minVal, Math.min(this.maxVal, this.getValue(e)))
      if (idx < 0 || idx >= this.modelValue.length) return

      const newValues = [...this.modelValue]

      // Interpolate between last position and current for smooth drawing
      if (this.lastX >= 0 && this.lastX !== idx) {
        const start = Math.min(this.lastX, idx)
        const end = Math.max(this.lastX, idx)
        const startVal = newValues[this.lastX]
        for (let i = start; i <= end; i++) {
          const t = (i - start) / (end - start)
          newValues[i] = startVal + (val - startVal) * t
        }
      } else {
        newValues[idx] = val
      }

      this.lastX = idx
      this.$emit('update:modelValue', newValues)
    },
    onMouseDown(e) {
      this.drawing = true
      this.lastX = -1
      this.setBar(e)
    },
    onMouseMove(e) {
      if (this.drawing) this.setBar(e)
    },
    onMouseUp() {
      this.drawing = false
      this.lastX = -1
    },
    draw() {
      const canvas = this.$refs.canvas
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      const w = canvas.width
      const h = canvas.height
      const values = this.modelValue
      const len = values.length
      const barW = w / len
      const range = this.maxVal - this.minVal

      ctx.fillStyle = '#0a0a0e'
      ctx.fillRect(0, 0, w, h)

      ctx.fillStyle = this.color
      for (let i = 0; i < len; i++) {
        const t = (values[i] - this.minVal) / range
        const barH = t * h
        ctx.fillRect(i * barW, h - barH, Math.max(barW - 0.5, 1), barH)
      }
    }
  }
}
</script>

<style lang="sass">
.multi-slider
  width: 100%

  &__canvas
    width: 100%
    cursor: crosshair
    border-radius: 2px
</style>
