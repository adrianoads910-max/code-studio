import { useState } from "react";
import { CodeEditor } from "../../components/codeeditor/codeeditor";
import { Footer } from "../../components/footer"
import { Navbar } from "../../components/navbar"
import { Code } from "lucide-react";
import { CodeIcon } from "lucide-react";
import { TerminalIcon } from "lucide-react";
import { Tag } from "lucide-react";
import { CodeXmlIcon } from "lucide-react";

export const JavascriptPage = () => {
     const [htmlCode, setHtmlCode] = useState(`
        <h1>Clique no botão!</h1>
        <button id="btn">Clique</button>
        <p id="msg"></p>
        `);

        const [jsCode, setJsCode] = useState(` 
        const btn = document.getElementById("btn");
        const msg = document.getElementById("msg");

        btn.addEventListener("click", () => {
            msg.textContent = "✅ Funcionou com JavaScript!";
        });
        `);

      return (
        <main className="bg-amber-50 bg-[url('/icone-html-noir.png')] bg-contain bg-center bg-no-repeat bg-blend-overlay min-h-screen">
          <Navbar />
    
          {/* Container 2 colunas responsivas */}
          <div className="flex flex-col lg:flex-row">
    
            {/* 📘 COLUNA ESQUERDA – Conteúdo HTML */}
            <section className="w-full lg:w-1/2 p-6 md:p-8 max-w-4xl mx-auto text-gray-800">
                 <h1 className="text-4xl font-extrabold text-amber-600 flex items-center gap-2 mb-6">
                <CodeXmlIcon size={32} /> Estudo de JavaScript
            </h1>

            {/* 📘 O que é JavaScript */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-amber-700 mb-2">
                <CodeIcon size={24} /> O que é JavaScript?
                </h2>
                <p className="text-lg p-2">
                JavaScript é a linguagem de programação responsável por adicionar{" "}
                <strong>interatividade</strong> às páginas web.
                </p>
                <p className="text-lg p-2">
                Com ele, você pode manipular o HTML, alterar estilos, reagir a eventos
                (como cliques) e muito mais.
                </p>
            </section>

            {/* 📌 Para que serve */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-amber-700 mb-4">
                🎯 Onde o JavaScript é usado?
                </h2>

                <ul className="space-y-3">
                <li className="flex gap-2 items-center"><Tag size={20}/> Alterar elementos do HTML com DOM</li>
                <li className="flex gap-2 items-center"><Tag size={20}/> Criar interações (cliques, animações, formulários)</li>
                <li className="flex gap-2 items-center"><Tag size={20}/> Validar dados antes de enviar para o backend</li>
                <li className="flex gap-2 items-center"><Tag size={20}/> Consumir APIs e mostrar dados dinamicamente</li>
                <li className="flex gap-2 items-center"><Tag size={20}/> Criar jogos, aplicativos web e até mobile</li>
                </ul>
              </section>  

              {/* 📘 Introdução à Sintaxe */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-yellow-600 mb-3">
                    🧠 O que é Sintaxe no JavaScript?
                </h2>

                <p className="text-lg p-2">
                    <strong>Sintaxe</strong> é o conjunto de regras que definem como o código deve ser escrito
                    para que o JavaScript entenda e execute corretamente. Assim como uma frase precisa de verbo e ponto final,
                    o código também precisa seguir uma estrutura.
                </p>

                <p className="text-lg p-2">
                    Um erro de sintaxe impede o código de funcionar — por exemplo: esquecer ponto e vírgula, chaves,
                    escrever palavras-chave erradas ou não fechar parênteses.
                </p>

                {/* ✅ Exemplos básicos de sintaxe certa */}
                <h3 className="text-xl font-semibold mt-6 mb-2">✅ Sintaxe correta:</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
                {`// Declaração de variável
                let nome = "Adriano";

                // Função simples
                function saudacao() {
                console.log("Olá, " + nome);
                }

                // Chamando a função
                saudacao();`}
                </pre>

                {/* ❌ Exemplos de sintaxe errada */}
                <h3 className="text-xl font-semibold mt-6 mb-2 text-red-500">❌ Sintaxe incorreta:</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
                {`let nome = "Adriano"          // ❌ Faltou ponto e vírgula

                function saudacao( {           // ❌ Parêntese e chave juntos
                console.log("Oi");
                }                               // ❌ Chave sem fechar a função

                saudacao(                      // ❌ Faltou fechar parêntese e ponto e vírgula`}
                </pre>

                {/* 💡 Dica */}
                <p className="mt-4">
                    ✅ <strong>Dica:</strong> Erros de sintaxe aparecem no console do navegador (F12 → Aba "Console").
                    Sempre leia atentamente a linha do erro para corrigir mais rápido.
                </p>
            </section>


            <section className="mb-10">
                <h2 className="text-2xl font-bold text-yellow-600 mb-2">🎯 Eventos no JavaScript</h2>
                <p className="text-lg p-2">
                    Eventos são ações que acontecem na página — como clicar, digitar ou passar o mouse.
                    Podemos usar JavaScript para "escutar" esses eventos e reagir a eles.
                </p>

                {/* ✅ Tabela de eventos */}
                <h3 className="text-xl font-semibold mt-6 mb-3">📌 Outros eventos comuns:</h3>
                <ul className="space-y-3 text-lg">
                    <li>✅ <strong>click</strong> → quando o usuário clica em algo</li>
                    <li>✅ <strong>input</strong> → quando o usuário digita em um campo</li>
                    <li>✅ <strong>mouseover</strong> → quando o mouse passa por cima de um elemento</li>
                    <li>✅ <strong>keydown</strong> → quando alguma tecla do teclado é pressionada</li>
                </ul>

                {/* ✅ Exemplos de cada evento */}
                <h3 className="text-xl font-semibold mt-6 mb-2">💻 Exemplos:</h3>

                {/* Exemplo 1: Click */}
                <p className="font-semibold">📍 Evento: <code>click</code></p>
                <pre className="bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-sm">
                {`<button id="btn">Clique aqui</button>
                <p id="msg"></p>

                <script>
                document.getElementById("btn").addEventListener("click", () => {
                    document.getElementById("msg").textContent = "Você clicou no botão!";
                });
                </script>`}
                </pre>

                {/* Exemplo 2: Input */}
                <p className="font-semibold mt-4">📍 Evento: <code>input</code> (ao digitar)</p>
                <pre className="bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-sm">
                {`<input type="text" id="nome" placeholder="Digite seu nome">
                <p id="resultado"></p>

                <script>
                document.getElementById("nome").addEventListener("input", (event) => {
                    document.getElementById("resultado").textContent = "Digitando: " + event.target.value;
                });
                </script>`}
                </pre>

                {/* Exemplo 3: Mouseover */}
                <p className="font-semibold mt-4">📍 Evento: <code>mouseover</code> (passar o mouse)</p>
                <pre className="bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-sm">
                {`<div id="box" style="width:200px; height:100px; background:lightgray;">
                Passe o mouse aqui
                </div>

                <script>
                document.getElementById("box").addEventListener("mouseover", () => {
                    document.getElementById("box").style.background = "lightgreen";
                });
                </script>`}
                </pre>

                {/* Exemplo 4: Keydown */}
                <p className="font-semibold mt-4">📍 Evento: <code>keydown</code> (tecla pressionada)</p>
                <pre className="bg-gray-900 text-white p-3 rounded-lg overflow-x-auto text-sm">
                {`<p>Pressione qualquer tecla no teclado...</p>
                <p id="tecla"></p>

                <script>
                document.addEventListener("keydown", (event) => {
                    document.getElementById("tecla").textContent = "Você apertou: " + event.key;
                });
                </script>`}
                </pre>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-yellow-600 mb-3">
                    🔢 Variáveis e Operações Matemáticas no JavaScript
                </h2>

                <p className="text-lg p-2">
                    No JavaScript usamos <strong>variáveis</strong> para guardar informações.
                    As palavras mais usadas são <code>let</code> e <code>const</code>.
                </p>

                {/* ✅ Comparação entre let e const */}
                <h3 className="text-xl font-semibold mt-4 mb-2">✅ let vs const</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`// let → pode ser alterada depois
                let nome = "Ana";
                nome = "João"; // ✅ permitido

                // const → NÃO pode ser alterada depois
                const idade = 20;
                idade = 25; // ❌ ERRO: não é possível mudar o valor de uma const
                `}
                </pre>

                {/* ➕ Operações Matemáticas */}
                <h3 className="text-xl font-semibold mt-6 mb-2">➕ Operações Matemáticas no JavaScript</h3>
                <p className="text-lg p-2">
                    JavaScript também permite realizar contas matemáticas de forma simples, como soma,
                    subtração, multiplicação e divisão.
                </p>

                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`let a = 10;
                let b = 5;

                let soma = a + b;        // 15
                let subtracao = a - b;   // 5
                let multiplicacao = a * b; // 50
                let divisao = a / b;     // 2

                console.log("Soma:", soma);
                console.log("Subtração:", subtracao);
                console.log("Multiplicação:", multiplicacao);
                console.log("Divisão:", divisao);`}
                </pre>

                {/* ✅ Exemplo prático interativo */}
                <h3 className="text-xl font-semibold mt-6 mb-2">💻 Exemplo interativo com botão:</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`<h2>Calculadora Simples</h2>
                <button onclick="calcular()">Clique para calcular</button>
                <p id="resultado"></p>

                <script>
                function calcular() {
                    let x = 8;
                    let y = 2;
                    const soma = x + y;
                    const multiplica = x * y;
                    document.getElementById("resultado").textContent =
                    "Soma: " + soma + " | Multiplicação: " + multiplica;
                }
                </script>`}
                </pre>

                <p className="mt-4">
                    ✅ <strong>Dica:</strong> use <code>let</code> quando o valor pode mudar e <code>const</code> para valores fixos ou funções.
                </p>
            </section>



            <section className="mb-10">
                <h2 className="text-2xl font-bold text-yellow-600 mb-2">⚖️ Condições: if, else</h2>
                <p className="text-lg p-2">
                    Condicionais permitem que o JavaScript tome decisões.  
                    Exemplo: se o usuário for maior de idade, mostrar uma mensagem diferente.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2">✅ Exemplo:</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`const idade = 17;

                if (idade >= 18) {
                console.log("✅ Pode entrar!");
                } else {
                console.log("❌ Menor de idade.");
                }`}
                </pre>

                <h3 className="text-xl font-semibold mt-4 mb-2">✨ Operador ternário (forma mais curta):</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`const idade = 20;
                const mensagem = idade >= 18 ? "✅ Maior de idade" : "❌ Menor de idade";
                console.log(mensagem);`}
                </pre>

                <p className="mt-4">
                    ✅ <strong>Dica:</strong> Use <code>if</code> para lógica mais complexa e <code>? :</code> (ternário) para decisões simples.
                </p>
            </section>

            



                            
            </section>
    
            {/* 💻 COLUNA DIREITA – Editor + Preview */}
            <section className="w-full lg:w-1/2 p-6 md:p-8 lg:sticky lg:top-20 lg:h-screen overflow-y-auto backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Code size={24} /> Teste você mesmo:
            </h2>

            {/* Editor HTML */}
            <p className="font-semibold mb-2">🌐 HTML:</p>
            <CodeEditor code={htmlCode} onChange={setHtmlCode} language="html" />

            {/* Editor JavaScript */}
            <p className="font-semibold mt-4 mb-2">⚙️ JavaScript:</p>
            <CodeEditor code={jsCode} onChange={setJsCode} language="javascript" />

            {/* Preview */}
            <h3 className="mt-6 font-semibold text-lg">Pré-visualização:</h3>
            <iframe
                className="w-full h-64 mt-2 border rounded-lg bg-white"
                srcDoc={`
                <html>
                    <body>
                    ${htmlCode}
                    <script>
                        ${jsCode}
                    </script>
                    </body>
                </html>
                `}
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