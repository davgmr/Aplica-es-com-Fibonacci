# Projetos de Lógica em JavaScript

Este repositório contém diversas soluções para problemas de lógica implementados em JavaScript. Cada um dos arquivos no repositório resolve um problema específico relacionado à manipulação de sequências, strings e cálculos.

## **Conteúdo**

- **`verificarFibonacci.js`**: Verifica se um número pertence à sequência de Fibonacci.
- **`contarLetraA.js`**: Conta quantas vezes a letra 'a' aparece em uma string, indiferente se maiúscula ou minúscula.
- **`valorFinalSoma.js`**: Calcula o valor final da variável `SOMA` após processar um loop que incrementa um valor.
- **`sequenciasLogicas.js`**: Completa sequências numéricas de diferentes padrões (aritmética, geométrica, Fibonacci, quadrática, etc.).
- **`interruptorLampada.js`**: Simula um problema onde você deve identificar qual interruptor controla qual lâmpada em três salas diferentes.

---

## **1. Verificar se um número pertence à sequência de Fibonacci**

### **Arquivo**: `verificarFibonacci.js`

### **Descrição**:
Este programa verifica se um número informado pertence à sequência de Fibonacci. A sequência de Fibonacci começa com 0 e 1, e cada número subsequente é a soma dos dois números anteriores.

### **Como usar**:
1. Defina o número a ser verificado diretamente no código.
2. Execute o código.

### **Exemplo de Saída**:
```
O número 21 pertence à sequência de Fibonacci.
```

---

## **2. Contar a ocorrência da letra 'a' em uma string**

### **Arquivo**: `contarLetraA.js`

### **Descrição**:
Este programa verifica quantas vezes a letra 'a' (maiúscula ou minúscula) aparece em uma string. O programa pode ser facilmente configurado para trabalhar com qualquer string.

### **Como usar**:
1. Defina a string que deseja analisar diretamente no código.
2. Execute o código.

### **Exemplo de Saída**:
```
A letra 'a' aparece 6 vezes na string.
```

---

## **3. Valor final da variável `SOMA`**

### **Arquivo**: `valorFinalSoma.js`

### **Descrição**:
Este programa calcula o valor final da variável `SOMA` após processar um loop onde `K` é incrementado e somado a `SOMA` enquanto `K` for menor que um determinado valor `INDICE`.

### **Exemplo de Código**:
```javascript
let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);
```

### **Exemplo de Saída**:
```
78
```

---

## **4. Completar as sequências numéricas**

### **Arquivo**: `sequenciasLogicas.js`

### **Descrição**:
Este programa identifica e completa sequências numéricas comuns, como:

- Progressão Aritmética
- Progressão Geométrica
- Sequências Quadráticas
- Sequências de Fibonacci

### **Como usar**:
1. Insira a sequência que deseja completar diretamente no código.
2. O programa identificará o padrão e exibirá o próximo elemento.

### **Exemplo de Saída**:
```
Próximo elemento da sequência A: 9
Próximo elemento da sequência B: 128
Próximo elemento da sequência C: 49
Próximo elemento da sequência D: 100
Próximo elemento da sequência E: 13
Próximo elemento da sequência F: 200
```

---

## **5. Identificar qual interruptor controla cada lâmpada**

### **Arquivo**: `interruptorLampada.js`

### **Descrição**:
Neste programa, você tem três interruptores e três lâmpadas em salas diferentes. O objetivo é identificar qual interruptor controla qual lâmpada. O programa simula as idas às salas das lâmpadas para fazer a identificação.

### **Como usar**:
1. O estado inicial das lâmpadas (ligadas/desligadas, quentes/frias) é simulado no código.
2. O programa exibe qual interruptor controla cada lâmpada baseado nas ações de ligar e desligar.

### **Exemplo de Saída**:
```
Primeira visita às salas das lâmpadas:
Lâmpada 1 está apagada mas quente. Controlada pelo Interruptor 1.
Lâmpada 2 está acesa. Controlada pelo Interruptor 2.
Lâmpada 3 está apagada e fria. Controlada pelo Interruptor 3.
```

---

## **Como Executar os Arquivos**

Cada arquivo JavaScript pode ser executado diretamente com o Node.js. Siga as etapas abaixo para rodar qualquer um dos arquivos no seu ambiente:

1. **Certifique-se de ter o Node.js instalado**. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
2. **Navegue até o diretório do projeto** onde os arquivos estão localizados:

   ```bash
   cd /caminho/para/seu/diretório/projetosLogica
   ```

3. **Execute qualquer arquivo** usando o comando `node` seguido do nome do arquivo:

   ```bash
   node verificarFibonacci.js
   ```
   
**Autor**: Davi Guimarães

**Contato**:
- (98)98142-0180

---
