<div align="center">
  <img src="https://user-images.githubusercontent.com/61476935/115933088-93e6e680-a464-11eb-99b6-d9ec509d03d1.png">
</div>
<br> 
<img src="https://img.shields.io/static/v1?label=TypeScript&message=Language&color=blue&style=for-the-badge&logo=TypeScript"/>

<h4>Documentação Oficial: https://www.typescriptlang.org/</h4>

O Typescript é um superSet Javascript criado pela Microsft, comumente utilizado em aplicações Web front-end(Angular, React, etc.), mas não abstante, pode ser utilizado no server-side através do Node.js.

Ele reune e eleva todas as funcionalidades do Javascript, dando a elas novas formas de uso, como a inclusão do paradigma da Programação Orientada a Objetos e seus pilares, definições de tipos menos flexíveis, declaração de classes, interfaces e mais.

Um arquivo .ts não é diretamente interpretado pelo navegador e sim compilado(ou traspilado) para um arquivo .js, este sim sendo interpretado, o que torna possível desenvolver com o Typescript em praticamente qualquer ambiente em que é o Javascript possa ser interpretado. Além disso, praticamente nada da sintaxe do ECMAScript se perde, sendo possível escreve trechos de Javascript em um arquivo .ts, já esses trechos seriam basicamente replicados no processo de transpilação.


<h1>Instalação</h1>


