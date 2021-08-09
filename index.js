
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu); 


let htmlTabela = '<table>'
htmlTabela += `
    <thead>
        <tr>
            
            <th>DADOS</th>
           
        </tr>
    </thead>
`

htmlTabela += '<tbody>'

/**
 * Aqui eu vou injetar os dados de atropelamento
 */

atropelamentos.forEach(atropelamento => {
    htmlTabela += `
        <tr>
        

        <td><img src = "img/${atropelamento.especie._id}.jpg"
        alt = "${atropelamento.especie.nomePopular}"><br>
        
        <b>Espécie:</b> ${atropelamento.especie.nomePopular} (<i>${atropelamento.especie.nomeCientifico}</i>)<br>
       <b>Quantidade de atropelamentos de Aquidauana à Campo Grande:</b> ${atropelamento.quantidadeCampoGrandeAquidauana}<br>
       <b>Quantidade de atropelamentos de Aquidauana à Miranda:</b> ${atropelamento.quantidadeAquidauanaMiranda}<br>
       <b>Quantidade de atropelamentos em pista chuvosa:</b> ${atropelamento.quantidadeChuvosa}<br>
       <b> Quantidade de atropelamentos em pista seca:</b> ${atropelamento.quantidadeSeca}</td>
            
        </tr>
    `
})

htmlTabela += '</tbody>'


htmlTabela += '</table>'

/**
 * Injeta o HTML da tabela na página
 */

const divAreaDados = document.getElementById('areaDados')
divAreaDados.innerHTML = htmlTabela