let image = [
    './img/imagem1.png',
    './img/imagem2.png',
    './img/imagem3.png',
    './img/imagem4.png',
    './img/imagem5.png',
    './img/imagem6.png'
],
i = 0;

function mudarImagem() {
    document.rolar.src = image[i]
    if (i < image.length - 1) {
        i++
    } else {
        i = 0
    }
    setTimeout("mudarImagem()", 3000)
}
window.onload = mudarImagem;// 

async function listaCategorias() {

    await fetch('./loja.json')
    .then(resposta => resposta,json())
    .then(resposta => {

         
            resposta.forEach(categoria => {

                document.getElementById('categorias').innerHTML += `<p>Id: ${categoria.id}, Imagem ilustrativa: ${categoria.imagem}, Tipo do Produto: ${categoria.tipo}, Discriminação: ${categoria.discriminacao}, Preço: ${preco}<br>  </p>`
            
        });
    });
}

listaCategorias();