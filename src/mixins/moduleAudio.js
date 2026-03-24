// Mixin that manages the audio setup/teardown lifecycle for module components.
//
// Modules define setup() and teardown() methods. The mixin handles WHEN they
// run: setup() is called once the audio engine is ready (sourceReady === true),
// and teardown() is called on unmount. If the engine isn't ready at mount time
// (e.g. page refresh before Enable), the watcher retries when it becomes ready.
//
// Provides:
//   this.engine        — audioEngine Pinia store
//   this.audioReady    — true after setup() has completed
//   this.ctx           — shorthand for engine.context (available after setup)
//   this.claimSource() — disconnect sourcePanel from masterGain, return the output node
//   this.releaseSource() — reconnect sourcePanel to masterGain
//   this.disconnectNodes(...nodes) — safely disconnect + nullify a list of audio nodes
//   this.param(node, param, value) — guarded setTargetAtTime on a node's AudioParam

import { useAudioEngineStore } from '../stores/audioEngine'

export const moduleAudioMixin = {
  data() {
    return {
      audioReady: false
    }
  },
  computed: {
    engine() { return useAudioEngineStore() },
    ctx() { return this.engine.context }
  },
  watch: {
    'engine.sourceReady': {
      immediate: true,
      handler(ready) {
        if (ready && !this.audioReady) this._doSetup()
      }
    }
  },
  beforeUnmount() {
    if (this.audioReady) {
      this.teardown()
      this.audioReady = false
    }
  },
  methods: {
    async _doSetup() {
      if (this.audioReady) return
      try {
        await this.setup()
        this.audioReady = true
      } catch (e) {
        console.warn(`[${this.$options.name}] audio setup failed:`, e)
      }
    },

    // Disconnect sourcePanel.output from masterGain and return it.
    // Most modules call this at the start of setup() to insert their
    // processing chain between source and master.
    claimSource() {
      const source = this.engine.sourcePanel.output
      try { source.disconnect(this.engine.masterGain) } catch (e) { /* */ }
      return source
    },

    // Reconnect sourcePanel.output to masterGain. Called in teardown()
    // to restore the default signal path.
    releaseSource() {
      if (this.engine.sourcePanel) {
        const source = this.engine.sourcePanel.output
        try { source.disconnect() } catch (e) { /* */ }
        try { source.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },

    // Safely disconnect a list of audio nodes. Accepts nodes or nulls.
    disconnectNodes(...nodes) {
      for (const n of nodes) {
        if (n) try { n.disconnect() } catch (e) { /* */ }
      }
    },

    // Guarded AudioParam update: no-op if node is null or audioReady is false.
    param(node, paramName, value, timeConstant = 0.05) {
      if (!this.audioReady || !node) return
      node[paramName].setTargetAtTime(value, this.ctx.currentTime, timeConstant)
    },

    // Override in component
    setup() {},
    teardown() {}
  }
}
