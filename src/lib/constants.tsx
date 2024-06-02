import HandWave from "@/../public/assets/media/hand-wave.svg";
import { headerContentsType } from "./types";
import {
  ArchiveIcon,
  ExpandIcon,
  InstagramIcon,
  Linkedin,
  MailIcon,
  PhoneCall,
  RocketIcon,
  SearchCheckIcon,
  TwitterIcon,
} from "lucide-react";
import blackSoldierImgProduct from "@/../public/assets/media/MAGUNIA MOCKUP.png";
import blackSoldier from "@/../public/assets/media/bsf-w.png";
import limaOrganicFertilizer from "@/../public/assets/media/MAGUNIA MOCKUP 2.png";
import PeopleStanding from "@/../public/assets/media/standing_about_1.jpg";
import GreenhouseNet from "@/../public/assets/media/net_greenhouse.jpg";
import MosqueShade from "@/../public/assets/media/shade.jpg";
import personAvatar from "@/../public/assets/media/person.svg";
import EnnovateLogo from "../../public/assets/media/ennovatelogo.png";
import AquaEco from "@/../public/assets/media/aquaEco.png";
import GlobalStud from "@/../public/assets/media/globalstudlogo-w.png";
import Hekimalogo from "@/../public/assets/media/hakimalogo.png";
import Hultilogo from "@/../public/assets/media/hultlogo.png";
import Saharalogo from "@/../public/assets/media/sahara-w.png";
import Sbpogo from "@/../public/assets/media/sbp_irishaid-wix.png";
import Elico from "@/../public/assets/media/elico.png";
import Climeik from "@/../public/assets/media/Climeik.png";
import Climaccelerator from "@/../public/assets/media/climaccelerator.png";
import CfElogo from "@/../public/assets/media/CfE-TUB.png";
import AnorldPhoto from "@/../public/assets/media/arnold.jpg";
import HellenPhoto from "@/../public/assets/media/hellen.jpg";
import JarvisPhoto from "@/../public/assets/media/jarvis.jpg";
import YasserPhoto from "@/../public/assets/media/yasser.jpg";
import MercusPhoto from "@/../public/assets/media/mercus.jpg";
import limaWhite from "@/../public/assets/media/lima-logo-w.png";
import RocketAvatar from "@/../public/assets/media/roket.svg";
import NoPovertyImg from "@/../public/assets/media/no-poverty.png";
import NohungerImg from "@/../public/assets/media/appetite_5277050.png";
import EqualityImg from "@/../public/assets/media/equality_4253821.png";
import Boost from "@/../public/assets/media/inflation_5623036.png";
import ProductionImg from "@/../public/assets/media/recyclable_5199669.png";
import climateImg from "@/../public/assets/media/home_5663134.png";
import atmosphereImg from "@/../public/assets/media/atmosphere_10972616.png";

export const serviceContent = {
  vision:
    "to be a Leading Company in Africa  in the Production of the best complete animal feed with Alternative Protein Feed Ingredients and organic fertilizer",
  pitch: [
    {
      title: "Lima Africa Premier Food Waste Management Partner",
      description:
        "LIMA AFRICA offers an eco-friendly food waste management service that includes waste collection and processing using Black Soldier Fly larvae technology. By upcycling food waste and reintegrating it into the food chain, LIMA AFRICA provides a circular and sustainable solution for your company and communities.",
    },
    {
      title: "Elevate Your Brand Value with LIMA AFRICA!",
      description:
        "Today’s customers seek out sustainable brands. LIMA AFRICA offers you the chance to enhance your brand’s sustainability by responsibly managing your food waste. Seize this opportunity to boost your brand value and meet your sustainability goals!",
    },
  ],
};

export const customersPitch = {
  descriptions: [
    "Today’s customers seek out sustainable brands.",
    "LIMA AFRICA offers you the chance to enhance your brand’s sustainability by responsibly managing your food waste. Seize this opportunity to boost your brand value and meet your sustainability goals!.",
  ],
};

