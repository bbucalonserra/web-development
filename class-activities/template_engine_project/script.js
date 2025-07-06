/*
SUPER IMPORTANTE SOBRE RESPOSTAS DE HTTP!
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)
*/


class SimpleTemplateEngine {

    // Dentro do constructor, vai apenas o que é necessário para inicializar o objeto. Configurar valores iniciais
    // Quando for chamar a classe, precisa ser let p1 = new SimplesTemplateEngine (URL_AQUI!!!);
    // Depois disso, pode-se chamar o resto porque vai depender da URL
    // O this.template_url vai pegar a URL, que no caso é o template.html e vai carregar via HTTP get o conteúdo dela, via fetch
    // O conteúdo do html inteiro vai estar dentro do this.template
    constructor(template_url) {
        this.template_url = template_url;
    }

    loadTemplate() {
        // Returna uma promise (algo que nao foi resolvido mas ainda será)
        // É como se o fetch esperasse o template.url, enquanto ele nao chega é só uma promise
        // Ele sera resolvido com um response
        // Imediatamente retorna um Promise<pending>
        // Precisa de um código pra lidar com o promise!
        return fetch(this.template_url)

            /* 
            Arrow function. É igual a fazer:
            function (response) {
                return response.text()
            }
            Ela é anonima, entao se nao fosse pelo then, eu precisaria atribui-la a uma variavel, com const, let, etc. O then faz com que a gente nao precise disso porque 
            Ele espera uma função dentro. O then só espera utilizar a função uma vez dentro dele.
            Também retorna uma promise.
            */
            .then(response => response.text())

            /*
            Arrow function. É igual a fazer:
            function (text) {
                return this.template = text
            }
             Ela é anonima, entao se nao fosse pelo then, eu precisaria atribui-la a uma variavel, com const, let, etc. O then faz com que a gente nao precise disso porque 
            Ele espera uma função dentro. O then só espera utilizar a função uma vez dentro dele.
            Também retorna uma promise. Isso é "decorado" porque a API do fetch, o metodo response retorna uma promise mesmo. 
            CADA THEN ESPERA UMA PROMISE NAO RESOLVIDA.
            */
            .then(text => {
                this.template = text;
            })

            /*
            REGRA DO THEN:
            Ele sempre vai retornar uma promise se voce usar o "return"
            */
    }

