<template>
  <div>
    <HeroSection />
     <section class="relative isolate overflow-hidden">
      <div class="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <div class="flex flex-col gap-8">
          <div class="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-white/50">
            <span class="h-px w-12 bg-white/30" />
            <span>Engenharia, presença e propósito no mesmo fluxo</span>
          </div>

          <h1 class="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Não entregamos código, entregamos clareza.
          </h1>

          <p class="max-w-xl text-lg text-white/70">
            Fundada em 2019 por um programador que trocou o piloto automático pela autoria, a PHCruz transforma incerteza em roteiro claro.
            Cuidamos de cada etapa do desenvolvimento — planejamento, execução e publicação — com entregas consistentes, participação constante e decisões compartilhadas:
            você acompanha, orienta e vê o produto acontecer.
          </p>

          <p class="text-sm uppercase tracking-[0.3em] text-white/50">
            Criamos produtos digitais com ritmo, precisão e envolvimento real.
          </p>

          <div class="flex flex-wrap items-center gap-4">
            <NuxtLink
              to="#contato"
              class="group inline-flex items-center gap-3 rounded-brand bg-gradient-to-r from-ph-violet to-ph-violet-light px-6 py-3 text-base font-medium text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-ph-violet-light/40"
            >
              <span>Começar conversa</span>
              <Icon name="tabler:wave-sine" class="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
            </NuxtLink>
            <NuxtLink
              to="#metodo"
              class="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-base font-medium text-white/70 transition duration-300 hover:border-white/40 hover:text-white"
            >
              Conheça o método
              <Icon name="tabler:arrow-right" class="h-4 w-4" />
            </NuxtLink>
          </div>

          <dl class="grid gap-6 text-sm text-white/60 sm:grid-cols-3">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <dt class="font-body uppercase tracking-[0.2em] text-white/40">Origem</dt>
              <dd class="mt-3 font-display text-3xl text-white">2019</dd>
              <p class="mt-2 text-xs text-white/50">Quando a PHCruz nasceu da decisão de empreender e assumir a autoria completa.</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <dt class="font-body uppercase tracking-[0.2em] text-white/40">Modo de trabalho</dt>
              <dd class="mt-3 font-display text-3xl text-white">Coautoria</dd>
              <p class="mt-2 text-xs text-white/50">Clientes participam de cada escolha, com entregas consistentes e visibilidade total.</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <dt class="font-body uppercase tracking-[0.2em] text-white/40">Foco</dt>
              <dd class="mt-3 font-display text-3xl text-white">Backend &amp; Mobile</dd>
              <p class="mt-2 text-xs text-white/50">Engenharia como núcleo, integrando experiência, infraestrutura e publicação contínua.</p>
            </div>
          </dl>
        </div>

        <div class="relative flex flex-col items-end gap-6">
          <div class="pointer-events-none absolute -top-12 -right-20 h-64 w-64 rounded-full bg-ph-emerald/25 blur-3xl" />
          <div class="relative w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/5 via-white/2 to-white/0 p-8 shadow-glow backdrop-blur">
            <div class="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/40">
              <span>Next Interaction</span>
              <span>02:34</span>
            </div>
            <div class="mt-10 flex flex-col gap-6">
              <div class="flex items-center justify-between">
                <span class="font-display text-3xl text-white">Interface como instrumento.</span>
                <Icon name="tabler:hexagon" class="h-7 w-7 text-ph-emerald/80" />
              </div>
              <p class="text-sm text-white/60">
                Prototipagem, métricas e sensorialidade caminhando juntos. Cada release recebe ensaios de luz, contraste e resposta tátil.
              </p>
              <div class="grid grid-cols-3 gap-4 text-xs">
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span class="font-display text-xl text-white">0.7s</span>
                  <p class="mt-1 text-white/50">TTI médio</p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span class="font-display text-xl text-white">98%</span>
                  <p class="mt-1 text-white/50">Satisfação</p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span class="font-display text-xl text-white">24h</span>
                  <p class="mt-1 text-white/50">Ciclo feedback</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative flex w-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p class="text-xs uppercase tracking-[0.25em] text-white/40">Principais tecnologias</p>
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

    <section id="manifesto" class="relative border-t border-white/10 bg-base/80">
      <div class="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[1.1fr,0.9fr]">
        <div class="flex flex-col gap-4">
          <p class="text-sm uppercase tracking-[0.35em] text-white/40">{{ $t('manifesto.label') }}</p>
          <h2 class="font-display text-3xl text-white sm:text-4xl">
            {{ $t('manifesto.title') }}
          </h2>
          <pre class="mt-6 whitespace-pre-wrap break-words rounded-[1.5rem] border border-white/10 bg-white/5 p-8 text-base leading-relaxed text-white/70 backdrop-blur">{{ $t('manifesto.text') }}</pre>
        </div>
        <div class="relative flex flex-col gap-6">
          <div class="pointer-events-none absolute -top-20 right-10 h-48 w-48 rounded-full bg-ph-violet/40 blur-3xl" />
          <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-10 shadow-glow backdrop-blur">
            <p class="text-sm uppercase tracking-[0.3em] text-white/40">{{ $t('manifesto.framework.title') }}</p>
            <ul class="mt-6 space-y-4 text-white/70">
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-ph-emerald" />
                <div>
                  <p class="font-display text-lg text-white">{{ $t('manifesto.framework.items.diagnosis.title') }}</p>
                  <p class="text-sm text-white/60">{{ $t('manifesto.framework.items.diagnosis.description') }}</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-ph-emerald" />
                <div>
                  <p class="font-display text-lg text-white">{{ $t('manifesto.framework.items.design.title') }}</p>
                  <p class="text-sm text-white/60">{{ $t('manifesto.framework.items.design.description') }}</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-ph-emerald" />
                <div>
                  <p class="font-display text-lg text-white">{{ $t('manifesto.framework.items.delivery.title') }}</p>
                  <p class="text-sm text-white/60">{{ $t('manifesto.framework.items.delivery.description') }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="metodo" class="relative border-t border-white/10 bg-gradient-to-br from-base via-[#120E1D] to-[#0B0A10]">
      <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div class="mx-auto max-w-6xl px-6 py-24">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="text-sm uppercase tracking-[0.35em] text-white/40">{{ $t('method.label') }}</p>
            <h2 class="mt-3 font-display text-3xl text-white sm:text-4xl">{{ $t('method.title') }}</h2>
          </div>
          <p class="max-w-2xl text-base text-white/60">
            {{ $t('method.description') }}
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 transition duration-500 hover:border-ph-emerald/60 hover:bg-white/10">
            <div class="flex items-center justify-between">
              <span class="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/50">{{ $t('method.pillars.clarity.label') }}</span>
              <Icon name="tabler:compass" class="h-6 w-6 text-ph-emerald/80 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <h3 class="mt-6 font-display text-2xl text-white">{{ $t('method.pillars.clarity.title') }}</h3>
            <p class="mt-4 text-sm text-white/60">
              {{ $t('method.pillars.clarity.description') }}
            </p>
            <ul class="mt-6 space-y-2 text-xs text-white/50">
              <li v-for="(item, index) in $tm('method.pillars.clarity.items')" :key="index">• {{ item }}</li>
            </ul>
          </article>
          <article class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 transition duration-500 hover:border-ph-emerald/60 hover:bg-white/10">
            <div class="flex items-center justify-between">
              <span class="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/50">{{ $t('method.pillars.precision.label') }}</span>
              <Icon name="tabler:cpu" class="h-6 w-6 text-ph-emerald/80 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <h3 class="mt-6 font-display text-2xl text-white">{{ $t('method.pillars.precision.title') }}</h3>
            <p class="mt-4 text-sm text-white/60">
              {{ $t('method.pillars.precision.description') }}
            </p>
            <ul class="mt-6 space-y-2 text-xs text-white/50">
              <li v-for="(item, index) in $tm('method.pillars.precision.items')" :key="index">• {{ item }}</li>
            </ul>
          </article>
          <article class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 transition duration-500 hover:border-ph-emerald/60 hover:bg-white/10">
            <div class="flex items-center justify-between">
              <span class="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/50">{{ $t('method.pillars.continuity.label') }}</span>
              <Icon name="tabler:heartbeat" class="h-6 w-6 text-ph-emerald/80 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <h3 class="mt-6 font-display text-2xl text-white">{{ $t('method.pillars.continuity.title') }}</h3>
            <p class="mt-4 text-sm text-white/60">
              {{ $t('method.pillars.continuity.description') }}
            </p>
            <ul class="mt-6 space-y-2 text-xs text-white/50">
              <li v-for="(item, index) in $tm('method.pillars.continuity.items')" :key="index">• {{ item }}</li>
            </ul>
          </article>
        </div>
        <div class="mt-12">
          <NuxtLink
            to="#contato"
            class="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-ph-emerald transition hover:text-white"
          >
            {{ $t('method.cta') }}
            <Icon name="tabler:arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <ProjectsSection />

    <section id="origem" class="relative border-t border-white/10 bg-gradient-to-br from-[#0B0A10] via-[#120E1D] to-[#0B0A10]">
      <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div class="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.9fr,1.1fr] md:items-center">
        <div class="space-y-6">
          <p class="text-sm uppercase tracking-[0.35em] text-white/40">{{ $t('about.label') }}</p>
          <h2 class="font-display text-3xl text-white sm:text-4xl">{{ $t('about.title') }}</h2>
          <p class="text-base text-white/70">
            {{ $t('about.bio1') }}
          </p>
          <p class="text-base text-white/70">
            {{ $t('about.bio2') }}
          </p>
        </div>
        <div class="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 text-white/70 shadow-glow backdrop-blur">
          <p class="text-sm uppercase tracking-[0.35em] text-white/40">{{ $t('about.mantra.label') }}</p>
          <p class="mt-4 text-lg leading-relaxed">
            {{ $t('about.mantra.text') }}
          </p>
        </div>
      </div>
    </section>

    <section id="contato" class="relative overflow-hidden border-t border-white/10 bg-gradient-to-r from-ph-violet/20 via-base to-ph-violet-light/20">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ph-emerald/25 blur-3xl" />
      </div>
      <div class="mx-auto max-w-5xl px-6 py-24">
        <div class="rounded-[2.5rem] border border-white/15 bg-black/40 p-10 shadow-glow backdrop-blur-xl">
          <div class="flex flex-col gap-6 text-center">
            <span class="text-sm uppercase tracking-[0.35em] text-white/40">{{ $t('contact.label') }}</span>
            <h2 class="font-display text-3xl text-white sm:text-4xl">
              {{ $t('contact.title') }}
            </h2>
            <p class="mx-auto max-w-2xl text-base text-white/70">
              {{ $t('contact.description') }}
            </p>
            <div class="mx-auto flex flex-wrap items-center justify-center gap-4">
              <NuxtLink
                :to="`mailto:${$t('footer.email')}`"
                class="inline-flex items-center gap-3 rounded-brand bg-ph-emerald px-6 py-3 text-base font-medium shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-ph-emerald/40"
              >
                {{ $t('contact.sendMessage') }}
              </NuxtLink>
              <NuxtLink
                to="https://cal.com/phcruz"
                target="_blank"
                class="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-medium text-white/70 transition hover:border-white/40 hover:text-white"
              >
                {{ $t('contact.scheduleCall') }}
                <Icon name="tabler:clock" class="h-4 w-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
