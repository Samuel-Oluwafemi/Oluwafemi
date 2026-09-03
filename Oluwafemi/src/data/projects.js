import veloraImage from "../assets/Velora.png";
import veloraImage1 from "../assets/Velora1.png";
import veloraImage2 from "../assets/Velora2.png";
import veloraImage3 from "../assets/Velora3.png";
import veloraImage4 from "../assets/Velora4.png";
import salonflowImage from "../assets/Salonflow.png";
import salonflowImage1 from "../assets/Salonflow1.png";
import salonflowImage2 from "../assets/Salonflow2.png";
import salonflowImage3 from "../assets/Salonflow3.png";
import ellessImage from "../assets/Elless.png";
import ellessImage1 from "../assets/Elless1.png";
import ellessImage2 from "../assets/Elless2.png";
import ellessImage3 from "../assets/Elless3.png";
import berryImage from "../assets/Berry.png";
import berryImage1 from "../assets/Berry1.png";
import berryImage2 from "../assets/Berry2.png";
import berryImage3 from "../assets/Berry3.png";
import lizImage from "../assets/Liz.png";
import lizImage1 from "../assets/Liz1.png";
import lizImage2 from "../assets/Liz2.png";
import lizImage3 from "../assets/Liz3.png";
import lizImage4 from "../assets/Liz4.png";

export const projects = [
  {
    slug: "velora",
    label: "CLIENT PROJECT",
    title: "Velora",
    category: "E-commerce Experience",
    image: veloraImage,
    gallery: [
      veloraImage,
      veloraImage1,
      veloraImage2,
      veloraImage3,
      veloraImage4,
    ],
    link: "https://velora0.netlify.app/",
    summary:
      "A conversion-focused e-commerce website for a minimalist fashion brand to showcase products, build trust and generate sales.",
    challenge:
      "Velora needed a digital storefront that could make a restrained fashion collection feel desirable while giving shoppers enough confidence to complete a purchase.",
    approach:
      "I shaped the experience around editorial product presentation, clear collection paths and a focused checkout journey. The interface uses spacious layouts, confident typography and deliberate trust signals to keep attention on the products.",
    outcome:
      "A polished shopping experience that gives the brand a stronger point of view, makes products easier to explore and creates a clearer path from discovery to checkout.",
    features: [
      "Homepage",
      "Products page",
      "Customer-side authentication",
      "Admin-side authentication",
      "Inventory management",
      "Paystack payment integration",
      "Resend email workflows",
    ],
    tech: ["REACT", "TYPESCRIPT", "FIGMA", "FIREBASE", "RESEND", "PAYSTACK"],
  },
  {
    slug: "virtualbyliz",
    label: "CLIENT PROJECT",
    title: "VirtualByLiz",
    category: "Administrative Virtual Assistant",
    image: lizImage,
    gallery: [lizImage, lizImage1, lizImage2, lizImage3, lizImage4],
    link: "https://virtualbyliz.netlify.app/",
    summary:
      "A professional portfolio website for an administrative virtual assistant to showcase services, build trust and generate enquiries.",
    challenge:
      "VirtualByLiz needed to turn a broad range of administrative services into a clear, credible offer for busy business owners looking for reliable support.",
    approach:
      "I organized the site around the questions a potential client needs answered first: what Liz does, who she helps and how to start a conversation. The visual system balances warmth with structure so the service feels personal and dependable.",
    outcome:
      "A professional online presence that communicates value quickly, builds trust through clarity and makes the enquiry step feel straightforward.",
    features: [
      "Homepage",
      "Services overview",
      "About section",
      "Contact form",
      "Responsive layout",
      "Email enquiry workflow",
      "SEO optimization"
    ],
    tech: ["REACT", "TYPESCRIPT", "TAILWINDCSS", "EMAILJS"],
  },
  {
    slug: "salonflow",
    label: "PERSONAL PROJECT",
    title: "SalonFlow",
    category: "Booking Experience",
    image: salonflowImage,
    gallery: [salonflowImage, salonflowImage1, salonflowImage2, salonflowImage3],
    link: "https://bookify-salonflow.netlify.app/",
    summary:
      "A booking system built for salon businesses to enable a cleaner service journey from discovery through appointment confirmation.",
    challenge:
      "SalonFlow was designed to reduce the friction between discovering a salon service and securing an appointment, especially on smaller screens.",
    approach:
      "I mapped the booking flow into focused steps for service selection, customer details and confirmation. Each screen keeps the next action visible while the visual language makes the product feel calm and easy to use.",
    outcome:
      "A practical booking experience that gives salon customers a clearer path to appointment confirmation and gives the concept room to grow into a fuller business tool.",
    features: [
      "Service discovery",
      "Service selection",
      "Appointment booking",
      "Customer details",
      "Booking confirmation",
      "Admin dashboard",
      "Email notifications",
      "Responsive experience",
      "SEO optimization"
    ],
    tech: ["REACT", "TAILWINDCSS", "FIREBASE", "EMAILJS"],
  },
  {
    slug: "elless-hair-and-beauty",
    label: "CLIENT PROJECT",
    title: "ELLESS HAIR & BEAUTY",
    category: "Beauty Brand",
    image: ellessImage,
    gallery: [ellessImage, ellessImage1, ellessImage2, ellessImage3],
    link: "https://elless-hair-and-beauty.netlify.app/",
    summary:
      "A conversion-focused website for a beauty brand to showcase services, build trust and generate enquiries.",
    challenge:
      "ELLESS needed a website that could communicate the quality of its hair and beauty services before a visitor ever made contact.",
    approach:
      "I paired strong visual presentation with service-led content, clear calls to action and a responsive layout that keeps the brand experience consistent across devices.",
    outcome:
      "A more confident digital touchpoint that helps visitors understand the offer, see the brand's character and move naturally toward an enquiry.",
    features: [
      "Homepage",
      "Services showcase",
      "Exclusive offers",
      "Client testimonials",
      "Contact flow",
      "Responsive experience",
      "Email enquiries",
      "SEO optimization"
    ],
    tech: ["REACT", "TAILWINDCSS", "EMAILJS"],
  },
  {
    slug: "berrylyon",
    label: "CLIENT PROJECT",
    title: "BerryLyon",
    category: "Editorial Brand",
    image: berryImage,
    gallery: [berryImage, berryImage1, berryImage2, berryImage3],
    link: "https://berrylyon.netlify.app/",
    summary:
      "A content-led editorial website for a lifestyle brand with a focus on visual storytelling.",
    challenge:
      "BerryLyon needed an editorial space where the content could lead while the brand still felt distinct, considered and easy to navigate.",
    approach:
      "I built a flexible content rhythm around strong imagery, generous spacing and clear story hierarchy. The result gives individual pieces room to breathe without losing the overall brand thread.",
    outcome:
      "A memorable editorial experience that makes the content easier to browse and gives the lifestyle brand a stronger visual voice online.",
    features: [
      "Editorial homepage",
      "Story-led layouts",
      "Visual content sections",
      "Story navigation",
      "Brand navigation",
      "Responsive presentation",
      "Contact pathway",
      "SEO optimization"
    ],
    tech: ["REACT", "TAILWINDCSS", "EMAILJS"],
  },
];
