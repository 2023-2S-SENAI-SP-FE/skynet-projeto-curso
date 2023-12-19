let image = [
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
    .then(resposta => resposta.json())
    .then(resposta => {

         
            for (let i=0; i < resposta.length; i++) {

                document.getElementById('categorias').innerHTML += `<p> Imagem ilustrativa:</p> <img ${resposta[i].imagem}><br><br><p> Tipo: ${resposta[i].tipo}<br><br> ${resposta[i].discriminacao}<br><br> ${resposta[i].preco}<br><br><br><br></p>`;
            }

        });

}

listaCategorias();