AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/denso.png",
    place: "PT. Denso Indonesia",
    time: "(Jan - Aug, 2018)",
    desp: "<li>Worked to migrate Manual energy logging to integrated AI system and load up instantly.</li> <li>Made changes in the procedure of work & create more fast eco system.</li> <li>Created a aplication called “FDS” Facility Database System, they can automate energy logging, and minimize waste energy with data analytic system.</li>",
  },
  {
    title: "Full Stack Developer",
    cardImage: "assets/images/experience-page/sikejo.png",
    place: "Sikejo Online Marketplace",
    time: "(Feb - Aug, 2019)",
    desp: "<li>Worked as Fullstack Deveoper.</li><li>Worked on Developing User Interface and Activity Monitor to monitor the activities of Delivery System.</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/smafti.jpg",
    place: "SMK Al-Mufti",
    time: "(Jan, 19 - Jan, 20)",
    desp:"<li>Worked on the project DCS (Digitalization Controlling System) 4.0 standards Implementation for IoT System.</li><li>Designed a software that would help faculty to create a electricity controlled system over internet from the internal private server.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Sikejo E-Commerce",
    cardImage: "assets/images/experience-page/sikejo.png",
    description:
      "Responsible for handling the projects Sikejo Data Track & Analyze.",
  },
  {
    title: "Facility Database System",
    cardImage: "assets/images/experience-page/code.png",
    description:
      "Responsible for handling Power Consume Analyzation.",
  },
  {
    title: "Server Switch",
    cardImage: "assets/images/experience-page/code.jpg",
    description:
      "Create IoT Management System.",
  },
  {
    title: "Android Smart Key",
    cardImage: "assets/images/experience-page/lock.png",
    description:
      "IoT technology-based motor vehicle security system.",
  },
  {
    title: "Python Apriori Data Miner",
    cardImage: "assets/images/experience-page/code.png",
    description:
      "Disease classification based on patient history.",
  },
  {
    title: "Diwarica Discord Bot",
    cardImage: "assets/images/experience-page/diwarica.png",
    description:
      "Discord Whatsapp Relay & Authentication Bot.",
  },
  {
    title: "Tradingkeun API",
    cardImage: "assets/images/experience-page/code.png",
    description:
      "Scrape data trade from several site data.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Teknologi Tepat Guna",
    subtitle: "LIPI",
    image: "assets/images/experience-page/uplift.png",
    desp: "Winning 1st position on IoT Innovation Technology Category.",
  },
  {
    title: "Dicoding Academy",
    subtitle: "Junior Web Developer",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "Has Completing Course of JWD.",
  },
  {
    title: "IT Network System Administrator",
    subtitle: "TTG 2019",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "Winning 2nd position on Network System Administrator Category.",
  },
  {
    title: "Mikrotik Certified Network Associate",
    subtitle: "Network Certified",
    image: "assets/images/experience-page/elevate.png",
    desp: "Has Competent on Mikrotik Certified Network Associate (MTCNA).",
  },
  {
    title: "Axioo Technical Specialist - Hardware Maintenance",
    subtitle: "Hardware Certified",
    image: "assets/images/experience-page/elevate.png",
    desp: "Has Competent on Axioo Technical Specialist (ATS).",
  },
  {
    title: "Axelbit Junior Network Engineer",
    subtitle: "Network Certified",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "Has Competent on Axelbit Junior Network Engineer.",
  },
  {
    title: "BNSP Network Engineer Certification",
    subtitle: "Network Certified",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Have passed and competent in BNSP Network Engineer Certification.",
  }
  

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
