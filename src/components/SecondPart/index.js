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
            les actionnaires. La réponse logique m’a donc semblé être que je
            designais en réalité avant tout pour des actionnaires.
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
          <div className={sStyles.ParagraphSpacer} />
          <div className={sStyles.ParagraphSpacer} />
          <div className={sStyles.ParagraphSpacer} />
        </div>
        <div className={sStyles.RightBigColumnPadder}>
          <div className={`${sStyles.PullLeft} ${sStyles.PullDown100}`}>
            <h5>Designer ?</h5>
            <p>
              Sauf indication contraire, j’utilise le mot designer au sens de
              designer d’interaction, qui est pour moi un terme qui regroupe
              aussi des mots comme UI designer, user experience designer, etc.
            </p>
          </div>
          <p>
            Lorsque j’ai obtenu ma Maturité, j’ai peu à peu commencé à percevoir
            le design comme une solution totale de vie dans notre société.
            Solution totale, car objectivement « <i>bonne</i> » pour «{" "}
            <i>la société </i>» et moi, « <i>l’individu</i> ». De plus, j’ai
            toujours chéri mon indépendance et ma liberté de créer, donc le
            moment venu de choisir mes études, le design s’est proposé comme une
            solution adaptée, qui avait un sens, puisque le design me promettait
            liberté et créativité. Or, 4 ans plus tard, je réalise que ce n’est
            pas parce que je fais du design que je peux créer librement. En
            étant frontalement honnête avec moi-même, j’ai pu casser certains
            mythes et formuler clairement une nouvelle position :
          </p>
          <ul>
            <li>Le design n’est pas créativité.</li>
            <li>Le design n’est pas spécial. </li>
            <li>Le design est soumis au contexte. </li>
          </ul>
          <p>
            Si un individu considère par défaut que son travail serait quelque
            chose de forcément « <i>bon</i> », ou du moins inoffensif, alors il
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
            J’ai toujours inconsciemment cru que d’une certaine manière, par son
            aspect créatif, ou conceptuel, ou riche en éducation ou encore
            simplement interdisciplinaire, le design s’affranchissait des purs
            résultats objectifs, de la logique de libre-marché, des enjeux
            éthiques ou philosophiques et de la compétition des valeurs
            humaines.
          </p>
          <h4>Ce que le problème n'est pas</h4>
          <p>
            Ceci dit, mon premier but n’est pas de critiquer une quelconque
            pratique du design, mais d’appeler les designers à se poser des
            honnêtes questions sur leur travail afin qu’ils ne se mentent pas à
            eux-mêmes. C’est ce que j’ai moi-même fait, en me plaçant du « bon
            côté inoffensif » du design. Cela m’a fait du mal et m’a coupé la
            possibilité de me remettre en question, moi directement ou mon
            travail. C’est justement à ce moment-là que de profondes
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
          <h4>Ce que le problème n'est pas</h4>
          <p>
            Mon problème était que j’avais attribué une valeur intrinsèque au
            design : « <em>Je fais du design, donc c’est bien</em> », «{" "}
            <em>bien</em> » au sens «{" "}
            <em>bien pour moi et bien pour la société</em> ». Cette attribution
            de valeur inconditionnelle, je l’ai faite notamment en vertu du
            discours qui entoure le mot design : un discours de créativité, de
            concepts, de philosophie par l’action, de <em>savoir-faire</em>, de{" "}
            <em>bien-vivre</em>... bref un discours élitiste.
          </p>
          <p>
            C’est un discours qui revendique effectivement que «{" "}
            <em>le design, c’est bien</em> ». Or, je doute que le design des
            chambres à gaz et incinérateurs d’Auschwitz soit « <em>bien</em> ».
            Ou alors peut-être qu’il est bien sur le plan purement technique des
            critères <em>user-centered</em> du design et qu’il facilitait
            effectivement la difficile tâche du soldat allemand ? Est-ce ça, le
            design « <em>bien</em> » ? Pourtant je suis certain que ce n’est pas
            du design bien pour le designer et pour la société. Comment donc
            attribuer une valeur intrinsèque au mot design lorsqu’il est
            corruptible ?
          </p>
          <h4>Le danger des mots</h4>
          <p>
            Les mots qui désignent des disciplines sont des simplifications à la
            merci de l’opinion publique et ils peuvent entretenir une perception
            erronée ou limitée des valeurs qui y sont associées. Lorsqu’Edward
            Bernays constate que le terme « propagande » a une mauvaise
            réputation, il continue d’utiliser exactement les mêmes méthodes,
            mais simplement inventant un nouveau mot pour son travail : non plus
            « propaganda », mais « public relations ». [Jimmy Leipold,
            Propaganda: La fabrique du consentement]
          </p>
          <p>
            Les mots sont puissants et nous devrions nous en méfier. Placer une
            valeur intrinsèque dans le mot « design », c’est promouvoir une
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
            empêcherait ?), mais parce que toute la société a sacralisé le mot «
            art ». Cette attribution d’une valeur intrinsèque aux termes enlève
            la possibilité d’avoir un regard critique par tous et chacun sur les
            acteurs et les produits d’une discipline.
          </p>
          <p>
            Cela pourrait même ressembler à un mécanisme d’auto-défense des
            élites. Cependant, même les pratiquants les plus chevronnés peinent
            à mettre des mots sur cette distinction, car nombre d’exemples
            floutent les limites entre « <em>bon</em> » design et design au sens
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
            (par exemple :{" "}
            <i>un design peut s’insérer dans la vie quotidienne</i>, ou encore:{" "}
            <i>un design n’a pas l’impératif d’être lu pour être compris</i>).
            C’est donc à l’acteur de chaque discipline d’être un penseur,
            d’avoir des valeurs et de les transmettre à travers sa pratique. Le
            design n’est à mon sens, qu’un des nombreux moyens de se réaliser
            pour le penseur. <em>Il design è cosa mentale.</em>
          </p>
          <p>
            L’une des valeurs intrinsèques qu’on pourrait peut-être tout de même
            attribuer à ces disciplines est celle d’être un exutoire pour
            l’expressivité. Mais justement, le besoin d’y mettre du sien, de se
            réaliser à travers son design, de rendre ses idéaux de beauté et de
            société tangibles se place pour moi très souvent en opposition avec
            la notion de « répondre à ». Lorsqu’un client, un devoir ou une
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
            créatif :
          </p>
          <ul>
            <li>Pour qui est-ce que je designe ?</li>
            <li>Quelle est ma part de créativité ?</li>
          </ul>
          <p>
            Me poser ces questions honnêtement m’apaisent, parce qu’elles me
            permettent de m’accorder avec la réalité. En essayant d’aller au
            fond, en tentant de tout remettre en question sans respect pour le
            dogme, voici quelques exemples de ce qu’on pourrait en tirer.
          </p>
        </div>
        <div className={sStyles.RightBigColumnPadder}>
          <h3>Pour qui est-ce que je designe ?</h3>
          <p>
            Si je designe pour les utilisateurs d’un produit, ne suis-je pas en
            train de designer pour mon entreprise plutôt ? Le but de mon design
            ne serait-il pas qu’elle atteigne ses objectifs financiers à la fin
            du trimestre ? Ou simplement pour cette augmentation que j’attends ?
          </p>
          <p>
            Si je designe pour une consigne d’école, ne suis-je pas en train de
            designer pour mon collège de professeurs ? Ne suis-je pas en train
            de faire une quantité d’hypothèses hasardeuses sur leurs attentes ?
            Ne suis-je pas en train d’essayer d’émuler d’autres projets dont je
            connais leur appréciation ?
          </p>
          <p>
            Si je designe pour moi-même, mais que je publie régulièrement
            certains de ces designs personnels sur Instagram, ne-suis-je pas en
            train de designer pour mes followers plutôt ? Ou même plutôt pour
            les followers que je pourrais acquérir ? Pour les hashtags que je
            pourrais ajouter à mon prochain post ? Ne-suis-je pas en train de
            designer pour mon égo ?
          </p>
          <p>
            Si je designe pour moi-même, est-ce que je suis en train de
            contraindre ce design à des attentes, une image que je me suis
            construit de moi-même, et du type de design que moi, Nathan Vogel,
            suis supposé produire ? N’ai-je pas plusieurs images de moi-même ?{" "}
          </p>
          <h3>Quelle est ma part de créativité ? </h3>
          <p>
            Cette question m’invite à me demander si je suis vraiment en train
            de créer comme j’ai toujours supposé que je le faisais. Ai-je
            simplement suivi les exigences du problème à leur conclusion logique
            ? Sans même remettre en question le problème ? Et là où il me
            restait une marge de manœuvre créative, en ai-je profité pour
            explorer les possibilités ou y ai-je simplement substitué une
            solution copiée d’un autre projet, voir prédéterminée par la
            doctrine ?
          </p>
        </div>
        <div className={sStyles.LeftBigColumnPadder}>
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
            storytelling devenues si communes au 21ème siècle. [Christian
            Salmon, Storytelling] Depuis la nuit des temps, les développements
            technologiques ont alimenté toutes sortes de mythes y compris des
            religions entières et c’est particulièrement vrai des technologies
            de communication. [Erik Davis, TechGnosis] Les mythes du progrès
            alimentent sans aucun doute des illusions sur la nature du design
            comme celles qui étaient les miennes.
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
            que ces termes deviennent de plus en plus holistiques comme « User
            Experience Designer », ils sont de plus en plus étroitement liés aux
            structures corporates. On connaît bien sûr les critiques de
            l’influence du monde corporate sur la culture et la créativité.
            [Tibor Kalman, Fuck Committees], mais ces hiérarchies rendent
            difficile l’une des tâches du design : être un gatekeeper [Victor
            Papanek, Design for the Real World], être un rempart face au design
            sans éthique. Cette dépendance structurelle aux grandes entreprises
            s’oppose pour moi avec le modèle du studio indépendant ou du bureau
            d’architecture par exemple, foyers d’une créativité plus
            indépendante et d’une responsabilité plus large.
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
          <div className={sStyles.ParagraphSpacer} />
          <p>
            Ces deux questions, « <q>Pour qui est-ce que je designe ?</q> » et «{" "}
            <q>Quelle est ma part de créativité ?</q> » sont mes outils à moi
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
            Ma mère est architecte et a cette belle formulation : elle dit
            tenter de « <q>reconnaître lorsque je suis guidée par la peur.</q> »
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
            Designer, il répond à la question : «{" "}
            <q>
              Is it possible to have both, making money and doing good work?
            </q>{" "}
            » en disant:
            <blockquote>
              <p>
                « I remember a sentence in a Minale Tattersfield book that said:
                “In my experience, every designer whose prime aim in going into
                business was to make money while at the same time producing good
                design, failed on both counts. I believe that designing is
                something you have to do for love. If you are committed first
                and foremost to producing good design then you’ll make money as
                a by-product because good design is something people are willing
                to pay for. But that financial reward will be a bonus, a gift.”
                I agree. »
              </p>
              <cite>
                <p>[Sagmeister & Walsch, Answers]</p>
              </cite>
            </blockquote>
          </p>
          <h4>Maxime Büchi</h4>
          <p>
            Lors d’une conférence sur son travail pour Swiss Typefaces, il a été
            interrogé sur sa capacité à travailler pour des grandes corporations
            tout en préservant son potentiel créatif et répond en évoquant
            l’importance de comprendre ces structures corporates et dit qu’il
            est absolument vital de contrôler le processus de décision («
            decision-making ») et le récit (« the narrative »).
          </p>
          <h4>Alberto Pérez-Gómez </h4>
          <p>
            Cet architecte évoque l’essentialité de l’amour dans son livre,{" "}
            <i>Built upon Love</i>, que je n’ai pas encore lu :
          </p>
          <blockquote>
            <p>
              « In Built upon Love Pérez-Gómez uncovers the relationship between
              love and architecture in order to find the points of contact
              between poetics and ethics—between the architect’s wish to design
              a beautiful world and architecture’s imperative to provide a
              better place for society. »
            </p>
            <cite>
              <p>[Alberto Pérez-Gómez, Build upon Love]</p>
            </cite>
          </blockquote>
        </div>
        <div className={sStyles.ParagraphSpacer} />
        <div className={sStyles.RightBigColumnPadder}>
          <p>
            Toutes ces réflexions m’arrivent dessus à une période où j’attribue
            une nouvelle importance à la notion de sens de la vie. La question
            se pose donc pour moi : Comment faire du design qui ait un sens ?
            Ai-je envie de tirer un sens de ma pratique de designer ? Est-ce
            possible ? Si oui, comment ?
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
            d’ailleurs tragique pour l’individu ? Tout exutoire, même pour la
            créativité n’est pas forcément bon à prendre.
          </p>
          <p>
            Bref, si je suis sûr d’une chose maintenant, c’est qu’il m’est
            difficile de tirer un sens du design, puisque le design n’est pas
            spécial.
          </p>
        </div>
      </section>
    );
  }
}

export default SecondPart;
