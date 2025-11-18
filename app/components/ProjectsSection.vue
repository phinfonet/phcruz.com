<template>
  <section id="projetos" class="relative border-t border-white/10 bg-base/85">
    <div class="mx-auto max-w-6xl px-6 py-24">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <p class="text-sm uppercase tracking-[0.35em] text-white/40">O que já transformamos</p>
          <h2 class="mt-3 font-display text-3xl text-white sm:text-4xl">
            Cada projeto é uma conversa entre necessidade e descoberta.
          </h2>
          <p class="mt-4 text-base text-white/60">
            Selecionamos recortes que mostram como coautoria, ritmo e propósito aparecem no dia a dia das entregas.
          </p>
        </div>
        <NuxtLink
          to="#contato"
          class="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm uppercase tracking-[0.2em] text-white/70 transition hover:border-ph-emerald/60 hover:text-white"
        >
          Conversar sobre o seu projeto
          <Icon name="tabler:arrow-up-right" class="h-4 w-4" />
        </NuxtLink>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article
          class="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 transition duration-500 hover:border-ph-emerald/60"
        >
          <div class="flex items-center justify-between">
            <span
              class="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/50"
            >
              Fluxo financeiro mais humano
            </span>
            <span class="text-xs uppercase tracking-[0.3em] text-white/40">Em operação</span>
          </div>
          <p class="mt-6 text-sm uppercase tracking-[0.25em] text-white/40">
            Conversas semanais · releases contínuos
          </p>
          <p class="mt-4 text-sm text-white/60">
            Redesenhamos um sistema de controle para dar visibilidade e ritmo a quem opera. Menos ruído, mais clareza
            para decisões diárias.
          </p>
        </article>

        <article
          class="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 transition duration-500 hover:border-ph-emerald/60"
        >
          <div class="flex items-center justify-between">
            <span
              class="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/50"
            >
              Aplicação SaaS modular
            </span>
            <span class="text-xs uppercase tracking-[0.3em] text-white/40">Em evolução</span>
          </div>
          <p class="mt-6 text-sm uppercase tracking-[0.25em] text-white/40">
            Base escalável · vínculo com o usuário
          </p>
          <p class="mt-4 text-sm text-white/60">
            Estruturamos a base de um produto escalável sem perder o contato com o usuário final. Cada módulo nasce com
            governança compartilhada.
          </p>
        </article>

        <article
          class="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 transition duration-500 hover:border-ph-emerald/60"
        >
          <div class="flex items-center justify-between">
            <span
              class="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/50"
            >
              Integração em tempo real
            </span>
            <span class="text-xs uppercase tracking-[0.3em] text-white/40">Publicado</span>
          </div>
          <p class="mt-6 text-sm uppercase tracking-[0.25em] text-white/40">
            Observabilidade constante · processos simplificados
          </p>
          <p class="mt-4 text-sm text-white/60">
            Simplificamos fluxos complexos com comunicação direta, monitoramento contínuo e decisões tomadas lado a lado
            com o time interno.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
