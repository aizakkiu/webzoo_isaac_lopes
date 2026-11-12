# WebZoo — Projeto Front-End

Nome: Isaac Lopes Primo
Turma: DEV-2 
Instituição: SENAI “Comendador Santoro Mirone” — Indaiatuba/SP  
Link publicado: https://aizakkiu.github.io/webzoo_isaac_lopes/

## Sobre
Site educativo multipáginas sobre fauna brasileira, com identidade visual WebZoo e layout responsivo.

## Páginas
- `index.html`: apresentação, missão, destaques e curiosidades.
- `animais.html`: fichas de onça-pintada, tucano-toco e capivara; filtros por classe, alimentação e bioma.
- `visite.html`: horários, tabela de ingressos, endereço, consulta de CEP, previsão do tempo, dicas e FAQ.
- `participe.html`: programas ambientais e formulário demonstrativo com validação e consulta de CEP.

## APIs utilizadas
1. **ViaCEP** — `https://viacep.com.br/ws/{CEP}/json/`  
   Uso: páginas Visite e Participe; preenche logradouro, bairro, cidade e UF. Arquivo: `js/cep.js`.
2. **Open-Meteo** — `https://api.open-meteo.com/v1/forecast`  
   Uso: página Visite; consulta temperatura atual, máxima, mínima e probabilidade de precipitação para coordenadas aproximadas do zoológico. Arquivo: `js/clima.js`.

As duas APIs são públicas, utilizam HTTPS e não exigem chave. O código trata carregamento, sucesso e falha, além de validar o CEP antes de consultar.

## Interações
- Menu hambúrguer responsivo com suporte a teclado e tecla Esc.
- Filtros de animais.
- FAQ com `details` e `summary`.
- Validação de formulário com mensagens junto aos campos e foco no primeiro erro.
- Preenchimento de endereço por CEP.
- Consulta de previsão do tempo.
- Preferência por movimento reduzido respeitada via CSS.

## Estrutura
```text
WebZoo_Nome_Sobrenome/
├── index.html
├── animais.html
├── visite.html
├── participe.html
├── css/style.css
├── js/
│   ├── menu.js
│   ├── animais.js
│   ├── cep.js
│   ├── clima.js
│   └── formulario.js
├── assets/
└── README.md
```

## Como executar localmente
1. Extraia a pasta do projeto.
2. Abra a pasta no Visual Studio Code.
3. Instale/ative a extensão Live Server.
4. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.
5. Teste as consultas de CEP e clima com internet ativa.

Não é recomendado abrir diretamente com `file://`, pois algumas funcionalidades de navegador funcionam melhor por servidor HTTP local.

## Como publicar no GitHub Pages
1. Crie um repositório público no GitHub.
2. Envie todos os arquivos e pastas desta pasta para a raiz do repositório.
3. Acesse **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione `main` e `/ (root)` e salve.
6. Aguarde a publicação e abra o endereço exibido pelo GitHub Pages.
7. Teste todas as páginas e APIs em uma janela anônima e no celular.
8. Atualize o campo **Link publicado** neste README.

## Créditos e observações
- Imagens, logotipo e paleta: material fornecido na atividade WebZoo.
- ViaCEP: https://viacep.com.br/
- Open-Meteo: https://open-meteo.com/
- Projeto acadêmico. Horários e preços são fictícios conforme material de apoio.
- O formulário é demonstrativo: não envia nem armazena dados.
- Ferramenta de IA utilizada no apoio à geração e organização do código: ChatGPT. Revise, teste e compreenda o código antes da entrega.
