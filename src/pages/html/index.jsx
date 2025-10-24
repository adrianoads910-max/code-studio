import { useState } from "react";
import { CodeEditor } from "../../components/codeeditor/codeeditor";
import { Footer } from "../../components/footer";
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

          {/* Estrutura Semântica */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
              <LayoutTemplate size={24} /> Estrutura Semântica do HTML5
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-2 items-center"><Tag size={20}/> <strong>&lt;header&gt;</strong> — Cabeçalho</li>
              <li className="flex gap-2 items-center"><Tag size={20}/> <strong>&lt;main&gt;</strong> — Conteúdo principal</li>
              <li className="flex gap-2 items-center"><Tag size={20}/> <strong>&lt;footer&gt;</strong> — Rodapé</li>
              <li className="flex gap-2 items-center"><Tag size={20}/> <strong>&lt;section&gt;</strong> — Seção temática</li>
              <li className="flex gap-2 items-center"><Tag size={20}/> <strong>&lt;div&gt;</strong> — Bloco genérico</li>
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
                ✅ <strong>Sintaxe:</strong> <code>&lt;!-- comentário aqui --&gt;</code>
                </li>
                <li className="flex gap-2 items-center">
                ✅ <strong>Não são exibidos ao usuário,</strong> apenas no código.
                </li>
                <li className="flex gap-2 items-center">
                ✅ <strong>Podem ser usados para explicar ou organizar o HTML.</strong>
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
            ✅ <strong>&lt;form&gt;</strong> — Contêiner onde todos os campos ficam.
            </li>
            <li className="flex gap-2 items-center">
            ✅ <strong>&lt;input&gt;</strong> — Campo para texto, e-mail, senha, número etc.
            </li>
            <li className="flex gap-2 items-center">
            ✅ <strong>&lt;label&gt;</strong> — Texto que nomeia cada campo.
            </li>
            <li className="flex gap-2 items-center">
            ✅ <strong>&lt;textarea&gt;</strong> — Campo de texto com várias linhas.
            </li>
            <li className="flex gap-2 items-center">
            ✅ <strong>&lt;button&gt;</strong> ou <strong>&lt;input type="submit"&gt;</strong> — Botão de envio.
            </li>
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
        <h3 className="text-xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
            📤 Métodos de Envio: <code>GET</code> e <code>POST</code>
        </h3>

        <p className="text-lg mb-4">
            Quando enviamos um formulário com <strong>&lt;form&gt;</strong>, usamos o atributo 
            <strong> method="" </strong> para definir como os dados serão enviados ao servidor.
        </p>

        <ul className="space-y-3">
            <li>
            ✅ <strong>GET</strong> — Envia os dados pela URL.<br />
            Ideal para pesquisas, filtros ou formulários simples.<br />
            <span className="text-sm text-gray-600">Exemplo de URL: <code>https://site.com/?nome=Joao&email=teste@mail.com</code></span>
            </li>

            <li>
            ✅ <strong>POST</strong> — Envia os dados de forma “oculta” no corpo da requisição.<br />
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
        {/* ✅ HTML Form Elements */}
        <section className="mb-10">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-brand-blue-dark mb-4">
            <Tag size={24} /> Principais Elementos de Formulário em HTML
        </h2>

        <p className="text-lg mb-4">
            Dentro da tag <strong>&lt;form&gt;</strong>, usamos vários elementos para 
            coletar informações do usuário. Aqui estão os principais:
        </p>

        <ul className="space-y-2">
            <li>✅ <strong>&lt;input&gt;</strong> – Campo de entrada de dados (texto, email, senha, etc.)</li>
            <li>✅ <strong>&lt;label&gt;</strong> – Rótulo que descreve o campo</li>
            <li>✅ <strong>&lt;textarea&gt;</strong> – Caixa de texto grande (mensagens, descrições)</li>
            <li>✅ <strong>&lt;select&gt;</strong> – Menu suspenso (combobox)</li>
            <li>✅ <strong>&lt;option&gt;</strong> – Opções dentro de um select</li>
            <li>✅ <strong>&lt;button&gt;</strong> – Botão de envio ou ação</li>
            <li>✅ <strong>&lt;fieldset&gt;</strong> – Agrupa elementos de formulário</li>
            <li>✅ <strong>&lt;legend&gt;</strong> – Título de um fieldset</li>
        </ul>

        <h3 className="mt-6 font-semibold text-lg">Exemplo completo:</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
        {`<form>
        <fieldset>
            <legend>Dados Pessoais</legend>

            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" />

            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem"></textarea>

            <label for="curso">Escolha um curso:</label>
            <select id="curso" name="curso">
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JavaScript</option>
            </select>

            <button type="submit">Enviar</button>
        </fieldset>
        </form>`}
        </pre>
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
            

        </section>

        {/* 💻 COLUNA DIREITA – Editor + Preview */}
        <section className="w-full lg:w-1/2 p-6 md:p-8 lg:sticky lg:top-20 lg:h-screen overflow-y-auto backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code size={24} /> Teste você mesmo:
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

      <Footer />
    </main>
  );
};