export const SDGContents = {
  heading:
    "Our work aligns with several Sustainable Development Goals (SDGs), contributing to a more resilient and sustainable future.",
  alignments: [
    {
      title: " No Poverty",
      imgUrl: NoPovertyImg,
      description:
        "By providing affordable and sustainable farming solutions, we help smallholder farmers increase their incomes and improve their livelihoods.",
    },
    {
      title: " Zero Hunger",
      imgUrl: NohungerImg,
      description:
        "Our protein feed and organic fertilizers boost agricultural productivity and food security, addressing hunger and malnutrition.",
    },
    {
      title: " Gender Equality",
      imgUrl: EqualityImg,
      description:
        "We empower women farmers, with over 50% of our beneficiaries and workers being women, promoting gender equality in agriculture.",
    },
    {
      title: " Decent Work and Economic Growth",
      imgUrl: Boost,
      description:
        "By creating a sustainable agricultural value chain, we support decent work and economic growth in rural communities.",
    },
    {
      title: "  Responsible Consumption and Production",
      imgUrl: ProductionImg,
      description:
        "Our initiative promotes responsible waste management and sustainable production practices.",
    },
    {
      title: " Climate Action",
      imgUrl: atmosphereImg,
      description:
        "We mitigate climate change impacts by reducing greenhouse gas emissions and promoting climate-resilient farming practices.",
    },
    {
      title: " Life on Land",
      imgUrl: climateImg,
      description:
        "Our work combats land degradation and biodiversity loss, supporting the health of terrestrial ecosystems.",
    },
  ],
};

export const impactsSection = {
  heading: "Our Impacts",
  impacts: [
    {
      title: "Why Black Soldier Fly?",
      imgUrl: blackSoldier,
      description: {
        hazard:
          "We harness the incredible potential of Black Soldier Flies (BSF) to revolutionize agriculture in Africa. These remarkable insects are nature's recyclers, and we've found a way to turn their abilities into benefits for farmers and the environment.",
      },
    },
    {
      title: "Climate Hazard Mitigation and Adaptation",
      imgUrl: "",
      description: {
        hazard: "Climate Hazard: Land degradation and biodiversity loss.",
        impact:
          "Impacts of Hazard: Lack of food security, unproductive degraded soil, and farmers' livelihoods at risk.",
      },
    },
    {
      title: "Environmental Benefits",
      imgUrl: "",
      description: {
        hazard:
          "Mitigation: Reduction in greenhouse gas emissions through alternatives to conventional fertilizers and protein feeds by controlling unregulated rotting. ",
        impact:
          "Waste Management: Substantial reduction in organic waste by processing it into valuable agricultural inputs.",
      },
    },
    {
      title: "Economic and Social Benefits",
      imgUrl: "",
      description: {
        hazard:
          "Affordability and Accessibility: Cost-effective solutions accessible to smallholder farmers  ",
        impact:
          "Increased Productivity: Enhanced agricultural productivity leads to improved livelihoods and food security for farmers and consumers.",
      },
    },
  ],
};

export const headerContents: headerContentsType = {
  logourl: limaWhite,

  links: [
    {
      label: "Products",
      path: "/products",
      productList: [
        { label: "Black Soldier Fly Larvae dried", link: "bsf_dried" },
        { label: "Frass (Organic Fertilizer from Insects", link: "frass" },
        { label: "Black Soldier Fly Larvae live", link: "bsf_live" },
      ],
    },
    { label: "About Us", path: "/about-us", productList: [] },
    { label: "Services", path: "/services", productList: [] },
    { label: "Partners", path: "/#partners", productList: [] },
    { label: "Testimonials", path: "/#testimonials", productList: [] },
  ],
  contactBtn: { label: "Get in touch", path: "/contact", icon: HandWave },
};

export const contactFormContents = {
  formHeader: "Get in touch",
  description: "Connect with us for inquiries, partneships or support.",
  contactsInformation: [
    {
      label: "+255786922207",
      icon: () => {
        return <PhoneCall width={22} className=" text-[#1e1e1e] sm:w-4 " />;
      },
    },
    {
      label: "shoko@limaafrica.co",
      icon: () => {
        return <MailIcon width={22} className=" text-[#1e1e1e] sm:w-4 " />;
      },
    },
  ],
  socials: [
    {
      link: "https://www.instagram.com/p/C52ruM3IijC/?igsh=Zng2aTVmcTBrbXA1",
      icon: () => {
        return (
          <InstagramIcon className="text-white w-4 max-sm:hover:text-sky-600 " />
        );
      },
    },
    {
      link: "https://www.linkedin.com/posts/limaafrica_with-the-rising-demand-for-animal-protein-activity-7193521608769073152-wNim?utm_source=share&utm_medium=member_ios",
      icon: () => {
        return (
          <Linkedin className="text-white w-4 max-sm:hover:text-sky-600" />
        );
      },
    },
    {
      link: "https://x.com/limaafrica_/status/1780870612275126728?s=46&t=hSwQBSt95eH9q7ctcZUAwg",
      icon: () => {
        return (
          <TwitterIcon
            width={22}
            className="text-white w-4 max-sm:hover:text-sky-600  "
          />
        );
      },
    },
  ],
  formLabel: "Fill the form to contact us.",
  fields: {
    twoRows: [
      {
        name: "fullName",
        placeholder: "Full Name",
        controller: "input",
        type: "text",
        required: true,
      },
      {
        name: "phone",
        placeholder: "Phone number",
        controller: "input",
        type: "text",
        required: true,
      },
    ],
    twoRows2: [
      {
        name: "email",
        placeholder: "Email",
        controller: "input",
        type: "email",
        required: true,
      },
      {
        name: "address",
        placeholder: "Address",
        controller: "input",
        type: "text",
        required: false,
      },
    ],

    cols: [
      {
        name: "socialLinks",
        placeholder: "Social media Link",
        controller: "input",
        type: "text",
        required: false,
      },
      {
        name: "message",
        placeholder: "message",
        controller: "textarea",
        type: "text",
        required: true,
      },
    ],
  },

  submitBtn: { label: "Send message" },
};

