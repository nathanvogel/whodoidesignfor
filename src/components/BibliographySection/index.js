import React from "react";
import "./zotero-styles.css";
import myStyles from "./styles.scss";
import styles from "../../shared-styles/styles-second-part.scss";
import sStyles from "../../shared-styles/styles.scss";

class BibliographySection extends React.Component {
  constructor() {
    super();
    this.ref_section = React.createRef();
  }

  componentDidMount() {}

  render() {
    return (
      <section className={myStyles.BibliographySection} ref={this.ref_section}>
        <div className={sStyles.LeftBigColumnPadder}>
          <h3>Bibliography</h3>

          <div className="csl-bib-body">
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src1">
                  <div className="csl-left-margin">1. </div>
                </a>
                SAGMEISTER, Stefan. Answers – Sagmeister &amp; Walsh.
                [en&nbsp;ligne].
                [Consulté&nbsp;le&nbsp;20&nbsp;février&nbsp;2019]. Disponible à
                l’adresse&nbsp;:{" "}
                <a href="http://sagmeisterwalsh.com/answers/">
                  http://sagmeisterwalsh.com/answers/
                </a>
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Answers%20%E2%80%93%20Sagmeister%20%26%20Walsh&amp;rft.identifier=http%3A%2F%2Fsagmeisterwalsh.com%2Fanswers%2F&amp;rft.aufirst=Stefan&amp;rft.aulast=Sagmeister&amp;rft.au=Stefan%20Sagmeister"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src2">
                  <div className="csl-left-margin">2. </div>
                </a>
                PEREZ-GOMEZ, Alberto.{" "}
                <i>
                  Built upon Love: Architectural Longing after Ethics and
                  Aesthetics
                </i>
                . The MIT Press, 2008.{" "}
              </div>
              <div className="csl-right-inline">
                A vision of architecture that transcends concerns of form and
                function and finds the connections between the architect’s wish
                to design a beautiful world and architecture’s imperative to
                provide a better place for society.The forced polarity between
                form and function in considerations of architecture—opposing art
                to social interests, ethics to poetic expression—obscures the
                deep connections between ethical and poetical values in
                architectural tradition. Architecture has been, and must
                continue to be, writes Alberto Pérez-Gómez, built upon love.
                Modernity has rightly rejected past architectural excesses, but,
                Pérez-Gómez argues, the materialistic and technological
                alternatives it proposes do not answer satisfactorily the
                complex desire that defines humanity. True architecture is
                concerned with far more than fashionable form, affordable homes,
                and sustainable development; it responds to a desire for an
                eloquent place to dwell—one that lovingly provides a sense of
                order resonant with our dreams. In Built upon Love Pérez-Gómez
                uncovers the relationship between love and architecture in order
                to find the points of contact between poetics and ethics—between
                the architect’s wish to design a beautiful world and
                architecture’s imperative to provide a better place for
                society.Eros, as first imagined by the early lyric poets of
                classical Greece, is the invisible force at the root of our
                capacity to create and comprehend the poetic image. Pérez-Gómez
                examines the nature of architectural form in the light of eros,
                seduction, and the tradition of the poetic image in Western
                architecture. He charts the ethical dimension of architecture,
                tracing the connections between philia—the love of friends that
                entails mutual responsibility among equals—and architectural
                program. He explores the position of architecture at the limits
                of language and discusses the analogical language of philia in
                modernist architectural theory. Finally, he uncovers connections
                between ethics and poetics, describing a contemporary practice
                of architecture under the sign of love, incorporating both eros
                and philia.
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Built%20upon%20Love%3A%20Architectural%20Longing%20after%20Ethics%20and%20Aesthetics&amp;rft.publisher=The%20MIT%20Press&amp;rft.aufirst=Alberto&amp;rft.aulast=Perez-Gomez&amp;rft.au=Alberto%20Perez-Gomez&amp;rft.date=2008&amp;rft.tpages=260&amp;rft.language=Anglais"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src3">
                  <div className="csl-left-margin">3. </div>
                </a>
                PAPANEK, Victor.{" "}
                <i>
                  Design for the Real World: Human Ecology and Social Change
                </i>
                . Revised edition. Chicago, Ill&nbsp;: Chicago Review Press,
                2005. ISBN&nbsp;978-0-89733-153-1.{" "}
              </div>
              <div className="csl-right-inline">
                Design for the Real World has, since its first appearance
                twenty-five years ago, become a classic. Translated into
                twenty-three languages, it is one of the world’s most widely
                read books on design. In this edition, Victor Papanek examines
                the attempts by designers to combat the tawdry, the unsafe, the
                frivolous, the useless product, once again providing a blueprint
                for sensible, responsible design in this world which is
                deficient in resources and energy.
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=urn%3Aisbn%3A978-0-89733-153-1&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Design%20for%20the%20Real%20World%3A%20Human%20Ecology%20and%20Social%20Change&amp;rft.place=Chicago%2C%20Ill&amp;rft.publisher=Chicago%20Review%20Press&amp;rft.edition=Revised%20edition&amp;rft.aufirst=Victor&amp;rft.aulast=Papanek&amp;rft.au=Victor%20Papanek&amp;rft.date=2005-08-30&amp;rft.tpages=416&amp;rft.isbn=978-0-89733-153-1&amp;rft.language=English"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src4">
                  <div className="csl-left-margin">4. </div>
                </a>
                MONTEIRO, Mike. Design’s Lost Generation. <i>Mike Monteiro</i>{" "}
                [en&nbsp;ligne]. 19 février 2018.
                [Consulté&nbsp;le&nbsp;20&nbsp;février&nbsp;2019]. Disponible à
                l’adresse&nbsp;:{" "}
                <a href="https://medium.com/@monteiro/designs-lost-generation-ac7289549017">
                  https://medium.com/@monteiro/designs-lost-generation-ac7289549017
                </a>
              </div>
              <div className="csl-right-inline">
                A year ago I was in the audience at a gathering of designers in
                San Francisco. There were four designers on stage, and two of
                them worked…
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=blogPost&amp;rft.title=Design%E2%80%99s%20Lost%20Generation&amp;rft.description=A%20year%20ago%20I%20was%20in%20the%20audience%20at%20a%20gathering%20of%20designers%20in%20San%20Francisco.%20There%20were%20four%20designers%20on%20stage%2C%20and%20two%20of%20them%20worked%E2%80%A6&amp;rft.identifier=https%3A%2F%2Fmedium.com%2F%40monteiro%2Fdesigns-lost-generation-ac7289549017&amp;rft.aufirst=Mike&amp;rft.aulast=Monteiro&amp;rft.au=Mike%20Monteiro&amp;rft.date=2018-02-19"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src5">
                  <div className="csl-left-margin">5. </div>
                </a>
                MOGGRIDGE, Bill. <i>Designing Interactions</i>. 1 edition.
                Cambridge, Mass&nbsp;: The MIT Press, 2007.
                ISBN&nbsp;978-0-262-13474-3.{" "}
              </div>
              <div className="csl-right-inline">
                A pioneer in interaction design tells the stories of designers
                who changed the way people use everyday things in the digital
                era, interviewing the founders of Google, the creator of The
                Sims, the inventors and developers of the mouse and the desktop,
                and many others.Digital technology has changed the way we
                interact with everything from the games we play to the tools we
                use at work. Designers of digital technology products no longer
                regard their job as designing a physical object―beautiful or
                utilitarian―but as designing our interactions with it. In
                Designing Interactions, award-winning designer Bill Moggridge
                introduces us to forty influential designers who have shaped our
                interaction with technology. Moggridge, designer of the first
                laptop computer (the GRiD Compass, 1981) and a founder of the
                design firm IDEO, tells us these stories from an industry
                insider’s viewpoint, tracing the evolution of ideas from
                inspiration to outcome. The innovators he interviews―including
                Will Wright, creator of The Sims, Larry Page and Sergey Brin,
                the founders of Google, and Doug Engelbart, Bill Atkinson, and
                others involved in the invention and development of the mouse
                and the desktop―have been instrumental in making a difference in
                the design of interactions. Their stories chart the history of
                entrepreneurial design development for technology.Moggridge and
                his interviewees discuss such questions as why a personal
                computer has a window in a desktop, what made Palm’s handheld
                organizers so successful, what turns a game into a hobby, why
                Google is the search engine of choice, and why 30 million people
                in Japan choose the i-mode service for their cell phones. And
                Moggridge tells the story of his own design process and explains
                the focus on people and prototypes that has been successful at
                IDEO―how the needs and desires of people can inspire innovative
                designs and how prototyping methods are evolving for the design
                of digital technology.Designing Interactions is illustrated with
                more than 700 images, with color throughout. Accompanying the
                book is a DVD that contains segments from all the interviews
                intercut with examples of the interactions under
                discussion.Interviews with:Bill Atkinson, Durrell Bishop,
                Brendan Boyle, Dennis Boyle, Paul Bradley, Duane Bray, Sergey
                Brin, Stu Card, Gillian Crampton Smith, Chris Downs, Tony Dunne,
                John Ellenby, Doug Englebart, Jane Fulton Suri, Bill Gaver, Bing
                Gordon, Rob Haitani, Jeff Hawkins, Matt Hunter, Hiroshi Ishii,
                Bert Keely, David Kelley, Rikako Kojima, Brenda Laurel, David
                Liddle, Lavrans Løvlie, John Maeda, Paul Mercer, Tim Mott, Joy
                Mountford, Takeshi Natsuno, Larry Page, Mark Podlaseck, Fiona
                Raby, Cordell Ratzlaff, Ben Reason, Jun Rekimoto, Steve Rogers,
                Fran Samalionis, Larry Tesler, Bill Verplank, Terry Winograd,
                Will Wright
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=urn%3Aisbn%3A978-0-262-13474-3&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Designing%20Interactions&amp;rft.place=Cambridge%2C%20Mass&amp;rft.publisher=The%20MIT%20Press&amp;rft.edition=1%20edition&amp;rft.aufirst=Bill&amp;rft.aulast=Moggridge&amp;rft.au=Bill%20Moggridge&amp;rft.date=2007-10-01&amp;rft.tpages=766&amp;rft.isbn=978-0-262-13474-3&amp;rft.language=English"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src6">
                  <div className="csl-left-margin">6. </div>
                </a>
                KALMAN, Tibor. Fuck Committees. [en&nbsp;ligne]. juin 1998.
                [Consulté&nbsp;le&nbsp;20&nbsp;février&nbsp;2019]. Disponible à
                l’adresse&nbsp;:{" "}
                <a href="http://www.manifestoproject.it/fuck-committees/">
                  http://www.manifestoproject.it/fuck-committees/
                </a>
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=blogPost&amp;rft.title=Fuck%20Committees%20%E2%86%92%20Manifesto%20ProjectManifesto%20Project&amp;rft.identifier=http%3A%2F%2Fwww.manifestoproject.it%2Ffuck-committees%2F&amp;rft.aufirst=Tibor&amp;rft.aulast=Kaman&amp;rft.au=Tibor%20Kaman&amp;rft.date=1998-06&amp;rft.language=en-US"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src7">
                  <div className="csl-left-margin">7. </div>
                </a>
                CENTER FOR HUMANE TECHNOLOGY. How to Design.{" "}
                <i>Center for Humane Technology</i> [en&nbsp;ligne].
                [Consulté&nbsp;le&nbsp;20&nbsp;février&nbsp;2019]. Disponible à
                l’adresse&nbsp;:{" "}
                <a href="http://humanetech.com/designers">
                  http://humanetech.com/designers
                </a>
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=How%20to%20Design&amp;rft.identifier=http%3A%2F%2Fhumanetech.com%2Fdesigners&amp;rft.aulast=Center%20for%20Humane%20Technology&amp;rft.au=Center%20for%20Humane%20Technology&amp;rft.language=en-US"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src8">
                  <div className="csl-left-margin">8. </div>
                </a>
                GORDON, Jeremy. Is Everything Wrestling?{" "}
                <i>The New York Times</i> [en&nbsp;ligne]. 21 décembre 2017.
                [Consulté&nbsp;le&nbsp;20&nbsp;février&nbsp;2019]. Disponible à
                l’adresse&nbsp;:{" "}
                <a href="https://www.nytimes.com/2016/05/27/magazine/is-everything-wrestling.html">
                  https://www.nytimes.com/2016/05/27/magazine/is-everything-wrestling.html
                </a>
              </div>
              <div className="csl-right-inline">
                The fake “reality” of professional wrestling has become the new
                norm — from entertainment to politics, and everywhere in
                between.
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=newspaperArticle&amp;rft.title=Is%20Everything%20Wrestling%3F&amp;rft.source=The%20New%20York%20Times&amp;rft.description=The%20fake%20%E2%80%9Creality%E2%80%9D%20of%20professional%20wrestling%20has%20become%20the%20new%20norm%20%E2%80%94%20from%20entertainment%20to%20politics%2C%20and%20everywhere%20in%20between.&amp;rft.identifier=https%3A%2F%2Fwww.nytimes.com%2F2016%2F05%2F27%2Fmagazine%2Fis-everything-wrestling.html&amp;rft.aufirst=Jeremy&amp;rft.aulast=Gordon&amp;rft.au=Jeremy%20Gordon&amp;rft.date=2017-12-21&amp;rft.issn=0362-4331&amp;rft.language=en-US"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src9">
                  <div className="csl-left-margin">9. </div>
                </a>
                LYOTARD, Jean-François.{" "}
                <i>LA CONDITION POSTMODERNE. : Rapport sur le savoir</i>.
                Paris&nbsp;: Editions de Minuit, 1979.
                ISBN&nbsp;978-2-7073-0276-2.
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=urn%3Aisbn%3A978-2-7073-0276-2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=LA%20CONDITION%20POSTMODERNE.%20%3A%20Rapport%20sur%20le%20savoir&amp;rft.place=Paris&amp;rft.publisher=Editions%20de%20Minuit&amp;rft.aufirst=Jean-Fran%C3%A7ois&amp;rft.aulast=Lyotard&amp;rft.au=Jean-Fran%C3%A7ois%20Lyotard&amp;rft.date=1979-09-01&amp;rft.tpages=109&amp;rft.isbn=978-2-7073-0276-2&amp;rft.language=Fran%C3%A7ais"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src10">
                  <div className="csl-left-margin">10. </div>
                </a>
                LEIPOLD, Jimmy. <i>Propaganda: La fabrique du consentement</i>{" "}
                [en&nbsp;ligne]. 2017.
                [Consulté&nbsp;le&nbsp;20&nbsp;octobre&nbsp;2018]. Disponible à
                l’adresse&nbsp;:{" "}
                <a href="http://www.imdb.com/title/tt8480438/">
                  http://www.imdb.com/title/tt8480438/
                </a>
              </div>
              <div className="csl-right-inline">
                Directed by Jimmy Leipold.&nbsp; With Ann Bernays, Edward
                Bernays, Charles Chaplin, Noam Chomsky.
              </div>
              <div className="csl-right-inline">IMDb ID: tt8480438</div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=film&amp;rft.title=Propaganda%3A%20La%20fabrique%20du%20consentement&amp;rft.description=Directed%20by%20Jimmy%20Leipold.%20%20With%20Ann%20Bernays%2C%20Edward%20Bernays%2C%20Charles%20Chaplin%2C%20Noam%20Chomsky.&amp;rft.identifier=http%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt8480438%2F&amp;rft.aufirst=Jimmy&amp;rft.aulast=Leipold&amp;rft.au=Jimmy%20Leipold&amp;rft.date=2017"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src11">
                  <div className="csl-left-margin">11. </div>
                </a>
                THINKERVIEW.{" "}
                <i>
                  Quand la Science appelle à l’aide pour l’humanité ? Aurélien
                  Barrau, Astrophysicien [EN DIRECT]
                </i>{" "}
                [en&nbsp;ligne].
                [Consulté&nbsp;le&nbsp;20&nbsp;février&nbsp;2019]. Disponible à
                l’adresse&nbsp;:{" "}
                <a href="https://www.youtube.com/watch?v=XO4q9oVrWWw&amp;t=3067">
                  https://www.youtube.com/watch?v=XO4q9oVrWWw&amp;t=3067
                </a>
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=videoRecording&amp;rft.title=Quand%20la%20Science%20appelle%20%C3%A0%20l'aide%20pour%20l'humanit%C3%A9%20%3F%20Aur%C3%A9lien%20Barrau%2C%20Astrophysicien%20%5BEN%20DIRECT%5D&amp;rft.identifier=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXO4q9oVrWWw%26t%3D3067&amp;rft.au=undefined"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src12">
                  <div className="csl-left-margin">12. </div>
                </a>
                KLEON, Austin.{" "}
                <i>
                  Steal Like an Artist: 10 Things Nobody Told You About Being
                  Creative
                </i>
                . 1 edition. New York&nbsp;: Workman Publishing, 2012.
                ISBN&nbsp;978-0-7611-6925-3.{" "}
              </div>
              <div className="csl-right-inline">
                You don’t need to be a genius, you just need to be yourself.
                That’s the message from Austin Kleon, a young writer and artist
                who knows that creativity is everywhere, creativity is for
                everyone. A manifesto for the digital age, Steal Like an Artist
                is a guide whose positive message, graphic look and
                illustrations, exercises, and examples will put readers directly
                in touch with their artistic side. When Mr. Kleon was asked to
                address college students in upstate New York, he shaped his
                speech around the ten things he wished someone had told him when
                he was starting out. The talk went viral, and its author dug
                deeper into his own ideas to create Steal Like an Artist, the
                book. The result is inspiring, hip, original, practical, and
                entertaining. And filled with new truths about creativity:
                Nothing is original, so embrace influence, collect ideas, and
                remix and re-imagine to discover your own path. Follow your
                interests wherever they take you. Stay smart, stay out of debt,
                and risk being boring—the creative you will need to make room to
                be wild and daring in your imagination.
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=urn%3Aisbn%3A978-0-7611-6925-3&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Steal%20Like%20an%20Artist%3A%2010%20Things%20Nobody%20Told%20You%20About%20Being%20Creative&amp;rft.place=New%20York&amp;rft.publisher=Workman%20Publishing&amp;rft.edition=1%20edition&amp;rft.aufirst=Austin&amp;rft.aulast=Kleon&amp;rft.au=Austin%20Kleon&amp;rft.date=2012-02-28&amp;rft.tpages=160&amp;rft.isbn=978-0-7611-6925-3&amp;rft.language=English"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src13">
                  <div className="csl-left-margin">13. </div>
                </a>
                SALMON, Christian.{" "}
                <i>
                  Storytelling : La machine à fabriquer des histoires et à
                  formater les esprits
                </i>
                . Paris&nbsp;: Editions La Découverte, 2007.
                ISBN&nbsp;978-2-7071-4955-8.
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=urn%3Aisbn%3A978-2-7071-4955-8&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Storytelling%20%3A%20La%20machine%20%C3%A0%20fabriquer%20des%20histoires%20et%20%C3%A0%20formater%20les%20esprits&amp;rft.place=Paris&amp;rft.publisher=Editions%20La%20D%C3%A9couverte&amp;rft.aufirst=Christian&amp;rft.aulast=Salmon&amp;rft.au=Christian%20Salmon&amp;rft.date=2007&amp;rft.tpages=239&amp;rft.isbn=978-2-7071-4955-8&amp;rft.language=Fran%C3%A7ais"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src14">
                  <div className="csl-left-margin">14. </div>
                </a>
                DAVIS, Erik et THACKER, Eugene.{" "}
                <i>
                  TechGnosis: Myth, Magic, and Mysticism in the Age of
                  Information
                </i>
                . Reprint edition. Berkeley, California&nbsp;: North Atlantic
                Books, 2015. ISBN&nbsp;978-1-58394-930-6.{" "}
              </div>
              <div className="csl-right-inline">
                How does our fascination with technology intersect with the
                religious imagination? In&nbsp;TechGnosis—a cult classic now
                updated and reissued with a new afterword—Erik Davis argues that
                while the realms of the digital and the spiritual may seem
                worlds apart, esoteric and religious impulses have in fact
                always permeated (and sometimes inspired) technological
                communication. Davis uncovers startling connections between such
                seemingly disparate topics as electricity and alchemy; online
                roleplaying games and religious and occult practices; virtual
                reality and gnostic mythology; programming languages and
                Kabbalah. The final chapters address the apocalyptic dreams that
                haunt technology, providing vital historical context as well as
                new ways to think about a future defined by the mutant
                intermingling of mind and machine, nightmare and fantasy.
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=urn%3Aisbn%3A978-1-58394-930-6&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=TechGnosis%3A%20Myth%2C%20Magic%2C%20and%20Mysticism%20in%20the%20Age%20of%20Information&amp;rft.place=Berkeley%2C%20California&amp;rft.publisher=North%20Atlantic%20Books&amp;rft.edition=Reprint%20edition&amp;rft.aufirst=Erik&amp;rft.aulast=Davis&amp;rft.au=Erik%20Davis&amp;rft.au=Eugene%20Thacker&amp;rft.date=2015-03-17&amp;rft.tpages=456&amp;rft.isbn=978-1-58394-930-6&amp;rft.language=English"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src15">
                  <div className="csl-left-margin">15. </div>
                </a>
                MONTEIRO, Mike.{" "}
                <i>
                  Webstock 2013: Mike Monteiro - How Designers Destroyed the
                  World
                </i>{" "}
                [en&nbsp;ligne]. 16 juin 2013.
                [Consulté&nbsp;le&nbsp;20&nbsp;février&nbsp;2019]. Disponible à
                l’adresse&nbsp;:{" "}
                <a href="https://vimeo.com/68470326">
                  https://vimeo.com/68470326
                </a>
              </div>
              <div className="csl-right-inline">
                You are directly responsible for what you put into the world.
                Yet every day designers all over the world work on projects
                without giving any thought or consideration...
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=videoRecording&amp;rft.title=Webstock%202013%3A%20Mike%20Monteiro%20-%20How%20Designers%20Destroyed%20the%20World&amp;rft.description=You%20are%20directly%20responsible%20for%20what%20you%20put%20into%20the%20world.%20Yet%20every%20day%20designers%20all%20over%20the%20world%20work%20on%20projects%20without%20giving%20any%20thought%20or%20consideration%26hellip%3B&amp;rft.identifier=https%3A%2F%2Fvimeo.com%2F68470326&amp;rft.aufirst=Mike&amp;rft.aulast=Monteiro&amp;rft.au=Mike%20Monteiro&amp;rft.date=2013-06-16"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src16">
                  <div className="csl-left-margin">16. </div>
                </a>
                MÜLLER, Boris. Why Do All Websites Look the Same? – Member
                Feature Stories. <i>Medium</i> [en&nbsp;ligne]. 15 septembre
                2018. [Consulté&nbsp;le&nbsp;20&nbsp;février&nbsp;2019].
                Disponible à l’adresse&nbsp;:{" "}
                <a href="https://medium.com/s/story/on-the-visual-weariness-of-the-web-8af1c969ce73">
                  https://medium.com/s/story/on-the-visual-weariness-of-the-web-8af1c969ce73
                </a>
              </div>
              <div className="csl-right-inline">
                The internet suffers from a lack of imagination, so I asked my
                students to redesign it
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Why%20Do%20All%20Websites%20Look%20the%20Same%3F%20%E2%80%93%20Member%20Feature%20Stories&amp;rft.description=The%20internet%20suffers%20from%20a%20lack%20of%20imagination%2C%20so%20I%20asked%20my%20students%20to%20redesign%20it&amp;rft.identifier=https%3A%2F%2Fmedium.com%2Fs%2Fstory%2Fon-the-visual-weariness-of-the-web-8af1c969ce73&amp;rft.aufirst=Boris&amp;rft.aulast=M%C3%BCller&amp;rft.au=Boris%20M%C3%BCller&amp;rft.date=2018-09-15"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src17">
                  <div className="csl-left-margin">17. </div>
                </a>
                CHASLOT, Guillaume. YouTube announced they will stop
                recommending some conspiracy theories such as flat earth. I
                worked on the AI that promoted them by the *billions*. Here is
                why it’s a historic victory. Thread. 1/https://bit.ly/2MMXNGn.{" "}
                <i>@gchaslot</i> [en&nbsp;ligne]. 9 février 2019.
                [Consulté&nbsp;le&nbsp;21&nbsp;février&nbsp;2019]. Disponible à
                l’adresse&nbsp;:{" "}
                <a href="https://twitter.com/gchaslot/status/1094359564559044610">
                  https://twitter.com/gchaslot/status/1094359564559044610
                </a>
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=blogPost&amp;rft.title=YouTube%20announced%20they%20will%20stop%20recommending%20some%20conspiracy%20theories%20such%20as%20flat%20earth.%20I%20worked%20on%20the%20AI%20that%20promoted%20them%20by%20the%20*billions*.%20Here%20is%20why%20it%E2%80%99s%20a%20historic%20victory.%20Thread.%201%2Fhttps%3A%2F%2Fbit.ly%2F2MMXNGn&amp;rft.identifier=https%3A%2F%2Ftwitter.com%2Fgchaslot%2Fstatus%2F1094359564559044610&amp;rft.aufirst=Guillaume&amp;rft.aulast=Chaslot&amp;rft.au=Guillaume%20Chaslot&amp;rft.date=2019-02-09&amp;rft.language=en"
            />
            <div className="csl-entry">
              <div className="csl-right-inline">
                <a id="src18">
                  <div className="csl-left-margin">18. </div>
                </a>
                SNOWDEN, Edward. Edward Snowden (@Snowden) | Twitter.{" "}
                <i>Twitter</i> [en&nbsp;ligne].
                [Consulté&nbsp;le&nbsp;1&nbsp;mars&nbsp;2019]. Disponible à
                l’adresse&nbsp;:{" "}
                <a href="https://twitter.com/Snowden">
                  https://twitter.com/Snowden
                </a>
              </div>
            </div>
            <span
              className="Z3988"
              title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Edward%20Snowden%20(%40Snowden)%20%7C%20Twitter&amp;rft.description=I%20used%20to%20work%20for%20the%20government.%20Now%20I%20work%20for%20the%20public.%20President%20at%20%40FreedomofPress.&amp;rft.identifier=https%3A%2F%2Ftwitter.com%2FSnowden&amp;rft.aufirst=Edward&amp;rft.aulast=Snowden&amp;rft.au=Edward%20Snowden"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default BibliographySection;
