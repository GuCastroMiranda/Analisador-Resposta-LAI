# 4. Estrutura Unificada do Projeto

```plaintext
analisador-lai/
├── apps/
│   ├── api/                # Backend (Função Serverless)
│   │   ├── src/
│   │   │   └── index.ts    # Ponto de entrada da função
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── web/                # Frontend (React + Vite)
│       ├── public/
│       ├── src/
│       │   ├── components/ # Componentes React
│       │   ├── App.tsx
│       │   └── main.tsx
│       ├── index.html
│       ├── package.json
│       └── tsconfig.json
├── package.json            # Raiz do monorepo (npm workspaces)
└── README.md
```

---