export const distributorFormContents = {
  benefitsAccordionTriggerlabel: "Benefits of Becoming Our Distribution Agent",
  benefits: [
    {
      label:
        "Lucrative Business Opportunity: LIMA offers competitive commission rates and support to help you establish a thriving business while contributing to sustainable agriculture.",
    },
    {
      label:
        "Access to Premium Products: Gain access to our high-quality Black Soldier Fly larvae, organic fertilizer, and complete poultry feeds that are in demand.",
    },
    {
      label:
        " Training and Support: We provide you with the knowledge and tools you need to succeed, including training on our products and ongoing support.",
    },
    {
      label:
        " Environmental Impact: Make a positive impact on the environment by promoting sustainable agriculture practices in your area.",
    },
  ],
  formAccordionTriggerlabel: "Become our Distribution Agent",
  description:
    " Are you passionate about transforming smallholder farming communities with quality organic manure and affordable livestock feeds? Join us as a distribution agent!",
  Fields: {
    gridTwo: [
      { name: "Name", placeholder: "Full name", required: true },
      {
        name: "ContactInformation",
        placeholder: "Email address",
        required: true,
      },
      { name: "BusinessName", placeholder: "Business name ", required: true },
      { name: "Location", placeholder: "Business Location ", required: true },
    ],
    cols: [
      {
        name: "Capacity",
        placeholder: "Capacity to Distribute LIMA Products",
        required: true,
      },
      {
        name: "Experience",
        placeholder: "Experience in Agricultural or Distribution Business",
        required: true,
      },
    ],
  },
  submitBtn: { label: "Submit" },
};

export const farmerFormContents = {
  benefitsAccordionTriggerlabel: "Benefits of Becoming a LIMA BSF Outgrower",
  benefits: [
    {
      label:
        "Steady Income: Partnering with LIMA provides you with a reliable market for your Black Soldier Fly larvae, ensuring a consistent income stream.",
    },
    {
      label:
        "  Market Access: Gain access to a broad network of smallholder farmers and agricultural businesses in Africa who rely on our products.",
    },
    {
      label:
        " Training and Support: We provide you with the knowledge and tools you need to succeed, including training on our products and ongoing support.",
    },
    {
      label:
        " Environmental Impact: Contribute to a sustainable food system, reduce the environmental footprint of livestock farming, and improve soil health through organic fertilizer.",
    },
    {
      label:
        " Community Engagement: Become part of a community of like-minded individuals dedicated to making a positive impact on agriculture and the environment.",
    },
  ],
  formAccordionTriggerlabel: "Becoming a LIMA BSF Outgrower",
  description:
    "Ready to make a difference in agriculture and the environment? Complete the registration form below and join our network of BSF outgrower!",
  Fields: {
    twoGrid: [
      { name: "Name", placeholder: "Your full name", required: true },
      {
        name: "ContactInformation",
        type: "text",
        placeholder: "Email address",
        required: true,
      },
      {
        name: "Location",
        placeholder: "Your Farm Location",
        type: "text",
        required: false,
      },
      {
        name: "Capacity",
        type: "number",
        placeholder: "Estimated monthly or annual capacity in kg",
        required: true,
      },
    ],
    cols: [
      {
        name: "Experience",
        type: "number",
        placeholder: "Experience in farming",
        required: false,
      },
    ],
  },
  submitBtn: { label: "Submit" },
  disclamer: {
    title: "Disclaimer",
    description:
      "  We are committed to environmentally sustainable practices and ethical BSF farming. All applicants will be reviewed for eligibility.",
  },
};

