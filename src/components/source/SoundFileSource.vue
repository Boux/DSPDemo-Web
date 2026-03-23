<template>
  <div class="file-source">
    <div class="file-source__buttons">
      <label class="toggle-btn file-source__load">
        {{ $i18n.locale === 'fr' ? 'Choisir' : 'Choose' }}
        <input type="file" accept="audio/*" @change="onFileSelect" hidden />
      </label>
      <button
        class="toggle-btn"
        :class="{ active: isPlaying }"
        @click="togglePlay"
        :disabled="!hasFile"
      >{{ $i18n.locale === 'fr' ? 'Jouer' : 'Play' }}</button>
      <button
        class="toggle-btn"
        :class="{ active: loop }"
        @click="toggleLoop"
      >Loop</button>
    </div>
    <div v-if="fileName" class="file-source__name">{{ fileName }}</div>
    <ControlSlider
      :label="$i18n.locale === 'fr' ? 'Vitesse de lecture' : 'Playback Speed'"
      :modelValue="speed"
      :mini="0.25"
      :maxi="4"
      :log="true"
      @update:modelValue="onSpeedChange"
    />
  </div>
</template>

<script>
import ControlSlider from '../controls/ControlSlider.vue'

export default {
  name: 'SoundFileSource',
  components: { ControlSlider },
  props: {
    audio: { type: Object, default: null }
  },
  data() {
    return {
      isPlaying: false,
      loop: false,
      speed: 1,
      hasFile: false,
      fileName: ''
    }
  },
  methods: {
    async onFileSelect(e) {
      const file = e.target.files[0]
      if (!file || !this.audio) return
      this.fileName = file.name
      await this.audio.loadFile(file)
      this.hasFile = true
    },
    togglePlay() {
      if (!this.audio || !this.hasFile) return
      if (this.isPlaying) {
        this.audio.stopFile()
        this.isPlaying = false
      } else {
        this.audio.playFile(this.loop, this.speed)
        this.isPlaying = true
      }
    },
    toggleLoop() {
      this.loop = !this.loop
      if (this.audio) this.audio.setFileLoop(this.loop)
    },
    onSpeedChange(val) {
      this.speed = val
      if (this.audio) this.audio.setFileSpeed(val)
    }
  }
}
</script>

<style lang="sass">
.file-source
  display: flex
  flex-direction: column
  gap: 8px

  &__buttons
    display: flex
    gap: 4px

    > *
      flex: 1

  &__load
    text-align: center
    cursor: pointer

  &__name
    font-size: 10px
    color: #666
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
</style>
