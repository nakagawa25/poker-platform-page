import "./About.css"
import Header from "../components/headers/Header"

function About() {
  return (
    <>
      <Header />
      <div className="aboutContainer">
        <div className="backgroundStyle"></div>
        <div className="aboutPage">
          <div className="gameAbout">
            <div className="geometricImage"></div>
            <div className="textArea">
              <h2 className="title">Torneios</h2>
              <p className="text">
                Há anos, orgulhosamente promovendo torneios de poker no ABC
                Paulista, nossa tradição é construída sobre a paixão pelo jogo,
                venha conhecer o <strong>Sexta Hold'em</strong>
              </p>
            </div>
          </div>

          <div className="placeAbout">
            <div className="textArea">
              <h2 className="title">Localização</h2>
              <p className="text">
                Situado no elegante <strong>São Bernardo Tênis Clube</strong>,
                jogadores de todos os níveis se reúnem para experiências
                incríveis. Inscreva-se agora para garantir seu lugar, onde a
                sorte se encontra com a habilidade em busca da vitória!
              </p>
            </div>
            <div className="geometricImage">
              <iframe
                title="Localização"
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.2366094916983!2d-46.55837492391891!3d-23.667495065501342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce43026bebb6ff%3A0xa285c9e2e17470d2!2sS%C3%A3o%20Bernardo%20T%C3%AAnis%20Clube!5e0!3m2!1spt-BR!2sbr!4v1703653921874!5m2!1spt-BR!2sbr"
              ></iframe>
            </div>
          </div>

          <div class="diagonalCut"></div>
          <div className="geometricForm"></div>
        </div>
      </div>
    </>
  )
}

export default About