export const productsContent = {
  title: "Our Products",
  description: "Explore our range of products, which include.",
  homeDescription: "High-Quality, Environmentally Friendly Products.",
  products: [
    {
      img: blackSoldierImgProduct,
      title: "Black Soldier Fly Larvae",
      descriptions: [
        "Dried larvae of the black soldier fly, provide a convenient and long-lasting protein source for animal feed.",
      ],
      benefits: [
        "High protein and fat content for improved livestock nutrition.",
        "Shelf-stable and easy to store.",
        "An environmentally friendly alternative to fish meal and soy protein.",
      ],
      Applications: ["Incorporation into animal feed formulations."],
      Use: "Use in poultry, aquaculture, and swine diets.",
      price: "2700 TSH per kg",
      suitable: "Suitable For Livestock farmers, and feed manufacturers",

      NutritionalContents: [
        "Protein: ~40-45%",
        "Fat: ~25-35%",
        "Moisture: ~5-10%",
      ],

      actionBtn: { label: "Buy Now" },
      link: { title: "See more", path: "/products/bsf_dried" },
    },
    {
      img: limaOrganicFertilizer,
      title: "Frass (Organic Fertilizer from Insects)",
      descriptions: [
        "A nutrient-rich organic fertilizer produced from the waste of black soldier fly larvae.",
      ],
      benefits: [
        "Improves soil health and fertility.",
        "Enhances crop yield and quality.",
        "Sustainable alternative to chemical fertilizers.",
        "Lowers production costs for farmers",
        "Provides a sustainable and reliable source of income for smallholder farmers.",
      ],
      Applications: ["Soil amendment for crops and gardens."],
      Use: "Use in a mixture of  1:3 ratio of frass to soil.",
      price: "2500 TSH per kg",
      suitable: "Suitable for organic farming practices",

      NutritionalContents: [
        "Nitrogen (N): ~2%",
        "Phosphorus (P): ~1%",
        "Potassium (K): ~1%",
      ],

      actionBtn: { label: "Order Now" },
      link: { title: "See more", path: "/products/frass" },
    },
  ],
  bsfLive: {
    img: blackSoldierImgProduct,
    title: "Black Soldier Fly (BSF) Larvae Live",
    descriptions: [
      "Fresh, live larvae of the black soldier fly, ideal for direct feeding to livestock such as poultry, fish, and pigs.",
    ],
    benefits: [
      "High protein content boosts animal growth and health.",
      "Cost-effective alternative to traditional feed.",
    ],
    Applications: [
      "Direct feeding to livestock, fish poultry, pigs, and pets.",
      "Enhancing the diet of pets and exotic animals.",
    ],
    price: "2500 TSH per kg",
    suitable: "Farmers, pet owners, and Livestock enterprises.",

    NutritionalContents: ["Protein: ~40-45%", "Fat: ~25-35%", "Moisture: ~10%"],

    actionBtn: { label: "Buy Now" },
    link: { title: "See more", path: "/products/bsf_live" },
  },
};

