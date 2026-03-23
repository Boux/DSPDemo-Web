<template>
  <div class="mod-sources">
    <p class="mod-sources__info">
      {{ $i18n.locale === 'fr'
        ? 'Module source — sélectionnez une source audio dans le panneau ci-dessous.'
        : 'Source module — select an audio source from the panel below.' }}
    </p>
    <p class="mod-sources__note">
      {{ $i18n.locale === 'fr'
        ? '(Le panneau de source sera implémenté en Phase 1)'
        : '(Source panel will be implemented in Phase 1)' }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Mod00Sources',
  moduleId: 'mod-00-sources'
}
</script>

<style lang="sass">
.mod-sources
  padding: 12px

  &__info
    margin-bottom: 8px

  &__note
    color: #888
    font-style: italic
    font-size: var(--font-size-sm)
</style>
