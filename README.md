<div align="center">
  <img src="https://user-images.githubusercontent.com/61476935/115933088-93e6e680-a464-11eb-99b6-d9ec509d03d1.png">
</div>
<br> 
<img src="https://img.shields.io/static/v1?label=TypeScript&message=Language&color=blue&style=for-the-badge&logo=TypeScript"/>

<h4>Documentação Oficial: https://www.typescriptlang.org/</h4>

O Typescript é um superSet Javascript criado pela Microsft, comumente utilizado em aplicações Web front-end, mas abstante, pode
ser utilizado no server-side através do Node.js.

O Typescript reune e eleva todas as funcionalidades do Javascript, dando a elas novas funcionalidades, como a inclusão do paradigma da Programação Orienta a Objetos e seus pilares, definições de tipos menos flexíveis, declaração de classes, interfaces e mais.

Um arquivo .ts não é diretamente interpretado pelo navegador e sim compilado(ou traspilado) para um arquivo .js, este sim sendo interpretado, o que torna possível desenvolver com o Typescript praticamente em qualquer ambiente em que é possível interpretar o Javascript. Além disso, praticamente nada da sintaxe do Javascript se perde quando se escreve código em Typescript, o que permite escrever trechos de Javascript em um arquivo .ts.


<h1>Hello World</h1>


Antes de escrever o popular Hello World, é preciso obter o Typescript e instalá-lo, o que pode ser feito da seguinte forma:

Primeiramente garanta que o Node.js esteja instalado na sua máquina, pois é através dele que iremos instalar o Typescript. O link a seguir indica a forma correta de instalar a ferramenta e explica um pouco mais sobre a mesma: [Node.js](https://github.com/VictorSantos12/Node.js).

Tendo o Node instalado, acesse o terminal de comando e, usando o npm, faça o run do comando a seguir:

    npm install -g typescript

Com isso, o o Typescript foi globalmente instalado na sua máquica, e já comandos tsc já podem ser interpretados no terminal:

    tsc

O comando tsc dá acesso ao The TypeScript Compiler e a uma lista de comandos comuns como:

    COMMON COMMANDS
    
      tsc
      Compiles the current project (tsconfig.json in the working directory.)
    
      tsc app.ts util.ts
      Ignoring tsconfig.json, compiles the specified files with default compiler options.
    
      tsc -b
      Build a composite project in the working directory.
    
      tsc --init
      Creates a tsconfig.json with the recommended settings in the working directory.
    
      tsc -p ./path/to/tsconfig.json
      Compiles the TypeScript project located at the specified path.
    
      tsc --help --all
      An expanded version of this information, showing all possible compiler options
    
      tsc --noEmit
      tsc --target esnext
      Compiles the current project, with additional settings.

Além disso temos acesso a COMMAND LINE FLRAGS e ao COMPILER OPTIONS.