Para ter acesso a linguagem e suas funcionalidades é preciso determinar como esta será utilizada. O [Angular](https://github.com/VictorSantos12/Angular-2), por exemplo, deixa claro que o Typescript deve ser usado em todo o processo de criação e desenvolvimento, já que a linguagem é tida como padrão do framework. O Node, por sua vez, permite fazer uso do Typescript mediante sua instalação, logo, usar o Typescript passa a ser uma opção do desenvolvedor.

Essa documentação pretende demonstrar o uso do Typescript em ambos os ambientes, começando pelo server-side. Com isso, siga o passo a passo que será descrito adiante:


<h2>Node</h2>


O Node é sem dúvidas uma das ferramentas mais utilizadas por desenvolvedores Javascript, não só por ser prática e bastante poderosa em termos de desenvolvimento, mas porque o Node marca presença em boa parte dos frameworks e bibliotecas web que usam o ECMAScript. Sendo também uma alternativa bastante usual no desenvolviento client-side, é com ele que iremos entender e aplicar os conceitos do Typescript no lado do servidor. Para entender e instalar o Node, leia a documentação a seguir: 


[Node.js](https://github.com/VictorSantos12/Node.js)


Após a instalação, crie um novo projetos Node:


    npm init

<br>

    yarn init -y


<h2>Typescript</h2>


Tendo criado o projeto, defina o Typescript como dependência de desenvolvimento:


    npm install typescript --save-dev

<br>

    yarn add typescript --dev


Um detalhe importante a se ater, caso você esteja aprendendo o Typescript do zero, é que ele não é utilizado no ambiente de produção, já que em produção, o código já foi transpilado para Javascript. Essa é a justificativa para todas as dependências associadas ao TS serem instaladas apenas em desenvolvimento.

Agora que o Typescript faz parte do projeto, vamos inicializar um servidor localmente para que este sirva de base dos próximos passos:


    yarn add express


Com o express instalado, crie uma pasta src e nela um arquivo index.ts, que irá inicializar o servidor. Na pasta criada, faça as seguintes inserções:


    import express from 'express';

    const app = express();
    
    const PORT = 3333;
    
    app.listen(process.env.PORT || PORT, () => {
       console.log(`Servidor ativo na porta: ${PORT}`);
    });


Perceba que o método utilizado para acessar os recursos do express é bem diferente do usual, que seria:

    
    const express = require('express');


Isso se dá pois o Typescript possui uma feature para fazer o import direto das bibliotécas e packages instalados. Porém, esses e outros recursos serão mais bem abordados no futuro. O que deve receber atenção neste momento é o seguinte:


<h2>@types</h2>


Perceba que a const app recebe uma instância do express, permitibndo assim que o app use os recursos da lib, como a função listen(), por exemplo. Porém, se bem observado, ao criar uma instância do app, as features do express não são disponibilizadas. Além disso, o import que disponibiliza o express está acusando a falta de definição de tipos dá biblioteca, que pode ser observado pelas reticências que antecedem sua chamada. 

Antes da resolução do problema, é importante entender que ao instânciar uma lib, seus tipos, ou suas features, precisam ser disponibilizados para o ambiente que as utiliza, e é graças a disponibilidade desses tipos que a vscode, por exemplo, faz uma inferência automatica dos tipos ao utilizar o dot notation.

Agora, para resolver o problema, é necessário dar ao ambiente o acesso aos tipos do express. Para isso faremos a seguinte instalação:


    npm i --save-dev @types/node

<br>

    yarn add @types/express --dev


Algumas bibliotecas podem ter seus tipos atrelados a si mesmas, o que os torna disponíveis no momento da instalação. Outras, como o express, permite acessar esses tipos através um package a parte, que é basicamente o que foi instalado com o comando acima. 


<h1>Hello World</h1>


Para executar o popular Hello World, iremos criar uma rota, o definindo como response. Para isso, faça a seguinte inserção no arquivo index.ts:


    app.get('/', (req, res) => {
       return res.send('Hello World');
    });


Agora, para subir o servidor, precisamos ter em mente que o Node não entende o Typescript diretamente, como foi dito, ele precisa ser transpilado antes da execução. Caso você tente subir o servidor utilizando diretamente o Node, ele irá declarar que não é possível utilizar recrusos do Typescript, com o import:


    import express from 'express';
    ^^^^^^
    
    SyntaxError: Cannot use import statement outside a module
        at wrapSafe (internal/modules/cjs/loader.js:979:16)
        at Module._compile (internal/modules/cjs/loader.js:1027:27)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
        at Module.load (internal/modules/cjs/loader.js:928:32)
        at Function.Module._load (internal/modules/cjs/loader.js:769:14)
        at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
        at internal/main/run_main_module.js:17:47


Para executar corretamente a ação, iremos utilizar o tsc, ou Typescript Compiler, que é disponibilizado no momento da instalação da linguagem e que gera um arquivo .js contendo o equivalente ao código Typescript em Javascript. Com isso, use o comando a seguir para que o arquivo seja gerado:


    yarn tsc src/index.ts


Como resultado temos a criação de um arquivo index.js com as seguintes linhas de código:


    "use strict";
    exports.__esModule = true;
    var express_1 = require("express");
    var app = (0, express_1["default"])();
    var PORT = 3333;
    app.get('/', function (req, res) {
        return res.send('Hello World');
    });
    app.listen(process.env.PORT || PORT, () => {
       console.log(`Servidor ativo na porta: ${PORT}`);
    });


Perceba também que a execução gerou um erro no terminal:


    src/index.ts:1:8 - error TS1259: Module '"C:/Ads/Linguagens/Typescript/Docs/node_modules/@types/express/index"' can only be default-imported using the 'esModuleInterop' flag
    1 import express from 'express';
             ~~~~~~~
    
      node_modules/@types/express/index.d.ts:133:1
        133 export = e;
            ~~~~~~~~~~~
        This module is declared with using 'export =', and can only be used with a default import when using the 'esModuleInterop' flag.                                                                                   
    
    
    Found 1 error.


Este é causado porque o express possui uma exportação default que impede o arquivo de ser executado sem que o Typescript esteja configurado com a esModuleInterop, falha que pode ser percebida na linha 4 da file index.js. Isso é facilmente corrigido com uma simples alteração no import do express na file index.ts:


    import * as express from 'express';

    ...


Tendo corrigito o problema, torne a executar o tsc:


    yarn tsc src/index.ts


Como resultado temos o mesmo arquivo index.js, agora devidamente criado:


    "use strict";
    exports.__esModule = true;
    var express = require("express");
    var app = express();
    var PORT = 3333;
    app.get('/', function (req, res) {
        return res.send('Hello World');
    });
    app.listen(process.env.PORT || PORT, () => {
       console.log(`Servidor ativo na porta: ${PORT}`);
    });


Para enfim temos o nosso Hello World, execute através do node o arquivo index.js:


    node src/index.js


Se a mensagem de ativação definida estiver visível, vá até o navegador e acesse:

    
    localhost:3333


<h1>Configurando o Typescript</h1>


O Typescript possui uma série de configurações possíveis, essas sendo responsáveis por permitir a definição de várias formas de uso para a linguagem, o que se mostra bastante importante no processo de desenvolvimento. Use o comando a seguir para criar o arquivo de configurações da linguagem no projeto anterior:


    yarn tsc --init


Como resultado temos a criação de uma file tsconfig.json, com um objeto que declara algumas configurações pré setadas como a esModuleInterop, além de outras disponíveis:


    {
      "compilerOptions": {
        /* Visit https://aka.ms/tsconfig.json to read more about this file */
    
        /* Projects */
        // "incremental": true,                              /* Enable incremental compilation */
        // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
        // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */
        // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */
        // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
        // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */
    
        /* Language and Environment */
        "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
        // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
        // "jsx": "preserve",                                /* Specify what JSX code is generated. */
        // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
        // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
        // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h' */
        // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
        // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.` */
        // "reactNamespace": "",                             /* Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit. */
        // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
        // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
    
        /* Modules */
        "module": "commonjs",                                /* Specify what module code is generated. */
        // "rootDir": "./",                                  /* Specify the root folder within your source files. */
        // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given modulespecifier. */
        // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
        // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookuplocations. */
        // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules.*/
        // "typeRoots": [],                                  /* Specify multiple folders that act like `./node_modules/@types`. */
        // "types": [],                                      /* Specify type package names to be included without being referencedin a source file. */
        // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
        // "resolveJsonModule": true,                        /* Enable importing .json files */
        // "noResolve": true,                                /* Disallow `import`s, `require`s or `<reference>`s from expanding thenumber of files TypeScript should add to a project. */
    
        /* JavaScript Support */
        // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the`checkJS` option to get errors from these files. */
        // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
        // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript filesfrom `node_modules`. Only applicable with `allowJs`. */
    
        /* Emit */
        // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in yourproject. */
        // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
        // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
        // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
        // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file.If `declaration` is true, also designates a file that bundles all .d.ts output. */
        // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
        // "removeComments": true,                           /* Disable emitting comments. */
        // "noEmit": true,                                   /* Disable emitting files from a compilation. */
        // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
        // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types */
        // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
        // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
        // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
        // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
        // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
        // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
        // "newLine": "crlf",                                /* Set the newline character for emitting files. */
        // "stripInternal": true,                            /* Disable emitting declarations that have `@internal` in their JSDoc comments. */
        // "noEmitHelpers": true,                            /* Disable generating custom helper functions like `__extends` in compiled output. */
        // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
        // "preserveConstEnums": true,                       /* Disable erasing `const enum` declarations in generated code. */
        // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
        // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */
    
        /* Interop Constraints */
        // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
        // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
        "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
        // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
        "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
    
        /* Type Checking */
        "strict": true,                                      /* Enable all strict type-checking options. */
        // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied `any` type.. */
        // "strictNullChecks": true,                         /* When type checking, take into account `null` and `undefined`. */
        // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
        // "strictBindCallApply": true,                      /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */
        // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
        // "noImplicitThis": true,                           /* Enable error reporting when `this` is given the type `any`. */
        // "useUnknownInCatchVariables": true,               /* Type catch clause variables as 'unknown' instead of 'any'. */
        // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
        // "noUnusedLocals": true,                           /* Enable error reporting when a local variables aren't read. */
        // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read */
        // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
        // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
        // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
        // "noUncheckedIndexedAccess": true,                 /* Include 'undefined' in index signature results */
        // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
        // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type */
        // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
        // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */
    
        /* Completeness */
        // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
        "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
      }
    }


Perceba que após a criação do arquivo de configuração, o Typescript irá acusar alguns erros na index.ts file. Isso ocorre porque a configuração que permite a importação direta do express, impedida pelo erro da importação default, está agora disponível, logo a alteração no import não é mais necessária:


    import express from 'express';


Em seguida é preciso atualizar o arquivo index.js gerado para que ele tenha acesso as novas configurações. Para isso, use o comando a seguir:

    
    yarn tsc


O resultado da atualização conta com um novo require do express através do importDefault, dessa vez ocorrendo sem nenhum tipo de erro:


    "use strict";
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    const express_1 = __importDefault(require("express"));
    const app = (0, express_1.default)();
    const PORT = 3333;
    app.get('/', (req, res) => {
        return res.send('Hello World');
    });
    app.listen(process.env.PORT || PORT, () => {
        console.log(`Servidor ativo na porta: ${PORT}`);
    });


<h2>outDir</h2>


Neste momento temos dois arquivos index no projeto, o que não é um problema enquanto são dois arquivos apenas. Porém, futuramente, um acúmulo de arquivos tornaria o projeto inviável. O outDir é uma das várias configurações disponíveis para o Typescript, sendo esta responsável por define um deretório para armazenar o código Javascript gerado no processo de transpilação. Para ativar esse recurso, vá até a tsconfig.json file e remova o trecho que comenta o outDir, e em seguida defina entre as aspas o path que indique o nome do diretório que irá conter os arquivos gerados:

    
    "outDir": "./dist"


Após definir o path, delete o arquivo index.js criado na src folder e torne a fazer o run do comando a seguir:


    yarn tsc


Em seguida, a pasta contendo o arquivo index.js será criada, separando de forma correta os arquivos .ts e o código transpilado.


<h2>ts-node-dev</h2>


Para completar o ambiente de desenvolvimento, precisamos otimizar os processos. Fica evidente o quão trabalhoso seria ter que executar um comando no terminal sempre que houvesse uma alteração. O node, por exemplo, utiliza de ferramentas como o nodemon para compilar o código sem necessariamente ter que derrubar o servidor em criação, o que é bastante útil. Porém, como já foi dito, o Node não entende a sintaxe do Typescript diretamente, logo, o que deve ser otimizado é o processo de transpilação para Javascript, e é neste ponto que o [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) se aplica. Para para obter a ferramenta, use o comando a seguir:


    npm i ts-node-dev --save-dev

<br>

    yarn add ts-node-dev --dev


Tendo o concluído a instalação, iremos criar um scripts para automatizar o processo de transpilação. Na package.json file, faça a seguinte inserção:


    "scripts": {
      "dev:server": "ts-node-dev --respawn --transpile-only src/index.ts"
    },


As flags adicionadas ao script dev:server, além de definirem o respawn dos arquivos atualizados, definem a não verificação de erros no arquivo declarado, já que o próprio vscode mostra onde há erros, e também porque é um processo bastante custoso para ser feito a cada atualização. Em seguida, execute o script:

    
    yarn dev:server


O resultado esperado é a ativação do servidor e a mensagem de confirmação no terminal. Além disso, caso a mensagem definida como response ao request da rota inicial for alterada, a mudança deve ser notada automaticamente no localhost:PORT.


<h1>Destrinchando o Typescript</h1>


O TypeScript mantém uma relação incomum com o JavaScript. O TypeScript oferece todos os recursos do JavaScript e uma camada adicional sobre eles: o sistema de tipos do TypeScript.

Por exemplo, o Javascript fornece tipos primitivos como string e number, mas não verifica se você os atribuiu de forma consistente, o Typescript sim. E um dos principais benefícios desse recurso é a sua capacidade de identificar comportamentos inesperados no código, diminuindo a chance de bugs.


<h2>Type Annotations</h2>


A relação dos valores com as entidades as quais eles são atribuídos é direta no Typescript, já que a linguagem reforça que os tipos associados a variáveis, constantes, funções, valores armazenados em arrays e atributos em classes, devem ser levados em conta no momento de declaração, apesar de ter herdado a inferência de tipo do Javascript. Para definir os tipos em Typescript usamos o Type Annotations:


<h2>Primitives</h2>


O Javascript possui os já conhecidos primitivos: string, number e boolean, todos presentes no Typescript, recebendo as mesmas definições de tipo e identificadores. Quando uma variável é declarada, podendo ser uma const, var ou let, um valor pré definido pode ser atribuída a ela. Observe:


<h2>String</h2>


Representação atribuída a dados textuais, definidos entre aspas('' ou ""). Para declarar uma string em Typescript, usamos o identificador <b>string</b> após o identificador da variável:


    var example: string = '';


Caso uma variável receba um valor de tipo distinto do atribuído a si, este será rejeitado, o que irá acarretar em um erro de sintaxe: 

    var example: string = '';
    examples = 0;

<br>

    Type 'number' is not assignable to type 'string'.ts(2322)
    var example: string


Este erro se aplica a qualquer tipagem não equivalente a declarada na unidade em operação.


<h2>Number</h2>


Representação de uma ou mais unidades numéricas que recebe a designação <b>infinity</b>, podendo ser negativa ou positivamente. Para declarar um number em Typescript, usamos o identificador <b>number</b> após o identificador da variável:


    var example: number = 0;


<h2>Boolean</h2>


Um boolean representa uma unidade lógica com apenas dois valores, sendo eles true e false. Para declarar um boolean em Typescript usamos o identificador <b>boolean</b> após o identificador da variável:

     
     var example: boolean = false;


Além dos tipos primitivos, o Typescript também disponibiliza novos modelos de tipagem, como:


<h2>Any</h2> 


O tipo any é declarado quando não queremos inferir um tipo específico a uma unidade representativa, evitando erros de typechecking caso valores distintos sejam atribuídos, porcessados ou tratados no objeto tipado. Exemplos:


    let example: any = { x: 0 };


Graças ao any type, nenhuma das declarações a seguir serão tratadas como erros de typechecking:


    example.foo();
    example();
    example.bar = 100;
    example = "hello";
    const n: number = example;


<h1>Arrays</h1>


Para definirmos o tipo associado a um array como [1, 2, 3], pode-se usar a sintaxe number[]; caso seja um array de strings como ['A', 'B', 'C'], usamos o string[]; assim por diante. Exemplo:


    var example: boolean[] = [true, false, true, false];


 É possível ter exatamente o mesmo efeito declarando a tipagem da seguinte forma:


    var example: Array<boolean> = [true, false, true, false];


É importante ter em mente que a inicialização valorada desses arrays não é obrigatória, podendo ser declarados da seguinte forma:


    var example: boolean[] = [];


Um array declarado como any, pode receber qualquer valor:


    let example: any[] = [];
    
    example = ['string', 2, false];


<h1>Funções</h1>


As funções são os meios mais práticos de controle de fluxo de dados no Javascript, o que se mantém no Typescript. Nele funções podem ter tipos pré definidos tanto nos valores de entrada quanto nos valores de saída:


<h2>Parameter Type Annotations</h2>


Para definir quais os tipos de dados os parâmetros de uma função aceita, é possível declará-los na própria função, sendo definidos após o identificador do parâmetro:


    function example(parameter: string) {
      console.log(parameter);
    }


Quando um parâmetro é declarado com o Type Annotation, os argumentos lançados à função que o contém são verificados:


    examples(true);

    Argument of type 'boolean' is not assignable to parameter of type 'string'.ts(2345)


Caso o parâmetro de uma função seja declarado como type any, qualquer valor passado será aceito:


    function example(parameter: any) {
       console.log(parameter);
    }
    
    example('string');
    example(2);
    example(false);


<h2>Return Type Annotations</h2>


Também é possível definir o tipo retornado por uma função, sendo este declarado após sua lista de parâmetros:


    function example(): number {
       return 20;
    }


Um função com um retorno any declarado, pode retornar qualquer tipo de valor, porém, não atribuir um tipo como retorno teria o mesmo efeito, já que o Typescript infere a tipagem baseando-se no retorno reclarado na própria função.


<h1>Object Type</h1>


Sepadado dos primitives, um dos tipos frequentemente utilizados é o object type. Sendo basicamente qualquer valor que contenha propriedades. Para definir um object type no Typescript, basta declaramos suas propriedades e tipos assiciados:


    let example: {
       
        propertyOne: string,
        propertyTwo: number,
        propertyThree: boolean,
    
    };


Um object type também pode ser definido como o tipo associado ao parãmetro de uma função:


    function objectParametre(obj: { one: string, two: number, three: boolean}) {
        
        console.log(obj.one, obj.two, obj.three);
    }
    
    objectParametre({ one: 'string', two: 2, three: false });


<h2>Optional Properties</h2>


Object types tabém podem especificar que algumas ou todas as suas propriedades são opcionais. Para declarar uma propriedade como opcional usa-se o marcador <i>?</i> após seu identificador:


    function objectParametre(obj: { one: string, two: number, three?: boolean}) {
          
        console.log(obj.one, obj.two, obj.three);
    }
    
    // Ambos OK

    objectParametre({ one: 'string', two: 2 });
    objectParametre({ one: 'string', two: 2, three: false });


<h1>Union Types</h1>


O sistema de tipagem do Typescript permite criar novos tipos a partir de tipos existentes usando uma grande variedade de operadores, um deles é o <i>union type</i>. Um <i>union</i> type é um tipo formado por dois ou mais tipos, representando valores que podem ser basicamente de qualquer tipo, estes chamado de union's <i>members</i>. Exemple:


    function example(id: string | number) {
      console.log(id);
    }

    // OK
    example('101');

    // OK
    example(202);


Perceba que um union type é relativamente parecido com a declaração de un any type, porém, os tipos aceitos ainda precisam ser declarados. Caso um tipo não declarado como union member seja atribuído à unidade tipada, um erro de sintaxe será lançado:


    function example(id: string | number) {
      console.log(id);
    }

    example(true);

<br>

    Argument of type 'boolean' is not assignable to parameter of type 'string | number'.


<h2>Trabalhando com Union Types</h2>


O Typescript só irá permitir realizar ações válidas para cada membro da union. Por exemplo, caso você tenha a seguinte union <b>string | number</b>, não será possível utilizar métodos que são restritos a <b>string</b>, caso contrário, um erro de sintaxe será lançado:


    function example(id: string | number) {
      console.log(id.toUpperCase());
    }

<br>

    Property 'toUpperCase' does not exist on type 'string | number'.
    Property 'toUpperCase' does not exist on type 'number'.


<h1>Type Aliases</h1>


O Typescript disponibiliza formas distintas de declarar tipos, um objetos, por exemplo, é um tipo customizável de tipagem que pode ser feita de formas distintas. Porém, até o momento abordamos a tipagem a partir de objetos de forma direta, ou seja, apenas declarando seus atributos. Uma outra forma de ter esse resultado é utilizando o Type Alianse, que possui a vantagem de permitir que um objeto criado seja utilizado mais de uma vez.

Na prática ele é basicamente a associação do identificador type e o nome do objeto:


    type Example = {
        
      propertyOne: string,
      propertyTwo: number,
      propertyThree: boolean,
     
    }    

     function aliasUsage(parameter: Example) {
         console.log(parameter.propertyOne, parameter.propertyTwo, parameter.propertyThree,);
     }
     
     aliasUsage({ propertyOne: 'string', propertyTwo: 2, propertyThree: false });


É possível nomear basicamente qualquer tipo com um type alias, não apenas objetos. Por exemplo, é possível nomear um union type com um type alias:


    type example = string | number;


<h1>Interfaces</h1>


Uma intarface, assim como um Alias, é uma forma de nomear um object type. E na prática, é basicamente a associação entre o identificador <i>interface</i> e o nome do objeto:


    interface Example = {
            
      propertyOne: string,
      propertyTwo: number,
      propertyThree: boolean,
     
    } 

    function interfaceUsage(parameter: Example) {
        console.log(parameter.propertyOne, parameter.propertyTwo, parameter.propertyThree,);
    }
    
    interfaceUsage({ propertyOne: 'string', propertyTwo: 2, propertyThree: false });


Da mesma forma que usamos type alias anteriormente, o exemplo acima funciona como se tivéssemos utilizado um object type anônimo. O Typescript se preocupa apenas com a estrutura do valor que será enviado na função interfaceUsage, apenas quer que as propriedade esperadas sejam fornecidas. É essa característica que define o Typescript como um sistema de tipos estruturalmente tipado.


<h2>Type Aliases VS Interfaces</h2>


Como já foi dito, Type Aliases e Interfaces são semelhantes, e na maior parte das vezes é possível escolher livremente qual deles utilizar. Quase todas as features de uma interface estão disponíveis nos Aliases, a principal distinção é que um Alias não pode ser reaberto para adicionarmos novas propiedades, já uma interface é sempre extensível.


    Extendendo uma Interface                      Extensão de um Type Alias por meio de interseções


    interface Animal {                            type Animal = {
      name: string                                  name: string
    }                                             }
 
    interface Bear extends Animal {               type Bear = Animal & { 
      honey: boolean                                honey: boolean 
    }                                             }

    const bear = getBear()                        const bear = getBear() 
    bear.name                                     bear.name
    bear.honey                                    bear.honey

<br>

    Adicionando novos campos a uma interface      Um Type Alias não pode ser alterado após ser criado


    interface Window {                            type Window {
      title: string                                 title: string
    }                                             }

    interface Window {                            type Window {
      ts: TypeScriptAPI                             ts: TypeScriptAPI
    }                                             }
    
    const src = 'const a = "Hello World"';        // Error: Duplicate identifier 'Window'.
    window.ts.transpileModule(src, {});
        