export const aboutContents = {
  mainLabel: "About",
  mainDescription:
    "  We are passionate about transforming food systems in Africa through innovative and sustainable solutions. To empower smallholder farmers and promote sustainable agriculture in Africa. We believe that agriculture can be both profitable and eco-friendly, and we're committed to making this vision a reality.",
  photoGallery: {
    lonephoto: {
      url: PeopleStanding,
      alt: "people standing look the black soldier fly larvae",
    },
    twoGrid: [{ url: GreenhouseNet, alt: "Greehouse net" }],
    lastTwoGrid: [{ url: MosqueShade, alt: "The mosque shade" }],
  },
  commitLists: {
    title: "Our Commitments",
    lists: [
      {
        label: "Championing Circular Economy and Sustainability",
        description:
          "At LIMA Africa, we are dedicated to transforming agriculture through sustainable practices that promote a circular economy. Our innovative solutions focus on converting organic waste into valuable resources, such as protein feed from black soldier fly larvae and organic fertilizers. This approach not only reduces environmental pollution but also provides cost-effective and eco-friendly alternatives for smallholder farmers.",
      },
      {
        label: "Improving Smallholder Farmers' Livelihoods",
        description:
          "We understand the critical role smallholder farmers play in feeding communities and driving local economies. LIMA Africa is committed to enhancing the livelihoods of these farmers by providing affordable and accessible protein feed and fertilizers. Our products help reduce farming costs, improve soil health, and increase crop yields, ensuring farmers can thrive in a changing climate.",
      },
      {
        label: "Adaptation and Mitigation to Climate Change",
        description:
          "Our initiatives are designed to address both the adaptation and mitigation aspects of climate change. By offering sustainable alternatives to conventional fertilizers and feed, we help farmers reduce their greenhouse gas emissions and build resilience against climate variability. Our efforts align with global climate goals, contributing to a sustainable future for agriculture in Sub-Saharan Africa.",
      },
    ],
  },
  history: {
    title: "Our Traction",
    timelines: [
      {
        year: 2021,
        description: "Research and Development (Pilot phase )",
        icon: () => {
          return <SearchCheckIcon />;
        },
      },
      {
        year: 2022,
        description:
          "Launched the production of black soldier fly larvae as protein feed, significantly reducing costs and ensuring sustainable supply processing 500 to 1000 kg of organic waste",
        icon: () => {
          return <RocketIcon />;
        },
      },
      {
        year: 2023,
        description:
          "Expanded our production to processing 5 tons of organic waste, Hired our first staff.",
        icon: () => {
          return <ExpandIcon />;
        },
      },
      {
        year: 2024,
        description: "Launch BSF out-grower program",
        icon: () => {
          return <ArchiveIcon />;
        },
      },
    ],
  },
  LimaIntiatives: [
    {
      title: "",
      description: [
        "LIMA AFRICA is an agritech company registered and incorporated in Tanzania. Our goal is to transform food systems in Africa by converting agricultural and organic waste into alternative insect-based livestock feed and organic fertilizer.",
        "This approach helps reduce the pressure on fishing for feed, lowers farm input costs for farmers, increases soil nutrients, and improves profitability for smallholder farmers while addressing climate action. ",
        "Our mission focuses on bio-conversion processes carried out by Black Soldier Fly (BSF) Larvae. These processes transform food waste into a high-protein body mass of BSF larvae, which we then process further into BSF products such as Live BSF larvae, Dried BSF larvae, and organic fertilizer. ",
        "The BSF solution effectively addresses two problems at once, providing a dual benefit for waste management and sustainable agriculture.",
      ],
    },
    {
      title: "The LIMA Difference",
      description: [
        "What sets us apart? It's our unique approach. We harness the incredible potential of Black Soldier Flies (BSF) to revolutionize agriculture in Africa. These remarkable insects are nature's recyclers, and we've found a way to turn their abilities into benefits for farmers and the environment.",
      ],
    },
    {
      title: "Our Process",
      description: [
        "Our journey starts with training BSF farmers, who then cultivate these incredible insects. They help us produce high-quality black soldier fly larvae, a key ingredient in livestock feed. These larvae are rich in protein and nutrition, making them an excellent choice for poultry and livestock. But we don't stop there. The organic  waste produced by these BSF farms is transformed into organic fertilizer, which promotes sustainable farming practices. It's a closed-loop system that reduces waste and benefits the environment.",
      ],
    },
  ],
  missionList: [
    "Create a circular solution to reduce food waste by transforming organic waste into rich protein feed ingredients and organic fertilizer.",
    "Produce and supply sustainable and nutritious alternative sources of protein for animal feed and agriculture industries.",
    "Empower smallholder farmers to profitably engage in agriculture while encouraging a sustainable approach to animal feed and agricultural practices.",
  ],
  LimaMission: [
    {
      title: "Join Our Mission",
      image: { alt: "The rocket", url: RocketAvatar },
      description:
        "We invite you to be a part of our mission to transform food systems in Africa. Become a LIMA distribution agent and help us bring our products to your community. Or, if you're interested in BSF farming, partner with us to supply Black Soldier Fly larvae for our sustainable products.",
    },
    {
      title: "Our Commitment",
      description:
        " We are committed to promoting sustainability, improving food security, and supporting smallholder farmers. With your support, we can make a significant impact on smallholder farmer's activities and the environment.",
    },
  ],
  Team: {
    title: "Our Team",

    description:
      " Meet the team! Our dedicated and passionate team members are the driving force behind our mission. Get to know the individuals who are committed to transforming food systems in Africa.",

    members: [
      {
        name: "ARNOLD SHOKO",
        title: "Founder & CEO",
        img: AnorldPhoto,
        linkedinLink:
          "https://www.linkedin.com/in/arnold-shoko-b262131a0/?originalSubdomain=tz",
      },
      {
        name: " Hellen Magreth",
        title: "Farm Manager",
        img: HellenPhoto,
        linkedinLink:
          "https://tz.linkedin.com/in/hellenmagreth-misso-42b446144",
      },
      {
        name: " Jarvis Bashabula",
        title: "Communication and Marketing",
        img: JarvisPhoto,
        linkedinLink:
          "https://www.linkedin.com/in/jarvis-bashabula-377528188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "A Yaaseer Ally",
        title: "Finance Office",
        img: YasserPhoto,
        linkedinLink:
          "https://www.linkedin.com/in/iamkassuwi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Mercus Gondwe",
        title: "People and Culture",
        img: MercusPhoto,
        linkedinLink:
          "https://www.linkedin.com/in/mercus-gondwe-a11932243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    ],
  },
};

export const homepageContents = {
  welcomeNote: "Welcome to LIMA",
  mainHeading: ["Transforming Food", "Systems in Africa!"],
  mainDescription: [
    "Empowering smallholder farmers with",
    "innovative and sustainable solutions.",
  ],
  registrationCards: [
    {
      title: "Become our Distribution Agent",
      description:
        "  Join us in bringing quality organic manure and affordable livestock feeds to your community.",
      link: { title: "Join now", path: "/distributor" },
      theme: "black",
    },
    {
      title: "Become our BSF Outgrower",
      description:
        " Helps us sustainably produce black soldier fly larvae for liveestock feed and organic fertilizer.",
      link: { title: "Join now", path: "/farmer" },
      theme: "white",
    },
  ],
};

export const partnersContents = {
  heading: " Our Valued Partners",
  description:
    "We work together with like-minded organizations to drive change.",
  partners: [
    {
      title: "ennovate ventures",
      img: EnnovateLogo,
    },
    {
      title: "Hulti prize",
      img: Hultilogo,
    },
    {
      title: "global student enterpreneur",
      img: GlobalStud,
    },
    {
      title: "Aqua Eco",
      img: AquaEco,
    },
    {
      title: "ClimAccelerator",
      img: Climaccelerator,
    },
    {
      title: "Hekima ni uhuru",
      img: Hekimalogo,
    },
    {
      title: "Climate kic",
      img: Climeik,
    },
    {
      title: "Elico Foundation",
      img: Elico,
    },
    {
      title: "Centre Enterpreneurship berlin",
      img: CfElogo,
    },

    {
      title: "Sahara ventures",
      img: Saharalogo,
    },
    {
      title: "Irish Aid",
      img: Sbpogo,
    },
  ],
};

export const testimonialsContents = {
  heading: "What our Customers Say",
  description:
    " Real stories of success from smallholder farmers and distribution agents",
  testimonials: [
    {
      testimonial:
        "Being a LIMA distribution agent has not only provided me with a sustainable business opportunity but also allowed me to be a part of the positive change in my community. LIMA's products are a game-changer!",
      photo: {
        url: personAvatar,
        alt: "Photo of Sarah at Her Distribution Outlet",
      },
      name: "Sarah",
      title: "Distributor",
    },
    {
      testimonial:
        "Thanks to LIMA's high-quality poultry feeds, my chickens are healthier and produce more eggs. I've doubled my income, and my family is better off because of it",
      photo: { url: personAvatar, alt: "Photo of John K. with His Chickens" },
      name: "John K.",
      title: "Farmer",
    },
    {
      testimonial:
        "LIMA's organic fertilizer has transformed my crops. My yields have increased, and my farm is now more profitable and sustainable. I'm grateful for LIMA's support.",
      photo: {
        url: personAvatar,
        alt: "Photo of Samuel with His Bountiful Crops",
      },
      name: "Samuel",
      title: "Farmer",
    },
    {
      testimonial:
        "Becoming a LIMA distribution agent was a smart business move. I can offer my community quality products while supporting a greener environment. It's a win-win!",
      photo: {
        url: personAvatar,
        alt: "Photo of Amina at Her Distribution Outlet",
      },
      name: "Amina",
      title: "Distributor",
    },
  ],
};

export const OurWork = [
  "LIMA AFRICA offers an eco-friendly food waste management service that includes waste collection and processing using Black Soldier Fly larvae technology. By upcycling food waste and reintegrating it into the food chain, LIMA AFRICA provides circular and sustainable solution for your company and communities.",
];
