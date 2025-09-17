# 5. Padrões de Código

- **Variáveis de Ambiente:** Nunca expor chaves de API no frontend. A chave do Gemini deve ser acessada exclusivamente pela função serverless no backend, via variáveis de ambiente da Vercel.
- **Tipagem:** Usar TypeScript em modo `strict`.
- **Nomenclatura:**
    - Componentes React: `PascalCase` (ex: `FormularioAnalise.tsx`)
    - Funções e variáveis: `camelCase` (ex: `handleAnalise`)

---
