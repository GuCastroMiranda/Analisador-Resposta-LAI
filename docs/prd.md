# Analisador de Respostas LAI - Product Requirements Document (PRD)

## 1. Goals and Background Context

### Goals
- **Automatizar** o preenchimento de um formulário de análise repetitivo.
- **Reduzir** o tempo gasto por funcionários em cada demanda.
- **Padronizar** a análise inicial das respostas.
- **Fornecer** uma interface simples e de tarefa única para máxima eficiência.
- **Medir** e melhorar a precisão da automação através de feedback contínuo.

### Background Context
Atualmente, funcionários públicos precisam analisar manualmente um pedido de informação de um cidadão e a resposta textual de uma área interna para preencher um formulário padrão. Esse processo é repetitivo e consome tempo.

Este projeto visa criar um aplicativo de página única que utiliza a IA do Google (Gemini 1.5 Flash) para automatizar o preenchimento deste formulário. O funcionário apenas cola os dois textos e a IA preenche as opções do formulário, extrai justificativas e identifica a área responsável, otimizando drasticamente o fluxo de trabalho.

### Change Log
| Date       | Version | Description              | Author |
|------------|---------|--------------------------|--------|
| 2025-09-17 | 1.0     | Initial draft from brainstorming session | Mary   |

---

## 2. Requirements

### Functional Requirements
- **FR1:** O sistema deve fornecer duas caixas de texto para o usuário colar o "texto do pedido" e o "texto da resposta".
- **FR2:** O sistema deve usar os dois textos para preencher um formulário digital (baseado em `docs/formulario_base.txt`).
- **FR3:** A IA deve marcar **apenas uma** opção para cada pergunta de múltipla escolha no formulário.
- **FR4:** A IA deve extrair e preencher a justificativa textual no campo "Detalhamento" se a decisão for "Acesso Negado" ou "Acesso Parcialmente Concedido".
- **FR5:** A IA deve extrair o nome da "Área responsável" e a "Tag" (sigla) a partir do texto da resposta.
- **FR6:** O sistema deve apresentar o formulário preenchido em um formato de texto não-editável.
- **FR7:** O sistema deve fornecer um botão para "Copiar" o conteúdo inteiro do formulário preenchido.
- **FR8:** O sistema deve exibir um indicador visual de confiança (ex: alto, médio, baixo) para cada campo preenchido pela IA.
- **FR9:** O sistema deve apresentar ao usuário uma opção de avaliar a precisão do preenchimento (ex: "Correto" / "Incorreto") após cada análise.

### Non-Functional Requirements
- **NFR1:** A análise e o preenchimento do formulário pela IA devem ser concluídos em menos de 10 segundos.
- **NFR2:** O sistema não deve armazenar permanentemente os textos inseridos pelo usuário.
- **NFR3:** O sistema deve ter um mecanismo (a ser definido) para evitar o envio de dados pessoais sensíveis (LGPD) para a API da IA.
- **NFR4:** A interface deve ser responsiva e funcionar em navegadores web modernos.

---

## 3. User Interface Design Goals

- **Overall UX Vision:** Uma ferramenta "invisível" e minimalista. O foco absoluto é na velocidade: colar, analisar, copiar. Sem distrações.
- **Key Interaction Paradigms:** A interação primária é `colar -> clicar em um botão -> revisar -> copiar`.
- **Core Screens and Views:** Apenas uma tela: "Página de Análise", contendo as entradas, o botão de ação e a saída.
- **Accessibility:** WCAG AA (Padrão assumido).
- **Branding:** Nenhum requisito de marca específico.
- **Target Device and Platforms:** Web Responsivo.

---

## 4. Technical Assumptions

- **Core Technology:** O sistema utilizará a API do Google Gemini, especificamente o modelo `gemini-1.5-flash`.
- **Repository Structure:** Monorepo.
- **Service Architecture:** Arquitetura Serverless é recomendada para o backend que fará a chamada à API do Gemini, para proteger as chaves de API e gerenciar a lógica do prompt.
- **Testing Requirements:** Unitários e de Integração.

---

## 5. Epic List

### Epic 1: MVP - Análise e Preenchimento Automatizado de Formulário
**Goal:** Entregar a funcionalidade central do aplicativo, permitindo que um funcionário cole os textos, obtenha o formulário preenchido pela IA com indicadores de confiança, e copie o resultado, incluindo a capacidade de fornecer feedback sobre a precisão.

*(O detalhamento das estórias de usuário será feito na próxima fase pelo Product Owner/Gerente de Projeto).*

---
