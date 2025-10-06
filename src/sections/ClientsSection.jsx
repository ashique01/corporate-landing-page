import React from "react";
import "../less/clientsSection.less";

// sample imports (replace with your actual images later)
import AdPlay from "/assets/images/brand/adplay.png";
import AgaKhan from "/assets/images/brand/aga_khan.png";
import BangladeshFinance from "/assets/images/brand/bangladeshFinance.png";
import BaridharaCospmopolitan from "/assets/images/brand/baridhara_cosmopolitan.png";
import Bakhrabaad from "/assets/images/brand/bakhrabaad.jpeg";
import BIT from "/assets/images/brand/bit.png";
import BracNet from "/assets/images/brand/bracnet.png";
import BGCL from "/assets/images/brand/bgcl.png";
import CadetCollegeClub from "/assets/images/brand/cccl.png";
import CommunityBank from "/assets/images/brand/community_bank.png";
import Coventina from "/assets/images/brand/conventina.png";
import CTSL from "/assets/images/brand/CTSL.png";
import Enroute from "/assets/images/brand/enroute.png";
import Entratek from "/assets/images/brand/entratek.png";
import Gic from "/assets/images/brand/gic.png";
import IdeaScale from "/assets/images/brand/ideascale.png";
import ITA from "/assets/images/brand/ITA.png";
import Mir from "/assets/images/brand/mir.png";
import MonstarLab from "/assets/images/brand/monstarlab.png";
import Navana from "/assets/images/brand/navana_lpg.png";
import NowVision from "/assets/images/brand/nowVision.png";
import Patrons from "/assets/images/brand/patrons.png";
import Playpen from "/assets/images/brand/playpen.png";
import QuestionPro from "/assets/images/brand/questionPro.png";
import redox from "/assets/images/brand/redox.jfif";
import SakataInx from "/assets/images/brand/sakatainx.png";
import SigmaGroup from "/assets/images/brand/sigma.jfif";
import SoftWrd from "/assets/images/brand/softwrd.png";
import Taskeater from "/assets/images/brand/taskeater.png";
import TheWhiteHouse from "/assets/images/brand/the_white_house.png";
import Ticon from "/assets/images/brand/ticon.png";
import TigerIT from "/assets/images/brand/tiger_it.png";
import TreeHouse from "/assets/images/brand/treehouse.png";
import Ultima from "/assets/images/brand/ultima.png";
import UsEmbassy from "/assets/images/brand/US_Embassy.png";

// button icon
import ViewMoreIcon from "/assets/icons/brand/chevron-left-svgrepo-com 1.svg";

class ClientsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showAll: false,
      visibleCount: 10
    };
    this.toggleView = this.toggleView.bind(this);
    this.updateVisibleCount = this.updateVisibleCount.bind(this);
  }

  componentDidMount() {
    this.updateVisibleCount();
    window.addEventListener("resize", this.updateVisibleCount);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateVisibleCount);
  }

  updateVisibleCount() {
    if (window.innerWidth <= 600) {
      this.setState({ visibleCount: 9 });
    } else {
      this.setState({ visibleCount: 10 });
    }
  }

  toggleView() {
    this.setState((prev) => ({ showAll: !prev.showAll }));
  }

  render() {
    var clients = [
      { logo: AdPlay, name: "AdPlay Technology Limited" },
      { logo: AgaKhan, name: "Aga Khan School, Dhaka" },
      { logo: BangladeshFinance, name: "Bangladesh Finance Limited" },
      { logo: BaridharaCospmopolitan, name: "Baridhara Cosmopolitan Club" },
      { logo: Bakhrabaad, name: "Bakhrabad Gas Distribution Company Limited " },
      { logo: BIT, name: "Bangladesh International Tutorial (BIT)" },
      { logo: BracNet, name: "BRACNet Limited" },
      { logo: BGCL, name: "BUET Graduates Club Ltd." },
      { logo: CadetCollegeClub, name: "Cadet College Club Ltd." },
      { logo: CommunityBank, name: "Community Bank Bangladesh Limited" },
      { logo: Coventina, name: "Coventina Lake Suites" },
      { logo: CTSL, name: "Container Transportation Services Limited (CTSL)" },
      { logo: Enroute, name: "Enroute International Ltd." },
      { logo: Entratek, name: "Entratek Bangladesh Ltd" },
      { logo: Gic, name: "Global Immigration Consultants Ltd" },
      { logo: IdeaScale, name: "Ideascale Bangladesh Limited" },
      { logo: ITA, name: "International Talent Academy" },
      { logo: Mir, name: "Mir Group of Companies Limited" },
      { logo: MonstarLab, name: "Monstarlab Enterprise Solutions Ltd." },
      { logo: Navana, name: "Navana LPG Ltd." },
      { logo: NowVision, name: "NEW Vision Solution Limited" },
      { logo: Patrons, name: "Patrons Venture Ltd" },
      { logo: Playpen, name: "Playpen School" },
      { logo: QuestionPro, name: "QuestionPro Limited" },
      { logo: redox, name: "Redox Chemical Industries Ltd" },
      { logo: SakataInx, name: "Sakata INX" },
      { logo: SigmaGroup, name: "Sigma Group Bangladesh" },
      { logo: SoftWrd, name: "Softwrd Ltd." },
      { logo: Taskeater, name: "Taskeater Bangladesh Ltd." },
      { logo: TheWhiteHouse, name: "TST White House Limited" },
      { logo: Ticon, name: "TiCON System Ltd." },
      { logo: TigerIT, name: "Tiger IT Bangladesh Ltd." },
      { logo: TreeHouse, name: "Tree House" },
      { logo: Ultima, name: "Ultima Bangladesh (Water Purifiers)" },
      { logo: UsEmbassy, name: "U.S. Embassy Dhaka" },
    ];

    const { showAll, visibleCount } = this.state;
    const visibleClients = showAll ? clients : clients.slice(0, visibleCount);

    return (
      <section className="clients-section">
        <h2 className="clients-title">Our Clients</h2>

        <div className="clients-grid-container">
          <div className="clients-grid">
            {visibleClients.map((client, index) => (
              <div className="client-card" key={index}>
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                />
                <p className="client-name">{client.name}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="view-more-btn" onClick={this.toggleView}>
          {showAll ? "View Less" : "View More"}
          <img
            src={ViewMoreIcon}
            alt="toggle"
            className={showAll ? "rotated" : ""}
          />
        </button>
      </section>
    );
  }
}

export default ClientsSection;