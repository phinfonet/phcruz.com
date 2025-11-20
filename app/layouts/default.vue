<template>
  <div class="relative min-h-screen bg-base text-ph-text">
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-ph-violet/35 blur-3xl" />
      <div class="absolute bottom-0 left-0 h-[24rem] w-[24rem] -translate-x-1/3 translate-y-1/3 rounded-full bg-ph-violet-light/25 blur-3xl" />
      <div class="absolute right-0 top-1/4 h-[18rem] w-[18rem] translate-x-1/3 rounded-full bg-ph-emerald/20 blur-3xl" />
      <div class="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-base via-base/80 to-transparent" />
    </div>

    <header class="sticky top-0 z-50 border-b border-white/10 bg-base/40 backdrop-blur-xl">
      <nav class="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <NuxtLink class="flex items-center gap-3 text-white/70 transition hover:text-white" :to="localePath('/')">
          <NuxtImg
            src="/logo-phcruz.svg"
            alt="PHCruz"
            class="h-8 w-auto"
            loading="lazy"
          />
          <span class="font-display text-lg uppercase tracking-[0.3em]">PHCruz</span>
        </NuxtLink>

        <div class="hidden items-center gap-8 text-sm uppercase text-white/60 md:flex">
          <NuxtLink class="transition-colors duration-300 hover:text-white" to="#manifesto">{{ $t('nav.manifesto') }}</NuxtLink>
          <NuxtLink class="transition-colors duration-300 hover:text-white" to="#solucoes">{{ $t('nav.solutions') }}</NuxtLink>
          <NuxtLink class="transition-colors duration-300 hover:text-white" to="#projetos">{{ $t('nav.projects') }}</NuxtLink>
          <NuxtLink class="transition-colors duration-300 hover:text-white" to="#contato">{{ $t('nav.contact') }}</NuxtLink>
        </div>

        <div class="flex items-center gap-4">
          <LanguageSwitcher />
          <NuxtLink
            to="#contato"
            class="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white transition duration-300 hover:border-ph-emerald/60 hover:bg-ph-emerald/10"
          >
            <span>{{ $t('nav.startConversation') }}</span>
            <Icon name="tabler:arrow-up-right" class="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </NuxtLink>
        </div>
      </nav>
    </header>

    <main class="relative z-10">
      <slot />
    </main>

    <footer class="relative z-[5] border-t border-white/10 bg-base/80 backdrop-blur-xl">
      <div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex flex-col gap-1">
          <span class="font-display text-base text-white/80">{{ $t('footer.tagline') }}</span>
          <span class="text-white/40">{{ $t('footer.subtitle') }}</span>
        </div>
        <div class="flex items-center gap-6 text-white/40">
          <span>© {{ new Date().getFullYear() }}</span>
          <NuxtLink :to="`mailto:${$t('footer.email')}`" class="transition hover:text-white">{{ $t('footer.email') }}</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
