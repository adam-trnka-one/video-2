import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: {
      en: "Coastal Wedding Celebration",
      cz: "Svatba na Pobřeží"
    },
    description: {
      en: "Intimate beach wedding ceremony",
      cz: "Intimní svatební obřad na pláži"
    },
    leadText: {
      en: "A beautiful celebration of love on the shores of Malibu, capturing intimate moments and joyful celebrations.",
      cz: "Krásná oslava lásky na pobřeží Malibu, zachycující intimní momenty a radostné oslavy."
    },
    videoUrl: "https://player.vimeo.com/video/225434434",
    thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
    category: "Wedding",
    date: "2023-06-15"
  },
  // ... Add translations for all other projects similarly
];