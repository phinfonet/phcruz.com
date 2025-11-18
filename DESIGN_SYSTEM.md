# 🎨 PHCruz Design System
## Guia Completo de Cores e Gradientes

> **Precisão técnica com alma artística**
> Sistema de cores Dark Vibrant Premium — pronto para uso em web, vídeo, design gráfico e impressão.

---

## 📊 Paleta de Cores Principal

### 🖤 Base Dark
**Nome:** `base`
Cor primária de fundo, escura e profunda.

| Formato | Valor |
|---------|-------|
| **HEX** | `#0B0A10` |
| **RGB** | `rgb(11, 10, 16)` |
| **HSL** | `hsl(250°, 23%, 5%)` |
| **CMYK** | `C:31 M:38 Y:0 K:94` |
| **Adobe (0-255)** | `R:11 G:10 B:16` |

**Uso:** Backgrounds principais, áreas de destaque escuras, fundos de seções.

---

### 💜 PH Violet (Roxo Primário)
**Nome:** `ph-violet`
Cor de marca principal — roxo vibrante e premium.

| Formato | Valor |
|---------|-------|
| **HEX** | `#5B1AE3` |
| **RGB** | `rgb(91, 26, 227)` |
| **HSL** | `hsl(259°, 80%, 50%)` |
| **CMYK** | `C:60 M:89 Y:0 K:11` |
| **Adobe (0-255)** | `R:91 G:26 B:227` |

**Uso:** Botões primários, links, highlights, elementos de destaque, início de gradientes.

---

### 🌟 PH Violet Light (Roxo Claro)
**Nome:** `ph-violet-light`
Variação mais clara do roxo — para transições e gradientes.

| Formato | Valor |
|---------|-------|
| **HEX** | `#8E3EF8` |
| **RGB** | `rgb(142, 62, 248)` |
| **HSL** | `hsl(266°, 93%, 61%)` |
| **CMYK** | `C:43 M:75 Y:0 K:3` |
| **Adobe (0-255)** | `R:142 G:62 B:248` |

**Uso:** Fim de gradientes, hovers, glows, efeitos de luz, destaques secundários.

---

### 💎 PH Emerald (Verde Esmeralda)
**Nome:** `ph-emerald`
Cor de acento — verde vibrante e chamativo.

| Formato | Valor |
|---------|-------|
| **HEX** | `#19E6A8` |
| **RGB** | `rgb(25, 230, 168)` |
| **HSL** | `hsl(162°, 82%, 50%)` |
| **CMYK** | `C:89 M:0 Y:27 K:10` |
| **Adobe (0-255)** | `R:25 G:230 B:168` |

**Uso:** CTAs (Call to Action), botões de ação, indicadores de progresso, acentos importantes.

---

### 📄 PH Text (Texto Claro)
**Nome:** `ph-text`
Cor principal de texto — off-white suave.

| Formato | Valor |
|---------|-------|
| **HEX** | `#E8E6F2` |
| **RGB** | `rgb(232, 230, 242)` |
| **HSL** | `hsl(250°, 33%, 93%)` |
| **CMYK** | `C:4 M:5 Y:0 K:5` |
| **Adobe (0-255)** | `R:232 G:230 B:242` |

**Uso:** Texto principal, headings, parágrafos, labels.

---

### 🌑 PH Neutral (Neutro Escuro)
**Nome:** `ph-neutral`
Cor neutra para fundos secundários.

| Formato | Valor |
|---------|-------|
| **HEX** | `#161420` |
| **RGB** | `rgb(22, 20, 32)` |
| **HSL** | `hsl(250°, 23%, 10%)` |
| **CMYK** | `C:31 M:38 Y:0 K:87` |
| **Adobe (0-255)** | `R:22 G:20 B:32` |

**Uso:** Cards, containers, fundos de seções alternativas, borders.

---

## 🌈 Gradientes

### 🎭 Hero Gradient
**Nome:** `ph-hero`
Gradiente principal do site — usado em hero sections e backgrounds principais.

**CSS:**
```css
background: linear-gradient(160deg, #0B0A10 0%, rgba(91,26,227,0.75) 45%, #8E3EF8 100%);
```

**Breakdown:**
- **Direção:** 160° (diagonal descendente da esquerda para direita)
- **Parada 1 (0%):** `#0B0A10` (base escuro sólido)
- **Parada 2 (45%):** `rgba(91,26,227,0.75)` (roxo primário com 75% opacidade)
- **Parada 3 (100%):** `#8E3EF8` (roxo claro sólido)

**Para After Effects / Premiere:**
```
Tipo: Linear
Ângulo: 160°
Keyframes:
  - 0%: RGB(11, 10, 16) | Opacidade: 100%
  - 45%: RGB(91, 26, 227) | Opacidade: 75%
  - 100%: RGB(142, 62, 248) | Opacidade: 100%
```

**Para Figma:**
```
Tipo: Linear Gradient
Ângulo: 160°
Stops:
  - 0% → #0B0A10
  - 45% → #5B1AE3 (75% opacity)
  - 100% → #8E3EF8
```

---

### 🔴 Gradiente Roxo Horizontal
**Nome:** Usado em botões e elementos interativos

**CSS:**
```css
background: linear-gradient(to right, #5B1AE3, #8E3EF8);
```

**Breakdown:**
- **Direção:** Esquerda → Direita
- **Parada 1:** `#5B1AE3` (roxo primário)
- **Parada 2:** `#8E3EF8` (roxo claro)

**Para After Effects / Premiere:**
```
Tipo: Linear
Ângulo: 0° (horizontal)
Keyframes:
  - 0%: RGB(91, 26, 227)
  - 100%: RGB(142, 62, 248)
```

