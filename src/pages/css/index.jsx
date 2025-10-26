import { PaletteIcon } from "lucide-react";
import { useState } from "react";
import { Footer } from "../../components/footer"
import { Navbar } from "../../components/navbar"
import { FileCode2Icon } from "lucide-react";
import { PaintBucketIcon } from "lucide-react";
import { LayoutIcon } from "lucide-react";
import { TypeIcon } from "lucide-react";
import { CodeIcon } from "lucide-react";
import { CodeEditor } from "../../components/codeeditor/codeeditor";
import { Code2Icon } from "lucide-react";
import { WallpaperIcon } from "lucide-react";
import { SquareCheckBigIcon } from "lucide-react";
import { BookCheckIcon } from "lucide-react";

export const CssPage = () => {
    const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CSS Playground</title>
  <style>
    /* 🔹 CSS de exemplo — sinta-se à vontade para editar no editor ao lado */
    :root {
      --brand: #2563eb;
      --bg: #f8fafc;
      --text: #0f172a;
    }

    body {
      margin: 0;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      background: var(--bg);
      color: var(--text);
    }

    .container {
      max-width: 640px;
      margin: 2rem auto;
      padding: 1.25rem;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
    }

    h1 {
      color: var(--brand);
      text-align: center;
      font-size: 2rem;
      margin: 0 0 0.75rem 0;
      letter-spacing: 0.2px;
    }

    p {
      line-height: 1.6;
      margin: 0.5rem 0 1rem 0;
    }

    .btn {
      display: inline-block;
      background: var(--brand);
      color: #fff;
      border: 0;
      border-radius: 10px;
      padding: 0.65rem 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform .08s ease, box-shadow .2s ease, background .2s ease;
      box-shadow: 0 8px 18px rgba(37, 99, 235, 0.25);
    }

    .btn:hover {
      transform: translateY(-1px);
      background: #1d4ed8;
      box-shadow: 0 10px 22px rgba(29, 78, 216, 0.28);
    }

    .badge {
      display: inline-block;
      padding: 0.15rem 0.5rem;
      border-radius: 999px;
      background: #eef2ff;
      color: #3730a3;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: .2px;
    }
  </style>
</head>
<body>
  <div class="container">
    <span class="badge">CSS</span>
    <h1>Olá com CSS!</h1>
    <p>Edite o CSS dentro da tag <strong>&lt;style&gt;</strong> ou o HTML aqui no editor para ver mudanças ao vivo.</p>
    <button class="btn">Botão estiloso</button>
  </div>
</body>
</html>`);

    return (
        <main className="bg-amber-50 bg-[url('/icone-html-noir.png')] bg-contain bg-center bg-no-repeat bg-blend-overlay min-h-screen">
            <Navbar />
            {/* Container 2 colunas responsivas */}
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-6 md:p-8 max-w-4xl mx-auto text-gray-800">
        {/* Título da Página */}
        <h1 className="text-4xl font-extrabold text-brand-blue flex items-center gap-2 mb-6">
          <PaletteIcon size={32} /> Estudo de CSS
        </h1>

        {/* Introdução ao CSS */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-2">
            <FileCode2Icon size={24} /> O que é CSS?
          </h2>
          <p className="text-lg p-2">
            CSS (<strong>Cascading Style Sheets</strong>) é a linguagem usada para
            definir o estilo de páginas web. Com ela, conseguimos alterar cores,
            fontes, espaçamento, layout e muito mais.
          </p>
          <p className="text-lg p-2">
            Ele trabalha junto com o <strong>HTML</strong>: o HTML cria a estrutura,
            e o CSS é responsável pela aparência.
          </p>
        </section>

        {/* O que o CSS pode fazer */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
            <PaintBucketIcon size={24} /> Para que serve o CSS?
          </h2>
          <ul className="space-y-3 text-lg">
            <li>🎨 Mudar <strong>cores</strong> de textos e fundos</li>
            <li>🅰️ Alterar <strong>fontes</strong> e tamanhos</li>
            <li>📏 Controlar <strong>margens, padding e espaçamentos</strong></li>
            <li>📐 Criar <strong>layouts responsivos</strong> (desktop, tablet, celular)</li>
            <li>✨ Adicionar <strong>animações, sombras e efeitos visuais</strong></li>
          </ul>
        </section>

        {/* Exemplo básico de CSS */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-2">
            <LayoutIcon size={24} /> Exemplo básico de CSS
          </h2>

          <p className="text-lg mb-4">
            Vamos aplicar cor, fonte e centralizar um texto com CSS:
          </p>

          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`/* Arquivo style.css */
h1 {
  color: blue;
  text-align: center;
  font-family: Arial, sans-serif;
}

/* Aplicando ao HTML */
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Olá com CSS!</h1>
</body>
</html>`}
          </pre>
        </section>

        {/* Explicar inline, internal e external CSS */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
            <TypeIcon size={24} /> Formas de aplicar CSS
          </h2>

          <ul className="list-disc pl-6 text-lg">
            <li>
              <strong>Inline CSS:</strong> estilo direto na tag HTML  
              <pre className="bg-gray-900 text-white p-2 rounded mt-2">{`<h1 style="color: red;">Título Vermelho</h1>`}</pre>
            </li>
            <li>
              <strong>Internal CSS:</strong> dentro da tag &lt;style&gt; no HTML  
              <pre className="bg-gray-900 text-white p-2 rounded mt-2">{`<style>
  h1 { color: green; }
</style>`}</pre>
            </li>
            <li>
              <strong>External CSS:</strong> arquivo .css separado (o mais usado)  
            </li>
          </ul>
        </section>

        {/* ✅ CSS Syntax */}
        <section className="mb-10">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
            <Code2Icon size={24} /> CSS Syntax (Sintaxe do CSS)
        </h2>

        <p className="text-lg p-2">
            A sintaxe do CSS é composta por três partes principais:
            <strong> seletor</strong> + <strong>propriedade</strong> + <strong>valor</strong>.
        </p>

        <p className="text-lg p-2">
            📌 <strong>Seletor</strong>: indica qual elemento HTML será estilizado. <br />
            📌 <strong>Propriedade</strong>: o que você quer modificar (cor, fonte, tamanho...). <br />
            📌 <strong>Valor</strong>: define como essa propriedade será aplicada.
        </p>

        {/* Exemplo visual de sintaxe */}
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`/* Sintaxe Geral */
        seletor {
        propriedade: valor;
        }

        /* Exemplo real */
        h1 {
        color: blue;
        font-size: 24px;
        text-align: center;
        }`}
        </pre>

        <p className="text-md mt-4">
            ✅ Neste exemplo, o <strong>seletor</strong> é <code>h1</code>, a <strong>propriedade</strong> é
            <code>color</code> e o <strong>valor</strong> é <code>blue</code>.  
        </p>

        {/* Mini explicação lado a lado */}
        <div className="mt-6 bg-white p-4 rounded-lg border shadow-sm">
            <h3 className="font-semibold mb-2">📊 Estrutura detalhada:</h3>
            <ul className="space-y-2 text-lg">
            <li>🎯 <strong>Seletor:</strong> Escolhe o(s) elemento(s) HTML a ser estilizado.</li>
            <li>🛠️ <strong>Propriedade:</strong> Define qual característica será alterada.</li>
            <li>🎨 <strong>Valor:</strong> Define como a propriedade será aplicada.</li>
            </ul>
        </div>
        </section>
        {/* ✅ How to Add CSS */}
        <section className="mb-10">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
            📎 Como adicionar CSS
        </h2>

        <p className="text-lg p-2">
            Quando um navegador carrega uma página HTML, ele pode aplicar estilos usando CSS.
            Existem <strong>três formas principais</strong> de inserir CSS em um documento:
        </p>

        {/* ✅ Lista */}
        <ul className="list-disc pl-6 text-lg space-y-2">
            <li><strong>External CSS</strong> – arquivo CSS separado.</li>
            <li><strong>Internal CSS</strong> – dentro da tag <code>&lt;style&gt;</code> no arquivo HTML.</li>
            <li><strong>Inline CSS</strong> – direto na linha do elemento HTML.</li>
        </ul>

        {/* ✳️ External CSS */}
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">1️⃣ External CSS</h3>
            <p className="text-md mb-2">
            O CSS fica em um arquivo separado (ex: <code>style.css</code>) e é conectado ao HTML com a tag <code>&lt;link&gt;</code>.
            É a forma mais profissional e usada na prática.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`/* style.css */
        h1 {
        color: blue;
        text-align: center;
        }

        /* HTML */
        <head>
        <link rel="stylesheet" href="style.css">
        </head>`}
            </pre>
        </div>

        {/* ✳️ Internal CSS */}
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">2️⃣ Internal CSS</h3>
            <p className="text-md mb-2">
            O CSS fica dentro da tag <code>&lt;style&gt;</code>, diretamente no arquivo HTML. Bom para páginas simples.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`<head>
        <style>
            h1 {
            color: green;
            text-align: center;
            }
        </style>
        </head>`}
            </pre>
        </div>

        {/* ✳️ Inline CSS */}
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">3️⃣ Inline CSS</h3>
            <p className="text-md mb-2">
            O estilo é aplicado diretamente na tag HTML usando o atributo <code>style</code>.
            Não é recomendado para projetos grandes.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`<h1 style="color: red; text-align: center;">
        Título Vermelho
        </h1>`}
            </pre>
        </div>

        <p className="text-md mt-6">
            ✅ <strong>Dica:</strong> Para projetos profissionais, use <strong>External CSS</strong> — ele deixa o código organizado e facilita a manutenção.
        </p>
        </section>

        {/* ✅ CSS Backgrounds */}
        <section className="mb-10">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
            🎨 CSS Backgrounds
        </h2>

       <p className="text-xl flex items-center gap-2 text-brand-blue-dark mb-4">
        <BookCheckIcon size={40} />
        <span>
            A propriedade <strong>background</strong> no CSS permite definir a cor de fundo, imagens de fundo,
            repetição, posição e muito mais para elementos HTML.
        </span>
        </p>

        {/* Principais Propriedades */}
        <ul className="space-y-3">
            <li className="flex gap-2 items-center"><WallpaperIcon size={20}/><strong>background-color</strong> – Define a cor de fundo</li>
            <li className="flex gap-2 items-center"><WallpaperIcon size={20}/><strong>background-image</strong> – Adiciona uma imagem de fundo</li>
            <li className="flex gap-2 items-center"><WallpaperIcon size={20}/><strong>background-repeat</strong> – Controla se a imagem repete ou não</li>
            <li className="flex gap-2 items-center"><WallpaperIcon size={20}/><strong>background-size</strong> – Ajusta o tamanho da imagem</li>
            <li className="flex gap-2 items-center"><WallpaperIcon size={20}/><strong>background-position</strong> – Define onde a imagem será posicionada</li>
            <li className="flex gap-2 items-center"><WallpaperIcon size={20}/><strong>background-attachment</strong> – Define se a imagem fica fixa ou rola com a página</li>
        </ul>

        {/* Exemplo 1 - background-color */}
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">🎯 Exemplo 1: Background Color</h3>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`h1 {
        background-color: lightblue;
        }`}
            </pre>
        </div>

        {/* Exemplo 2 - background-image */}
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">🖼️ Exemplo 2: Background Image</h3>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`body {
        background-image: url('background.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        }`}
            </pre>
        </div>

        {/* Exemplo 3 - background shorthand */}
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">⚡ Exemplo 3: Shorthand (resumido)</h3>
            <p className="text-lg mb-2">
            Você pode combinar várias propriedades em uma só linha:
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`/* background: color image repeat position / size */
        body {
        background: #1e293b url('fundo.jpg') no-repeat center / cover;
        }`}
            </pre>
        </div>

        {/* Dica final */}
        <p className="text-md mt-6">
            ✅ <strong>Dica:</strong> Use <code>background-size: cover;</code> para imagens que ocupam toda a tela sem distorcer.
        </p>
        </section>

        {/* ✅ CSS Box Model: Margin, Padding e Borders */}
        <section className="mb-10">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
            📦 CSS Box Model — Margin, Padding e Border
        </h2>

        <p className="text-sm flex items-center gap-2 text-brand-blue-dark mb-4">
            O <strong>Box Model</strong> é a base do layout no CSS. Todo elemento HTML é uma “caixa” composta por:
        </p>

        <ul className="list-disc ml-6 text-lg space-y-2">
            <li><strong>Content</strong> — O conteúdo (texto, imagem...).</li>
            <li><strong>Padding</strong> — Espaço interno entre o conteúdo e a borda.</li>
            <li><strong>Border</strong> — A borda ao redor do elemento.</li>
            <li><strong>Margin</strong> — Espaço externo entre o elemento e outros ao redor.</li>
        </ul>

        {/* 📌 Ilustração visual do Box Model */}
        <div className="mt-6 p-4 bg-white border rounded-lg shadow-sm">
            <p className="text-center font-semibold mb-4">📊 Esquema do Box Model:</p>
            <img 
            src="https://www.w3schools.com/css/box-model.gif" 
            alt="CSS Box Model"
            className="mx-auto w-64 border rounded-lg"
            />
        </div>

        {/* 🎯 Exemplos práticos */}
        <h3 className="text-xl font-semibold mt-8 mb-3">🧪 Exemplo de código:</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`div {
        width: 200px;
        padding: 20px;     /* Espaço interno */
        border: 3px solid #4b5563; /* Borda */
        margin: 30px;      /* Espaço externo */
        }`}
        </pre>

        {/* Explicando individualmente Margin, Padding, Border */}
        <div className="mt-6 space-y-6">

            {/* 🔹 Padding */}
            <div>
            <h4 className="font-bold text-lg mb-2">🔹 Padding (espaçamento interno)</h4>
            <p className="text-md mb-2">Cria espaço entre o conteúdo e a borda.</p>
            <pre className="bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-sm">
        {`padding: 20px;          /* Aplica nos 4 lados */
        padding: 10px 20px;     /* Top/Bottom | Left/Right */
        padding: 5px 10px 15px 20px; /* Top | Right | Bottom | Left */`}
            </pre>
            </div>

            {/* 🔹 Margin */}
            <div>
            <h4 className="font-bold text-lg mb-2">🔹 Margin (espaçamento externo)</h4>
            <p className="text-md mb-2">Cria espaço entre o elemento e outros ao redor.</p>
            <pre className="bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-sm">
        {`margin: 20px;         /* Todos os lados */
        margin: auto;         /* Centraliza o elemento */
        margin: 10px 20px;    /* Top/Bottom | Left/Right */`}
            </pre>
            </div>

            {/* 🔹 Border */}
            <div>
            <h4 className="font-bold text-lg mb-2">🔹 Border (borda)</h4>
            <p className="text-md mb-2">Adiciona bordas ao elemento.</p>
            <pre className="bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-sm">
        {`border: 2px solid black;     /* Largura | Estilo | Cor */
        border-radius: 10px;          /* Borda arredondada */
        border-bottom: 3px dashed red; /* Borda inferior pontilhada */`}
            </pre>
            </div>
        </div>

        <p className="text-md mt-6">
            ✅ <strong>Dica:</strong> para ver o Box Model facilmente, use o inspetor do navegador (F12) e selecione um elemento.
        </p>
        </section>

        {/* 🧱 NOVA SEÇÃO: Display e tipos de elementos */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">🧱 Display: block, inline e inline-block</h3>
        
        <p className="mb-3">
            O <strong>display</strong> define como um elemento é mostrado na tela. Os mais usados são:
        </p>

        <ul className="list-disc ml-6 space-y-2">
            <li><strong>block:</strong> ocupa toda a largura disponível e quebra linha (ex: div, h1, p).</li>
            <li><strong>inline:</strong> não quebra linha e só ocupa o tamanho do conteúdo (ex: span, a).</li>
            <li><strong>inline-block:</strong> fica na mesma linha, mas permite definir altura e largura.</li>
        </ul>

        {/* 🎯 Introdução ao Flexbox */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">📦 Flexbox (display: flex)</h3>
        <p className="mb-3">
        O <strong>Flexbox</strong> é um modo de layout no CSS que facilita organizar, alinhar e distribuir elementos dentro de um <code>div</code> (container).
        Ele é ativado com <code>display: flex;</code>.
        </p>

        {/* ✅ Conceito de Container e Itens Flex */}
        <p className="font-semibold mt-4">📌 Conceitos básicos:</p>
        <ul className="list-disc ml-6 space-y-2">
        <li><strong>Flex container:</strong> o elemento pai que utiliza <code>display: flex;</code>.</li>
        <li><strong>Flex items:</strong> os elementos filhos dentro do container.</li>
        <li><strong>Eixo principal (main axis):</strong> pode ser horizontal ou vertical.</li>
        <li><strong>Alinhamentos fáceis:</strong> centralizar, espaçar, organizar em linha ou coluna.</li>
        </ul>

        {/* 💻 Exemplo de Flexbox */}
        <h4 className="font-bold text-lg mt-6 mb-2">💻 Exemplo de Flexbox:</h4>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`div.container {
        display: flex;          /* Ativa o Flexbox */
        gap: 10px;              /* Espaço entre os itens */
        justify-content: center;/* Alinha itens no eixo principal */
        align-items: center;    /* Alinha itens no eixo cruzado */
        }

        div.item {
        background: #38bdf8;
        padding: 20px;
        border-radius: 8px;
        }`}
        </pre>

        {/* 🔍 Visualização prática */}
        <div className="mt-6 p-4 bg-white border rounded-lg shadow-sm">
        <p className="font-semibold text-center mb-4">📊 Visualização:</p>
        <div className="flex gap-4 justify-center items-center">
            <div className="bg-blue-300 p-4 rounded-lg">1</div>
            <div className="bg-blue-300 p-4 rounded-lg">2</div>
            <div className="bg-blue-300 p-4 rounded-lg">3</div>
        </div>
        </div>

        {/* 🔁 Direções no Flexbox */}
        <h4 className="font-bold text-lg mt-6 mb-2">🔁 Direção dos itens:</h4>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`flex-direction: row;        /* Padrão: itens em linha */
        flex-direction: column;     /* Itens em coluna */
        flex-direction: row-reverse;/* Linha invertida */
        flex-direction: column-reverse; /* Coluna invertida */`}
        </pre>

        {/* 🎯 Espaçamento com justify-content */}
        <h4 className="font-bold text-lg mt-6 mb-2">🎯 Alinhamento horizontal (justify-content):</h4>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`justify-content: flex-start;   /* Esquerda */
        justify-content: center;       /* Centro */
        justify-content: space-between;/* Espaço entre os itens */
        justify-content: space-around; /* Espaço ao redor */`}
        </pre>

        {/* 🎯 Alinhamento vertical */}
        <h4 className="font-bold text-lg mt-6 mb-2">📍 Alinhamento vertical (align-items):</h4>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`align-items: flex-start;  /* Topo */
        align-items: center;      /* Centro vertical */
        align-items: flex-end;    /* Base */`}
        </pre>

        <p className="text-md mt-6">
        ✅ <strong>Dica:</strong> Flexbox é perfeito para centralizar elementos no meio da tela:
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`.center {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; /* tela inteira */
        }`}
        </pre>

        {/* 🧩 Introdução ao CSS Grid */}
        <h2 className="text-2xl font-bold mt-10 mb-4">🧩 Layout com CSS Grid</h2>
        <p className="mb-3">
        O <strong>CSS Grid</strong> é um sistema poderoso de layout bidimensional — ou seja, permite organizar elementos em <strong>linhas e colunas</strong> com facilidade.
        </p>

        {/* ✅ Conceitos básicos */}
        <ul className="list-disc ml-6 space-y-2">
        <li><strong>Grid Container:</strong> o elemento pai que recebe <code>display: grid;</code></li>
        <li><strong>Grid Items:</strong> os elementos (filhos) que ficam dentro do grid</li>
        <li><strong>Linhas & Colunas:</strong> definidas com <code>grid-template-rows</code> e <code>grid-template-columns</code></li>
        <li><strong>Gap:</strong> espaçamento entre os elementos da grade</li>
        </ul>

        {/* 💻 Exemplo básico */}
        <h3 className="text-xl font-semibold mt-6 mb-3">💻 Exemplo básico de Grid:</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`/* Container (pai) */
        .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; /* 3 colunas iguais */
        gap: 10px; /* Espaço entre os itens */
        }

        /* Itens (filhos) */
        .item {
        background-color: #38bdf8;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        }`}
        </pre>

        {/* ✅ Visualização com Tailwind */}
        <div className="mt-6 p-4 bg-white border rounded-lg shadow-sm">
        <p className="font-semibold text-center mb-3">📊 Exemplo visual:</p>
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-300 p-4 rounded-lg text-center">1</div>
            <div className="bg-blue-300 p-4 rounded-lg text-center">2</div>
            <div className="bg-blue-300 p-4 rounded-lg text-center">3</div>
            <div className="bg-blue-300 p-4 rounded-lg text-center">4</div>
            <div className="bg-blue-300 p-4 rounded-lg text-center">5</div>
            <div className="bg-blue-300 p-4 rounded-lg text-center">6</div>
        </div>
        </div>

        {/* 🎯 Colunas com tamanhos diferentes */}
        <h3 className="font-bold text-lg mt-6 mb-2">🎯 Colunas com tamanhos diferentes</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`grid-template-columns: 200px 1fr 2fr;
        /* 1ª coluna fixa (200px)
        2ª flexível (ocupa o que sobrar)
        3ª coluna ocupa o dobro da 2ª */`}
        </pre>

        {/* 🔁 Organizando com linhas */}
        <h3 className="font-bold text-lg mt-6 mb-2">📍 Linhas (grid-template-rows)</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`grid-template-rows: 100px 100px auto;
        /* Primeiras duas linhas com altura fixa, a última ocupa o resto */`}
        </pre>

        {/* 📌 Item ocupando mais colunas */}
        <h3 className="font-bold text-lg mt-6 mb-2">📌 Item ocupando mais colunas (grid-column)</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`.item1 {
        grid-column: span 2; /* Esse item ocupa 2 colunas */
        }`}
        </pre>

        {/* ✅ Dica */}
        <p className="mt-4">
        ✅ <strong>Dica:</strong> O Grid é perfeito para criar layouts de páginas, dashboards e galerias de forma organizada e responsiva.
        </p>

            
       {/* 📂 Seção: Forms no CSS */}
        <h2 className="text-2xl font-bold mt-10 mb-4">📝 Estilizando Formulários com CSS</h2>
        <p className="mb-3">
        Formulários são essenciais em qualquer site. Com CSS, podemos deixar inputs, botões e labels mais bonitos e fáceis de usar.
        </p>

        {/* 💻 Exemplo básico de formulário */}
        <h3 className="text-xl font-semibold mt-6 mb-3">💡 Exemplo básico:</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`<form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" placeholder="Digite seu nome">

        <label for="email">E-mail:</label>
        <input type="email" id="email" placeholder="Digite seu e-mail">

        <button type="submit">Enviar</button>
        </form>`}
        </pre>

        {/* 🎨 Estilo CSS aplicado */}
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm mt-3">
        {`form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 300px;
        }

        input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
        transition: 0.3s;
        }

        /* Efeito ao clicar no input (focus) */
        input:focus {
        border-color: #3b82f6; /* azul */
        outline: none;
        box-shadow: 0 0 4px #60a5fa;
        }

        button {
        background-color: #3b82f6;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        }

        button:hover {
        background-color: #2563eb;
        }` }
        </pre>

        {/* ✅ Estilização visual com Tailwind (opcional) */}
        <div className="mt-6 p-4 bg-white border rounded-lg shadow-sm">
        <p className="font-semibold">📌 Visual do formulário:</p>
        <form className="flex flex-col gap-3 max-w-sm">
            <label htmlFor="nome">Nome:</label>
            <input className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" id="nome" placeholder="Digite seu nome" />

            <label htmlFor="email">E-mail:</label>
            <input className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" id="email" placeholder="Digite seu e-mail" />

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg">Enviar</button>
        </form>
        </div>

        {/* 🔍 Extras: estilização de input types */}
        <h3 className="text-xl font-semibold mt-8 mb-3">🎯 Outros tipos de input:</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`input[type="checkbox"] { accent-color: #3b82f6; }      /* Muda cor do checkbox */
        input[type="radio"]    { accent-color: #f97316; }      /* Radio laranja */
        input[type="range"]    { width: 100%; }                /* Slider */`}
        </pre>

        <p className="mt-4">
        ✅ <strong>Dica:</strong> Você pode combinar <code>:focus</code>, <code>:hover</code>, <code>:valid</code> e <code>:invalid</code> para criar formulários interativos e acessíveis.
        </p>


      </div>
           {/* 💻 COLUNA DIREITA – Editor + Preview */}
        <section className="w-full lg:w-1/2 p-6 md:p-8 lg:sticky lg:top-20 lg:h-screen overflow-y-auto backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CodeIcon size={24} /> Teste você mesmo:
          </h2>

          {/* Editor */}
          <CodeEditor code={htmlCode} onChange={setHtmlCode} />

          {/* Preview */}
          <h3 className="mt-6 font-semibold text-lg">Pré-visualização:</h3>
          <iframe
            className="w-full h-64 mt-2 border rounded-lg bg-white"
            srcDoc={htmlCode}
            title="Preview do Código"
          />
        </section>       
      </div>
            <footer>
                <Footer/>
            </footer> 
        </main>
    )
}