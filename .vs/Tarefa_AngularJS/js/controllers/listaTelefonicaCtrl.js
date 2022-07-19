angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope, contatosAPI, operadorasAPI)
            {
                $scope.app = "Lista Telefonica";
                $scope.contatos = []
                $scope.operadoras = []

                var carregaContatos = function(){
                    contatosAPI.getContatos().then(function (response) {
                        $scope.contatos = response.data;
                        
                    }).catch(function(){
                        $scope.error = "Não foi possivel carregar os dados!"
                    });
                }

                var carregaOperadoras = function(){
                    operadorasAPI.getOperadoras().then(function (response){
                        $scope.operadoras = response.data;
                    });
                }

                $scope.adicionarContato = function(contato){
                    contato.data = new Date();
                   contatosAPI.saveContato(contato).then(function(response){
                    delete $scope.contato;
                    $scope.contatoForm.$setPristine();
                    carregaContatos();
                   });
                }
                $scope.apagarContatos = function(contatos){
                   $scope.contatos = contatos.filter(function(contato){
                        if (!contato.selecionado) return contato;
                    });
                }
                $scope.isContatoSelecionado = function(contatos){
                    return contatos.some(function(contato){
                        return contato.selecionado;
                    });
                }
                $scope.ordenarPor = function(campo){
                    $scope.criterioDeOrdencao = campo;
                    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
                };

                carregaContatos();
                carregaOperadoras();
            });