    renderTemplate(tag_id, data) {
        // Aqui, estamos pegando o id do HTML! Dentro de content. O id é o content
        const tag = document.getElementById(tag_id);

        // Creating output variable
        let output = this.template;

        // Swapping o title pelo data.title e data.content.
        // Aqui, como estamos usando o replace e o output é o this.template (que é um arquivo html com varias cosias), mesmo
        // dando assign duas vezes no output, ele substitui coisas diferentes, "daria" pra fazer tudo no mesmo lugar porque estamos
        // // alterando partes diferentes do html, então ok.

        // output = output.replace("{{title}}", data.title);
        // output = output.replace("{{content}}", data.content);
        // output = output.replace("{{subtitle}}", data.subtitle);

        // --------------- exemplo 2 ---------------
        // Aqui, ele vai pegar os as keys do objeto (da array key-value)
        // E para cada (for each) chave, vai criar uma variavel special tag, contendo 
        // No "{{" + key + "}}", voce está literalmente criando uma special tag, que vai sempre conter {{ + key (cada uma porque é como se fosse um loop) + }}

        // Object.keys(data).forEach(key => {
        //     let specialTag = "{{" + key + "}}";
        //     output = output.replace(specialTag, data[key]);
        // })

        // --------------- exemplo 3 ---------------
        // Agora, usando a regular expression
        // Tudo que está entre / / é uma expressão regular
        // "g" é de global, regex vai continuar procurando todas as ocorrências no texto, e não só a primeira
        // "\w" é word character, representa  um "caractere de palavra", e casa com qualquer caractere alfanumérico e underscore (_). Logo: ç, é, !, *, espaço, nao entra no /w
        // O oposto de /w é /W, que é não word character. Logo  tudo exceto letras, números e _.
        // POR ISSO QUE A GENTE NORMALMENTE SO PODE USAR LETRA NUMERO OU '_' PRA NOMEAR A COISAS!
        // O "+" é 1 ou mais ocorrências do que está antes dele
        // Logo, \w+ quer dizer: "um ou mais caracteres que sejam letras, números ou _".
        // Os "()" criam um grupo de captura,  o conteúdo que bater com essa parte (\w+) será "guardado" e você pode acessar depois

        // output = this.template.replace(/{{(\w+)}}/g, (match, dataField) => {
        //     return data[dataField]
                
        // // Adicione o HTML nela
        // tag.innerHTML = output;
        // })

 
        // --------------- exemplo 4 --------------- DEAL WITH ANY EACH LOOPS
        // Part one regex: "\w" é word character. O "+" é 1 ou mais ocorrências do que está antes dele. Logo, \w+ quer dizer: "um ou mais caracteres que sejam letras, números ou _".
        // O oposto de /w é /W, que é não word character. Logo  tudo exceto letras, números e _.
        // o "g" no final é pra procurar todas as ocorrencias, é de 'global'. Tem também "i" (ignore case), "m" (multiline), "s" (dotAll), "u" (unicode) e "y" (sticky)
        // POR ISSO QUE A GENTE NORMALMENTE SO PODE USAR LETRA NUMERO OU '_' PRA NOMEAR A COISAS!
        // Part two regex: [\s\S]*? -> qualquer coisa que seja um espaço em branco ou não seja um espaço em branco" Em outras palavras: qualquer caractere possível. O * é zero ou mais vezes. Whitespace
        // O s é qualquer espaço e S é a negação (maiusculo), ou seja qualquer coisa q n tem espaço
        // É por exemplo tab (\n) e coisas assim. O "?" significa pode aparecer uma vez ou nenhuma vez.

        // DEAL WITH ANY EACH LOOPS
        output = output.replace(/{{#each (\w+)}}([\s\S]*?){{\/each}}/g, (match, arrayName, templateFragment) => {
            const listOfThings = data[arrayName];

            if(!Array.isArray(listOfThings)) { 
                return '';
            }
            return listOfThings.map(item => this.replaceVariablesInFragment(templateFragment, item)).join('');
        });

        // HANDLE WITH IF ELSE CONDITIONS
        output = output.replace(/{{#if (\w+)}} ([\s\S]*?){{else}}([\s\S]*?){{\/if}}/g, (match, condition, ifContent, elseContent) => {
            return data[condition] ? ifContent : elseContent;
        });

        // HANDLE WITH CONDITIONS WITHOUT ELSE
        output = output.replace(/{{#if (\w+)}}([\s\S]*?){{\/if}}/g, (match, condition, ifContent, elseContent) => {
            return data[condition] ? ifContent : '';
        });
        

        // DEAL WITH ANY SIMPLE VARIABLES
        output = output.replace(/{{(\w+)}}/g, (match, dataField) => {
            return data[dataField]
        });

        tag.innerHTML = output;
    }

    replaceVariablesInFragment(templateFragment, data) {
        return templateFragment.replace(/{{(\w+)}}/g, (match, dataKey) => {
            return data[dataKey];
        })
    }
}

// ------------------------ CREATING VARIABLES ------------------------
const tEngine = new SimpleTemplateEngine("template.html");

// Criando uma variavel com os dados que queremos inserir no renderTemplate
const data = {
    title: "Page title",
    content: "Page content",
    subtitle: "Page subtitle",
    loggedIn: true,
    username: "nobody",
    subcontent: "Page subcontent",
    items: [
        { title: 'item 1', description: 'desc 1' },
        { title: 'item 2', description: 'desc 2' }
    ]
};

// Aqui é uma função vazia, por isso "()"
/*
É igual escrever:
function () {
    console.log("Template Loaded:", tEngine.template);
}
*/


// ------------------------ CALLING FUNCTIONS ------------------------
tEngine.loadTemplate()
    .then(
        () => {
            // ID content colocado aqui
            tEngine.renderTemplate('content', data);
        }
    );