---

### 🌊 Gradiente Fade Vertical
**Nome:** Usado em overlays e transições

**CSS:**
```css
background: linear-gradient(to bottom, #0B0A10, rgba(11,10,16,0.8), transparent);
```

**Breakdown:**
- **Direção:** Topo → Base
- **Parada 1:** `#0B0A10` (base escuro sólido)
- **Parada 2:** `rgba(11,10,16,0.8)` (base com 80% opacidade)
- **Parada 3:** `transparent` (transparente)

---

## ✨ Efeitos Especiais

### 💫 Glow Effect (Brilho Violeta)
**Nome:** `glow`

**CSS:**
```css
box-shadow: 0 0 40px rgba(142, 62, 248, 0.35);
```

**Breakdown:**
- **Offset X:** 0px
- **Offset Y:** 0px
- **Blur:** 40px
- **Cor:** `#8E3EF8` com 35% de opacidade

**Para After Effects:**
```
Effect: Glow
Threshold: 0%
Radius: 40px
Intensity: 35%
Color: RGB(142, 62, 248)
```

**Para Photoshop:**
```
Layer Style → Outer Glow
Blend Mode: Normal
Opacity: 35%
Color: #8E3EF8
Size: 40px
```

---

## 🎬 Uso em Vídeo

### Adobe After Effects
1. **Criar Solid com gradiente:**
   - Layer → New → Solid
   - Effects → Generate → Gradient Ramp
   - Configurar conforme valores acima

2. **Aplicar glow:**
   - Effects → Stylize → Glow
   - Ou usar os valores de box-shadow convertidos

### Adobe Premiere
1. **Color Matte:**
   - File → New → Color Matte
   - Inserir valores HEX das cores

2. **Gradiente:**
   - Usar efeito "4-Color Gradient" ou importar de After Effects

---

## 🎨 Uso em Design Gráfico

### Figma / Sketch
- Importar cores como Styles globais
- Criar gradientes como presets reutilizáveis
- Usar hex codes diretamente

### Adobe Photoshop / Illustrator
- Adicionar cores ao Swatches panel
- Criar Gradient presets
- Usar valores CMYK para impressão

---

## 📱 Uso em UI/UX

### Tailwind CSS
Todas as cores já estão configuradas no `tailwind.config.ts`:

```typescript
colors: {
  base: '#0B0A10',
  'ph-text': '#E8E6F2',
  'ph-violet': '#5B1AE3',
  'ph-violet-light': '#8E3EF8',
  'ph-emerald': '#19E6A8',
  'ph-neutral': '#161420'
}
```

**Uso:**
```html
<div class="bg-base text-ph-text">
  <button class="bg-gradient-to-r from-ph-violet to-ph-violet-light">
    Clique aqui
  </button>
</div>
```

---

## 🖨️ Uso em Impressão

### Conversão CMYK
Para materiais impressos, use os valores CMYK fornecidos acima.

**Importante:**
- Sempre faça teste de impressão (proof)
- Cores vibrantes (especialmente roxo e verde esmeralda) podem variar
- Considere usar Pantone para maior precisão:
  - PH Violet ≈ Pantone 2665 C
  - PH Emerald ≈ Pantone 7465 C

---

## 🔍 Acessibilidade

### Contraste de Texto

| Fundo | Texto | Contraste | WCAG |
|-------|-------|-----------|------|
| `base` (#0B0A10) | `ph-text` (#E8E6F2) | 17.2:1 | ✅ AAA |
| `ph-violet` (#5B1AE3) | `ph-text` (#E8E6F2) | 5.8:1 | ✅ AA |
| `ph-emerald` (#19E6A8) | `base` (#0B0A10) | 8.2:1 | ✅ AAA |

---

## 📦 Exportação Rápida

### JSON
```json
{
  "colors": {
    "base": "#0B0A10",
    "ph-text": "#E8E6F2",
    "ph-violet": "#5B1AE3",
    "ph-violet-light": "#8E3EF8",
    "ph-emerald": "#19E6A8",
    "ph-neutral": "#161420"
  },
  "gradients": {
    "ph-hero": "linear-gradient(160deg, #0B0A10 0%, rgba(91,26,227,0.75) 45%, #8E3EF8 100%)",
    "button": "linear-gradient(to right, #5B1AE3, #8E3EF8)"
  }
}
```

### CSS Variables
```css
:root {
  --color-base: #0B0A10;
  --color-text: #E8E6F2;
  --color-violet: #5B1AE3;
  --color-violet-light: #8E3EF8;
  --color-emerald: #19E6A8;
  --color-neutral: #161420;

  --gradient-hero: linear-gradient(160deg, #0B0A10 0%, rgba(91,26,227,0.75) 45%, #8E3EF8 100%);
  --gradient-button: linear-gradient(to right, #5B1AE3, #8E3EF8);

  --shadow-glow: 0 0 40px rgba(142, 62, 248, 0.35);
}
```

---

## 📚 Recursos Adicionais

### Arquivos de Configuração
- **Tailwind:** `/tailwind.config.ts`
- **Identidade Visual:** `/agents.md`
- **Componentes Vue:** `/app/components/`

### Ferramentas Recomendadas
- **Coolors.co** — para visualizar paletas
- **Contrast Checker** — para validar acessibilidade
- **Adobe Color** — para criar variações

---

## 🏷️ Assinatura
**PHCruz Design System v1.0**
*Dark Vibrant Premium — Precisão técnica com alma artística*

Última atualização: 2025-11-18
