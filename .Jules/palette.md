## 2025-05-15 - Implementação de Skip Link em Layouts com Header Fixo
**Learning:** Em layouts com header fixo (`position: fixed`), o "Skip Link" precisa de um `z-index` alto e um posicionamento explícito para não ser coberto pelo menu de navegação. Além disso, usar as utilidades de acessibilidade do Tailwind CSS v4 (`sr-only` e `focus:not-sr-only`) é mais limpo do que injetar blocos de CSS customizados.
**Action:** Sempre verificar se o skip link aparece *acima* de elementos fixos e utilizar as classes nativas do framework de CSS presente no projeto.
