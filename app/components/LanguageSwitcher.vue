<template>
  <div class="flex items-center gap-2">
    <button
      v-for="locale in availableLocales"
      :key="locale.code"
      @click="switchLocale(locale.code)"
      :class="[
        'px-3 py-1 text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded-full border',
        currentLocale === locale.code
          ? 'border-ph-emerald/60 bg-ph-emerald/10 text-ph-emerald'
          : 'border-white/15 bg-white/5 text-white/50 hover:border-white/30 hover:text-white/70'
      ]"
      :title="locale.name"
    >
      {{ locale.code.split('-')[0].toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const currentLocale = computed(() => locale.value)

const availableLocales = computed(() => {
  return (locales.value as Array<{ code: string; name: string }>).filter(
    (l) => l.code !== locale.value
  )
})

const switchLocale = (localeCode: string) => {
  const path = switchLocalePath(localeCode)
  router.push(path)
}
</script>
