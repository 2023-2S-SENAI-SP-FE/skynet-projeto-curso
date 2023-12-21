async function listaCategorias() {

    await fetch('./loja.json')
    .then(resposta => resposta.json())
    .then(resposta => {

         
            for (let i=0; i < resposta.length; i++) {

                document.getElementById('categorias').innerHTML += `<p> Imagem ilustrativa:</p> <img ${resposta[i].imagem}><br><br><p> Tipo: ${resposta[i].tipo}<br><br> ${resposta[i].discriminacao}<br><br> ${resposta[i].preco}<br><br><br><br></p>`;
            }

        });

}

listaCategorias();