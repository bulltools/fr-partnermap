const distributors = [
     {
        "name": "VWR",
        "locations": [
          { "lat": 55.7388459, "lng": 10.0172208, "country": "Denmark" }
        ],
        "info": "Avantor is a reliable global partner for our customers and suppliers in Life Science and other advanced industry and production.",
        "contact": "mailto:ordre.dk@avantorsciences.com",
        "website": "https://dk.vwr.com/store/catalog/product.jsp?catalog_number=FLOW500017468",
        "logo": "assets/logos/vwr.jpg"
     },
     {
        "name": "Flow Robotics HQ",
        "locations": [
          { "lat": 55.7003828, "lng": 12.5298435, "country": "Denmark" }
        ],
        "info": "We make automation technology accessible for all by breaking down the technology barriers – always seeking solutions to improve workflows.",
        "contact": "mailto:info@flow-robotics.com",
        "website": "https://flow-robotics.com",
        "logo": "assets/logos/flow-robotics.png"
      },
      {
        "name": "Berner Group",
        "locations": [
          { "lat": 64.0000, "lng": 26.0000, "country": "Finland" }
        ],
        "info": "Berner Lab, established in 1983 under Berner Oy, offers a wide range of lab equipment and services to various industries, public sectors, and research labs. Renowned for its product diversity, expertise, and local service, it focuses on innovative, customized solutions.",
        "contact": "mailto:info@berner.fi",
        "website": "https://www.bernerlab.fi/flow-roboticsin-flowbot-one-vapauttaa-aikaa-manuaaliselta-pipetoinnilta/",
        "logo": "assets/logos/berner.png"
      },
      {
        "name": "LAB Sweden",
        "locations": [
          { "lat": 59.2402508, "lng": 18.1153213, "country": "Sweden" },
          { "lat": 59.9139, "lng": 10.7522, "country": "Norway" },
        ],
        "info": "LAB Sweden offers a range of lab equipment and instruments to universities, hospitals, and industry. Specializing in five areas: Analytical Chemistry, Automation, Basic Equipment, Bio/Life Science, and Consumables, sourced from top global producers",
        "contact": "mailto:info@lab.se",
        "website": "https://sweden.lab.se/produkt/automation/vatskehantering-och-automatisering/vatskehanteringsrobot-flowbot-one/",
        "logo": "assets/logos/lab-sweden.jpg"
      },
      {
        "name": "Lanmer Automation",
        "locations": [
          { "lat": 58.5953, "lng": 25.0136, "country": "Estonia" },
          { "lat": 56.8796, "lng": 24.6032, "country": "Latvia" },
          { "lat": 55.1694, "lng": 23.8813, "country": "Lithuania" }
        ],
        "info": "Laboratory Equipment Supplier in Estonia. Also covering Latvia and Lithuania.",
        "contact": "lanmer@lanmer.eu",
        "website": "https://lanmer-laboratory-equipment-supplier.business.site/?utm_source=gmb&utm_medium=referral",
        "logo": "assets/logos/lanmer.png"
      },
      {
        "name": "Labhelp",
        "locations": [
          { "lat": 51.3713067, "lng": 5.2344097, "country": "Netherlands" }
        ],
        "info": "LabHelp has over 25 years of experience in molecular diagnostics, equipment automation, and middleware solutions, with a decade of expertise in the latter.",
        "contact": "Contact",
        "website": "https://www.labhelp.nl/component/sppagebuilder/page/27",
        "logo": "assets/logos/labhelp.png"
      },
      {
        "name": "Sopachem",
        "locations": [
          { "lat": 50.9380816, "lng": 3.6312192, "country": "Belgium" }
        ],
        "info": "Sopachem nv/sa is an ISO 9002 certified distributor of instruments and reagents.",
        "contact": "Contact",
        "website": "https://www.sopachem.com/lifesciences/portfolio/flowbot-one/",
        "logo": "assets/logos/sopachem.png"
      },
      {
        "name": "Appleton Woods",
        "locations": [
          { "lat": 52.4109608, "lng": -1.941499, "country": "UK" }
        ],
        "info": "Appleton Woods offers a comprehensive range of quality products provided with strong technical support and excellent customer service.",
        "contact": "Contact",
        "website": "https://www.appletonwoods.co.uk/product/flowbot-one-with-hepa-filter/",
        "logo": "assets/logos/appleton-woods.png"
      },
      {
        "name": "Accuscience",
        "locations": [
          { "lat": 53.215663, "lng": -6.706841, "country": "Ireland" }
        ],
        "info": "Accuscience is providing tailor-made solutions to grow brands and build relationships.",
        "contact": "Contact",
        "website": "https://www.accuscience.ie/",
        "logo": "assets/logos/accuscience.webp"
      },
      {
        "name": "ALAB",
        "locations": [
          { "lat": 52.2297, "lng": 21.0122, "country": "Poland" }
        ],
        "info": "ALAB is a diagnostic laboratory in Poland.",
        "contact": "Contact",
        "website": "https://www.alablaboratoria.pl/",
        "logo": "assets/logos/alab-laboratoria.svg"
      },
      {
        "name": "Medlabdia",
        "locations": [
          { "lat": 52.5200, "lng": 13.4050, "country": "Germany" },
          { "lat": 48.2082, "lng": 16.3738, "country": "Austria" }
        ],
        "info": "medlabdia is an independent global specialized solution provider for life science and clinical diagnostic customers, offering complete solutions with new and pre-owned systems, validated consumables and excellent services.",
        "contact": "Contact",
        "website": "https://www.linkedin.com/company/medlabdia/?originalSubdomain=de",
        "logo": "assets/logos/medlabdia.jpg"
      },
      {
        "name": "PromedeusLab",
        "locations": [
          { "lat": 50.0755, "lng": 14.4378, "country": "Czech Republic" }
        ],
        "info": "PromedeusLab brings cutting edge laboratory solutions enabling implementation of innovative methods, increased productivity and efficiency.",
        "contact": "Contact",
        "website": "https://www.promedeuslab.cz/",
        "logo": "assets/logos/promedeus.png"
      },
      {
        "name": "Milian",
        "locations": [
          { "lat": 46.2044, "lng": 6.1432, "country": "Switzerland" }
        ],
        "info": "Milian is a distribution company belonging to the Dutscher group. For more than 60 years, Milian provides to public and private research laboratories presenting consumables lines and equipment with proven quality to reach our clients requirements.",
        "contact": "Contact",
        "website": "https://www.milian.com/",
        "logo": "assets/logos/milian.webp"
      },
      {
        "name": "Sanolabor",
        "locations": [
          { "lat": 46.1331822, "lng": 14.5275402, "country": "Slovenia" }
        ],
        "info": "Sanolabor are the largest Slovenian company for the wholesale and marketing of medical devices, medical and hospital equipment, laboratory equipment and disposals and PP and dental products.",
        "contact": "Contact",
        "website": "https://sanolabor.com/",
        "logo": "assets/logos/sanolabor.png"
      },
      {
        "name": "Alenium",
        "locations": [
          { "lat": 41.3851, "lng": 2.1734, "country": "Spain" },
          { "lat": 38.7223, "lng": -9.1393, "country": "Portugal" }
        ],
        "info": "Alenium is the laboratory provider of the 21st century.",
        "contact": "Contact",
        "website": "https://alenium.es",
        "logo": "assets/logos/alenium.png"
      },
      {
        "name": "Atropos",
        "locations": [
          { "lat": 37.9838, "lng": 23.7275, "country": "Greece" }
        ],
        "info": "Atropos, with 30 years of respectable presence in food quality control and in-vitro diagnostics, marks public health and consumer safety as its most significant values.",
        "contact": "Contact",
        "website": "https://www.atropos.gr/en/",
        "logo": "assets/logos/atropos.png"
      },
      {
        "name": "Biological Sales Network",
        "locations": [
          { "lat": 45.3035227, "lng": 9.7637527, "country": "Italy" }
        ],
        "info": "BSN deals with production and trade of products for public and private healthcare.",
        "contact": "Contact",
        "website": "https://www.bsn-srl.it/",
        "logo": "assets/logos/bsn.png"
      },
      {
        "name": "Genesee Scientific",
        "locations": [
          { "lat": 32.7948, "lng": -116.9625, "country": "USA - West Coast" }
        ],
        "info": "Genesee Scientific is a leading provider of products and services for the life science research community, specializing in molecular biology, genomics, and proteomics.",
        "contact": "Contact",
        "website": "https://geneseesci.com/flowbot-one/",
        "logo": "assets/logos/genesee.svg"
      },
      {
        "name": "Stellar Scientific",
        "locations": [
          { "lat": 39.3702, "lng": -76.6941, "country": "USA - East Coast" }
        ],
        "info": "Stellar Scientific is a family-owned business is passionate about serving the scientific community.",
        "contact": "Contact",
        "website": "https://www.stellarscientific.com/flowbot-one-liquid-handling-robotic-system/",
        "logo": "assets/logos/stellarscientific.webp"
      },
      {
        "name": "ingenio by Phytronix",
        "locations": [
          { "lat": 46.7934, "lng": -71.2749, "country": "Canada" }
        ],
        "info": "ingenio by Phytronix breaks the mold by offering analytical instrumentation and services for laboratories. Naturally, this offers us the chance to have a privileged relationship with our clients to fulfill their needs, whatever they may be.",
        "contact": "Contact",
        "website": "https://www.stellarscientific.com/flowbot-one-liquid-handling-robotic-system/",
        "logo": "assets/logos/phytronix.png"
      },
    {
        "name": "Meslo",
        "locations": [
          { "lat": 24.4667, "lng": 54.3667, "country": "UAE" },
          { "lat": 24.7136, "lng": 46.6753, "country": "Saudi Arabia" },
          { "lat": 30.0333, "lng": 31.2333, "country": "Egypt" },
          { "lat": 5.6037, "lng": -0.1870, "country": "Ghana" },
          { "lat": 9.0820, "lng": 8.6753, "country": "Nigeria" },
          { "lat": 31.7917, "lng": -7.0926, "country": "Morocco" },
          { "lat": 36.8065, "lng": 10.1815, "country": "Tunisia" },
          { "lat": 36.7372, "lng": 3.0863, "country": "Algeria" }
        ],
        "info": "MESLO is a leading scientific and process equipment distributor that was established in 1984.",
        "contact": "mailto:info@meslo.com",
        "website": "https://meslo.com/",
        "logo": "assets/logos/meslo.png"
      },
      {
        "name": "Ionix Analytical",
        "locations": [
          { "lat": 31.0461, "lng": 34.8516, "country": "Israel" }
        ],
        "info": "Ionix Analytical LTD offers services to Life Science customers for a variety of analytical instruments & manufacturers such as LCMS, GCMS, HPLCs, GCs, Dissolution instrumentation, TOC Analyzers, XRF and much more.",
        "contact": "Contact",
        "website": "https://www.ionix.co.il/",
        "logo": "assets/logos/ionix-analytical.webp"
      },
      {
        "name": "2NCBio",
        "locations": [
          { "lat": 36.304875, "lng": 127.3642581, "country": "South Korea" }
        ],
        "info": "2NCBIO. Biotechnology Research. PhyTip Columns, Microscale protein purification, RPA, Cell-based assays, Absorbance 96 ELISA reader, etc.",
        "contact": "mailto:biotools@icloud.com",
        "website": "https://2ncbio.co.kr/",
        "logo": "assets/logos/2NCBio.png"
      }
];


function loadDistributors() {
    distributors.forEach(distributor => {
        distributor.locations.forEach(location => {
            addMarker(
                location.lat, 
                location.lng,
                distributor.name, 
                distributor.info, 
                distributor.contact, 
                distributor.website, 
                distributor.logo,
                location.country,
            );
        });
    });
}