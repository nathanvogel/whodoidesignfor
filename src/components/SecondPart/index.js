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
            d’autoréflexion et dans l’espoir de peut-être éclaircir le chemin
            d’autres designers qui partageraient ma confusion.
          </p>
          <div className={sStyles.PullLeft}>
            <h5>Design, mais lequel ?</h5>
            <p>
              J’entends un domaine très large couvrant la plupart des sens dans
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
            Il s’agissait d’un projet de site web, pour lequel je m’étais
            inconsciemment fixé toute une série de contraintes dont je n’avais
            absolument pas le contrôle. Dans ce cas-là, ce qui m’avait bloqué
            était que je m’étais contraint à ce que le texte soit tout le temps
            100% super lisible, sous prétexte que{" "}
            <em>c’est un site web qui va être regardé par des gens</em>. Ce
            simple paramètre avait sans que je m’en rende compte radicalement
            réduit mes possibilités de design pour ce projet. Des critères
            auto-imposés de lisibilité, user-friendliness, d’attentes
            présupposées des mandataires ou encore de respect des schémas
            d’interaction standards sur le web barricadaient mon champ
            d’expérimentations possibles.
          </p>
          <p>
            Ce n’est que quelques semaines plus tard que cette expérience,
            combinée avec un certain nombre de frustrations autour du monde du
            design ont provoqué un éclat de colère. C’est dans cet état de
            frustration que j’ai commencé à manifester à travers des courtes
            phrases provocantes ce que je percevais comme hypocrite dans le
            monde du design. J’ai divisé ce processus en 5 phases :
          </p>
          <h4>Idéalisation</h4>
          <p>
            Ma première réalisation a été de me rendre compte de certains de mes
            idéaux liés à la culture du design à l’ère digital. Premièrement,
            celui issu de la rhétorique du user-centered design. «{" "}
            <q>I thought my role was to delight users.</q> » (En français : «{" "}
            <q>Je croyais que mon rôle était de ravir les utilisateurs</q> »).
            Deuxièmement, l’idée que le design digital offre par sa nature plus
            de liberté (on pourrait demander ce qu’est la liberté d’ailleurs).
          </p>
          <h4>Désillusion</h4>
          <p>
            Il s’agit maintenant d’expliciter la face sombre de ces constats :
            si je ne designe pas pour des utilisateurs, alors pour qui ? Même si
            les entreprises et leurs exécutifs n’ont pas forcément l’impératif
            légal de maximiser les profits pour les actionnaires, cet objectif
            semble être de plus en plus profondément ancré dans la culture des
            entreprises, souvent encouragé voir délibérément mis en place par
            les actionnaires [XX, YY]. La réponse logique m’a donc semblé être
            que je designais en réalité avant tout pour des actionnaires.
          </p>
          <p>
            De son côté, l’immense champs des possibles offerts par le digital
            s’est assombri de par la difficulté, voir l’impossibilité de le
            réaliser pleinement. Les idées les plus simples peuvent demander des
            efforts d’ingénierie inviables. Sauf dans les rares cas où le
            dispositif final d’affichage est fixé à l’avance, l’impératif
            d’adaptabilité, de « responsiveness », requiert un travail souvent
            perçu comme un fardeau contraignant, autant sur la forme, le design
            lui-même, que sur sa réalisation technique. Ces difficultés ont
            menées à l’établissement d’un tas de solutions pré-faites, comme des
            « UX patterns », des schémas connus d’utilisation, voir des «
            templates », des modèles entiers de produits finis. Offrant un repli
            face aux difficultés techniques et culturelles, car le designer
            d’interaction est grandement dépendant des interactions avec
            lesquelles son utilisateur est familier, ces standards suppriment
            une partie du potentiel de création du designer.
          </p>
          <h4>Romantisation</h4>
          <p>
            Fort de cette réalisation, je me suis mis en tête que j’allais être
            un super designer par la seule force de ma volonté. Briser les
            dogmes et coder des sites web abracadabrants allait être ma norme,
            et ça ne serait pas simplement des expérimentations sympas à mettre
            dans mon portfolio, mais des vrais sites en production.
          </p>
          <h4>Renonciation</h4>
          <p>
            Cependant, même en ayant ces idéaux, quelque chose clochait. Je me
            suis peu à peu rendu compte que mon enthousiasme ne suffirait pas.
            C’est une bonne chose que de vouloir libérer son potentiel créateur,
            mais en réalité, le facteur qui prime c’est : pour qui, ou pour
            quoi, je designe ? Comment concilier salaire et créativité ? Et même
            lorsque je crée « pour le plaisir », mon égo n’entre-t-il pas aussi
            en jeu ? Je sens cette question incontournable échapper à ma
            volonté. Le monde parfait n’existe pas. Un « sellout » de mon âme
            créatrice est inévitable. Un secret que les grandes entreprises du
            design se gardent bien de révéler.
          </p>
          <h4>Appel</h4>
          <p>
            Me revoici en quelque sorte au point de départ. Malgré cela, je peux
            être optimiste. Oui je designe pour les actionnaires, et alors ? Au
            moins maintenant, je ne me mens plus à moi-même. Je ne risque plus
            de ne pas comprendre ce que je crée. Et cette pleine compréhension
            pragmatique des enjeux me permet même de mieux y répondre. J’appelle
            donc les designers qui se seraient mentis à eux-mêmes sur la nature
            de leur travail à être honnête avec soi et à tout remettre en
            question.
          </p>
          <div className={sStyles.ParagraphSpacer} />
          <p>
            Voilà donc ce chemin de pensés. Ce n’était d’ailleurs pas seulement
            un chemin de pensée, mais aussi un parcours guidé par mes émotions.
            C’était une expérience quasi-méditative que de regarder en moi ce
            qui me brûlait et continuer plus loin pour en comprendre les
            racines. Grâce à cela, j’ai pu m’apaiser et comprendre, non pas
            seulement intellectuellement, mais aussi émotionnellement.
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
