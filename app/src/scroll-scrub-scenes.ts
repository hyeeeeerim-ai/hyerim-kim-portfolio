import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";
export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#111111",
  background: "#e5e5e5",
  ink: "#ffffff",
  muted: "#dddddd",
};
export const scrollScrubScenes: ScrollScrubScene[] = [{
  id: "portfolio-intro",
  label: "Introduction",
  title: "GRAPHIC DESIGN",
  body: "Hyerim Kim (Liv Kim). Brand identity, campaign and digital content design.",
  kicker: "PORTFOLIO",
  tags: ["SYDNEY", "SELECTED WORK"],
  clip: "/assets/world/scene-01.mp4",
  mobileClip: "/assets/world/scene-01-mobile.mp4",
  poster: "/assets/world/scene-01-poster.png",
  mobilePoster: "/assets/world/scene-01-mobile-poster.png",
  scroll: 2.8,
  objectPosition: "50% 50%",
}];
