/* eslint-disable no-irregular-whitespace */

import React from "react";
import myStyles from "./styles.scss";
import styles from "../../shared-styles/styles-second-part.scss";
import sStyles from "../../shared-styles/styles.scss";

class SecondPart extends React.Component {
  constructor() {
    super();
    this.ref_section = React.createRef();
  }

  componentDidMount() {}

  render() {
    return (
      <section className={myStyles.SecondPart} ref={this.ref_section}>
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
          <div className={`${sStyles.InfoBox} ${sStyles.PullLeft}`}>
            <h5>Design, mais lequel ?</h5>
            <p>
              J’entends un domaine très large couvrant la plupart des sens dans
              lequel il est utilisé : design thinking, speculative design, web
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
            <q>« Mais oui, c’est mieux quand ça passe derrière le texte ! »</q>,
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
            monde du design. J’ai divisé ce processus en 5 phases :
          </p>
          <h4>Idéalisation</h4>
          <p>
            Ma première réalisation a été de me rendre compte de certains de mes
            idéaux liés à la culture du design à l’ère digital. Premièrement,
            celui issu de la rhétorique du user-centered design. «{" "}
            <q>I thought my role was to delight users.</q> » (En français : «
            {" "}
            <q>Je croyais que mon rôle était de ravir les utilisateurs</q> »).
            Deuxièmement, l’idée que le design digital offre par sa nature plus
            de liberté (on pourrait demander ce qu’est la liberté d’ailleurs).
          </p>
          <h4>Désillusion</h4>
          <p>
            Il s’agit maintenant d’expliciter la face sombre de ces constats :
            si je ne designe pas pour des utilisateurs, alors pour qui ? Même si
            les entreprises et leurs exécutifs n’ont pas forcément l’impératif
            légal de maximiser les profits pour les actionnaires, cet objectif
            semble être de plus en plus profondément ancré dans la culture des
            entreprises, souvent encouragé voir délibérément mis en place par
            les actionnaires. La réponse logique m’a donc semblé être que je
            designais en réalité avant tout pour des actionnaires.
          </p>
          <p>
            De son côté, l’immense champs des possibles offerts par le digital
            s’est assombri de par la difficulté, voir l’impossibilité de le
            réaliser pleinement. Les idées les plus simples peuvent demander des
            efforts d’ingénierie inviables. Sauf dans les rares cas où le
            dispositif final d’affichage est fixé à l’avance, l’impératif
            d’adaptabilité, de « responsiveness », requiert un travail souvent
            perçu comme un fardeau contraignant, autant sur la forme, le design
            lui-même, que sur sa réalisation technique. Ces difficultés ont
            menées à l’établissement d’un tas de solutions pré-faites, comme des
            « UX patterns », des schémas connus d’utilisation, voir des «{" "}
            templates », des modèles entiers de produits finis. Offrant un repli
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
          <div className={`${sStyles.InfoBox} ${sStyles.PullRight}`}>
            <h5>Récit ?</h5>
            <p>
              J’utilise ici le mot récit comme Lyotard l’utilise lorsqu’il
              décrit les métarécits autour desquels se sont construits les
              sociétés modernes jusqu’à la postmodernité. Il s’agit ici de
              schémas narratifs que je déconstruis à mon échelle ou à celle du
              design. On peut comprendre « récit » comme le mot anglais «{" "}
              narrative ».
            </p>
          </div>
          <p>
            Cependant, même en ayant ces idéaux, même en reconstruisant de
            nouveaux meilleurs récits, quelque chose clochait. Je me suis peu à
            peu rendu compte que mon enthousiasme ne suffirait pas. C’est une
            bonne chose que de vouloir libérer son potentiel créateur, mais en
            réalité, le facteur qui prime c’est : pour qui, ou pour quoi, je
            designe ? Comment concilier salaire et créativité ? Et même lorsque
            je crée « pour le plaisir », mon égo n’entre-t-il pas aussi en jeu ?
            Je sens cette question incontournable échapper à ma volonté. Le
            monde parfait n’existe pas. Un « sellout » de mon âme créatrice est
            inévitable. Un secret que les grandes entreprises du design se
            gardent bien de révéler.
          </p>
          <h4>Appel</h4>
          <p>
            Me revoici en quelque sorte au point de départ. Malgré cela, je peux
            être optimiste. Oui je designe pour les actionnaires, et alors ? Au
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
          <div className={sStyles.ParagraphSpacer} />
          <div className={sStyles.ParagraphSpacer} />
          <div className={sStyles.ParagraphSpacer} />
        </div>
        <div className={sStyles.RightBigColumnPadder}>
          <div
            className={`${sStyles.InfoBox} ${sStyles.PullLeft} ${
              sStyles.PullDown100
            }`}
          >
            <h5>Designer ?</h5>
            <p>
              Sauf indication contraire, j’utilise le mot designer au sens de
              designer d’interaction, qui est pour moi un terme qui regroupe
              aussi des mots comme UI designer, user experience designer, etc.
            </p>
          </div>
          <p>
            Lorsque j’ai obtenu ma Maturité, j’ai peu à peu commencé à percevoir
            le design comme une solution totale de vie dans notre société.
            Solution totale, car objectivement « <i>bonne</i> » pour «{" "}
            <i>la société </i>» et moi, « <i>l’individu</i> ». De plus, j’ai
            toujours chéri mon indépendance et ma liberté de créer, donc le
            moment venu de choisir mes études, le design s’est proposé comme une
            solution adaptée, qui avait un sens, puisque le design me promettait
            liberté et créativité. Or, 4 ans plus tard, je réalise que ce n’est
            pas parce que je fais du design que je peux créer librement. En
            étant frontalement honnête avec moi-même, j’ai pu casser certains
            mythes et formuler clairement une nouvelle position :
          </p>
          <ul>
            <li>Le design n’est pas créativité.</li>
            <li>Le design n’est pas spécial. </li>
            <li>Le design est soumis au contexte. </li>
          </ul>
          <p>
            Si un individu considère par défaut que son travail serait quelque
            chose de forcément « <i>bon</i> », ou du moins inoffensif, alors il
            n’est jamais à l’abri de l’impact négatif de ses créations.
          </p>
        </div>
        <div className={sStyles.LeftBigColumnPadder}>
          <p>
            <strong>
              Une manière de regarder le cœur de mon problème, c’est de voir que
              j’ai été nourris par l’idée que le design a quelque chose
              d’intrinsèque qui dépasse le travail commercial.
            </strong>{" "}
            A travers des récits construits, j’ai toujours inconsciemment cru
            que d’une certaine manière, par son aspect créatif, ou conceptuel,
            ou riche en éducation ou encore simplement interdisciplinaire, le
            design s’affranchissait des purs résultats objectifs, de la logique
            de libre-marché, des enjeux éthiques ou philosophiques et de la
            compétition des valeurs humaines.
          </p>
          <h4>Ce que le problème n’est pas</h4>
          <p>
            Ceci dit, mon premier but n’est pas de critiquer une quelconque
            pratique du design, mais d’appeler les designers à se poser des
            honnêtes questions sur leur travail afin qu’ils ne se mentent pas à
            eux-mêmes. C’est ce que j’ai moi-même fait, en me plaçant du « 
            <em>bon côté inoffensif</em> » du design. Cela m’a fait du mal et
            m’a coupé la possibilité de me remettre en question, moi directement
            ou mon travail. C’est justement à ce moment-là que de profondes
            frustrations peuvent apparaître, que les designs peuvent devenir
            malicieux, que des designers se demandent ce qu’ils ont réellement
            créé quelques millions d’utilisateurs plus tard… Il y a donc en
            permanence un travail d’auto-examination à faire pour celui qui
            crée. Il lui faut rendre compte des valeurs qu’il a intégré à ses
            créations et les comparer à ses valeurs. Ce qu’il fait ensuite du
            résultat de cette comparaison, par exemple décider d’utiliser les
            valeurs de son entreprise ou les valeurs de son audience Instagram
            plutôt que ses propres valeurs, n’est au sens de ce mémoire pas un
            problème en soi, du moment que c’est un choix délibéré du designer.
            Or, je pense que souvent, ce n’est pas le cas, car le contexte,
            notre égo, nos cercles sociaux, les pressions financières, etc. ont
            une influence sur notre travail qu’on le veuille ou non, et surtout,
            qu’on en ait conscience ou non.
          </p>
          <h4>Ce que le problème est</h4>
          <p>
            Mon problème était que j’avais attribué une valeur intrinsèque au
            design : « <em>Je fais du design, donc c’est bien</em> », «{" "}
            <em>bien</em> » au sens «{" "}
            <em>bien pour moi et bien pour la société</em> ». Cette attribution
            de valeur inconditionnelle, je l’ai faite notamment en vertu du
            discours qui entoure le mot design : un discours de créativité, de
            concepts, de philosophie par l’action, de <em>savoir-faire</em>, de{" "}
            <em>bien-vivre</em>... bref un discours élitiste.
          </p>
          <p>
            C’est un discours qui revendique effectivement que «{" "}
            <em>le design, c’est bien</em> ». Or, je doute que le design des
            chambres à gaz et incinérateurs d’Auschwitz soit « <em>bien</em> ».
            Ou alors peut-être qu’il est bien sur le plan purement technique des
            critères <em>user-centered</em> du design et qu’il facilitait
            effectivement la difficile tâche du soldat allemand ? Est-ce ça, le
            design « <em>bien</em> » ? Pourtant je suis certain que ce n’est pas
            du design bien pour le designer et pour la société. Comment donc
            attribuer une valeur intrinsèque au mot design lorsqu’il est
            corruptible ?
          </p>
          <h4>Des mots dangereux</h4>
          <p>
            Les mots qui désignent des disciplines sont des simplifications à la
            merci de l’opinion publique et ils peuvent entretenir une perception
            erronée ou limitée des valeurs qui y sont associées. Lorsqu’Edward
            Bernays constate que le terme « propagande » a une mauvaise
            réputation, il continue d’utiliser exactement les mêmes méthodes,
            mais simplement inventant un nouveau mot pour son travail : non plus
            « propaganda », mais « public relations ».{" "}
            <span className={sStyles.Citation}>
              <a href="#src10">10</a> (Jimmy Leipold, Propaganda: La fabrique du
              consentement)
            </span>
          </p>
          <p>
            Les mots sont puissants et nous devrions nous en méfier. Placer une
            valeur intrinsèque dans le mot « design », c’est promouvoir une
            confusion. Lorsque les élites intellectuelles parlent du cinéma, du
            design, de l’architecture, de l’art, etc. et font leur promotion
            globale à partir certains cas issus de la discipline (des films du
            cinéma d’auteur, des monuments historiques, etc.), les gens qui ne
            connaissent pas précisément les dynamiques morales qui sous-tendent
            ces disciplines, (c’est-à-dire la plupart des gens, y compris
            moi-même et certains initiés) font des raccourcis.
          </p>
          <p>
            On est toujours choqué de voir les jolies peintures d’Hitler, non
            pas parce qu’Hitler a fait des jolies peintures (qu’est-ce qui l’en
            empêcherait ?), mais parce que toute la société a sacralisé le mot «
            {" "}
            art ». Cette attribution d’une valeur intrinsèque aux termes enlève
            la possibilité d’avoir un regard critique par tous et chacun sur les
            acteurs et les produits d’une discipline.
          </p>
          <p>
            Cela pourrait même ressembler à un mécanisme d’auto-défense des
            élites. Cependant, même les pratiquants les plus chevronnés peinent
            à mettre des mots sur cette distinction, car nombre d’exemples
            floutent les limites entre « <em>bon</em> » design et design au sens
            large.
          </p>
          <div className={sStyles.ParagraphSpacer} />
          <p>
            Lorsque l’on attribue une valeur intrinsèque à une discipline, tout
            devient justifiable. La conséquence est qu’il est nécessaire de
            n’attribuer aucune valeur intrinsèque à aucune discipline. Le design
            est un outil qui peut avoir de la valeur lorsqu’il est utilisé pour
            penser les rapports humains au monde, nous éduquer, nous faire
            prendre conscience, nous provoquer, nous aider à vivre en accord
            avec nos valeurs et même pour nous aider à déterminer ces valeurs.
            Cependant, ce sont des valeurs potentielles qu’il a au même titre
            qu’une quantité d’autres disciplines comme la littérature, le
            cinéma, etc., chacune ayant un certain nombre d’avantages pratiques
            (par exemple :{" "}
            <i>un design peut s’insérer dans la vie quotidienne</i>, ou encore:{" "}
            <i>un design n’a pas l’impératif d’être lu pour être compris</i>).
            C’est donc à l’acteur de chaque discipline d’être un penseur,
            d’avoir des valeurs et de les transmettre à travers sa pratique. Le
            design n’est à mon sens, qu’un des nombreux moyens de se réaliser
            pour le penseur. <em>Il design è cosa mentale.</em>
          </p>
          <p>
            Nous avons peut-être une tendance culturelle à attribuer une valeur
            intrinsèque aux disciplines, car certaines ont su se construire en
            imposant une responsabilité inéchappable et de stricts principes à
            leurs pratiquants. Je pense au serment d’Hippocrate notamment, mais
            aussi au Primum non nocere et aux autres codes de déontologies qui
            entourent les professions d’avocats, journalistes, psychologues,
            etc. Si ces codes de déontologies ne sont pas tous inscrits dans la
            loi, ils peuvent être très présents dans les institutions au point
            d’en être systématiquement incontournable. Ce n’est absolument pas
            le cas du design.
          </p>
          <p>
            L’une des valeurs intrinsèques qu’on pourrait peut-être tout de même
            attribuer à ces disciplines est celle d’être un exutoire pour
            l’expressivité. Mais justement, le besoin d’y mettre du sien, de se
            réaliser à travers son design, de rendre ses idéaux de beauté et de
            société tangibles se place pour moi très souvent en opposition avec
            la notion de « répondre à ». Lorsqu’un client, un devoir ou une
            envie me prend, y répondre semble un acte naturel et approprié.
            Cependant, il se peut que je me dérobe au passage de ce qui m’avait
            amené à faire du design en premier lieu.
          </p>
          <p>
            Dans tous les cas, cette confusion sémantique et culturelle a
            entretenu mes illusions sur la créativité et la valeur qu’allait
            apporter le design dans ma vie. Or, ce n’est pas le design qui
            m’apporte de la valeur, mais bien moi, le designer qui à travers mon
            travail et mes réflexions peut apporter de la valeur au design.
            C’est là qu’il est justement essentiel d’<em>y mettre du sien</em>.
            Je dis qu’il faut se <em>battre</em> pour donner un sens à son
            travail. On est alors à la fois libre et responsable d’estimer la
            valeur de notre travail pour nous et pour la société.
          </p>
          <div className={sStyles.ParagraphSpacer} />
          <p>
            Maintenant que j’ai fait cette prise de conscience, deux questions
            sont devenues centrales pour moi lorsque j’approche un processus
            créatif :
          </p>
          <ul>
            <li>Pour qui est-ce que je designe ?</li>
            <li>Quelle est ma part de créativité ?</li>
          </ul>
          <p>
            Me poser ces questions honnêtement m’apaisent, parce qu’elles me
            permettent de m’accorder avec la réalité. En essayant d’aller au
            fond, en tentant de tout remettre en question sans respect pour le
            dogme, voici quelques exemples de ce qu’on pourrait en tirer.
          </p>
        </div>
        <div className={sStyles.RightBigColumnPadder}>
          <h3>Pour qui est-ce que je designe ?</h3>
          <p>
            Si je designe pour les utilisateurs d’un produit, ne suis-je pas en
            train de designer pour mon entreprise plutôt ? Le but de mon design
            ne serait-il pas qu’elle atteigne ses objectifs financiers à la fin
            du trimestre ? Ou simplement pour cette augmentation que j’attends ?
          </p>
          <p>
            Si je designe pour une consigne d’école, ne suis-je pas en train de
            designer pour mon collège de professeurs ? Ne suis-je pas en train
            de faire une quantité d’hypothèses hasardeuses sur leurs attentes ?
            Ne suis-je pas en train d’essayer d’émuler d’autres projets dont je
            connais leur appréciation ?
          </p>
          <p>
            Si je designe pour moi-même, mais que je publie régulièrement
            certains de ces designs personnels sur Instagram, ne-suis-je pas en
            train de designer pour mes followers plutôt ? Ou même plutôt pour
            les followers que je pourrais acquérir ? Pour les hashtags que je
            pourrais ajouter à mon prochain post ? Ne-suis-je pas en train de
            designer pour mon égo ?
          </p>
          <p>
            Si je designe pour moi-même, est-ce que je suis en train de
            contraindre ce design à des attentes, une image que je me suis
            construit de moi-même, et du type de design que moi, Nathan Vogel,
            suis supposé produire ? N’ai-je pas plusieurs images de moi-même ?{" "}
          </p>
          <p>
            Lorsqu’il remplit sa courte description sur les réseaux sociaux,
            Edward Snowden se définit lui-même par sa réponse à cette question
            (au mot “design”/”work” prêt).
          </p>
          <blockquote>
            <p>
              « I used to work for the government. Now I work for the public. »
            </p>
            <cite>
              <p>
                <span className={sStyles.Citation}>
                  Edward Snowden<a href="#src18">18</a>
                </span>
              </p>
            </cite>
          </blockquote>
          <h3>Quelle est ma part de créativité ?</h3>
          <p>
            Cette question m’invite à me demander si je suis vraiment en train
            de créer comme j’ai toujours supposé que je le faisais. Ai-je
            simplement suivi les exigences du problème à leur conclusion logique
             ? Sans même remettre en question le problème ? Et là où il me
            restait une marge de manœuvre créative, en ai-je profité pour
            explorer les possibilités ou y ai-je simplement substitué une
            solution copiée d’un autre projet, voir prédéterminée par la
            doctrine ?
          </p>
        </div>
        <div className={`${sStyles.LeftBigColumnPadder} ${styles.DigitalZone}`}>
          <p>
            Cette question de la créativité et de l’expressivité me semble
            particulièrement importante dans le monde numérique et c’est à ce
            segment du design que je m’intéresse plus spécifiquement dans le
            cadre de ce mémoire. Tout d’abords, parce qu’il s’agit de celui pour
            lequel je suis formé et auquel je suis le plus habitué. Mais ce
            medium est dans une position particulière pour de nombreuses
            raisons.{" "}
          </p>
          <h4>Histoire</h4>
          <p>
            Le monde numérique est très récent, laissant un vide d’histoire, de
            repères ou de traditions sur lesquels s’appuyer pour bâtir une
            fondation morale et formelle stable. Cette instabilité est accentuée
            par l’évolution rapide des nouvelles technologies, apportant
            régulièrement des changements radicaux autant aux possibilités
            qu’aux exigences. Je fais aussi l’hypothèque qu’à cause de sa
            jeunesse et de son lien aux nouvelles technologies de communication,
            le numérique est un terrain plus propice aux nombreuses formes de
            storytelling devenues si communes au 21ème siècle.{" "}
            <span className={sStyles.Citation}>
              <a href="#src13">13</a> (Christian Salmon, Storytelling)
            </span>{" "}
            Depuis la nuit des temps, les développements technologiques ont
            alimenté toutes sortes de mythes y compris des religions entières et
            c’est particulièrement vrai des technologies de communication.{" "}
            <span className={sStyles.Citation}>
              <a href="#src14">14</a> (Erik Davis, TechGnosis)
            </span>{" "}
            Les mythes du progrès alimentent sans aucun doute des illusions sur
            la nature du design comme celles qui étaient les miennes.
          </p>
          <h4>UI/UX</h4>
          <p>
            Comme je l’ai évoqué en première partie, la partie visuelle du
            design numérique tend vers une uniformisation du branding et des
            interfaces (UI), mais aussi du design d’interaction lui-même. Dans
            le contexte commercial du moins, cette discipline est en grande
            partie condamnée à se limiter à un certain nombre de patterns et
            paradigmes établis et connus des utilisateurs. Pour l’instant,
            l’ironie est que les éléments digitaux sont en apparence libérés de
            toutes contraintes par le système de pixels capables de représenter
            n’importe quelle couleur à n’importe quel endroit d’une surface à
            n’importe quel moment grâce à n’importe quel capteur, mais que ce
            nouveau degré de liberté vient avec des contraintes d’adaptabilité
            et d’accessibilité qui sont sans précédent.
          </p>
          <h4>Corporate</h4>
          <p>
            Les multiples statuts de ceux qui designent ces nouvelles
            technologies changent aussi très rapidement. Une multitude de termes
            vaguement définis se succèdent pour décrire ces professions et bien
            que ces termes deviennent de plus en plus holistiques comme « User
            Experience Designer », ils sont de plus en plus étroitement liés aux
            structures corporates. On connaît bien sûr les critiques de
            l’influence du monde corporate sur la culture et la créativité.
            <span className={sStyles.Citation}>
              <a href="#src6">6</a> (Tibor Kalman, Fuck Committees)
            </span>
            , mais ces hiérarchies rendent difficile l’une des tâches du
            design : être un gatekeeper{" "}
            <span className={sStyles.Citation}>
              <a href="#src3">3</a> (Victor Papanek, Design for the Real World)
            </span>
            , être un rempart face au design sans éthique. Cette dépendance
            structurelle aux grandes entreprises s’oppose pour moi avec le
            modèle du studio indépendant ou du bureau d’architecture par
            exemple, foyers d’une créativité plus indépendante et d’une
            responsabilité plus large.
          </p>
          <h4>Optimisme</h4>
          <p>
            Mais peut-être suis-je ici pessimiste. Peut-être le design
            d’interaction est-il simplement trop jeune et cette discipline
            malgré sa soumission actuelle aux impératifs liés à l’évolution
            ultra-rapide des nouvelles technologies est un champ encore
            naissant, qui se redéfinit à chaque itération technologique, et qui
            se révélera être fondamental dans la réalisation des idéaux humains.
          </p>
          <p>
            Mais s’il est important de préciser que ce mémoire trouve ses
            origines dans le cadre du design lié aux nouvelles technologies, le
            cœur de mon discours peut être étendu à d’autres domaines, y compris
            des domaines qui ne sont pas traditionnellement associés à la
            créativité.
          </p>
        </div>
        <div className={sStyles.LeftBigColumnPadder}>
          <p>
            Ces deux questions, « <q>Pour qui est-ce que je designe ?</q> » et «
            {" "}
            <q>Quelle est ma part de créativité ?</q> » sont mes outils à moi
            pour rendre compte de ma relation à ma pratique de designer dans les
            contextes de tous les jours. Si elles sont honnêtes, les réponses
            qui émergent de cette interrogation interne me permettent de prendre
            du recul sur mes designs, de prendre conscience de ce qui guide le
            processus souvent à mon insu et finalement, si j’en fais l’effort,
            de reprendre le contrôle, car maintenant que je les perçois ces
            limites souvent arbitraires, je peux m’en affranchir ou au
            contraire, mieux y répondre.
          </p>
          <div className={sStyles.ParagraphSpacer} />
          <p>
            D’autres designers peuvent approcher ce type de problématiques de
            manière différente et peut-être plus pertinente pour le lecteur. Je
            rapporte ici brièvement quelques approches que j’ai glanées et
            trouvées intéressantes. Ces approches diffèrent, voir même
            approchent quelque chose qui semble entièrement différent, mais se
            rattache pour moi à un même problème de fond. Je les laisse ici
            comme pistes à explorer pour le lecteur.{" "}
          </p>
          <h4>Christiane de Muralt Vogel</h4>
          <p>
            Ma mère est architecte et a cette belle formulation : elle dit
            tenter de « <q>reconnaître [lorsqu’elle est] guidée par la peur.</q>
             »
          </p>
          <h4>Christophe Guignard</h4>
          <p>
            Architecte et designer, il trouve essentiel de faire une proposition
            sur une manière de penser le monde et d’y vivre, afin de dépasser
            les objectifs de rendements financiers pour s’orienter vers des
            objectifs d’épanouissement des humains.
          </p>
          <h4>Stefan Sagmeister</h4>
          <p>
            Designer, il répond à la question : «{" "}
            <q>
              Is it possible to have both, making money and doing good work?
            </q>{" "}
             » par ces mots :
          </p>
          <blockquote>
            <p>
              « I remember a sentence in a Minale Tattersfield book that said:
              “In my experience, every designer whose prime aim in going into
              business was to make money while at the same time producing good
              design, failed on both counts. I believe that designing is
              something you have to do for love. If you are committed first and
              foremost to producing good design then you’ll make money as a
              by-product because good design is something people are willing to
              pay for. But that financial reward will be a bonus, a gift.” I
              agree. »
            </p>
            <cite>
              <p>
                <span className={sStyles.Citation}>
                  Sagmeister & Walsch, Answers <a href="#src1">1</a>
                </span>
              </p>
            </cite>
          </blockquote>
          <h4>Maxime Büchi</h4>
          <p>
            Lors d’une conférence sur son travail pour Swiss Typefaces, il a été
            interrogé sur sa capacité à travailler pour des grandes corporations
            tout en préservant son potentiel créatif et répond en évoquant
            l’importance de comprendre ces structures corporates et dit qu’il
            est absolument vital de contrôler le processus de décision («{" "}
            decision-making ») et le récit (« the narrative »).
          </p>
          <h4>Alberto Pérez-Gómez </h4>
          <p>
            Cet architecte évoque l’essentialité de l’amour dans son livre,{" "}
            <i>Built upon Love</i>
            <span className={sStyles.Citation}>
              {" "}
              <a href="#src2">2</a>
            </span>
            , que je n’ai pas encore lu :
          </p>
          <blockquote>
            <p>
              « In <i>Built upon Love</i> Pérez-Gómez uncovers the relationship
              between love and architecture in order to find the points of
              contact between poetics and ethics—between the architect’s wish to
              design a beautiful world and architecture’s imperative to provide
              a better place for society. »
            </p>
          </blockquote>
        </div>
        <div className={sStyles.ParagraphSpacer} />
        <div className={sStyles.RightBigColumnPadder}>
          <p>
            Toutes ces réflexions m’arrivent dessus à une période où j’attribue
            une nouvelle importance à la notion de sens de la vie. La question
            se pose donc pour moi : Comment faire du design qui ait un sens ?
            Ai-je envie de tirer un sens de ma pratique de designer ? Est-ce
            possible ? Si oui, comment ?
          </p>
          <p>
            Je pense qu’il y a encore beaucoup de travail à faire pour
            décortiquer le storytelling qui entoure le design. L’idée que le
            design un bon exutoire pour le besoin d’expression reste assez
            difficile à cerner pour moi. J’y vois une valeur, mais il m’est
            encore tellement difficile de faire la part des choses, que je vois
            un réel danger à croire toute forme de storytelling autour d’une
            discipline. L’idée d’expression créative ne me suffit d’ailleurs
            plus, puisqu’elle a une possible valeur pour l’individu, mais pas
            vraiment pour la société. Se tromper d’exutoire ne serait-il pas
            d’ailleurs tragique pour l’individu ? Tout exutoire, même pour la
            créativité n’est pas forcément bon à prendre.
          </p>
          <p>
            Bref, si je suis sûr d’une chose maintenant, c’est qu’il m’est
            difficile de tirer un sens du design, puisque le design n’est pas
            spécial.
          </p>
        </div>
        <div className={sStyles.ParagraphSpacer} />
        <div className={sStyles.ParagraphSpacer} />
        <div className={sStyles.ParagraphSpacer} />
        <div className={sStyles.LeftBigColumnPadder}>
          <h3>Pourquoi le design est-il spécial ?</h3>
          <p>
            Remontons un instant aux origines de cet discipline. Le design
            industriel naît avec la révolution industrielle et le design
            d’interaction avec la révolution numérique, deux environnements
            principalement guidés par les forces du marché. Si l’on suit la
            logique capitaliste dominante, le design a émergé pour combler un
            besoin, une demande, et y proposant une offre complémentaire : avoir
            des produits bien pensés, tant du point de vue du producteur que du
            consommateur. Dans ce cas, le design, pur produit du marché, n’a pas
            de responsabilité morale spécifique à <em>priori</em>, autre que de
            combler les besoins de ceux qui payent le designer, directement ou
            indirectement. Cependant, l’arrivée de ces objets, puis de ces
            technologies, implique des changements d’ordre sociétal, car elle
            change la vie quotidienne des gens. Ces changements doivent être
            considérés, mesurés, <em>pensés</em>, dans toutes leurs
            ramifications. A qui revient ce rôle ?
          </p>
          <p>
            Bien sûr, les ingénieurs, product managers, responsables marketing,
            exécutifs, etc. ont tous un pouvoir de décision, souvent plus
            important que celui du designer, mais leur loyauté première réside
            en général envers l’optimisation technique ou l’optimisation
            financière, ce qu’ils font en général avec différents degrés de
            présomption que ces optimisations amèneront en second lieu
            l’optimisation du bonheur, du « <em>bien</em> ». Bill Moggridge,
            père fondateur du design d’interaction, nous dit :
          </p>
          <blockquote>
            <p>
              « Les designers de produits issus des technologies numériques ne
              considèrent plus leur travail comme consistant à faire le design
              d’un objet physique — beau ou utile — mais comme consistant à
              faire le design des interactions avec lui. »
            </p>
            <cite>
              <p>
                <span className={sStyles.Citation}>
                  Bill Moggridge, Designing Interactions <a href="#src5">5</a>
                </span>
              </p>
            </cite>
          </blockquote>
          <p>
            Le designer est donc celui qui s’occupe des relations entre les
            humains et les machines. C’est là le cœur de son sujet, sa loyauté
            sociale première.
          </p>
          <p>
            On peut donner une première responsabilité aux designers, basée sur
            l’impact que nous avons. Nous prenons des décisions, donc nous avons
            un pouvoir, donc nous avons une responsabilité.
          </p>
          <p>
            Au-delà de cette vision encore limitée par la perception que peut
            avoir un designer de son pouvoir dans une structure hiérarchique,
            nous avons une responsabilité basée sur le privilège de la
            connaissance. Notre profession est de comprendre et déterminer la
            relation entre humains et technologies, nous avons une culture et
            des connaissances qui recoupent plusieurs domaines et tout cela nous
            place dans une unique position pour comprendre les enjeux et les
            impacts de ces technologies. Nous avons une responsabilité de
            traduire nos connaissances et analyses en préconisations morales et
            en actions éthiques.
          </p>
          <p>
            Dès lors que nous savons ou que nous pouvons savoir, toute action ou
            inaction est une décision morale que nous prenons. Comme le dit Mike
            Monteiro en s’inspirant de Victor Papanek : «{" "}
            <q>
              J’ai commencé à regarder le design, non seulement comme l’acte de
              création, mais plus comme l’acte de choisir quoi créer.
            </q>{" "}
             »{" "}
            <span className={sStyles.Citation}>
              <a href="#src15">15</a> (Mike Monteiro, How Designers Destroyed
              the World)
            </span>{" "}
            Il donne ensuite l’exemple de Facebook Graph Search qui laisse les
            gens chercher « men interested in men in Teheran » et dit à 9
            minutes 23  :
          </p>
          <blockquote>
            <p>
              « This is irresponsible design. And you may be thinking: ‘Oh no no
              no! That’s a business decision!’ Bullshit! It may have started out
              life as a business decision, but to get on the interface, to be
              live, to get to where people can interact with it, it goes through
              design. And when a designer lets a bad business decision through,
              that’s a decision as well. »
            </p>
          </blockquote>
          <p>
            Certains avanceront qu’expliciter et imposer un devoir moral n’est
            pas nécessaire, soit parce que la responsabilité individuelle exigée
            de tout individu suffit à ce qu’il soit responsable d’utiliser son
            pouvoir à bon escient, soit parce que la logique du marché suffit à
            inclure ces valeurs, du moment qu’elles sont demandées. Sous
            suffisamment de pression publique ou par simplement par crainte pour
            sa réputation, l’offre changera pour s’aligner sur les valeurs de la
            société. Et il est vrai que le capitalisme est un outil terriblement
            efficace pour rendre ce type de changements possibles. On pourrait
            citer à juste titre les exemples d’Apple et Google, ayant tous deux
            fait des récents efforts dans leurs OS mobiles respectifs pour la
            réduction du temps passé en face d’un écran. Cependant, croire que
            c’est la meilleure manière de tout faire, qu’elle va tout le temps
            fonctionner et qu’elle ne détruit pas de valeurs morales au passage
            relève à mon sens d’une croyance. Quand bien même cette croyance
            serait vraie, ce mécanisme d’équilibre a un problème : l’équilibre
            prend souvent du temps et arrive parfois trop tard. Deux exemples :{" "}
          </p>
          <ul>
            <li>
              YouTube vient d’effectuer un changement historique à son
              algorithme{" "}
              <span className={sStyles.Citation}>
                <a href="#src17">17</a> (Guillaume Chaslot,{" "}
                <a href="https://twitter.com/gchaslot/status/1094359564559044610">
                  https://twitter.com/gchaslot/status/1094359564559044610
                </a>
                )
              </span>
              , lequel va (à priori) faire baisser ses profits : la plateforme
              va cesser de recommander des vidéos jugées complotistes et
              diminuer l’agressivité avec laquelle son algorithme de
              recommandations optimise le « watch time » afin d’éviter que la
              plateforme ne soit radicalisante. Cette démarche intervient{" "}
              <em>après</em>
              que des dizaines de milliers de personnes aient été radicalisées,
              que des personnes soient mortes et que des élections aient été
              votées.
            </li>
            <li>
              Les dégâts des activités humaines sur la biodiversité continuent
              malgré les multiples sonnettes d’alarmes et une pression publique
              considérable sur les entreprises. Je choisis ici la biodiversité
              comme exemple, car dans ce domaine, tout impact qu’on y fait est à
              l’évidence totalement irréversible.
            </li>
          </ul>
          <p>
            Pour une démonstration plus complète de l’irrationalité de notre
            système de croissance ainsi que de la substitution de nos valeurs
            morales par la morale de la consommation, je vous invite à lire{" "}
            <i>La société de consommation</i> de Jean Baudrillard.
            <span className={sStyles.Citation}>
              <a href="#src19">19</a>
            </span>
          </p>
          <p>
            Je déduis de ces démonstrations d’insuffisance du système qu’une
            morale supra-capitaliste doit exister et être explicite, ne
            serait-ce que pour accélérer le processus d’équilibration. Je pense
            que beaucoup de personnes s’attachent tellement à la logique
            libérale justement parce qu’elle leur évite de se sentir
            responsables.
          </p>
          <p>
            Je pense que le design a d’importantes différences avec d’autres
            formes de création. Dans le cas des beaux-arts ou de l’architecture
            par exemple, il y a longtemps que ces disciplines existent et ont
            été institutionnalisé. Cela s’est fait dans des sociétés
            non-capitalistes qui lui ont conféré un rôle et une responsabilité
            explicite. Même si l’on peut argumenter que celle-ci se perd, avec
            la marchandisation de l’art par exemple, une tradition forte et
            ancienne existe dans ces domaines. De plus, ayant affaire à la
            matière physique qui nous entoure directement, qui nous est{" "}
            <em>nécessaire</em>, l’architecte ne peut se détourner de la
            question du bien-être à long terme, tandis que le designer peut plus
            facilement à mon sens en rester à la question de la gratification
            instantanée, qui est par ailleurs accusée d’être le fardeau des «
            Millenials » par Simon Sinek.
            <span className={sStyles.Citation}>
              <a href="#src20">20</a>
            </span>{" "}
            En demandant à des étudiants en design d’interaction et en
            architecture leurs avis respectifs sur la question de leur
            responsabilité envers la société, j’ai vu le sujet était assez
            largement moins naturel du côté des designers, qui montraient
            beaucoup d’incertitudes.
          </p>
          <p>
            Si l’on prend le cadre de l’artisanat en opposition au design
            industriel ou au design d’interaction par exemple, il opère par
            définition à sa propre échelle. Le jugement des producteurs et
            consommateurs suffit donc à l’artisan comme cadre moral. La
            communauté peut décider et contrôler les valeurs éthiques inscrites
            dans cette pratique. Dans un monde de design globalisé, ce n’est
            plus vrai, car l’échelle dépasse les individus et les communautés.
          </p>
          <p>
            En admettant cette responsabilité du designer parce qu’il est
            individuellement uniquement positionné pour avoir des connaissances,
            une capacité de compréhension et un impact, alors on peut lui
            imposer un devoir moral à l’échelle de la société. Ce poids moral
            rend le design spécial, au sens où la société <em>compte</em> sur le
            designer. Une conséquence de cette attente est que le design peut
            être perçu comme spécial, mais en réalité c’est la responsabilité
            morale de penser notre relation aux technologies qui est spéciale et
            celle-ci est posée sur le designer, et non le design lui-même. Comme
            discuté plus haut, c’est pour moi absurde de compter sur l’essence
            d’une discipline pour respecter des valeurs morales. Je vais
            reprendre une de mes phrases préférées d’Alain Barreau sur la
            science{" "}
            <span className={sStyles.Citation}>
              <a href="#src11">11</a> (Alain Barreau, interview par
              Thinkerview : Quand la Science appelle à l’aide pour l’humanité ?)
            </span>
            , mais pour parler du design :
          </p>
          <blockquote>
            <p>
              « Il n’y a pas un passage nécessaire du [design] à l’éthique. Ça,
              ça dépend de nous. »
            </p>
          </blockquote>
        </div>
        <div className={sStyles.ParagraphSpacer} />
        <div className={sStyles.ParagraphSpacer} />
        <div className={sStyles.ParagraphSpacer} />
        <div className={sStyles.RightBigColumnPadder}>
          <p>
            Du discours implicite dominant sur le design et sa « spécialité »,
            ce que j’en perçois en tant que consommateur d’articles et vidéos
            sur internet et en tant qu’étudiant dans une école d’arts et design,
            est :
          </p>
          <blockquote>
            <p>« Vous êtes designer, donc vous êtes spécial. »</p>
          </blockquote>
          <p>Alors qu’à mon sens, une version plus correcte serait :</p>
          <blockquote>
            <p>
              « Vous êtes designer, donc la société vous a incombé la
              responsabilité spéciale de penser notre relation aux technologies.
               »
            </p>
          </blockquote>
          <p>
            Ce raccourci de langage provient potentiellement tout autant de
            celui qui le dit que de celui qui le lit. Certains auront
            naturellement compris la deuxième variante. Ce ne fut pas mon cas.
            Ma perception ressemblait plutôt à «{" "}
            <em>
              Vous êtes designer, donc vous êtes spécial, donc vous avez la
              possibilité de penser le monde.
            </em>
             », une version autrement plus présomptueuse. Cette confusion
            générale sur les valeurs et responsabilités propres à chaque
            discipline fait à mon avis bien des ravages, et pas seulement dans
            les domaines créatifs.
          </p>
          <p>
            J’ai rapidement interrogé quelques-uns de mes camarades, afin de
            voir comment ils percevaient le rôle et la responsabilité du
            designer pour la société. Il me serait difficile de résumer avec
            précision leurs mots, donc je me contenterais d’un constat
            personnel. Les réponses tendent vers une éthique possible et une
            responsabilité à assumer, mais toujours avec des réserves et une
            certaine confusion.
          </p>
          <p>
            Que Tristan Harris, un ingénieur de formation, ait besoin de devenir
            Design Ethicist et de créer le Center for Humane Technology montre
            que quelque part, les designers d’interaction n’ont toujours pas
            assumé cette responsabilité qui est la leur.
          </p>

          <blockquote>
            <p>
              « Imagine a world where the CEO and the marketing director are
              sitting in a conference room and they’re sweating bullets because
              they’re thinking « We’re never going to be able to talk the
              designers into doing this. » That is a fucking beautiful world. »
            </p>
            <cite>
              <p>
                <span className={sStyles.Citation}>
                  Mike Monteiro <a href="#src15">15 à 32:17</a>
                </span>
              </p>
            </cite>
          </blockquote>
          <p>
            Il est hélas trop facile de se cacher derrière les « bells and
            whistles » de la nouveauté et l’innovation, de renoncer face à un
            monde insaisissable qui bouge trop vite. Les structures corporates
            sont peut-être le plus grand obstacle à la prise de responsabilité
            des designers, mais nous nous devons d’exercer notre droit de vote
            sur ce qui se crée et ce qui ne verra pas le jour. Le Center for
            Humane Technology{" "}
            <a href="http://humanetech.com/designers">en appelle</a> aux «{" "}
            architectes du digital » à designer un monde aligné sur nos valeurs
            et je ne pense pas que l’utilisation de ce mot, « architecte », soit
            un hasard. Même si elle ne le fait pas forcément, cette ancienne
            discipline a une histoire dans laquelle elle peut puiser des trésors
            d’éthiques et de principes rigoureux. Il nous revient le devoir de
            trouver dans l’histoire ou construire dans le présent une force
            morale similaire pour designer le futur.
          </p>
        </div>
      </section>
    );
  }
}

export default SecondPart;
