<template>
  <section id="projetos" class="relative border-t border-white/10 bg-base/85">
    <div class="mx-auto max-w-6xl px-6 py-24">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <p class="text-sm uppercase tracking-[0.35em] text-white/40">{{ $t('projects.label') }}</p>
          <h2 class="mt-3 font-display text-3xl text-white sm:text-4xl">
            {{ $t('projects.title') }}
          </h2>
          <p class="mt-4 text-base text-white/60">
            {{ $t('projects.description') }}
          </p>
        </div>
        <NuxtLink
          to="#contato"
          class="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm uppercase tracking-[0.2em] text-white/70 transition hover:border-ph-emerald/60 hover:text-white"
        >
          {{ $t('projects.cta') }}
          <Icon name="tabler:arrow-up-right" class="h-4 w-4" />
        </NuxtLink>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article
          v-for="(project, index) in $tm('projects.items')"
          :key="index"
          class="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 transition duration-500 hover:border-ph-emerald/60"
        >
          <div class="flex items-center justify-between">
            <span
              class="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/50"
            >
              {{ project.tag }}
            </span>
            <span class="text-xs uppercase tracking-[0.3em] text-white/40">{{ project.status }}</span>
          </div>
          <p class="mt-6 text-sm uppercase tracking-[0.25em] text-white/40">
            {{ project.subtitle }}
          </p>
          <p class="mt-4 text-sm text-white/60">
            {{ project.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
