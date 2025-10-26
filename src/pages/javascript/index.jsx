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
                <h2 className="text-2xl font-bold text-yellow-600 mb-3">🪟 Abrindo nova aba ou outra página com JavaScript</h2>

                <p className="text-lg p-2">
                    Com JavaScript, podemos abrir <strong>outra página</strong>, carregar <strong>outro arquivo HTML</strong> 
                    ou abrir um link em <strong>nova aba</strong> usando eventos como <code>onclick</code>.
                </p>

                {/* ✅ 1) Abrir link em nova aba */}
                <h3 className="text-xl font-semibold mt-4 mb-2">✅ 1) Abrir link em nova aba (target="_blank")</h3>
                <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
                {`<!-- HTML -->
                <button onclick="window.open('https://google.com', '_blank')">
                Abrir Google em nova aba
                </button>`}
                </pre>

                {/* ✅ 2) Abrir outro arquivo HTML do projeto */}
                <h3 className="text-xl font-semibold mt-6 mb-2">✅ 2) Abrir outro HTML do seu site</h3>
                <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
                {`<!-- HTML -->
                <button onclick="window.location.href = 'sobre.html'">
                Ir para página Sobre (mesma aba)
                </button>

                <button onclick="window.open('contato.html', '_blank')">
                Abrir página Contato em nova aba
                </button>`}
                </pre>

                {/* ✅ 3) Usando addEventListener em vez de onclick */}
                <h3 className="text-xl font-semibold mt-6 mb-2">✅ 3) Usando JavaScript separadamente (sem onclick no HTML)</h3>
                <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
                {`<button id="btnNovaAba">Abrir GitHub</button>

                <script>
                const botao = document.getElementById("btnNovaAba");

                botao.addEventListener("click", () => {
                    window.open("https://github.com", "_blank");
                });
                </script>`}
                </pre>

                {/* ✅ 4) Abrir e enviar dados para outra página */}
                <h3 className="text-xl font-semibold mt-6 mb-2">✅ 4) Enviando dados para outra página (com parâmetros)</h3>
                <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
                {`// Exemplo: abre outra página e passa nome pela URL
                const nome = "Adriano";
                window.open(\`perfil.html?nome=\${nome}\`, "_blank");

                // Na outra página (perfil.html), pegar valor assim:
                const params = new URLSearchParams(window.location.search);
                console.log(params.get("nome")); // "Adriano"`}
                </pre>

                <p className="text-md mt-6">
                    ✅ <strong>Dica:</strong> Use <code>window.open()</code> para nova aba e 
                    <code>window.location.href</code> para trocar de página na mesma aba.
                </p>
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

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-yellow-600 mb-3">
                    🔁 Loops (Repetições) no JavaScript
                </h2>

                <p className="text-lg p-2">
                    Loops servem para repetir uma ação várias vezes sem precisar escrever o mesmo código repetidamente.
                    Eles são muito usados para percorrer listas, repetir cálculos, mostrar itens na tela, etc.
                </p>

                {/* Tipos de Loops */}
                <h3 className="text-xl font-semibold mt-4 mb-2">✅ Tipos mais comuns:</h3>
                <ul className="list-disc  text-lg space-y-1">
                    <li className="flex gap-2 items-center"><Tag size={20}/> <strong>for</strong> – repete algo um número definido de vezes</li>
                    <li className="flex gap-2 items-center"><Tag size={20}/> <strong>while</strong> – repete enquanto uma condição for verdadeira</li>
                    <li className="flex gap-2 items-center"><Tag size={20}/> <strong>do...while</strong> – executa pelo menos uma vez, depois testa</li>
                    <li className="flex gap-2 items-center"><Tag size={20}/> <strong>for...of</strong> – percorre valores dentro de arrays</li>
                </ul>

                {/* Exemplo: for */}
                <h3 className="text-xl font-semibold mt-6 mb-2">📌 Exemplo: for (o mais usado)</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`// Contar de 1 até 5
                for (let i = 1; i <= 5; i++) {
                console.log("Número:", i);
                }`}
                </pre>

                {/* Exemplo: while */}
                <h3 className="text-xl font-semibold mt-6 mb-2">📌 Exemplo: while</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`let contador = 1;

                while (contador <= 3) {
                console.log("Contando...", contador);
                contador++;
                }`}
                </pre>

                {/* Exemplo: do...while */}
                <h3 className="text-xl font-semibold mt-6 mb-2">📌 Exemplo: do...while</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`let numero = 1;

                do {
                console.log("Executa pelo menos uma vez:", numero);
                numero++;
                } while (numero <= 3);`}
                </pre>

                {/* Exemplo: percorrer array */}
                <h3 className="text-xl font-semibold mt-6 mb-2">📌 Exemplo: for...of (percorrer lista)</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`const frutas = ["🍎 Maçã", "🍌 Banana", "🍇 Uva"];

                for (const fruta of frutas) {
                console.log("Fruta:", fruta);
                }`}
                </pre>

                {/* Dica final */}
                <p className="text-md mt-6">
                    ✅ <strong>Dica:</strong> Loops + condicionais são a base de qualquer lógica de programação.
                    Use <code>console.log()</code> para testar a execução passo a passo.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-yellow-600 mb-3">📦 Arrays (Listas)</h2>
                <p className="text-lg p-2">
                    Um <strong>Array</strong> é uma lista que pode guardar vários valores dentro de uma única variável.
                    Cada item tem um número de posição chamado <strong>índice</strong> (começa do zero).
                </p>

                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`const frutas = ["Maçã", "Banana", "Uva"];

                // Acessando itens:
                console.log(frutas[0]); // "Maçã"
                console.log(frutas[2]); // "Uva"

                // Adicionando item:
                frutas.push("Laranja");

                // Removendo o último:
                frutas.pop();

                console.log(frutas); // ["Maçã", "Banana", "Uva"]`}
                </pre>

                <p className="mt-4">
                    ✅ <strong>Dica:</strong> Arrays são ótimos para listas de nomes, produtos, números etc.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-yellow-600 mb-3">⚙️ Funções em JavaScript</h2>
                <p className="text-lg p-2">
                    Funções são blocos de código que podemos "guardar" e usar quando quisermos. 
                    São úteis para evitar repetição de código.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2">✅ Exemplo básico:</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`function saudacao() {
                console.log("Olá! Seja bem-vindo!");
                }

                saudacao(); // chamando a função`}
                </pre>

                <h3 className="text-xl font-semibold mt-4 mb-2">📌 Função com parâmetros e retorno:</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`function somar(a, b) {
                return a + b;
                }

                const resultado = somar(5, 3);
                console.log("Resultado:", resultado); // 8`}
                </pre>

                <p className="mt-4">
                    ✅ <strong>Dica:</strong> Funções podem receber valores (parâmetros) e devolver algo com <code>return</code>.
                </p>
            </section>
            <section className="mb-10">
                    <h2 className="text-2xl font-bold text-yellow-600 mb-3">🧱 Objetos em JavaScript</h2>
                    <p className="text-lg p-2">
                        Objetos são usados para representar algo com várias informações juntas,
                        como uma pessoa, produto, carro, usuário etc.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2">✅ Exemplo de objeto:</h3>
                    <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                    {`const pessoa = {
                    nome: "Ana",
                    idade: 25,
                    cidade: "São Paulo"
                    };

                    console.log(pessoa.nome);   // "Ana"
                    console.log(pessoa["idade"]); // 25`}
                    </pre>

                    <h3 className="text-xl font-semibold mt-6 mb-2">📌 Objeto com função dentro (método):</h3>
                    <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                    {`const usuario = {
                    nome: "Carlos",
                    saudacao: function() {
                        console.log("Olá, " + this.nome);
                    }
                    };

                    usuario.saudacao(); // "Olá, Carlos"`}
                    </pre>

                    <p className="mt-4">
                        ✅ <strong>Dica:</strong> Objetos são perfeitos para representar coisas do mundo real no código.
                    </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-yellow-600 mb-3">⚡ Funções Arrow (=>)</h2>
                <p className="text-lg p-2">
                    As <strong>funções arrow</strong> são uma forma mais curta e moderna de escrever funções no JavaScript.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2">✅ Comparação:</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`// Função tradicional
                function somar(a, b) {
                return a + b;
                }

                // Função arrow
                const somarArrow = (a, b) => {
                return a + b;
                };

                // Arrow function ainda mais curta (retorno implícito)
                const somarDireto = (a, b) => a + b;

                console.log(somar(2, 3));        // 5
                console.log(somarArrow(2, 3));   // 5
                console.log(somarDireto(2, 3));  // 5`}
                </pre>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-yellow-600 mb-3">📦 Manipulação de Arrays</h2>

                <p className="text-lg p-2">
                    O JavaScript possui métodos poderosos para trabalhar com listas. Os mais usados são:
                    <strong> forEach, map e filter.</strong>
                </p>

                {/* forEach */}
                <h3 className="text-xl font-semibold mt-4 mb-2">🔁 forEach — percorre o array</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`const frutas = ["Maçã", "Banana", "Uva"];

                frutas.forEach((item, indice) => {
                console.log(indice, item);
                });
                // 0 Maçã, 1 Banana, 2 Uva`}
                </pre>

                {/* map */}
                <h3 className="text-xl font-semibold mt-4 mb-2">🧪 map — cria um novo array</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`const numeros = [1, 2, 3, 4];
                const dobrados = numeros.map(num => num * 2);

                console.log(dobrados); // [2, 4, 6, 8]`}
                </pre>

                {/* filter */}
                <h3 className="text-xl font-semibold mt-4 mb-2">🎯 filter — filtra valores do array</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`const valores = [10, 3, 25, 8, 30];
                const maiores = valores.filter(num => num > 10);

                console.log(maiores); // [25, 30]`}
                </pre>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-yellow-600 mb-3">📁 O que é JSON?</h2>
                <p className="text-lg p-2">
                    JSON é um formato de texto usado para <strong>armazenar e enviar dados</strong>.
                    É muito usado em APIs, banco de dados e troca de informações entre front-end e back-end.
                </p>

                {/* Estrutura JSON */}
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`// Exemplo de JSON (parecido com objetos JS)
                {
                "nome": "Ana",
                "idade": 25,
                "ativo": true,
                "hobbies": ["Música", "Leitura"]
                }`}
                </pre>

                <h3 className="text-xl font-semibold mt-4 mb-2">✅ Como usar JSON no JavaScript:</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`// Objeto normal em JS
                const pessoa = {
                nome: "Carlos",
                idade: 30,
                ativo: true
                };

                // Converter objeto em JSON (texto)
                const json = JSON.stringify(pessoa);
                console.log(json);
                // {"nome":"Carlos","idade":30,"ativo":true}

                // Converter JSON (texto) em objeto JS novamente
                const objetoDeNovo = JSON.parse(json);
                console.log(objetoDeNovo.nome); // Carlos`}
                </pre>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-yellow-600 mb-3">📁 JSON com vários dados (lista de objetos)</h2>

                <p className="text-lg p-2">
                    Em JSON, também podemos armazenar <strong>vários registros ao mesmo tempo</strong>.
                    Para isso, usamos <strong>colchetes [ ]</strong> para criar uma <strong>lista (array)</strong> de objetos.
                </p>

                <p className="text-lg p-2">
                    Isso é muito usado em APIs, bancos de dados e sistemas que precisam guardar listas de usuários, produtos, alunos, etc.
                </p>

                {/* ✅ Exemplo de JSON com várias pessoas */}
                <h3 className="text-xl font-semibold mt-4 mb-2">✅ Exemplo: lista de pessoas em JSON</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`[
                {
                    "nome": "Ana",
                    "idade": 25,
                    "cidade": "São Paulo"
                },
                {
                    "nome": "Bruno",
                    "idade": 30,
                    "cidade": "Rio de Janeiro"
                },
                {
                    "nome": "Carla",
                    "idade": 22,
                    "cidade": "Curitiba"
                }
                ]`}
                </pre>

                {/* ✅ Como acessar no JavaScript */}
                <h3 className="text-xl font-semibold mt-6 mb-2">📌 Como usar esse JSON no JavaScript?</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`// Lista de pessoas (array de objetos)
                const pessoas = [
                { nome: "Ana", idade: 25, cidade: "São Paulo" },
                { nome: "Bruno", idade: 30, cidade: "Rio de Janeiro" },
                { nome: "Carla", idade: 22, cidade: "Curitiba" }
                ];

                // Exemplo: mostrar o nome de todas as pessoas
                pessoas.forEach((pessoa) => {
                console.log(pessoa.nome);
                });

                // Exemplo: pegar a cidade do segundo (índice 1)
                console.log(pessoas[1].cidade); // "Rio de Janeiro"`}
                </pre>

                {/* ✅ JSON -> texto e texto -> JSON */}
                <h3 className="text-xl font-semibold mt-6 mb-2">💾 Salvando e carregando JSON</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`// Converter a lista para texto JSON (ex: enviar para API ou salvar)
                const jsonTexto = JSON.stringify(pessoas);
                console.log(jsonTexto);

                // Converter texto JSON de volta para array de objetos
                const listaConvertida = JSON.parse(jsonTexto);
                console.log(listaConvertida[0].nome); // "Ana"`}
                </pre>

                <p className="mt-4">
                    ✅ <strong>Dica:</strong> JSON com vários objetos é ideal para listas como alunos, produtos, posts de blog, usuários de um sistema, etc.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-yellow-600 mb-3">💾 Salvando dados do formulário com JavaScript</h2>
                <p className="text-lg p-2">
                    Vamos criar um formulário no HTML, capturar os dados com JavaScript e exibir na tela sem recarregar a página.
                </p>

                {/* ✅ Passo 1 – HTML */}
                <h3 className="text-xl font-semibold mt-6 mb-2">✅ 1) Estrutura HTML do formulário</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`<h2>Cadastro de Pessoas</h2>

                <form id="form">
                <label>Nome:</label>
                <input type="text" id="nome" required>

                <label>Idade:</label>
                <input type="number" id="idade" required>

                <label>Cidade:</label>
                <input type="text" id="cidade" required>

                <button type="submit">Salvar</button>
                </form>

                <h3>Pessoas cadastradas:</h3>
                <ul id="lista"></ul>`}
                </pre>

                {/* ✅ Passo 2 – JavaScript */}
                <h3 className="text-xl font-semibold mt-6 mb-2">✅ 2) JavaScript para salvar e mostrar os dados</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg text-sm overflow-x-auto">
                {`const form = document.getElementById("form");
                const lista = document.getElementById("lista");
                let pessoas = []; // onde os dados serão armazenados

                form.addEventListener("submit", (event) => {
                event.preventDefault(); // evita recarregar a página

                // Pega os valores dos inputs
                const nome = document.getElementById("nome").value;
                const idade = document.getElementById("idade").value;
                const cidade = document.getElementById("cidade").value;

                // Cria um objeto com os dados
                const pessoa = { nome, idade, cidade };

                // Salva no array
                pessoas.push(pessoa);

                // Mostra na tela
                atualizarLista();

                // Limpa os campos
                form.reset();
                });

                function atualizarLista() {
                lista.innerHTML = ""; // limpa a lista antes de reexibir

                pessoas.forEach((p) => {
                    const item = document.createElement("li");
                    item.textContent = \`👤 Nome: \${p.nome} | 🎂 Idade: \${p.idade} | 📍 Cidade: \${p.cidade}\`;
                    lista.appendChild(item);
                });
                }`}
                </pre>

                {/* ✅ Dica final */}
                <p className="mt-4">
                    ✅ <strong>Dica:</strong> esse mesmo código pode ser adaptado para salvar no <code>localStorage</code>, enviar para uma API ou até transformar em tabela.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-yellow-600 mb-3">
                    ✏️ Como Editar e Excluir Dados Salvos no JSON
                </h2>

                <p className="text-lg p-2">
                    Quando salvamos várias pessoas em um <strong>array de objetos (JSON)</strong>, também podemos 
                    <strong>editar</strong> e <strong>excluir</strong> esses cadastros usando JavaScript.
                    Vamos aprender isso passo a passo!
                </p>

                {/* ✅ Passo 1 */}
                <h3 className="text-xl font-semibold mt-4 mb-2">✅ 1) Estrutura básica do formulário:</h3>
                <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
                {`<form id="form">
                <input id="nome" type="text" placeholder="Nome" required />
                <input id="idade" type="number" placeholder="Idade" required />
                <input id="cidade" type="text" placeholder="Cidade" required />
                <button type="submit">Salvar</button>
                </form>

                <ul id="lista"></ul>`}
                </pre>

                {/* ✅ Passo 2 */}
                <h3 className="text-xl font-semibold mt-6 mb-2">✅ 2) Salvando os dados em JSON (array de objetos):</h3>
                <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
                {`let pessoas = []; // Aqui ficam os cadastros
                let indiceEdicao = null; // Guarda qual item está sendo editado

                form.addEventListener("submit", (event) => {
                event.preventDefault();

                const pessoa = {
                    nome: document.getElementById("nome").value,
                    idade: document.getElementById("idade").value,
                    cidade: document.getElementById("cidade").value
                };

                if (indiceEdicao === null) {
                    pessoas.push(pessoa); // Adiciona novo
                } else {
                    pessoas[indiceEdicao] = pessoa; // Salva edição
                    indiceEdicao = null;
                }

                atualizarLista();
                form.reset();
                });`}
                </pre>

                {/* ✅ Passo 3 */}
                <h3 className="text-xl font-semibold mt-6 mb-2">✅ 3) Mostrando os dados + botões de ação:</h3>
                <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
                {`function atualizarLista() {
                lista.innerHTML = "";

                pessoas.forEach((p, index) => {
                    const item = document.createElement("li");
                    item.textContent = \`👤 \${p.nome} | \${p.idade} anos | \${p.cidade} \`;

                    // Botão Editar
                    const btnEditar = document.createElement("button");
                    btnEditar.textContent = "✏️ Editar";
                    btnEditar.onclick = () => editarPessoa(index);

                    // Botão Excluir
                    const btnExcluir = document.createElement("button");
                    btnExcluir.textContent = "🗑 Excluir";
                    btnExcluir.onclick = () => excluirPessoa(index);

                    item.appendChild(btnEditar);
                    item.appendChild(btnExcluir);
                    lista.appendChild(item);
                });
                }`}
                </pre>

                {/* ✅ Passo 4 */}
                <h3 className="text-xl font-semibold mt-6 mb-2">✅ 4) Funções para editar e excluir:</h3>
                <pre className="bg-gray-900 text-white p-3 rounded-lg text-sm overflow-x-auto">
                {`function editarPessoa(index) {
                document.getElementById("nome").value = pessoas[index].nome;
                document.getElementById("idade").value = pessoas[index].idade;
                document.getElementById("cidade").value = pessoas[index].cidade;
                indiceEdicao = index; // Ativa modo de edição
                }

                function excluirPessoa(index) {
                pessoas.splice(index, 1); // Remove do array
                atualizarLista();
                }`}
                </pre>

                <p className="text-md mt-6">
                    ✅ <strong>Dica:</strong> Agora você consegue criar sistemas de cadastro simples com JavaScript, JSON e HTML.  
                    Você pode evoluir salvando no <code>localStorage</code> para não perder os dados ao recarregar a página!
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