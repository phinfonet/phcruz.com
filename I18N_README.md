# Sistema de Internacionalização (i18n)

Este projeto agora suporta múltiplos idiomas usando @nuxtjs/i18n.

## Idiomas Suportados

- 🇧🇷 **Português (Brasil)** - `pt-br` (padrão)
- 🇨🇱 **Español (Chile)** - `es-cl`
- 🇺🇸 **English** - `en`

## Estrutura de Arquivos

```
/locales/
├── pt-br.json   # Traduções em português
├── es-cl.json   # Traduções em espanhol (Chile)
└── en.json      # Traduções em inglês

/app/config/
└── locations.ts # Configuração de endereços por localidade
```

## URLs e Rotas

- `/` → Português (Brasil) - idioma padrão
- `/es-cl/` → Español (Chile)
- `/en/` → English

## Seletor de Idioma

Um seletor de idioma foi adicionado ao header do site, permitindo aos usuários alternar entre os idiomas disponíveis.

## Como Adicionar os Endereços do Chile

### 1. Editar o arquivo de configuração

Abra `/app/config/locations.ts` e localize a seção `'es-cl'`:

```typescript
'es-cl': {
  country: 'Chile',
  countryCode: 'CL',
  email: 'contacto@phcruz.com', // Atualize se necessário
  calendarUrl: 'https://cal.com/phcruz',
  offices: [
    // Adicione seus endereços aqui:
    {
      id: 'cl-santiago-1',
      city: 'Santiago',
      address: 'Av. Providencia 1234, Oficina 567',
      postalCode: '7500000',
      phone: '+56 2 1234 5678',
      timezone: 'America/Santiago'
    },
    {
      id: 'cl-santiago-2',
      city: 'Santiago',
      address: 'Seu segundo endereço aqui',
      postalCode: 'CEP',
      phone: '+56 2 XXXX XXXX',
      timezone: 'America/Santiago'
    }
  ]
}
```

### 2. Usar os dados nos componentes

Para usar os dados de localização em seus componentes:

```vue
<script setup lang="ts">
import { getLocationData, getEmail } from '~/config/locations'

const { locale } = useI18n()
const locationData = computed(() => getLocationData(locale.value))
</script>

<template>
  <div>
    <p>{{ locationData.country }}</p>
    <p>Email: {{ locationData.email }}</p>
    <div v-for="office in locationData.offices" :key="office.id">
      <h3>{{ office.city }}</h3>
      <p>{{ office.address }}</p>
      <p v-if="office.phone">{{ office.phone }}</p>
    </div>
  </div>
</template>
```

## Como Adicionar Novas Traduções

### 1. Adicione a chave no arquivo de idioma

Edite os arquivos em `/locales/`:

**pt-br.json**
```json
{
  "newSection": {
    "title": "Novo Título",
    "description": "Nova descrição"
  }
}
```

### 2. Use no componente

```vue
<template>
  <h1>{{ $t('newSection.title') }}</h1>
  <p>{{ $t('newSection.description') }}</p>
</template>
```

## Funções Úteis

### $t() - Traduzir strings

```vue
{{ $t('nav.contact') }}
```

### $tm() - Traduzir arrays/objetos

```vue
<li v-for="item in $tm('method.pillars.clarity.items')" :key="item">
  {{ item }}
</li>
```

### localePath() - Gerar links localizados

```vue
<NuxtLink :to="localePath('/')">Home</NuxtLink>
```

### switchLocalePath() - Alternar idioma

```vue
<script setup>
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <NuxtLink :to="switchLocalePath('es-cl')">Español</NuxtLink>
</template>
```

## Detecção Automática de Idioma

O sistema detecta automaticamente o idioma preferido do navegador do usuário e redireciona para a versão apropriada. A preferência é salva em um cookie (`i18n_redirected`).

## SEO

Cada página inclui automaticamente tags `<link rel="alternate" hreflang="...">` para SEO multilíngue.

## Considerações Importantes

1. **Manter sincronizadas**: Ao adicionar novas chaves de tradução, certifique-se de adicioná-las em TODOS os arquivos de idioma
2. **Estrutura consistente**: Mantenha a mesma estrutura JSON em todos os arquivos de tradução
3. **Placeholders**: Use placeholders quando necessário: `{{ $t('message', { name: 'Pedro' }) }}`
4. **Pluralização**: O i18n suporta pluralização automática se necessário

## Problemas Comuns

### Tradução não aparece

- Verifique se a chave existe em todos os arquivos de idioma
- Verifique a sintaxe JSON (vírgulas, aspas)
- Limpe o cache: `rm -rf .nuxt && npm run dev`

### Rota não funciona

- Certifique-se de usar `localePath()` para links internos
- Verifique a estratégia de roteamento no `nuxt.config.ts`

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Recursos Adicionais

- [Documentação @nuxtjs/i18n](https://i18n.nuxtjs.org/)
- [Vue I18n](https://vue-i18n.intlify.dev/)
