import { useState } from "react";
import { Button } from "../../components/button"
import { CodeEditor } from "../../components/codeeditor/codeeditor";
import { Footer } from "../../components/footer";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import {
  Code,
  FileCode2,
  LayoutTemplate,
  Image,
  List,
  Link as LinkIcon,
  Tag,
} from "lucide-react";
import { ClipboardPenIcon } from "lucide-react";
import { TextInitialIcon } from "lucide-react";
import { TagIcon } from "lucide-react";
import { FileInputIcon } from "lucide-react";
import { SendHorizontalIcon } from "lucide-react";
import { CheckCheckIcon } from "lucide-react";
import { TextSelectIcon } from "lucide-react";
import { ListCheckIcon } from "lucide-react";
import { GroupIcon } from "lucide-react";
import { BookAIcon } from "lucide-react";
import { SendIcon } from "lucide-react";
import { EyeClosedIcon } from "lucide-react";
import { MailIcon } from "lucide-react";
import { ListOrderedIcon } from "lucide-react";
import { ListTodoIcon } from "lucide-react";
import { ListChecksIcon } from "lucide-react";
import { TableIcon } from "lucide-react";

export const HtmlPage = () => {
  const [htmlCode, setHtmlCode] = useState(`<h1>Olá Mundo!</h1>`);

  return (
    <main className="bg-amber-50 bg-[url('/icone-html-noir.png')] bg-contain bg-center bg-no-repeat bg-blend-overlay min-h-screen">
      <Navbar />

      {/* Container 2 colunas responsivas */}
      <div className="flex flex-col lg:flex-row">

        {/* 📘 COLUNA ESQUERDA – Conteúdo HTML */}
        <section className="w-full lg:w-1/2 p-6 md:p-8 max-w-4xl mx-auto text-gray-800">

          {/* Título */}
          <h1 className="text-4xl font-extrabold text-brand-blue flex items-center gap-2 mb-6">
            <Code size={32} /> Estudo de HTML
          </h1>

          {/* Introdução */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-2">
              <FileCode2 size={24} /> O que é HTML?
            </h2>
            <p className="text-lg p-2">
              HTML (HyperText Markup Language) é a linguagem usada para definir a
              estrutura de páginas web. Ela utiliza <strong>tags</strong> para
              organizar títulos, parágrafos, links, imagens, listas e muito mais.
            </p>
            <p className="text-lg p-2">
              Define a <strong>estrutura</strong> e o <strong>conteúdo</strong> da página.
            </p>
          </section>

          {/* Estrutura Básica do HTML */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-2">
              <LayoutTemplate size={24} /> Estrutura básica de um documento HTML
            </h2>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Meu Primeiro Site</title>
</head>
<body>
  <h1>Olá, mundo!</h1>
  <p>Este é meu primeiro site em HTML.</p>
</body>
</html>`}
            </pre>
          </section>
        <section className="mb-10">
  <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
    <LayoutTemplate size={24} /> Page Title (&lt;title&gt;)
  </h2>
  <p className="text-lg mb-4">
    A tag <strong>&lt;title&gt;</strong> define o título da aba do navegador. 
    Ela fica dentro da seção <strong>&lt;head&gt;</strong> do documento HTML.
    Esse título também aparece ao compartilhar links e é importante para SEO (motores de busca).
  </p>

  <h3 className="font-semibold mb-2">✅ Exemplo:</h3>
  <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Meu Primeiro Site</title>
</head>
<body>
  <h1>Bem-vindo!</h1>
</body>
</html>`}
  </pre>

  <p className="text-md mt-4">
    💡 <strong>Dica:</strong> Escolha um título descritivo e curto! Ele ajuda na usabilidade, 
    nos resultados do Google e na identificação da aba aberta no navegador.
  </p>
</section>

          {/* Estrutura Semântica */}
         <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
                <LayoutTemplate size={24} /> Estrutura Semântica do HTML5
            </h2>

            <ul className="space-y-3">
                <li className="flex gap-2 items-center">
                <Tag size={20}/> <strong>&lt;header&gt;</strong> — Cabeçalho da página ou seção
                </li>
                <li className="flex gap-2 items-center">
                <Tag size={20}/> <strong>&lt;main&gt;</strong> — Conteúdo principal do site (apenas um por página)
                </li>
                <li className="flex gap-2 items-center">
                <Tag size={20}/> <strong>&lt;footer&gt;</strong> — Rodapé da página (contatos, direitos autorais)
                </li>
                <li className="flex gap-2 items-center">
                <Tag size={20}/> <strong>&lt;section&gt;</strong> — Seção temática de conteúdo (capítulos, áreas do site)
                </li>
                <li className="flex gap-2 items-center">
                <Tag size={20}/> <strong>&lt;article&gt;</strong> — Conteúdo independente e reutilizável (post de blog, card, notícia)
                </li>
                <li className="flex gap-2 items-center">
                <Tag size={20}/> <strong>&lt;picture&gt;</strong> — Agrupa imagens responsivas (diferentes resoluções ou formatos)
                </li>
                <li className="flex gap-2 items-center">
                <Tag size={20}/> <strong>&lt;div&gt;</strong> — Bloco genérico, sem significado semântico (usado para agrupar conteúdo)
                </li>
            </ul>
            </section>

            
          {/* Principais Tags */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
              <Tag size={24} /> Principais tags HTML
            </h2>
            <ul className="space-y-3">
              {/* h1 */}
              <li className="flex gap-2 items-center">
                <Tag size={20} /> <strong>&lt;h1&gt; a &lt;h6&gt;</strong> – Títulos
              </li>
              <strong>Exemplo:</strong>
              <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                    {`<h1>Título Principal</h1>
                    <h2>Subtítulo</h2>
                    <h3>Seção menor</h3>`}
              </pre>

              {/* p */}
              <li className="flex gap-2 items-center">
                <Tag size={20} /> <strong>&lt;p&gt;</strong> – Parágrafos
              </li>
              <strong>Exemplo:</strong>
              <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
{`<p>Lorem ipsum dolor sit amet.</p>`}
              </pre>

              {/* link */}
              <li className="flex gap-2 items-center">
                <LinkIcon size={20} /> <strong>&lt;a&gt;</strong> – Links
              </li>
              <strong>Exemplo:</strong>
              <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`<a href="https://www.w3schools.com">Visitar W3Schools</a>`}
              </pre>

              {/* imagem */}
              <li className="flex gap-2 items-center">
                <Image size={20} /> <strong>&lt;img&gt;</strong> – Imagens
              </li>
              <strong>Exemplo:</strong>
              <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
{`<img src="imagem.jpg" alt="Descrição">`}
              </pre>
            </ul>
          </section>
          {/* ✅ Imagens no HTML */}
            <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
                <Image size={24} /> Trabalhando com Imagens no HTML (&lt;img&gt;)
            </h2>

            <p className="text-lg mb-4">
                A tag <strong>&lt;img&gt;</strong> é usada para exibir imagens em páginas web. 
                Ela é auto-fechável (não usa &lt;/img&gt;) e possui atributos essenciais como:
            </p>

            <ul className="space-y-2">
                <li>✅ <strong>src</strong> — Caminho da imagem (local ou URL externa);</li>
                <li>✅ <strong>alt</strong> — Texto alternativo para acessibilidade e SEO;</li>
                <li>✅ <strong>width</strong> e <strong>height</strong> — Largura e altura da imagem (px ou %);</li>
            </ul>

            <h3 className="mt-6 font-semibold text-lg">📌 Exemplo básico:</h3>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
            {`<img 
            src="logo.png" 
            alt="Logo do site CodeStudio" 
            width="200" 
            height="200"
            />`}
            </pre>

            <h3 className="mt-6 font-semibold text-lg">🎯 Por que o atributo <strong>alt</strong> é importante?</h3>
            <ul className="list-disc ml-6 text-lg decoration-0">
                <li>✔ Melhora a acessibilidade (leitores de tela conseguem descrever a imagem);</li>
                <li>✔ Ajuda no SEO (Google entende o conteúdo da imagem);</li>
                <li>✔ Aparece caso a imagem não seja carregada;</li>
            </ul>

            <h3 className="mt-6 font-semibold text-lg">🎨 HTML x CSS — Como definir tamanho de imagens?</h3>
            <p className="text-lg">
                Você pode definir <strong>width</strong> e <strong>height</strong> no HTML, mas a melhor prática é usar CSS.
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
            {`<img src="foto.jpg" alt="Foto" class="foto">

            <style>
            .foto {
                width: 300px;
                height: auto;
                border-radius: 10px;
            }
            </style>`}
            </pre>
            </section>

            {/* ✅ Formatos de imagens */}
            <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
                <Image size={24} /> Formatos de imagens mais usados
            </h2>

            <ul className="space-y-2">
                <li>🖼️ <strong>JPG / JPEG</strong> — Fotos, mais leve, perde qualidade (compressão com perdas);</li>
                <li>🖼️ <strong>PNG</strong> — Imagens com transparência e qualidade alta (sem perdas);</li>
                <li>🖼️ <strong>SVG</strong> — Imagens vetoriais (logos, ícones, escaláveis sem perder qualidade);</li>
                <li>🖼️ <strong>GIF</strong> — Imagens animadas simples;</li>
                <li>🖼️ <strong>WEBP</strong> — Formato moderno do Google, mais leve, suporta transparência e animação;</li>
            </ul>

            <h3 className="mt-6 font-semibold text-lg">📁 Exemplo com imagens em diferentes formatos:</h3>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
            {`<img src="logo.svg" alt="Logo em SVG">
            <img src="foto.jpg" alt="Foto em JPG">
            <img src="icone.png" alt="Ícone em PNG">
            <img src="animacao.gif" alt="GIF animado">
            <img src="imagem.webp" alt="Imagem otimizada WebP">`}
            </pre>
            </section>

            {/* ✅ Figure e Figcaption */}
            <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
                <Image size={24} /> &lt;figure&gt; e &lt;figcaption&gt; — Imagens com legenda
            </h2>

            <p className="text-lg mb-4">
                Para adicionar uma legenda a uma imagem, usamos as tags 
                <strong> &lt;figure&gt;</strong> e <strong>&lt;figcaption&gt;</strong>.
                Isso torna o HTML mais semântico e melhora acessibilidade.
            </p>

            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
            {`<figure>
            <img src="html-logo.png" alt="Logo do HTML5" width="200">
            <figcaption>Figura 1: Logo oficial do HTML5</figcaption>
            </figure>`}
            </pre>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
                    <List size={24} /> Listas no HTML
                </h2>

                <p className="text-lg mb-4">
                    Listas são usadas para organizar conteúdos em itens. No HTML existem três tipos principais de listas:
                </p>

                <ul className="space-y-3">
                    <li className="flex gap-2 items-center">
                    <ListTodoIcon size={20} /> <strong>&lt;ul&gt;</strong> — Lista não ordenada (com marcadores como ●, ○, ■)
                    </li>
                    <li className="flex gap-2 items-center">
                    <ListOrderedIcon size={20} /> <strong>&lt;ol&gt;</strong> — Lista ordenada (numerada: 1, 2, 3...)
                    </li>
                    <li className="flex gap-2 items-center">
                    <ListChecksIcon size={20} /> <strong>&lt;dl&gt;</strong> — Lista de descrição (termo + definição)
                    </li>
                </ul>

                <h3 className="mt-6 text-xl font-semibold">📌 Exemplo de lista não ordenada (&lt;ul&gt;):</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
                {`<ul>
                <li>Maçã</li>
                <li>Banana</li>
                <li>Laranja</li>
                </ul>`}
                </pre>

                <h3 className="mt-6 text-xl font-semibold">📌 Exemplo de lista ordenada (&lt;ol&gt;):</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
                {`<ol>
                <li>Primeiro passo</li>
                <li>Segundo passo</li>
                <li>Terceiro passo</li>
                </ol>`}
                </pre>

                <h3 className="mt-6 text-xl font-semibold">📌 Exemplo de lista de descrição (&lt;dl&gt;):</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
                {`<dl>
                <dt>HTML</dt>
                <dd>Linguagem de marcação para estruturar páginas web.</dd>

                <dt>CSS</dt>
                <dd>Usado para estilizar o conteúdo do HTML.</dd>
                </dl>`}
                </pre>

                <p className="text-md mt-4">
                    💡 <strong>Dica:</strong> Todas as listas (ul, ol, dl) são compostas por itens. 
                    Para <strong>ul</strong> e <strong>ol</strong>, os itens são definidos com <strong>&lt;li&gt;</strong>.
                    Já nas listas de descrição <strong>&lt;dl&gt;</strong>, usamos <strong>&lt;dt&gt;</strong> (termo) 
                    e <strong>&lt;dd&gt;</strong> (descrição).
                </p>
                </section>

            <section className="mb-10">
  <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
    <TableIcon size={24} /> Tabelas no HTML
  </h2>

  <p className="text-lg mb-4">
    Tabelas são usadas para organizar dados em linhas e colunas. No HTML, elas são criadas com a tag 
    <strong> &lt;table&gt;</strong> e possuem uma estrutura básica composta por:
  </p>

  <ul className="space-y-2">
    <li>✅ <strong>&lt;table&gt;</strong> — Define a tabela;</li>
    <li>✅ <strong>&lt;tr&gt;</strong> — Cria uma linha (table row);</li>
    <li>✅ <strong>&lt;th&gt;</strong> — Cabeçalho da tabela (table header);</li>
    <li>✅ <strong>&lt;td&gt;</strong> — Célula de dados (table data).</li>
  </ul>

  <h3 className="mt-6 font-semibold text-lg">📌 Exemplo básico de tabela:</h3>
  <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`<table border="1">
  <tr>
    <th>Nome</th>
    <th>Idade</th>
    <th>Profissão</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>25</td>
    <td>Desenvolvedora</td>
  </tr>
  <tr>
    <td>João</td>
    <td>30</td>
    <td>Designer</td>
  </tr>
</table>`}
  </pre>

  <h3 className="mt-6 text-xl font-semibold">📌 Tabela com &lt;thead&gt;, &lt;tbody&gt; e &lt;tfoot&gt;:</h3>
  <p className="text-lg mb-3">
    Essas tags ajudam a organizar melhor a tabela e tornam o código mais semântico:
  </p>

  <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`<table border="1">
  <thead>
    <tr>
      <th>Produto</th>
      <th>Quantidade</th>
      <th>Preço</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Microscópio</td>
      <td>3</td>
      <td>R$ 5.000</td>
    </tr>
    <tr>
      <td>Béquer</td>
      <td>10</td>
      <td>R$ 15</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Dados atualizados em 2025</td>
    </tr>
  </tfoot>
</table>`}
  </pre>

  <p className="mt-4 text-md">
    💡 <strong>Dica:</strong> O atributo <code>colspan</code> permite mesclar colunas, e 
    o <code>rowspan</code> mescla linhas.
    A estilização é mais recomendada via CSS.
  </p>
</section>
    
          {/* Formatting Elements */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
              <Tag size={24} /> HTML Formatting Elements
            </h2>
            <ul className="space-y-3">
              <li><strong>&lt;b&gt;</strong> – Negrito</li>
              <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">{`<b>texto em negrito</b>`}</pre>
              <li><strong>&lt;strong&gt;</strong> – Importante</li>
              <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">{`<strong>texto importante</strong>`}</pre>
              <li><strong>&lt;i&gt;</strong> – Itálico</li>
              <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">{`<i>texto em itálico</i>`}</pre>
              <li><strong>&lt;em&gt;</strong> – Ênfase</li>
              <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">{`<em>texto enfatizado</em>`}</pre>
              <li><strong>&lt;mark&gt;</strong> – Texto destacado</li>
              <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">{`<mark>texto destacado</mark>`}</pre>
            </ul>
          </section>

          {/* ✅ Comentários em HTML */}
        <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
                <Tag size={24} /> Comentários em HTML
            </h2>

            <p className="text-lg mb-4">
                Comentários em HTML são usados para adicionar anotações no código
                que não aparecem no navegador. Eles são úteis para explicar partes
                do código ou desativar trechos temporariamente.
            </p>

            <ul className="space-y-2">
                <li className="flex gap-2 items-center">
                <CheckCheckIcon size={20} /> <strong>Sintaxe:</strong> <code>&lt;!-- comentário aqui --&gt;</code>
                </li>
                <li className="flex gap-2 items-center">
                <CheckCheckIcon size={20} /> <strong>Não são exibidos ao usuário,</strong> apenas no código.
                </li>
                <li className="flex gap-2 items-center">
                <CheckCheckIcon size={20} /> <strong>Podem ser usados para explicar ou organizar o HTML.</strong>
                </li>
            </ul>

            {/* Exemplo prático */}
            <h3 className="mt-6 text-xl font-semibold">Exemplo:</h3>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">{`<!-- Este é um comentário em HTML -->

            <h1>Bem-vindo!</h1>

            <!-- Comentário para explicar a próxima seção -->
            <p>Este é um parágrafo.</p>`}
            </pre>

            
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-yellow-600 mb-3">📁 Criando um Menu de Navegação entre Páginas</h2>

          <p className="text-lg p-2">
            Um <strong>menu de navegação</strong> permite que o usuário clique e vá para outras páginas do site (como Home, Sobre, Contato etc.).
            Isso pode ser feito com links simples usando a tag <code>&lt;a&gt;</code>.
          </p>

          {/* ✅ 1) Estrutura básica do menu */}
          <h3 className="text-xl font-semibold mt-4 mb-2">✅ 1) Exemplo de menu simples com links</h3>
          <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
        {`<!-- Coloque isso em todas as páginas para navegar entre elas -->
        <nav>
          <a href="index.html">🏠 Home</a>
          <a href="sobre.html">ℹ️ Sobre</a>
          <a href="contato.html">📞 Contato</a>
        </nav>
        <hr />`}
          </pre>

          {/* ✅ 2) Criando as páginas */}
          <h3 className="text-xl font-semibold mt-6 mb-2">✅ 2) Estrutura de arquivos do site</h3>
          <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
        {`📁 MeuSite/
        ├── index.html     → Página principal
        ├── sobre.html     → Página "Sobre"
        └── contato.html   → Página de contato`}
          </pre>

          {/* ✅ 3) Conteúdo da Home (index.html) */}
          <h3 className="text-xl font-semibold mt-6 mb-2">✅ 3) Exemplo completo — index.html</h3>
          <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
        {`<!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Home</title>
        </head>
        <body>
          <nav>
            <a href="index.html">🏠 Home</a>
            <a href="sobre.html">ℹ️ Sobre</a>
            <a href="contato.html">📞 Contato</a>
          </nav>
          <hr>

          <h1>Bem-vindo ao site!</h1>
          <p>Esta é a página inicial.</p>
        </body>
        </html>`}
          </pre>

          {/* ✅ 4) Página Sobre (sobre.html) */}
          <h3 className="text-xl font-semibold mt-6 mb-2">✅ 4) sobre.html</h3>
          <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
        {`<!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Sobre</title>
        </head>
        <body>
          <nav>
            <a href="index.html">🏠 Home</a>
            <a href="sobre.html">ℹ️ Sobre</a>
            <a href="contato.html">📞 Contato</a>
          </nav>
          <hr>

          <h1>Sobre nós</h1>
          <p>Essa é a página sobre o site.</p>
        </body>
        </html>`}
          </pre>

          {/* ✅ 5) Página Contato (contato.html) */}
          <h3 className="text-xl font-semibold mt-6 mb-2">✅ 5) contato.html</h3>
          <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
        {`<!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Contato</title>
        </head>
        <body>
          <nav>
            <a href="index.html">🏠 Home</a>
            <a href="sobre.html">ℹ️ Sobre</a>
            <a href="contato.html">📞 Contato</a>
          </nav>
          <hr>

          <h1>Fale Conosco</h1>
          <p>Email: exemplo@gmail.com</p>
        </body>
        </html>`}
          </pre>

          {/* ✅ Dica final */}
          <p className="text-md mt-6">
            ✅ <strong>Dica:</strong> para deixar esse menu mais bonito, você pode usar CSS ou até adicionar menus com Tailwind, Bootstrap ou React Router em projetos maiores.
          </p>
      </section>

        {/* ✅ HTML Forms */}
        <section className="mb-10">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
            <Tag size={24} /> HTML Forms (Formulários)
        </h2>

        <p className="text-lg mb-4">
            Formulários HTML são usados para coletar dados do usuário. 
            Eles são compostos por campos de entrada como <strong>&lt;input&gt;</strong>, 
            <strong>&lt;textarea&gt;</strong>, <strong>&lt;select&gt;</strong> e um botão de envio 
            <strong>&lt;button&gt;</strong>. Todos esses elementos ficam dentro da tag <strong>&lt;form&gt;</strong>.
        </p>

        <ul className="space-y-2">
            <li className="flex gap-2 items-center">
            <ClipboardPenIcon size={20} />  <strong>&lt;form&gt;</strong> — Contêiner onde todos os campos ficam.
            </li>
            <li className="flex gap-2 items-center">
            <FileInputIcon size={20} />  <strong>&lt;input&gt;</strong> — Campo para texto, e-mail, senha, número etc.
            </li>
            <li className="flex gap-2 items-center">
            <TagIcon size={20} />  <strong>&lt;label&gt;</strong> — Texto que nomeia cada campo.
            </li>
            <li className="flex gap-2 items-center">
            <TextInitialIcon size={20} />  <strong>&lt;textarea&gt;</strong> — Campo de texto com várias linhas.
            </li>
            <li className="flex gap-2 items-center">
            <SendHorizontalIcon size={20} />  <strong>&lt;button&gt;</strong> ou <strong>&lt;input type="submit"&gt;</strong> — Botão de envio.
            </li>
            <li className="flex gap-2 items-center"><TextSelectIcon size={20} />  <strong>&lt;select&gt;</strong> – Menu suspenso (combobox)</li>
            <li className="flex gap-2 items-center"><ListCheckIcon size={20} />  <strong>&lt;option&gt;</strong> – Opções dentro de um select</li>
            <li className="flex gap-2 items-center"><GroupIcon size={20} />  <strong>&lt;fieldset&gt;</strong> – Agrupa elementos de formulário</li>
            <li className="flex gap-2 items-center"><BookAIcon size={20} />  <strong>&lt;legend&gt;</strong> – Título de um fieldset</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold">Exemplo básico:</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`<form action="/enviar" method="post">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem"></textarea>

        <button type="submit">Enviar</button>
        </form>`}
        </pre>

        

        <p className="text-md mt-4">
            📌 Você pode enviar esse formulário para um servidor usando o atributo 
            <strong> action="" </strong> e definir o método com 
            <strong> method="GET" ou "POST" </strong>.
        </p>
        </section>
        {/* ✅ Métodos GET e POST */}
        <section className="mb-10">
        <h3 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
             <MailIcon size={24} /> Métodos de Envio: <code>GET</code> e <code>POST</code>
        </h3>

        <p className="text-lg mb-4">
            Quando enviamos um formulário com <strong>&lt;form&gt;</strong>, usamos o atributo 
            <strong> method="" </strong> para definir como os dados serão enviados ao servidor.
        </p>

        <ul className="space-y-3">
            <li>
            <SendIcon size={20} />  <strong>GET</strong> — Envia os dados pela URL.<br />
            Ideal para pesquisas, filtros ou formulários simples.<br />
            <span className="text-sm text-gray-600">Exemplo de URL: <code>https://site.com/?nome=Joao&email=teste@mail.com</code></span>
            </li>

            <li>
            <EyeClosedIcon size={20} />  <strong>POST</strong> — Envia os dados de forma “oculta” no corpo da requisição.<br />
            Ideal para dados sensíveis, como login, cadastro ou envio de mensagens.
            </li>
        </ul>

        {/* Exemplos práticos */}
        <h4 className="mt-6 font-semibold text-lg">Exemplo com GET:</h4>
        <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
        {`<form action="/buscar" method="get">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" />
        <button type="submit">Buscar</button>
        </form>`}
        </pre>

        <h4 className="mt-6 font-semibold text-lg">Exemplo com POST:</h4>
        <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
        {`<form action="/enviar" method="post">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem"></textarea>
        <button type="submit">Enviar</button>
        </form>`}
        </pre>

        <p className="mt-4 text-md">
            📌 <strong>Dica:</strong> use <code>GET</code> quando quiser apenas recuperar informações,
            e <code>POST</code> quando quiser enviar ou salvar dados.
        </p>
        </section>
      
        {/* ✅ HTML Input Types */}
        <section className="mb-10">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
            <Tag size={24} /> Tipos de &lt;input&gt; mais usados
        </h2>

        <p className="text-lg mb-4">
            O elemento <strong>&lt;input&gt;</strong> muda completamente sua função dependendo do
            valor do atributo <strong>type=""</strong>. Veja os mais comuns:
        </p>

        <ul className="space-y-2">
            <li>✔ <strong>text</strong> – Campo de texto comum</li>
            <li>✔ <strong>email</strong> – Valida e-mails automaticamente</li>
            <li>✔ <strong>password</strong> – Oculta os caracteres digitados</li>
            <li>✔ <strong>number</strong> – Aceita apenas números</li>
            <li>✔ <strong>date</strong> – Seleciona data no calendário</li>
            <li>✔ <strong>color</strong> – Abre seletor de cores</li>
            <li>✔ <strong>file</strong> – Permite enviar arquivos</li>
            <li>✔ <strong>radio</strong> – Opções únicas (um grupo)</li>
            <li>✔ <strong>checkbox</strong> – Marcar múltiplas opções</li>
            <li>✔ <strong>range</strong> – Slider (barra ajustável)</li>
            <li>✔ <strong>submit</strong> – Botão de enviar formulário</li>
        </ul>

        <h3 className="mt-6 font-semibold text-lg">Exemplo prático:</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`<form>
        <label>Nome: <input type="text" name="nome" /></label>
        <label>Email: <input type="email" name="email" /></label>
        <label>Senha: <input type="password" name="senha" /></label>
        <label>Data de nascimento: <input type="date" name="data" /></label>
        <label>Foto de Perfil: <input type="file" name="foto" /></label>
        <label>Cor favorita: <input type="color" name="cor" /></label>

        <p>Sexo:</p>
        <label><input type="radio" name="sexo" value="m" /> Masculino</label>
        <label><input type="radio" name="sexo" value="f" /> Feminino</label>

        <p>Interesses:</p>
        <label><input type="checkbox" name="html" /> HTML</label>
        <label><input type="checkbox" name="css" /> CSS</label>
        <label><input type="checkbox" name="js" /> JavaScript</label>

        <label>Experiência (0 a 10): <input type="range" min="0" max="10" /></label>

        <button type="submit">Enviar</button>
        </form>`}
        </pre>
        </section>
            
        <section className="mb-10">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
            🎨 Cores no CSS
        </h2>

        <p className="text-lg mb-4">
            No HTML, podemos aplicar cores utilizando CSS — seja diretamente na tag 
            (com o atributo <strong>style</strong>) ou usando uma folha de estilo externa.
            Podemos alterar a cor do texto (<code>color</code>) ou do fundo (<code>background-color</code>).
        </p>

        <h3 className="font-semibold mb-2">✅ Exemplo prático:</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`<!DOCTYPE html>
        <html>
        <body>
        <div style="background-color:Tomato;">
            <h1 style="color:blue;">A Blue Heading</h1>
            <p style="color:red;">A red paragraph.</p>
        </div>
        </body>
        </html>`}
        </pre>

        <h3 className="mt-6 font-semibold text-lg">🎯 Como as cores podem ser escritas no CSS?</h3>
        <ul className="space-y-2">
            <li>✔ <strong>Nome da cor:</strong> <code>red</code>, <code>blue</code>, <code>tomato</code></li>
            <li>✔ <strong>Hexadecimal:</strong> <code>#FF5733</code> (mais usado no design)</li>
            <li>✔ <strong>RGB:</strong> <code>rgb(255, 99, 71)</code></li>
            <li>✔ <strong>RGBA (com transparência):</strong> <code>rgba(255, 99, 71, 0.5)</code></li>
            <li>✔ <strong>HSL:</strong> <code>hsl(9, 100%, 64%)</code></li>
        </ul>

        <h3 className="mt-6 font-semibold text-lg">🌈 Exemplos de diferentes formatos:</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`<p style="color:tomato;">Cor por nome</p>
        <p style="color:#ff6347;">Cor Hexadecimal</p>
        <p style="color:rgb(255, 99, 71);">Cor RGB</p>
        <p style="color:rgba(255, 99, 71, 0.5);">RGB com transparência</p>
        <p style="color:hsl(9, 100%, 64%);">Cor usando HSL</p>`}
        </pre>

        <p className="mt-4 text-md">
            💡 <strong>Dica:</strong> Evite usar o atributo <code>style=""</code> diretamente no HTML. 
            O ideal é separar o CSS em um arquivo próprio para manter o código organizado.
        </p>
        </section>

        <section className="mb-10">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
            🎨 Border e Background no CSS
        </h2>

        <p className="text-lg mb-4">
            Além de colorir textos, o CSS também permite modificar o <strong>fundo</strong> de elementos 
            com <code>background-color</code> e criar bordas com <code>border</code>.
        </p>

        {/* EXEMPLO VISUAL INLINE */}
        <h3 className="font-semibold mb-2">✅ Exemplo prático com background e border:</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`<!DOCTYPE html>
        <html>
        <body>

        <div style="background-color: lightblue; border: 2px solid navy; padding: 10px;">
        <h2 style="color: darkblue;">Título com borda</h2>
        <p style="color: darkred;">Parágrafo com fundo azul claro.</p>
        </div>

        </body>
        </html>`}
        </pre>

        {/* BORDER EXPLICAÇÃO */}
        <h3 className="mt-6 font-semibold text-lg">📌 Como funciona a propriedade <code>border</code>?</h3>
        <p className="text-lg mb-3">A sintaxe básica é:</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`border: [largura] [estilo] [cor];`}
        </pre>

        <ul className="space-y-2">
            <li>✔ <strong>Largura:</strong> 1px, 2px, 5px...</li>
            <li>✔ <strong>Estilo:</strong> solid, dashed, dotted, double</li>
            <li>✔ <strong>Cor:</strong> red, #000, rgb(0,0,0)</li>
        </ul>

        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm mt-4">
        {`div {
        border: 3px dashed #ff4500; /* laranja tracejado */
        }`}
        </pre>

        {/* BACKGROUND COLOR */}
        <h3 className="mt-6 font-semibold text-lg">🎨 Como funciona o <code>background-color</code>?</h3>
        <p className="text-lg mb-3">
            Essa propriedade altera a cor do fundo de qualquer elemento HTML:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`body {
        background-color: #f0f0f0;
        }

        div {
        background-color: rgba(255, 99, 71, 0.3); /* Tomato com transparência */
        }`}
        </pre>

        {/* DICA */}
        <p className="mt-4 text-md">
            💡 <strong>Dica:</strong> você pode combinar background e border juntos para criar cartões, caixas de destaque, botões e muito mais.
        </p>
        </section>


        <section className="mb-10">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
            🎨 Ligando CSS ao HTML (Arquivo Externo)
        </h2>

        <p className="text-lg mb-4">
            Em vez de usar estilos diretamente nas tags com o atributo 
            <code>style=""</code>, o ideal é criar um arquivo CSS separado e 
            vinculá-lo (linkar) ao HTML. Isso deixa o código mais organizado e 
            profissional.
        </p>

        <h3 className="font-semibold mb-2">✅ 1. Estrutura recomendada de arquivos:</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`📁 projeto/
        ├── index.html
        ├── styles.css
        `}
        </pre>

        <h3 className="mt-6 font-semibold">✅ 2. Dentro do HTML, use a tag &lt;link&gt;:</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`<!DOCTYPE html>
        <html lang="pt-BR">
        <head>
        <meta charset="UTF-8">
        <title>Meu Site</title>
        <link rel="stylesheet" href="styles.css"> <!-- ✅ Link do CSS -->
        </head>
        <body>
        <h1>Olá, mundo!</h1>
        <p>Este é um exemplo com CSS externo.</p>
        </body>
        </html>`}
        </pre>

        <h3 className="mt-6 font-semibold">✅ 3. E no arquivo styles.css:</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`body {
        background-color: #f5f5f5;
        font-family: Arial, sans-serif;
        }

        h1 {
        color: blue;
        }

        p {
        color: red;
        }`}
        </pre>

        <p className="mt-4">
            💡 <strong>Dica:</strong> a tag <code>&lt;link&gt;</code> sempre deve ser 
            colocada dentro do <code>&lt;head&gt;</code> do HTML. Isso garante que o 
            CSS seja carregado antes do conteúdo aparecer na tela.
        </p>
        </section>

        <section className="mb-10">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
            ⚙️ Conectando JavaScript com HTML
        </h2>

        <p className="text-lg mb-4">
            O JavaScript é a linguagem que adiciona interatividade às páginas web. 
            Assim como o CSS, ele pode ser inserido de três formas principais:
        </p>

        {/* ✅ 1. JavaScript Inline */}
        <h3 className="font-semibold text-lg mt-4">✅ 1. JavaScript Inline (dentro da tag)</h3>
        <p>Usado para ações simples, direto no HTML:</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`<button onclick="alert('Olá!')">Clique aqui</button>`}
        </pre>
        <h3 className="font-semibold text-lg mt-4">Exemplo:</h3>
        
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`<h1>My First JavaScript</h1>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>

<p id="demo"></p>`}
        </pre>




        {/* ✅ 2. JavaScript Interno */}
        <h3 className="font-semibold text-lg mt-6">✅ 2. JavaScript Interno (dentro do HTML)</h3>
        <p>Inserido dentro da tag <code>&lt;script&gt;</code> no final do <strong>body</strong>:</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`<!DOCTYPE html>
        <html>
        <body>
        <h1>Exemplo</h1>
        <button id="btn">Clique</button>

        <script>
            document.getElementById("btn").onclick = function() {
            alert("Você clicou no botão!");
            };
        </script>
        </body>
        </html>`}
        </pre>

        {/* ✅ 3. JavaScript Externo */}
        <h3 className="font-semibold text-lg mt-6">✅ 3. JavaScript Externo (em outro arquivo)</h3>
        <p>É a forma mais profissional — o JS fica em um arquivo separado:</p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`📁 projeto/
        ├── index.html
        ├── script.js  <-- arquivo JavaScript
        `}
        </pre>

        <h4 className="font-semibold mt-4">📄 index.html</h4>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`<!DOCTYPE html>
        <html>
        <body>
        <h1>JavaScript Externo</h1>
        <button id="btn">Mostrar Alerta</button>
        <script src="script.js"></script> <!-- ✅ Conectando o JS -->
        </body>
        </html>`}
        </pre>

        <h4 className="font-semibold mt-4">📄 script.js</h4>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`document.getElementById("btn").addEventListener("click", function() {
        alert("JavaScript carregado de um arquivo externo!");
        });`}
        </pre>

        <p className="mt-4 text-md">
            💡 <strong>Dica:</strong> Sempre coloque o <code>&lt;script src="script.js"&gt;</code> 
            no final do <code>&lt;body&gt;</code> — assim o HTML é carregado antes do JavaScript.
        </p>
        </section>
            
        <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
                🌐 HTML + CSS + JavaScript — Trabalhando Juntos
            </h2>

            <p className="text-lg mb-4">
                Para criar páginas web completas, utilizamos três tecnologias que funcionam em perfeita sintonia:
            </p>

            <ul className="space-y-3">
                <li>✔ <strong>HTML</strong> — Estrutura e conteúdo da página (texto, imagens, botões);</li>
                <li>✔ <strong>CSS</strong> — Aparência visual (cores, fontes, layout, responsividade);</li>
                <li>✔ <strong>JavaScript</strong> — Comportamento e interatividade (cliques, animações, validações, APIs);</li>
            </ul>

            <h3 className="mt-6 font-semibold text-lg">📌 Exemplo de HTML, CSS e JS funcionando juntos:</h3>

            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
            {`<!DOCTYPE html>
            <html lang="pt-BR">
            <head>
            <meta charset="UTF-8">
            <title>Exemplo Completo</title>
            <link rel="stylesheet" href="styles.css"> <!-- CSS Externo -->
            </head>
            <body>
            <h1 id="titulo">Bem-vindo!</h1>
            <button id="botao">Clique em mim</button>

            <script src="script.js"></script> <!-- JavaScript Externo -->
            </body>
            </html>`}
            </pre>

            <h4 className="mt-4 font-semibold">📁 styles.css:</h4>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
            {`body {
            text-align: center;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
            }

            h1 {
            color: #007bff;
            }

            button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            background-color: #007bff;
            color: white;
            border-radius: 5px;
            }

            button:hover {
            background-color: #0056b3;
            }`}
            </pre>

            <h4 className="mt-4 font-semibold">📁 script.js:</h4>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
            {`document.getElementById("botao").addEventListener("click", function() {
            document.getElementById("titulo").textContent = "Você clicou no botão!";
            });`}
            </pre>

            <p className="mt-4 text-md">
                💡 <strong>Resumo:</strong> HTML cria a estrutura, CSS embeleza e JavaScript dá vida à página.
                Juntos, eles formam a base de qualquer site ou aplicativo web moderno.
            </p>
            </section>

            <section className="mb-16 p-6 bg-white/70 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
                ✅ Conclusão: Como tudo se conecta
            </h2>

            <p className="text-lg mb-4">
                Ao longo deste módulo, aprendemos que uma página web é construída a partir da 
                combinação de três tecnologias principais:
            </p>

            <ul className="space-y-3">
                <li>✔ <strong>HTML</strong> — É a base da página. Define <em>o que</em> aparece: textos, imagens, formulários, tabelas e estrutura semântica.</li>
                <li>✔ <strong>CSS</strong> — Controla <em>como</em> tudo é visualizado: cores, fontes, espaçamento, bordas, responsividade e layout.</li>
                <li>✔ <strong>JavaScript</strong> — Torna a página interativa: cliques, animações, validações de formulário, efeitos dinâmicos e comunicação com servidores.</li>
            </ul>

            <p className="mt-6 text-md">
                💡 <strong>A ideia principal:</strong> HTML constrói o conteúdo, CSS deixa bonito e 
                JavaScript dá movimento. Quando trabalhados em conjunto, eles criam sites modernos, 
                responsivos e funcionais.
            </p>

            <p className="mt-4 text-md italic">
                📚 Este projeto foi pensado para revisar conceitos fundamentais e reforçar meus conhecimentos 
                em desenvolvimento web com base na prática, visualidade e exemplos reais.
            </p>
            
            </section>

           <section className="flex justify-center p-4 gap-4">
            <Link to="/css">
                <Button variant="primary">Próximo Módulo: CSS</Button>
            </Link>
             <a
                href="/docs/modulo-html.pdf" // coloque o PDF dentro de /public/arquivos/
                download="Modulo-HTML.pdf"
            >
                <Button variant="primary">📄 Baixar PDF - Módulo HTML</Button>
            </a>
            </section>
                
        </section>

        {/* 💻 COLUNA DIREITA – Editor + Preview */}
        <section className="w-full lg:w-1/2 p-6 md:p-8 lg:sticky lg:top-20 lg:h-screen overflow-y-auto backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code size={24} /> Teste você mesmo:
          </h2>

          {/* Editor */}
          <CodeEditor code={htmlCode} onChange={setHtmlCode} language="html" />

          {/* Preview */}
          <h3 className="mt-6 font-semibold text-lg">Pré-visualização:</h3>
          <iframe
            className="w-full h-64 mt-2 border rounded-lg bg-white"
            srcDoc={htmlCode}
            title="Preview do Código"
          />
        </section>
      </div>

      <Footer />
    </main>
  );
};
