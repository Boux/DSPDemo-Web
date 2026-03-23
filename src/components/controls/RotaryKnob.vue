<template>
  <canvas
    ref="canvas"
    :width="size"
    :height="size"
    class="rotary-knob"
    tabindex="0"
    role="slider"
    :aria-valuenow="tempValue"
    aria-valuemin="0"
    aria-valuemax="1"
    @mousedown="onMouseDown"
    @keydown="onKeyDown"
    @wheel.prevent="onWheel"
  ></canvas>
</template>

<script>
import { clamp } from '../../utils/dspMath'

const TWO_PI = Math.PI * 2
const ANCHOR1 = Math.PI * (4.5 / 6)
const ANCHOR2 = Math.PI * (1.5 / 6)
const ANC_RANGE = TWO_PI - ANCHOR1 + ANCHOR2

export default {
  name: 'RotaryKnob',
  props: {
    modelValue: { type: Number, default: 0.5 },
    size: { type: Number, default: 26 }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      startPos: null,
      baseValue: 0.5,
      tempValue: 0.5,
      inc: 0.005
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(val) {
        this.baseValue = val
        this.tempValue = val
        this.draw()
      }
    }
  },
  mounted() {
    this.draw()
  },
  methods: {
    onMouseDown(e) {
      this.startPos = { x: e.clientX, y: e.clientY }
      this.baseValue = this.tempValue
      this.inc = e.shiftKey ? 0.0001 : 0.005
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onMouseUp)
      e.preventDefault()
    },
    onMouseMove(e) {
      if (!this.startPos) return
      const dx = (e.clientX - this.startPos.x) * this.inc
      const dy = (this.startPos.y - e.clientY) * this.inc
      this.tempValue = clamp(this.baseValue + dx + dy, 0, 1)
      this.$emit('update:modelValue', this.tempValue)
      this.draw()
    },
    onMouseUp() {
      this.baseValue = this.tempValue
      this.startPos = null
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onMouseUp)
    },
    onKeyDown(e) {
      const step = e.shiftKey ? 0.001 : 0.02
      if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
        e.preventDefault()
        this.tempValue = clamp(this.tempValue + step, 0, 1)
        this.baseValue = this.tempValue
        this.$emit('update:modelValue', this.tempValue)
        this.draw()
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
        e.preventDefault()
        this.tempValue = clamp(this.tempValue - step, 0, 1)
        this.baseValue = this.tempValue
        this.$emit('update:modelValue', this.tempValue)
        this.draw()
      } else if (e.key === 'Home') {
        e.preventDefault()
        this.tempValue = 0
        this.baseValue = 0
        this.$emit('update:modelValue', 0)
        this.draw()
      } else if (e.key === 'End') {
        e.preventDefault()
        this.tempValue = 1
        this.baseValue = 1
        this.$emit('update:modelValue', 1)
        this.draw()
      }
    },
    onWheel(e) {
      const step = e.shiftKey ? 0.001 : 0.01
      const delta = e.deltaY < 0 ? step : -step
      this.tempValue = clamp(this.tempValue + delta, 0, 1)
      this.baseValue = this.tempValue
      this.$emit('update:modelValue', this.tempValue)
      this.draw()
    },
    draw() {
      const canvas = this.$refs.canvas
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      const w = canvas.width
      const h = canvas.height
      const cx = w / 2
      const cy = h / 2 + 2
      const r = Math.min(w, h) / 2 - 2

      ctx.clearRect(0, 0, w, h)

      // Background arc (track)
      ctx.beginPath()
      ctx.arc(cx, cy, r, ANCHOR1, ANCHOR2 + TWO_PI, false)
      ctx.strokeStyle = '#555'
      ctx.lineWidth = 2.5
      ctx.lineCap = 'round'
      ctx.stroke()

      // Value arc (filled portion)
      let endAngle = this.tempValue * ANC_RANGE + ANCHOR1
      if (endAngle > TWO_PI) endAngle -= TWO_PI

      ctx.beginPath()
      ctx.arc(cx, cy, r, ANCHOR1, endAngle, false)
      ctx.strokeStyle = '#5b8af5'
      ctx.lineWidth = 2.5
      ctx.lineCap = 'round'
      ctx.stroke()

      // Focus ring
      if (canvas === document.activeElement) {
        ctx.beginPath()
        ctx.arc(cx, cy, r + 2, 0, TWO_PI)
        ctx.strokeStyle = '#4488FF'
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }
  }
}
</script>

<style lang="sass">
.rotary-knob
  cursor: pointer
  display: block
  flex-shrink: 0
  outline: none

  &:focus-visible
    outline: none
</style>
