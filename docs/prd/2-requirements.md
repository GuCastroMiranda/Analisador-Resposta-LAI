# 2. Requirements

## Functional Requirements
- **FR1:** O sistema deve fornecer duas caixas de texto para o usuário colar o "texto do pedido" e o "texto da resposta".
- **FR2:** O sistema deve usar os dois textos para preencher um formulário digital (baseado em `docs/formulario_base.txt`).
- **FR3:** A IA deve marcar **apenas uma** opção para cada pergunta de múltipla escolha no formulário.
- **FR4:** A IA deve extrair e preencher a justificativa textual no campo "Detalhamento" se a decisão for "Acesso Negado" ou "Acesso Parcialmente Concedido".
- **FR5:** A IA deve extrair o nome da "Área responsável" e a "Tag" (sigla) a partir do texto da resposta.
- **FR6:** O sistema deve apresentar o formulário preenchido em um formato de texto não-editável.
- **FR7:** O sistema deve fornecer um botão para "Copiar" o conteúdo inteiro do formulário preenchido.
- **FR8:** O sistema deve exibir um indicador visual de confiança (ex: alto, médio, baixo) para cada campo preenchido pela IA.
- **FR9:** O sistema deve apresentar ao usuário uma opção de avaliar a precisão do preenchimento (ex: "Correto" / "Incorreto") após cada análise.

## Non-Functional Requirements
- **NFR1:** A análise e o preenchimento do formulário pela IA devem ser concluídos em menos de 10 segundos.
- **NFR2:** O sistema não deve armazenar permanentemente os textos inseridos pelo usuário.
- **NFR3:** O sistema deve ter um mecanismo (a ser definido) para evitar o envio de dados pessoais sensíveis (LGPD) para a API da IA.
- **NFR4:** A interface deve ser responsiva e funcionar em navegadores web modernos.

---
