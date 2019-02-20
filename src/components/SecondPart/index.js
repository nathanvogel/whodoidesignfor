import React from "react";
import styles from "./styles.scss";
import sStyles from "../../shared-styles/styles.scss";

class SecondPart extends React.Component {
  constructor() {
    super();
    this.ref_section = React.createRef();
  }

  componentDidMount() {}

  render() {
    // <blockquote>
    //   <p>
    //     “Getting wild with digital design in 2018 means getting wild in
    //     2018 with responsive design that’s agnostic to the kind of device
    //     you’re rocking. That’s doable, probably, but it’s really, really
    //     hard.”
    //   </p>
    //   <cite>
    //     <p>
    //       Tim Carmody,{" "}
    //       <a href="https://kottke.org/18/01/foreclosing-on-the-future-of-the-book">
    //         Jan 12, 2018 on kottke.org
    //       </a>
    //     </p>
    //   </cite>
    // </blockquote>

    return (
      <section className={styles.SecondPart} ref={this.ref_section}>
        <div className={sStyles.RightBigColumnPadder}>
          <h1>Who do I design for?</h1>
          <p className={styles.Subtitle}>
            Nathan Vogel / Mémoire ECAL 3CVMID / 2018-2019
          </p>
          <p>
            Ce mémoire raconte et analyse une expérience que j’ai faite, une
            expérience de déconstruction de certains récits auxquels je m’étais
            attachés. Ces récits que j’avais pris pour vérités portent sur la
            nature du design et troublaient la perception que j’ai de ma
            relation au design. Je décortique ici le début de ce parcours que
            j’espère sans fin. Je le fais pour poursuivre ce travail
            d’auto-réflexion et dans l’espoir de peut-être éclaircir le chemin
            d’autres designers qui partageraient ma confusion.
          </p>
          <div className={sStyles.PullLeft}>
            <h5>Design, mais lequel ?</h5>
            <p>
              J’entend un domaine très large couvrant la plupart des sens dans
              lequel il est utilisé : design thinking, speculative design, web
              design, corporate design, etc.
            </p>
          </div>
          <p>
            La première partie de cette page web, que vous avez déjà pu
            parcourir, est une illustration interactive de la rage qui
            m’habitait : confuse, chaotique et parfois caricaturale.
          </p>
          <p>
            Cette deuxième partie va maintenant raconter l’origine de cette
            première, l’analyser et puis surtout tâcher de coucher par écrit les
            réflexions qui se sont ensuivies pour donner un sens et une suite à
            cet éclat de colère.
          </p>
        </div>
        <div className={sStyles.LeftBigColumnPadder}>
          <p>
            J’étais fracturé en deux. Lorsque mon professeur m’a dit{" "}
            <q>« Mais oui, c’est mieux quand ça passe derrière le texte ! »</q>,
            une partie de moi ne l’a juste pas cru, alors que l’autre moitié me
            disait que oui, évidemment, c’était plus intéressant. Et ça m’a
            pétrifié, j’étais incapable de lui répondre. Un conflit interne bien
            plus fort que ce que je m’imaginais m’empêchait de formuler une
            réponse cohérente, que ce soit dans un sens ou dans l’autre.
          </p>
          <p>
            Il s’agissait d’un projet de site web, pour pour lequel je m’étais
            inconsciemment fixé toute une série de contraintes dont je n’avais
            absolument pas le contrôle. Dans ce cas là, ce qui m’avait bloqué
            était que je m’étais contraint à ce que le texte soit tout le temps
            100% super lisible, sous prétexte que{" "}
            <em>c’est un site web qui va être regardé par des gens</em>. Ce
            simple paramètre avait sans que je m’en rende compte radicalement
            réduit mes possibilités de design pour ce projet. Des critères
            auto-imposés de lisibilité, user-friendliness, d’attentes
            pré-supposées des mandataires ou encore de respect des schémas
            d’interaction standards sur le web barricadaient mon champs
            d’expérimentations possibles.
          </p>
          <p>
            Ce n’est que que quelques semaines plus tard que cette expérience,
            combinée avec un certain nombre de frustrations autour du monde du
            design ont provoqué un éclat de colère. C’est dans cet état de
            frustration que j’ai commencé à manifester à travers des courtes
            phrases provocantes ce que je percevais comme hypocrite dans le
            monde du design. J’ai divisé ce processus en 5 phases :
          </p>
          <p>
            ______________________________________________________________ - The
            end -
          </p>
        </div>
      </section>
    );
  }
}

export default SecondPart;
