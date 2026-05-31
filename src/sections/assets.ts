import { Leaf, TreePine, Scissors, Axe, Instagram, Facebook } from "lucide-react";

/* ============================================================
   VISUAL ASSETS — edit these paths to swap in your own files.
   All videos/images flow through this single config object.
   ============================================================ */
export const ASSETS = {
  brand: {
    name: "Men in Trees",
    tagline: "Arboriculture · Est. 2026",
  },
  nav: {
    /* Swap this URL to change the menu background image */
    backgroundImage:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=80",
  },
  contact: {
    address: "38 Woods Bay Lane, The Archipelago, ON, Canada",
    phone: "705-774-4656",
    phoneHref: "tel:+17057744656",
    email: "Booking@menintree.info",
    emailHref: "mailto:Booking@menintree.info",
    areas: ["Woods Bay", "Georgian Bay", "Muskoka", "Bracebridge", "MacTier"],
  },
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/men_in_trees1",
      icon: Instagram,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/men.in.trees2025",
      icon: Facebook,
    },
  ],
  hero: {
    video: "/videos/hero.mp4",
    /* Local poster frame extracted from the start of the hero video — shows instantly while the video lazy-loads. */
    poster: "/videos/hero-poster.jpg",
  },
  philosophy: {
    video:
      "https://cdn.coverr.co/videos/coverr-a-forest-in-the-morning-fog-7307/1080p.mp4",
    poster:
      "/images/Riding.jpg",
  },
  services: [
    {
      id: "preservation",
      title: "Preventative Maintenance",
      number: "01",
      icon: Leaf,
      blurb:
        "Long-horizon stewardship plans for heritage specimens and protected canopies.",
      image:
        "/images/Preventativemaintenance.avif",
    },
    {
      id: "removal",
      title: "Large-Scale Removal",
      number: "02",
      icon: Axe,
      blurb:
        "Our professional arborists specialize in safe and efficient tree removal.",
      image:
        "/images/Removal.png",
    },
    {
      id: "pruning",
      title: "Structural Pruning",
      number: "03",
      icon: Scissors,
      blurb:
        "Proper tree pruning is essential for the health and aesthetics of your trees.",
      image:
        "/images/Prune2.jpeg",
    },
    {
      id: "consulting",
      title: "Arboricultural Consulting",
      number: "04",
      icon: TreePine,
      blurb:
        "Reports, risk assessments, and development advisory for architects and estates.",
      image:
        "/images/Softscaping.avif",
    },
  ],
  portfolio: [
    "/images/Mitch.jpg",
    "/images/Prune.png",
    "/images/Topview.jpg",
  ],
} as const;

export const SERVICE_OPTIONS = ASSETS.services.map((s) => s.title);

export const NAV_LINKS = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Selected Work" },
  { href: "#contact", label: "Contact" },
];
