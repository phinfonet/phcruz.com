<template>
  <section class="relative isolate overflow-hidden">
    <div class="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[1.1fr,0.9fr] md:items-center">
      <div class="flex flex-col gap-8">
        <div class="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-white/50">
          <span class="h-px w-12 bg-white/30" />
          <span>{{ $t('hero.tagline') }}</span>
        </div>

        <h1 class="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          {{ $t('hero.heading') }}
        </h1>

        <p class="max-w-xl text-lg text-white/70">
          {{ $t('hero.description') }}
        </p>

        <p class="text-sm uppercase tracking-[0.3em] text-white/50">
          {{ $t('hero.tagline2') }}
        </p>

        <div class="flex flex-wrap items-center gap-4">
          <NuxtLink
            to="#contato"
            class="group inline-flex items-center gap-3 rounded-brand bg-gradient-to-r from-ph-violet to-ph-violet-light px-6 py-3 text-base font-medium text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-ph-violet-light/40"
          >
            <span>{{ $t('hero.cta1') }}</span>
            <Icon name="tabler:wave-sine" class="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
          </NuxtLink>
          <NuxtLink
            to="#metodo"
            class="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-base font-medium text-white/70 transition duration-300 hover:border-white/40 hover:text-white"
          >
            {{ $t('hero.cta2') }}
            <Icon name="tabler:arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>

        <dl class="grid gap-6 text-sm text-white/60 sm:grid-cols-3">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <dt class="font-body uppercase tracking-[0.2em] text-white/40">{{ $t('hero.stats.founded.label') }}</dt>
            <dd class="mt-3 font-display text-3xl text-white">{{ $t('hero.stats.founded.value') }}</dd>
            <p class="mt-2 text-xs text-white/50">{{ $t('hero.stats.founded.description') }}</p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <dt class="font-body uppercase tracking-[0.2em] text-white/40">{{ $t('hero.stats.workMode.label') }}</dt>
            <dd class="mt-3 font-display text-3xl text-white">{{ $t('hero.stats.workMode.value') }}</dd>
            <p class="mt-2 text-xs text-white/50">{{ $t('hero.stats.workMode.description') }}</p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <dt class="font-body uppercase tracking-[0.2em] text-white/40">{{ $t('hero.stats.focus.label') }}</dt>
            <dd class="mt-3 font-display text-3xl text-white">{{ $t('hero.stats.focus.value') }}</dd>
            <p class="mt-2 text-xs text-white/50">{{ $t('hero.stats.focus.description') }}</p>
          </div>
        </dl>
      </div>

      <div class="relative flex flex-col items-end gap-6">
        <div class="pointer-events-none absolute -top-12 -right-20 h-64 w-64 rounded-full bg-ph-emerald/25 blur-3xl" />
        <div class="relative w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/5 via-white/2 to-white/0 p-8 shadow-glow backdrop-blur">
          <div class="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/40">
            <span>{{ $t('hero.interface.label') }}</span>
            <span>{{ $t('hero.interface.time') }}</span>
          </div>
          <div class="mt-10 flex flex-col gap-6">
            <div class="flex items-center justify-between">
              <span class="font-display text-3xl text-white">{{ $t('hero.interface.title') }}</span>
              <Icon name="tabler:hexagon" class="h-7 w-7 text-ph-emerald/80" />
            </div>
            <p class="text-sm text-white/60">
              {{ $t('hero.interface.description') }}
            </p>
            <div class="grid grid-cols-3 gap-4 text-xs">
              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span class="font-display text-xl text-white">0.7s</span>
                <p class="mt-1 text-white/50">{{ $t('hero.interface.metrics.tti') }}</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span class="font-display text-xl text-white">98%</span>
                <p class="mt-1 text-white/50">{{ $t('hero.interface.metrics.satisfaction') }}</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span class="font-display text-xl text-white">24h</span>
                <p class="mt-1 text-white/50">{{ $t('hero.interface.metrics.feedback') }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative flex w-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p class="text-xs uppercase tracking-[0.25em] text-white/40">{{ $t('hero.technologies') }}</p>
          <div class="flex flex-wrap gap-3 text-sm text-white/70">
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Icon name="simple-icons:ruby" class="h-4 w-4" />
              Ruby
            </span>
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Icon name="simple-icons:rubyonrails" class="h-4 w-4" />
              Rails
            </span>
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Icon name="simple-icons:elixir" class="h-4 w-4" />
              Elixir
            </span>
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Icon name="simple-icons:phoenixframework" class="h-4 w-4" />
              Phoenix
            </span>
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Icon name="simple-icons:javascript" class="h-4 w-4" />
              JavaScript
            </span>
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Icon name="simple-icons:typescript" class="h-4 w-4" />
              TypeScript
            </span>
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Icon name="simple-icons:vuedotjs" class="h-4 w-4" />
              Vue
            </span>
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Icon name="simple-icons:react" class="h-4 w-4" />
              React
            </span>
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Icon name="simple-icons:dart" class="h-4 w-4" />
              Dart
            </span>
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Icon name="simple-icons:flutter" class="h-4 w-4" />
              Flutter
            </span>
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Icon name="simple-icons:kubernetes" class="h-4 w-4" />
              Kubernetes
            </span>
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Icon name="simple-icons:amazonaws" class="h-4 w-4" />
              AWS
            </span>
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Icon name="simple-icons:digitalocean" class="h-4 w-4" />
              DigitalOcean
            </span>
            <span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
              <Icon name="simple-icons:googlecloud" class="h-4 w-4" />
              Google Cloud
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
