# Partes do código que poderiam ser melhoradas
## Muitos métodos em componentes
A primeira coisa que notei foi que alguns componentes ficaram com muitos métodos, alguns como a TabelaResponsiva, passaram a ter dois propósitos: Mostrar o top 100 e mostrar as URLs do usuário. Isso não é necessariamente ruim, o problema é que a lógica está toda dentro dela, já que inicialmente eu a criei com o único propósito de listar o top 100. Uma possível solução pra isso, seria terceirizar a lógica dela para algum componente pai: componente top-100 e componente URLs usuário, por exemplo. Assim a TabelaResponsiva seguiria seu propósito único: ser uma tabela, sem lógica em si.

Os componentes de login e de CriarLink também sofreram desse mesmo mal, eles tem vários métodos dentro deles, alguns como o método estaVazio, que checa se um array de variável com strings, está ou não vazio, são recriados em vários componentes, talvez eu pudesse criar uma pequena biblioteca com alguns métodos-chave, isso certamente resolveria, ao menos em partes, o problema da centralização excessiva de métodos.

## Testes
Outro ponto que certamente poderia ser melhorado são os testes, justamente pela minha inexperiência com eles. Creio que estejam longos de mais, alguns redundantes de mais, até, talvez, complicados de mais. Bom, são diversos aspectos deles que precisam ser melhorados, motivo pelo qual pretendo começar a fazer testes em meus projetos, assim eu devo conseguir melhorar a criação deles.

## Reajuste de algumas modificações do Prettier
Esse é um ponto menor, mas eu achei que algumas modificações que o Prettier fez no meu código, ficaram horrível! Com mais tempo, iria reajustá-las.
