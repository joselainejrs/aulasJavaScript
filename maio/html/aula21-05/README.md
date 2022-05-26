
## O que é JavaScript?

```
  JavaScript é uma linguagem de programação que permite ser implementado itens complexos em páginas web. 
  Permite a você criar conteúdo que se atualiza dinamicamente,  controlar múltimídias, imagens animadas, etc...
```

#### O que aprendemos nessa aula?

  - alert:

        O alert é uma das mais simples caixas de diálogo, com uma aparência simples e intuitiva elas são muito usadas 
        em validações de formulários e/ou bloqueio de ações do browser. Sua principal função é mostrar ao usuário uma 
        mensagem e um botão de confirmação de que o usuário tenha visto a mensagem;

  - prompt:

        O Prompt de Comando (cmd.exe) ajuda a escrever e executar comandos MS-DOS (Microsoft Disk Operating System) 
        e outros tipos de comandos no computador.

      
  ##### Variaveis

  Na programação, uma variável é um objeto (uma posição, frequentemente localizada na memória) capaz de reter e representar
  um valor ou expressão. Enquanto as variáveis só "existem" em tempo de execução, elas são associadas a "nomes", chamados
  identificadores, durante o tempo de desenvolvimento.

  - var:

        O var é uma variavél global e pode ser usada em mas de uma página;

        Ex: 
          - var name;
          - var name, sobrenome;
          - var name = "Joselaine";
              Forma que pode ser escrever o var.         

  - let:

        O let é uma variavél local e pode ser somante na mesma página. Pode ser declarada antes ou dentro de um bloco;

        Ex:
          let(a = 6);
          if(){
              let a = 6
            }
              Forma que pode ser escrever o let. 

  - const:

        O const é uma variavél possuem escopo de bloco, também conhecida como tipo array ou matriz.

        Ex:
        - const number = 42;
        - const nome[];

    ##### Operadores

    (Matemática em JavaScript). Operadores podem ser usados para manipular números e fazer calculos.
  
### Atividade da Aula

  Exercicio 1: Realizar uma calculadora simples. Contendo 3 campos de input que o usuario possa colocar os numero e a
  operação e que ao clicar no botão, possa aparecer o alert com o calculo
  
 Resultado:
 
 HTNL:
 
 
  ![image](https://user-images.githubusercontent.com/55799037/170565563-d52b27df-921b-4cb7-8274-4c9c936090a2.png)


Explicação:

- Para que o numero seja interpletado, assim que o usuário incluir um valor no campo do input, precisariamos pegar o valor que vem como String e retornar um inteiro na base especificada, para isso usei o parseInt().

```
   EX: parseInt(tela.num1.value)
```

- Para que os operadores sejam interpletados, assim que o usuário incluir um operador no campo do input, precisariamos pegar o valor que vem como String e tratar ele. A melhor forma de trata-lo é incluir um if e else. Pois eu precisava dizer para o computador como ele precisa execultar.

```
   EX:  
      if (calculo == "+"){
         alert(parseInt(tela.num1.value) + parseInt(tela.num2.value));
      }
```
