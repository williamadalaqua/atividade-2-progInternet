import express from 'express';

const host = '0.0.0.0';
const porta = 4050;

const app = express();

var listaImportacao = [];

app.use(express.urlencoded({extended: true}));

app.get("/", (requisicao, resposta) => {
    resposta.redirect("/importacao");
});

app.get("/importacao", (requisicao, resposta) => {
    resposta.write(`
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <title>Formulario de reserva para importacao</title>

                <link 
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" 
                    rel="stylesheet"
                >
            </head>

            <body>
                <div class="container mt-5">

                    <form method="POST" action="/importacao" class="row g-3 border p-3 align-items-center">
                        <legend>
                            <h3>Cadastro de importação de veiculos automotores</h3>
                        </legend>

                        <div class="col-md-6">
                            <label for="nome" class="form-label">Nome Completo</label>
                            <input type="text" class="form-control" id="nome" name="nome">
                        </div>

                        <div class="col-md-6">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" name="email">
                        </div>

                        <div class="col-12">
                            <label for="endereço" class="form-label">Endereço</label>
                            <input type="text" class="form-control" id="endereco" name="endereco" placeholder="Rua Presidente Vargas, 123">
                        </div>

                        <div class="col-12">
                            <label for="complemento" class="form-label">Complemento</label>
                            <input type="text" class="form-control" id="complemento" name="complemento" placeholder="Apartmento, casa, condomínio">
                        </div>

                        <div class="col-md-6">
                            <label class="form-label">Cidade</label>
                            <input type="text" id="cidade" name="cidade" class="form-control" required>
                        </div>

                        <div class="col-md-4">
                            <label for="estado" class="form-label">Estado</label>
                            <select name="estado" class="form-select" required>
                                <option selected>Selecione...</option>
                                <option>SP</option>
                                <option>PR</option>
                                <option>MS</option>
                            </select>
                        </div>

                        <div class="col-md-2">
                            <label for="CEP" class="form-label">CEP</label>
                            <input type="text" class="form-control" id="CEP" name="CEP">
                        </div>

                         <div class="col-md-3">
                            <label class="form-label">Marca do Veículo</label>
                            <select name="marca" class="form-select" required>
                                <option value="">Selecione...</option>
                                <option>Audi</option>
                                <option>BMW</option>
                                <option>Jaguar</option>
                                <option>Toyota</option>
                                <option>Honda</option>
                            </select>
                        </div>

                        <div class="col-md-3">
                             <label class="form-label">Modelo</label>
                            <select name="modelo" class="form-select" required>
                                <option value="Sport">Sport</option>
                                <option value="SUV">SUV</option>
                                <option value="Utilitario">Utilitário</option>
                                <option value="Carga">Carga</option>
                                
                            </select>
                        </div>

                        <div class="col-md-3">
                            <label for="range4" class="form-label">Ano de fabricação</label>
                                <input type="range" name="ano" min="2010" max="2026" value="2018" class="form-range" id="range4">
                                <output for="range4" id="rangeValue" name="rangeValue" aria-hidden="true"></output>

                                <script>
                                
                                const rangeInput = document.getElementById('range4');
                                const rangeOutput = document.getElementById('rangeValue');

                                
                                rangeOutput.textContent = rangeInput.value;

                                rangeInput.addEventListener('input', function() {
                                    rangeOutput.textContent = this.value;
                                });
                                </script>
                        </div>

                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" name="gridCheck">
                                <label class="form-check-label" for="gridCheck">
                                    Salvar
                                </label>
                            </div>
                        </div>

                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">
                                CADASTRAR
                            </button>
                        </div>

                    </form>

                </div>

            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
        </html>
    `);

    resposta.end();
});

app.post("/importacao", (requisicao, resposta) => {
    

    
    const nome = requisicao.body.nome; 
    const email = requisicao.body.email;
    const endereco = requisicao.body.endereco;
    const cidade = requisicao.body.cidade; 
    const complemento = requisicao.body.complemento;
    const estado = requisicao.body.estado;
    const CEP = requisicao.body.CEP;
    const marca = requisicao.body.marca;
    const modelo = requisicao.body.modelo;
    const ano = requisicao.body.ano;

    listaimportacao.push(
        {
            "nome": nome,
            "email": email,
            "endereco":endereco,
            "cidade": cidade,
            "complemento": complemento,
            "estado": estado,
            "CEP": CEP,
            "marca": marca,
            "modelo": modelo,
            "ano": ano,

        }
    );
    resposta.redirect("/listaimportacao");
});

app.get("/listaimportacao", (requisicao, resposta) => {
    resposta.write(`
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <title>Formulario de jogador</title>

                <link 
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" 
                    rel="stylesheet"
                >
            </head>

            <body>
                <div class="container mt-5">  
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nome</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Endereco</th>
                                <th scope="col">Complemento</th>
                                <th scope="col">Cidade</th>
                                <th scope="col">Estado</th>
                                <th scope="col">CEP</th>
                                <th scope="col">marca</th>
                                <th scope="col">modelo</th>
                                <th scope="col">ano</th>
                            </tr>
                        </thead> 
                        <tbody>   

    `);
    for(let i = 0 ; i < listaimportacao.length; i++){
        const importacao = listaimportacao[i];
        resposta.write(`
            <tr>
                <td>${i+1}</td>
                <td>${importacao.nome}</td>
                <td>${importacao.email}</td>
                <td>${importacao.endereco}</td>
                <td>${importacao.complemento}</td>
                <td>${importacao.cidade}</td>
                <td>${importacao.estado}</td>
                <td>${importacao.CEP}</td>
                <td>${importacao.marca}</td>
                <td>${importacao.modelo}</td>
                <td>${importacao.ano}</td>
            </tr>        
        `)
    }
    resposta.write(`    </tbody>
                    </table>
                    <a href="/importacao" class="btn btn-prymary"><button>Continuar cadastrando.....</button></a>
                </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
        </html>
    `);
    resposta.end();
});

app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://localhost:${porta}/importacao`);
});