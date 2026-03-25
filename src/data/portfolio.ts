const BUBBLE_CDN = "https://fe36e5d2176d85fd69e79d6769db7309.cdn.bubble.io";

export type PortfolioProject = {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  description: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  imageSrc: string;
  imageAlt: string;
};

function bubbleImage(path: string) {
  return `${BUBBLE_CDN}/${path}`;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Werkling",
    slug: "werkling",
    category: "Web platform",
    tags: ["Bubble", "Active Campaign", "Twilio", "Marketplace"],
    description:
      "An Australian on-demand talent marketplace connecting leaders with freelancers and consultants—built for nimble, flexible teams.",
    problem:
      "Werkling needed a desktop platform that could match leaders with seasoned freelancers, support community, and integrate communications at scale.",
    solution:
      "We built the product on Bubble with talent-matching workflows, integrated Active Campaign for lifecycle messaging, and Twilio for reliable communications.",
    result:
      "A production marketplace where experts can sit on a leader’s talent bench and engage when needed—supporting Australia’s flexible workforce model.",
    technologies: ["Bubble", "Active Campaign", "Twilio"],
    imageSrc: bubbleImage(
      "f1721872720697x820696342335804900/Untitled%20design%20%2832%29%20%281%29.png"
    ),
    imageAlt: "Werkling talent marketplace platform preview",
  },
  {
    title: "Uinvest",
    slug: "uinvest",
    category: "Web application",
    tags: ["Bubble", "Figma", "Pipedrive", "Property"],
    description:
      "Streamlined property investment journeys for busy Australians—from sourcing and finance to legal support and handover.",
    problem:
      "Investors needed one trusted place to coordinate property sourcing, financing options, legal steps, and handover without juggling disconnected tools.",
    solution:
      "We delivered a Bubble web app with branded UX (Figma), structured pipelines, and Pipedrive-aligned workflows so each stage stays clear and actionable.",
    result:
      "A cohesive experience for personalised consultations, opportunity tracking, and handover—so clients build portfolios with confidence.",
    technologies: ["Bubble", "Figma", "Pipedrive"],
    imageSrc: bubbleImage(
      "f1721873145511x507269121662353500/Assets%20Bubble%20Web%20app.png"
    ),
    imageAlt: "Uinvest property investment web application",
  },
  {
    title: "SnapPhoto",
    slug: "SnapPhoto",
    category: "Web platform",
    tags: ["Bubble", "Figma", "Active Campaign", "Photography"],
    description:
      "A directory-style platform to discover photographers and videographers, browse work, read reviews, and book creatives for any occasion.",
    problem:
      "Clients struggled to find vetted photo and video talent in one place; creatives needed visibility and a smooth path from discovery to contact.",
    solution:
      "We designed and built SnapPhoto on Bubble with a polished UI (Figma), portfolio browsing, reviews, and Active Campaign for nurture and engagement.",
    result:
      "A user-friendly marketplace that connects people with professionals for weddings, corporate work, and personal projects—quality and creativity first.",
    technologies: ["Bubble", "Figma", "Active Campaign"],
    imageSrc: bubbleImage(
      "f1721874935419x533883047126082700/Photography%20Directory.png"
    ),
    imageAlt: "SnapPhoto photography and videography directory platform",
  },
];

export function portfolioDetailUrl(slug: string) {
  const q = encodeURIComponent(slug);
  return `https://no-code-creations.com/protfolio_profile?portfolio=${q}`;
}
