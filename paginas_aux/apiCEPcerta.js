console.log('ta aqui')

class UserModel
    {
 
        constructor() {
            this._cep = cep.value;
            this._bairro = "";
            this._cidade = "";
            this._rua = "";
            this._uf = "";
        }

        buscaCep()
        {
            let request = new XMLHttpRequest();
            
            request.addEventListener( "load", () =>{
                try
                {
                    if ( request.status == 200 )
                    {                
                        let dados = this._processaResponse( request.responseText );
                        this._atualiza( dados );
                    }else{
                        throw new Error("Cep Invalido!!!")
                    }
                }catch(error){
                    alert(error.message)
                }
            })

            request.open( "GET", "https://viacep.com.br/ws/" + this._cep + "/json/", false);

            event.preventDefault()

            request.send();
        }

        _processaResponse( responseString )
        {
            let response = JSON.parse( responseString );
            return response
        }

        _atualiza( dados )
        {
            console.log(dados)
            
            if(dados.erro == true)alert("cep invalido, digite um CEP existente")

            this._bairro = dados.bairro;
            this._cidade = dados.localidade;
            this._rua = dados.logradouro;
            this._uf = dados.uf;
        }

        getBairro()
        {
            return this._bairro;
        }
        getCidade()
        {
            return this._cidade;
        }
        getRua()
        {
            return this._rua;
        }
        getUf()
        {
            return this._uf;
        }

    }

    class UserView
    {
        render(dds)
        {
            let body = document.querySelector('body')

            inputBairro.value = `${dds.getBairro()}`
            inputCidade.value = `${dds.getCidade()}`
            inputEndereco.value = `${dds.getRua()}`
            inputEstado.value = `${dds.getUf()}`

        }
    }

    class UserController
    {
        adicionaCep()
        {
            let user = new UserModel();
            user.buscaCep();

            let view = new UserView();
            view.render( user );

            inputNumero.focus()
        }
    }
    
    let controller = new UserController();
    
    busca.addEventListener( "click", controller.adicionaCep );