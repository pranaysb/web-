import gensecImg from "./assets/council/gensec.jpeg"
import designxCoord from "./assets/council/designx.png"
import drishyaCoord from "./assets/council/drishya.jpg"
import quizCoord from "./assets/council/quizzotica.png"
import tpsCoord from "./assets/council/TPS.png"
import swaraCoord from "./assets/council/swara.png"
import beatCoord from "./assets/council/beathackers.png"
import renCoord from "./assets/council/renaissance.png"
import goalssec1 from "./assets/council/GOALS1.png"
import goalssec2 from "./assets/council/GOALS2.png"
import fpssec from "./assets/council/FPS.png"


import auditionImg from "./assets/clubs/drishya/audition.png"

import drishyaMain from "./assets/clubs/drishya/main.jpg"
import drishyaMain2 from "./assets/clubs/drishya/main2.png"

import maheshImg from "./assets/clubs/drishya/mahesh.jpg"
import gouravImg from "./assets/clubs/drishya/gourav.jpg"
import jayasuryaImg from "./assets/clubs/drishya/jayasurya.jpeg"
import khushagraImg from "./assets/clubs/drishya/khushagra.jpeg"
import parinithaImg from "./assets/clubs/drishya/parinitha.jpeg"
import rohanImg from "./assets/clubs/drishya/rohan.jpeg"
import namanImg from "./assets/clubs/drishya/naman.jpeg"



import drishyaLogo from "./assets/logos/drishya.png";


/* ---------------- DRISHYA EVENT IMAGES ---------------- */

// Inter IIT
import stageplay1 from "./assets/clubs/drishya/inter-iit/stageplay1.jpeg"
import stageplay2 from "./assets/clubs/drishya/inter-iit/stageplay2.jpeg"
import stageplay3 from "./assets/clubs/drishya/inter-iit/stageplay3.jpeg"

import mime1 from "./assets/clubs/drishya/inter-iit/mime1.jpeg"
import mime2 from "./assets/clubs/drishya/inter-iit/mime2.jpeg"
import mime3 from "./assets/clubs/drishya/inter-iit/mime3.png"
import mime5 from "./assets/clubs/drishya/ciao/mime5.png"
import mime6 from "./assets/clubs/drishya/inter-iit/mime6.png"
import nukkad1 from "./assets/clubs/drishya/inter-iit/nukkad1.png"
import nukkad2 from "./assets/clubs/drishya/inter-iit/nukkad2.png"

// Meraz
import murder1 from "./assets/clubs/drishya/meraz/murder1.png"
import murder2 from "./assets/clubs/drishya/meraz/murder2.png"
import murder3 from "./assets/clubs/drishya/meraz/murder3.png"
import monoact1 from "./assets/clubs/drishya/inter-iit/monoact.png"
import mime4 from "./assets/clubs/drishya/ciao/mime4.png"


import remalyaImg from "./assets/clubs/beathackers/remalya.png"
import dheerajImg from "./assets/clubs/beathackers/dheeraj.png"
import anushkaImg from "./assets/clubs/beathackers/anushka.png"
import bhumiImg from "./assets/clubs/beathackers/bhumi.png"
import satwikaImg from "./assets/clubs/beathackers/satwika.png"

import swaraMain from "./assets/clubs/swara/swaramain.png"
import swaraMain2 from "./assets/clubs/swara/swaramain2.png"
import fpsMain from "./assets/clubs/fps/fpsmain.png"
import fpsMain2 from "./assets/clubs/fps/fpsmain2.png"
import beatMain from "./assets/clubs/beathackers/beatmain.png"
import beatMain2 from "./assets/clubs/beathackers/beatmain2.png"
import goalsMain from "./assets/clubs/goals/goalsmain.png"
import goalsMain2 from "./assets/clubs/goals/goalsmain2.png"

import renMain from "./assets/clubs/renaissance/renmain.png"
import renMain2 from "./assets/clubs/renaissance/renmain2.png"
import designxMain from "./assets/clubs/designx/designxmain.png"
import designxMain2 from "./assets/clubs/designx/designxmain2.png"
import quizMain from "./assets/clubs/quizzotica/quizmain.png"
import quizMain2 from "./assets/clubs/quizzotica/quizmain2.png"


import sourabhImg from "./assets/clubs/swara/sourabh.png"
import kinshukImg from "./assets/clubs/swara/kinshuk.png"
import hamsikaImg from "./assets/clubs/swara/hamsika.png"
import manjotMusicImg from "./assets/clubs/swara/manjot.png"
import sarthakImg from "./assets/clubs/swara/sarthak.png"
import chaitraliImg from "./assets/clubs/swara/chaitrali.png"
import abhigyanImg from "./assets/clubs/swara/abhigyan.png"



import vinayakImg from "./assets/clubs/fps/vinayak.png"
import harinathImg from "./assets/clubs/fps/harinath.png"
import khushagraFpsImg from "./assets/clubs/fps/khushagra.png"


import utkarshImg from "./assets/clubs/goals/utkarsh.png"
import kanishkaImg from "./assets/clubs/goals/kanishka.png"
import sakshiImg from "./assets/clubs/goals/sakshi.png"
import poojaImg from "./assets/clubs/goals/pooja.png"
import ankanImg from "./assets/clubs/goals/ankan.png"
import varshithaImg from "./assets/clubs/goals/varshitha.png"
import madanImg from "./assets/clubs/goals/madan.png"
import kushagraImg from "./assets/clubs/goals/kushagra.png"



// Anveshan
import anveshanSkit from "./assets/clubs/drishya/anveshan/skit.png"

// CIAO
import ciaoSkit from "./assets/clubs/drishya/ciao/skit.png"
export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  images?: string[];
  type: 'upcoming' | 'past' | 'inter-iit' | 'meraz' | 'anveshan' | 'other';
  category?: string;
  year?: number;
  fullDescription?: string;
  highlights?: string[];
}

export interface InterIITStat {
  rank: string;
  event: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  isCoordinator?: boolean;
  instagram?: string;
  email?: string;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  youtubeId: string;
}
export interface Club {
  id: string;
  name: string;
  type: 'club' | 'society';
  tagline: string;
  logo: string;
  description: string;
  heroImage?: string;
  aboutImage?: string;


  theme: {
    color: string;
    accent: string;
    lighting: string;
    motion: 'wave' | 'curtain' | 'ink' | 'beat' | 'flip' | 'shutter' | 'morph' | 'reel' | 'typography' | 'clapper' | 'book' | 'footprints' | 'brush';
    bg: string;
    secondaryBg?: string;
    texture?: string;
    glowColor: string;
  };

  about: string;

  clubMembers: TeamMember[];

  upcomingEvents: Event[];
  interIITEvents: Event[];
  merazEvents: Event[];
  anveshanEvents: Event[];
  otherEvents: Event[];

  gallery: string[];

  videos?: Video[];

  interIITStats?: InterIITStat[];   // ✅ CORRECT PLACE
}

export interface CouncilMember {
  name: string;
  role: string;
  image: string;
  club?: string;
  instagram?: string;
  email?: string;
}

export interface CouncilYear {
  year: string;
  members: CouncilMember[];
}
export const CURRENT_COUNCIL: { genSec: CouncilMember, coordinators: CouncilMember[], societySecretaries: CouncilMember[] } = {
  genSec: {
    name: 'Lakshay Gupta',
    role: 'General Secretary',
    image: gensecImg,
    instagram: "https://instagram.com/placeholder",
    email: "mailto:placeholder@iitbhilai.ac.in"
  },

  coordinators: [
    {
      name: 'Kabeer More',
      role: 'DesignX Coordinator',
      image: designxCoord,
      club: 'designx',
      instagram: "https://instagram.com/placeholder",
      email: "mailto:placeholder@iitbhilai.ac.in"
    },

    {
      name: 'Mahesh',
      role: 'Drishya Coordinator',
      image: drishyaCoord,
      club: 'drishya',
      instagram: "https://instagram.com/placeholder",
      email: "mailto:placeholder@iitbhilai.ac.in"
    },

    {
      name: 'Arya Shadangule',
      role: 'Quizzotica Coordinator',
      image: quizCoord,
      club: 'quizzotica',
      instagram: "https://instagram.com/placeholder",
      email: "mailto:placeholder@iitbhilai.ac.in"
    },

    {
      name: 'Chatainya Kumar Ranga',
      role: 'TPS Coordinator',
      image: tpsCoord,
      club: 'tps',
      instagram: "https://instagram.com/placeholder",
      email: "mailto:placeholder@iitbhilai.ac.in"
    },

    {
      name: 'Sourabh Singh',
      role: 'Swara Coordinator',
      image: swaraCoord,
      club: 'swara',
      instagram: "https://instagram.com/placeholder",
      email: "mailto:placeholder@iitbhilai.ac.in"
    },

    {
      name: 'Swarnadip Kar',
      role: 'Beathackers Coordinator',
      image: beatCoord,
      club: 'beathackers',
      instagram: "https://instagram.com/placeholder",
      email: "mailto:placeholder@iitbhilai.ac.in"
    },

    {
      name: 'Nagineni Thanmaie',
      role: 'Renaissance Coordinator',
      image: renCoord,
      club: 'renaissance',
      instagram: "https://instagram.com/placeholder",
      email: "mailto:placeholder@iitbhilai.ac.in"
    }
  ],

  societySecretaries: [
    {
      name: 'Kanishka Yadav',
      role: 'GOALS Secretary',
      image: goalssec1,
      club: 'goals',
      instagram: "https://instagram.com/placeholder",
      email: "mailto:placeholder@iitbhilai.ac.in"
    },

    {
      name: 'Utkarsh Chatterjee',
      role: 'GOALS Secretary',
      image: goalssec2,
      club: 'goals',
      instagram: "https://instagram.com/placeholder",
      email: "mailto:placeholder@iitbhilai.ac.in"
    },

    {
      name: 'Manjot Singh',
      role: 'FPS Secretary',
      image: fpssec,
      club: 'fps',
      instagram: "https://instagram.com/placeholder",
      email: "mailto:placeholder@iitbhilai.ac.in"
    }
  ]
};

export const HALL_OF_FAME: CouncilYear[] = [
  {
    year: '2024–25',
    members: [
      { name: 'Previous GenSec', role: 'General Secretary', image: 'https://picsum.photos/seed/prev_gensec1/400/400' },
      { name: 'Member 1', role: 'Coordinator', image: 'https://picsum.photos/seed/prev_m1/400/400' },
      { name: 'Member 2', role: 'Coordinator', image: 'https://picsum.photos/seed/prev_m2/400/400' },
    ]
  },
  {
    year: '2023–24',
    members: [
      { name: 'Old GenSec', role: 'General Secretary', image: 'https://picsum.photos/seed/old_gensec/400/400' },
      { name: 'Old Member 1', role: 'Coordinator', image: 'https://picsum.photos/seed/old_m1/400/400' },
    ]
  }
];

export const CLUBS: Club[] = [
  {
    id: 'designx',
    name: 'DesignX',
    type: 'club',
    tagline: 'Pixels with Purpose',
    heroImage: designxMain,
    aboutImage: designxMain2,
    description: 'The digital art and design hub of IIT Bhilai, where creativity meets technology.',
    theme: {
      color: '#0ea5e9',
      accent: '#38bdf8',
      lighting: 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.2) 0%, transparent 70%)',
      motion: 'morph',
      bg: 'bg-[#0b0f2a]',
      glowColor: 'rgba(14, 165, 233, 0.5)'
    },
    about: 'DesignX is dedicated to exploring the realms of UI/UX, graphic design, and digital illustration. We bridge the gap between aesthetic beauty and functional design.',
    clubMembers: [
      { name: 'Siddharth Jain', role: 'Club Coordinator', image: 'https://picsum.photos/seed/designx1/400/400', isCoordinator: true },
      { name: 'Ananya Rao', role: 'Core Member', image: 'https://picsum.photos/seed/designx2/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/designx3/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/designx4/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/designx5/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/designx6/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/designx7/400/400' }
    ],
    upcomingEvents: [
      { id: 'dx-u1', title: 'UI/UX Workshop', date: 'April 5, 2026', description: 'Master the art of user-centric design in this hands-on workshop.', image: 'https://picsum.photos/seed/uiux/800/600', type: 'upcoming', fullDescription: 'Join us for an intensive workshop where we dive deep into the principles of UI/UX design. From wireframing to high-fidelity prototyping, learn the tools and techniques used by industry professionals.' }
    ],
    interIITEvents: [
      { id: 'dx-i1', title: 'Inter IIT Digital Art', date: 'Dec 2025', description: 'Representing IIT Bhilai in the digital art category.', image: 'https://picsum.photos/seed/digitalart/800/600', type: 'inter-iit', fullDescription: 'Our designers competed on a national level, creating stunning digital illustrations that captured the theme of "Future Frontiers".' }
    ],
    merazEvents: [
      { id: 'dx-m1', title: 'Design Marathon', date: 'Feb 13, 2026', description: 'A 24-hour design challenge during Meraz.', image: 'https://picsum.photos/seed/designmarathon/800/600', type: 'meraz', fullDescription: 'Participants were tasked with solving real-world problems through design in this high-pressure, high-reward competition.' }
    ],
    anveshanEvents: [
      { id: 'dx-a1', title: 'House Shield Design', date: 'March 1, 2026', description: 'Designing the official shields for the inter-house competition.', image: 'https://picsum.photos/seed/shield/800/600', type: 'anveshan', fullDescription: 'Each house worked with DesignX mentors to create unique, symbolic shields that represent their house identity.' }
    ],
    otherEvents: [
      { id: 'dx-o1', title: 'Logo Reveal', date: 'Jan 10, 2026', description: 'Unveiling the new identity for the Cultural Council.', image: 'https://picsum.photos/seed/logo/800/600', type: 'other', fullDescription: 'A special event celebrating the rebranding of our cultural hub.' }
    ],
    gallery: ['https://picsum.photos/seed/dx_g1/800/600', 'https://picsum.photos/seed/dx_g2/800/600']
  },

  {
    id: 'drishya',
    name: 'Drishya',
    type: 'club',
    tagline: 'The Stage is Yours',
    logo: drishyaLogo,
    heroImage: drishyaMain,
    aboutImage: drishyaMain2,
    description: 'Bringing stories to life through the magic of theatre and drama.',
    theme: {
      color: '#4B0082',
      accent: '#FFD700',
      lighting: 'radial-gradient(circle at 50% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 60%)',
      motion: 'curtain',
      bg: 'bg-[#140a1f]',
      glowColor: 'rgba(147, 51, 234, 0.6)'
    },
    about: 'Drishya is the dramatics club of IIT Bhilai. We explore the depths of human emotion and societal narratives through stage plays, street plays, and mime.',
    clubMembers: [
      {
        name: "Mahesh",
        role: "Club Coordinator",
        image: maheshImg,
        isCoordinator: true,
        instagram: "https://instagram.com/mahesh",
        email: "mailto:mahesh@iitbhilai.ac.in"
      },

      {
        name: "Gourav",
        role: "Content Head",
        image: gouravImg,
        instagram: "https://instagram.com/mahesh",
        email: "mailto:mahesh@iitbhilai.ac.in"
      },

      {
        name: "Jayasurya",
        role: "Writing Head",
        image: jayasuryaImg,
        instagram: "https://instagram.com/mahesh",
        email: "mailto:mahesh@iitbhilai.ac.in"
      },

      {
        name: "Rohan",
        role: "Acting Head",
        image: rohanImg,
        instagram: "https://instagram.com/mahesh",
        email: "mailto:mahesh@iitbhilai.ac.in"
      },

      {
        name: "Parinitha",
        role: "Production Head",
        image: parinithaImg,
        instagram: "https://instagram.com/mahesh",
        email: "mailto:mahesh@iitbhilai.ac.in"
      },

      {
        name: "Khushagra",
        role: "PR Head",
        image: khushagraImg,
        instagram: "https://instagram.com/mahesh",
        email: "mailto:mahesh@iitbhilai.ac.in"
      },

      {
        name: "Naman",
        role: "Technical Head",
        image: namanImg,
        instagram: "https://instagram.com/mahesh",
        email: "mailto:mahesh@iitbhilai.ac.in"
      }
    ],
    upcomingEvents: [
      {
        id: 'dr-u1',
        title: 'Auditions',
        date: 'April 10, 2026',
        description: 'Join the squad for the upcoming  season.',
        image: auditionImg,
        type: 'upcoming',
        fullDescription: 'We are looking for energetic performers who can command on stage. No experience required, just passion and a loud voice!'
      }
    ],
    interIITEvents: [

      {
        id: "dr-i1",
        title: "Stage Play",
        date: "Inter IIT Cultural Meet",
        description: "Full scale theatrical production representing IIT Bhilai.",
        image: stageplay1,
        images: [stageplay1, stageplay2, stageplay3],
        type: "inter-iit",
        fullDescription:
          "Drishya represented IIT Bhilai in the Stage Play category at the Inter IIT Cultural Meet with a full theatrical production.",
        highlights: [
          "Rank: 9th Place",
          "Full scale stage production",
          "National level theatre competition"
        ]
      },

      {
        id: "dr-i2",
        title: "Mime",
        date: "Inter IIT Cultural Meet",
        description: "Silent storytelling through expressive performance.",
        image: mime6,
        images: [mime6, mime2, mime3],
        type: "inter-iit",
        fullDescription:
          "Drishya's mime team delivered a powerful silent storytelling performance using expressive body language and choreography.",
        highlights: [
          "Rank: 8th Place",
          "Expressive silent storytelling",
          "Performed at Inter IIT Cultural Meet"
        ]
      },

      {
        id: "dr-i3",
        title: "Nukkad Natak (Street Play)",
        date: "Inter IIT Cultural Meet",
        description: "Street theatre addressing powerful social themes.",
        image: nukkad1,
        images: [nukkad1, nukkad2],
        type: "inter-iit",
        fullDescription:
          "The Nukkad Natak team performed an energetic street play engaging the audience while highlighting social issues.",
        highlights: [
          "Rank: 11th Place",
          "Street theatre format",
          "Audience engagement performance"
        ]
      },

      {
        id: "dr-i4",
        title: "Monoact",
        date: "Inter IIT Cultural Meet",
        description: "Solo theatrical performance.",
        image: monoact1,
        images: [monoact1],
        type: "inter-iit",
        fullDescription:
          "A solo theatrical performance representing IIT Bhilai in the Monoact category at the Inter IIT Cultural Meet.",
        highlights: [
          "Solo acting performance",
          "Individual theatre category",
          "Inter IIT Cultural Meet participation"
        ]
      }

    ],
    merazEvents: [

      {
        id: "dr-m1",
        title: "Murder Mystery",
        date: "Meraz",
        description: "Interactive theatrical murder mystery experience.",
        image: murder1,
        images: [murder1, murder2, murder3],
        type: "meraz",
        year: 2026,
        fullDescription:
          "An immersive theatre event where the audience becomes detectives and solves a murder through clues, interrogations and dramatic performances."
      }

    ],
    anveshanEvents: [

      {
        id: "dr-a1",
        title: "Skit",
        date: "Anveshan",
        description: "Inter-house theatrical skit competition.",
        image: anveshanSkit,
        images: [anveshanSkit],
        type: "anveshan",
        fullDescription:
          "Different houses compete through short theatrical skits showcasing creativity, acting and storytelling."
      },

      {
        id: "dr-a2",
        title: "Improv",
        date: "Anveshan",
        description: "Improvisational theatre competition.",
        image: anveshanSkit,
        images: [anveshanSkit],
        type: "anveshan",
        fullDescription:
          "Performers create spontaneous scenes based on random prompts in a fast-paced improv competition."
      }

    ],
    otherEvents: [

      {
        id: "dr-o1",
        title: "CIAO Mime",
        date: "CIAO",
        description: "Mime performance during CIAO cultural exchange.",
        image: mime4,
        images: [mime4, mime5],
        type: "other",
        fullDescription:
          "Drishya presented a mime performance during the CIAO cultural exchange program showcasing expressive silent storytelling."
      },

      {
        id: "dr-o2",
        title: "CIAO Skit",
        date: "CIAO",
        description: "Theatrical skit performance during CIAO.",
        image: ciaoSkit,
        images: [ciaoSkit],
        type: "other",
        fullDescription:
          "A short theatrical skit presented during CIAO showcasing storytelling and acting."
      }

    ],
    gallery: [
      stageplay1,
      mime6,
      nukkad1,
      nukkad2,
      murder2,
      mime2,
      mime1,
      mime3,


      murder1,
      monoact1,
      mime4
    ],
    interIITStats: [
      { event: "Mime", rank: "8th" },
      { event: "Stage Play", rank: "9th" },
      { event: "Nukkad Natak", rank: "11th" }
    ],
  },
  {
    id: 'quizzotica',
    name: 'Quizzotica',
    type: 'club',
    tagline: 'Quest for Knowledge',
    heroImage: quizMain,
    aboutImage: quizMain2,
    description: 'The quiz club of IIT Bhilai, challenging minds and celebrating trivia.',
    theme: {
      color: '#f59e0b',
      accent: '#fbbf24',
      lighting: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.2) 0%, transparent 70%)',
      motion: 'flip',
      bg: 'bg-[#1a0a0a]',
      glowColor: 'rgba(245, 158, 11, 0.5)'
    },
    about: 'Quizzotica brings together trivia enthusiasts to compete in various formats of quizzing, from general to niche topics.',
    clubMembers: [
      { name: 'Rahul Mehra', role: 'Club Coordinator', image: 'https://picsum.photos/seed/quiz1/400/400', isCoordinator: true },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/quiz2/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/quiz3/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/quiz4/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/quiz5/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/quiz6/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/quiz7/400/400' }
    ],
    upcomingEvents: [
      { id: 'q-u1', title: 'General Quiz', date: 'April 12, 2026', description: 'Test your knowledge on everything under the sun.', image: 'https://picsum.photos/seed/genquiz/800/600', type: 'upcoming' }
    ],
    interIITEvents: [
      { id: 'q-i1', title: 'Inter IIT Quiz', date: 'Dec 2025', description: 'Representing IIT Bhilai in the national quiz competition.', image: 'https://picsum.photos/seed/interquiz/800/600', type: 'inter-iit' }
    ],
    merazEvents: [
      { id: 'q-m1', title: 'The Meraz Open', date: 'Feb 14, 2026', description: 'A massive open quiz for all participants.', image: 'https://picsum.photos/seed/openquiz/800/600', type: 'meraz' }
    ],
    anveshanEvents: [
      { id: 'q-a1', title: 'House Quiz Battle', date: 'March 10, 2026', description: 'Inter-house trivia showdown.', image: 'https://picsum.photos/seed/housequiz/800/600', type: 'anveshan' }
    ],
    otherEvents: [],
    gallery: ['https://picsum.photos/seed/quiz_g1/800/600', 'https://picsum.photos/seed/quiz_g2/800/600']
  },
  {
    id: 'tps',
    name: 'TPS',
    type: 'club',
    tagline: 'Capture the Moment',
    description: 'The Photography Society, freezing time one frame at a time.',
    theme: {
      color: '#64748b',
      accent: '#94a3b8',
      lighting: 'radial-gradient(circle at 50% 50%, rgba(100, 116, 139, 0.2) 0%, transparent 70%)',
      motion: 'shutter',
      bg: 'bg-[#0f172a]',
      glowColor: 'rgba(100, 116, 139, 0.5)'
    },
    about: 'TPS is a community of photography enthusiasts capturing the essence of campus life and beyond through the lens.',
    clubMembers: [
      { name: 'Ishita Roy', role: 'Club Coordinator', image: 'https://picsum.photos/seed/tps1/400/400', isCoordinator: true },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/tps2/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/tps3/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/tps4/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/tps5/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/tps6/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/tps7/400/400' }
    ],
    upcomingEvents: [
      { id: 'tps-u1', title: 'Golden Hour Walk', date: 'April 15, 2026', description: 'Capture the beauty of the campus during the golden hour.', image: 'https://picsum.photos/seed/golden/800/600', type: 'upcoming' }
    ],
    interIITEvents: [
      { id: 'tps-i1', title: 'Inter IIT Photography', date: 'Dec 2025', description: 'Representing IIT Bhilai in the photography category.', image: 'https://picsum.photos/seed/interphoto/800/600', type: 'inter-iit' }
    ],
    merazEvents: [
      { id: 'tps-m1', title: 'The Photo Booth', date: 'Feb 13, 2026', description: 'A fun photo booth experience during Meraz.', image: 'https://picsum.photos/seed/photobooth/800/600', type: 'meraz' }
    ],
    anveshanEvents: [
      { id: 'tps-a1', title: 'House Photo Battle', date: 'March 8, 2026', description: 'Inter-house photography competition.', image: 'https://picsum.photos/seed/housephoto/800/600', type: 'anveshan' }
    ],
    otherEvents: [
      { id: 'tps-o1', title: 'Photography Workshop', date: 'Jan 20, 2026', description: 'Learn the basics of photography from experts.', image: 'https://picsum.photos/seed/photoworkshop/800/600', type: 'other' }
    ],
    gallery: ['https://picsum.photos/seed/tps_g1/800/600', 'https://picsum.photos/seed/tps_g2/800/600', 'https://picsum.photos/seed/tps_g3/800/600']
  },
  {
    id: 'swara',
    name: 'Swara',
    type: 'club',
    tagline: 'The Soul of Music',
    heroImage: swaraMain,
    aboutImage: swaraMain2,
    description: 'Where melodies meet the soul, and rhythms define our heartbeat.',
    theme: {
      color: '#800000',
      accent: '#FFD700',
      lighting: 'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.2) 0%, transparent 70%)',
      motion: 'wave',
      bg: 'bg-[#1a0a0a]',
      glowColor: 'rgba(220, 38, 38, 0.5)'
    },
    about: 'Swara is the music club of IIT Bhilai, dedicated to fostering a vibrant musical culture. From classical ragas to modern rock, we celebrate all forms of musical expression.',
    clubMembers: [

      {
        name: "Sourabh Kumar",
        role: "Club Coordinator",
        image: sourabhImg,
        isCoordinator: true
      },

      {
        name: "Kinshuk Gupta",
        role: "Audio & Setup",
        image: kinshukImg,
        email: "mailto:kinshukg@iitbhilai.ac.in"
      },

      {
        name: "Vanam Hamsika Chandana",
        role: "General Core",
        image: hamsikaImg,
        email: "mailto:vanamhc@iitbhilai.ac.in"
      },

      {
        name: "Manjot Singh",
        role: "Video Editor",
        image: manjotMusicImg,
        email: "mailto:manjot@iitbhilai.ac.in"
      },

      {
        name: "Sarthak Shrivastava",
        role: "Core Member",
        image: sarthakImg,
        email: "mailto:sarthakshriva@iitbhilai.ac.in"
      },

      {
        name: "Chaitrali Zode",
        role: "Core Member",
        image: chaitraliImg,
        email: "mailto:chaitralipz@iitbhilai.ac.in"
      },

      {
        name: "Abhigyan Sharma",
        role: "Core Member",
        image: abhigyanImg,
        email: "mailto:abhigyans@iitbhilai.ac.in"
      }

    ],
    upcomingEvents: [
      {
        id: "sw-u1",
        title: "Cultscape",
        date: "TBA",
        description: "Music club performances and activities.",
        image: "https://picsum.photos/seed/cultscape/800/600",
        type: "upcoming"
      }
    ],
    interIITEvents: [
      { id: 's-i1', title: 'Inter IIT Music', date: 'Dec 2025', description: 'Our music contingent performing at the national level.', image: 'https://picsum.photos/seed/intermusic/800/600', type: 'inter-iit' }
    ],
    merazEvents: [

      {
        id: "sw-m1",
        title: "Battle of Bands",
        date: "Meraz",
        description: "Live band competition.",
        image: "https://picsum.photos/seed/battleofbands/800/600",
        type: "meraz"
      },

      {
        id: "sw-m2",
        title: "Surreal",
        date: "Meraz",
        description: "Offline solo singing competition.",
        image: "https://picsum.photos/seed/surreal/800/600",
        type: "meraz"
      },

      {
        id: "sw-m3",
        title: "Euphony",
        date: "Meraz",
        description: "Online solo singing competition.",
        image: "https://picsum.photos/seed/euphony/800/600",
        type: "meraz"
      },

      {
        id: "sw-m4",
        title: "Symphoria",
        date: "Meraz",
        description: "Online instrumental competition.",
        image: "https://picsum.photos/seed/symphoria/800/600",
        type: "meraz"
      }

    ],
    anveshanEvents: [
      { id: 's-a1', title: 'House Music Shield', date: 'March 12, 2026', description: 'Inter-house music competition.', image: 'https://picsum.photos/seed/housemusic/800/600', type: 'anveshan' }
    ],
    otherEvents: [
      { id: 's-o1', title: 'Music Workshop', date: 'Jan 25, 2026', description: 'Learn the art of music production.', image: 'https://picsum.photos/seed/musicworkshop/800/600', type: 'other' }
    ],
    gallery: [
      'https://picsum.photos/seed/swara_g1/800/600',
      'https://picsum.photos/seed/swara_g2/800/600',
      'https://picsum.photos/seed/swara_g3/800/600'
    ]
  },
  {
    id: 'beathackers',
    name: 'Beathackers',
    type: 'club',
    tagline: 'Dance to the Rhythm',
    heroImage: beatMain,
    aboutImage: beatMain2,
    description: 'The dance club that brings energy, passion, and precision to the floor.',
    theme: {
      color: '#dc2626',
      accent: '#3b82f6',
      lighting: 'radial-gradient(circle at 70% 60%, rgba(220, 38, 38, 0.2) 0%, transparent 60%)',
      motion: 'footprints',
      bg: 'bg-[#1a0f2e]',
      glowColor: 'rgba(220, 38, 38, 0.7)'
    },
    about: 'Beathackers is the dance club of IIT Bhilai. We cover a wide range of styles including hip-hop, contemporary, and Bollywood, focusing on high-energy performances.',
    clubMembers: [

      {
        name: "Sahil Khan",
        role: "Club Coordinator",
        image: "https://picsum.photos/seed/dance1/400/400",
        isCoordinator: true
      },

      {
        name: "Remalya G",
        role: "Choreography Team",
        image: remalyaImg,
        instagram: "https://instagram.com/i_remalya"
      },

      {
        name: "N. Dheeraj",
        role: "Management Team",
        image: dheerajImg,
        instagram: "https://instagram.com/dheeru__2008"
      },

      {
        name: "Anushka Gawande",
        role: "Management Team",
        image: anushkaImg,
        instagram: "https://instagram.com/anushka_gawande_1"
      },

      {
        name: "Bhumi Tapdiya",
        role: "Choreography Team",
        image: bhumiImg,
        instagram: "https://instagram.com/bhumitapdiya"
      },

      {
        name: "Lanka Devi Satwika",
        role: "Management Team",
        image: satwikaImg,
        instagram: "https://instagram.com/satwika_369"
      }

    ],
    upcomingEvents: [
      { id: 'b1', title: 'Dance Off', date: 'April 20, 2026', description: 'A high-stakes dance battle between different houses.', image: 'https://picsum.photos/seed/dance_event1/800/600', type: 'upcoming' }
    ],
    interIITEvents: [
      { id: 'b-i1', title: 'Inter IIT Dance', date: 'Dec 2025', description: 'Our dance squad performing at the Inter IIT Cultural Meet.', image: 'https://picsum.photos/seed/interdance/800/600', type: 'inter-iit' }
    ],
    merazEvents: [
      { id: 'b-m1', title: 'Dance Extravaganza', date: 'Feb 15, 2026', description: 'A massive dance show during Meraz.', image: 'https://picsum.photos/seed/dancefest/800/600', type: 'meraz' }
    ],
    anveshanEvents: [
      { id: 'b-a1', title: 'House Dance Battle', date: 'March 15, 2026', description: 'Inter-house dance competition.', image: 'https://picsum.photos/seed/housedance/800/600', type: 'anveshan' }
    ],
    otherEvents: [
      { id: 'b-o1', title: 'Dance Workshop', date: 'Jan 30, 2026', description: 'Learn new dance styles from professionals.', image: 'https://picsum.photos/seed/danceworkshop/800/600', type: 'other' }
    ],
    gallery: [
      'https://picsum.photos/seed/beathackers_g1/800/600',
      'https://picsum.photos/seed/beathackers_g2/800/600',
      'https://picsum.photos/seed/beathackers_g3/800/600'
    ]
  },
  {
    id: 'renaissance',
    name: 'Renaissance',
    type: 'club',
    tagline: 'Art in Every Breath',
    heroImage: renMain,
    aboutImage: renMain2,
    description: 'A sanctuary for fine arts, where every stroke tells a story.',
    theme: {
      color: '#1e3a8a',
      accent: '#60a5fa',
      lighting: 'radial-gradient(circle at 30% 40%, rgba(30, 58, 138, 0.3) 0%, transparent 70%)',
      motion: 'brush',
      bg: 'bg-[#0b0f2a]',
      texture: 'https://www.transparenttextures.com/patterns/paper-fibers.png',
      glowColor: 'rgba(30, 58, 138, 0.4)'
    },
    about: 'Renaissance is the fine arts club of IIT Bhilai. From traditional painting to digital art, we provide a platform for artists to express their creativity and hone their skills.',
    clubMembers: [
      { name: 'Kavya Singh', role: 'Club Coordinator', image: 'https://picsum.photos/seed/art1/400/400', isCoordinator: true },
      { name: 'Vikram Aditya', role: 'Core Member', image: 'https://picsum.photos/seed/art2/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/art3/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/art4/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/art5/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/art6/400/400' },
      { name: 'TBA', role: 'Core Member', image: 'https://picsum.photos/seed/art7/400/400' }
    ],
    upcomingEvents: [
      { id: 'r1', title: 'Canvas & Coffee', date: 'March 25, 2026', description: 'A relaxed painting session with live music.', image: 'https://picsum.photos/seed/fineart1/800/600', type: 'upcoming' }
    ],
    interIITEvents: [
      { id: 'r-i1', title: 'Inter IIT Fine Arts', date: 'Dec 2025', description: 'Our artists competing at the national level.', image: 'https://picsum.photos/seed/interart/800/600', type: 'inter-iit' }
    ],
    merazEvents: [
      { id: 'r-m1', title: 'Art Exhibition', date: 'Feb 12, 2026', description: 'Showcasing our best works during Meraz.', image: 'https://picsum.photos/seed/artexhibit/800/600', type: 'meraz' }
    ],
    anveshanEvents: [
      { id: 'r-a1', title: 'House Art Shield', date: 'March 18, 2026', description: 'Inter-house fine arts competition.', image: 'https://picsum.photos/seed/houseart/800/600', type: 'anveshan' }
    ],
    otherEvents: [
      { id: 'r-o1', title: 'Art Workshop', date: 'Jan 15, 2026', description: 'Learn the basics of fine arts.', image: 'https://picsum.photos/seed/artworkshop/800/600', type: 'other' }
    ],
    gallery: [
      'https://picsum.photos/seed/renaissance_g1/800/600',
      'https://picsum.photos/seed/renaissance_g2/800/600',
      'https://picsum.photos/seed/renaissance_g3/800/600'
    ]
  },
  {
    id: 'fps',
    name: 'FPS',
    type: 'society',
    tagline: 'Cinema in Motion',
    heroImage: fpsMain,
    aboutImage: fpsMain2,
    description: 'The Film Production Society, bringing cinematic visions to life.',
    theme: {
      color: '#000000',
      accent: '#ffffff',
      lighting: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
      motion: 'clapper',
      bg: 'bg-[#050505]',
      glowColor: 'rgba(255, 255, 255, 0.3)'
    },
    about: 'FPS focuses on filmmaking, cinematography, and post-production, providing students with the tools and knowledge to create compelling visual stories.',
    clubMembers: [

      {
        name: "Manjot Singh",
        role: "Secretary",
        image: manjotMusicImg,
        instagram: "https://instagram.com/manjot.mp4",
        isCoordinator: true
      },

      {
        name: "Vinayak Singh",
        role: "Pre-Production Head",
        image: vinayakImg
      },

      {
        name: "Harinath KR",
        role: "Production Head",
        image: harinathImg
      },

      {
        name: "Khushagra Barfa",
        role: "Media Head",
        image: khushagraFpsImg
      }

    ],
    upcomingEvents: [
      { id: 'fps-u1', title: 'Short Film Screening', date: 'April 25, 2026', description: 'A showcase of short films created by our members.', image: 'https://picsum.photos/seed/screening/800/600', type: 'upcoming' }
    ],
    interIITEvents: [
      { id: 'fps-i1', title: 'Inter IIT Filmmaking', date: 'Dec 2025', description: 'Our film production team competing at the national level.', image: 'https://picsum.photos/seed/interfilm/800/600', type: 'inter-iit' }
    ],
    merazEvents: [
      { id: 'fps-m1', title: 'Meraz Film Festival', date: 'Feb 13, 2026', description: 'A film festival during Meraz.', image: 'https://picsum.photos/seed/filmfest/800/600', type: 'meraz' }
    ],
    anveshanEvents: [
      { id: 'fps-a1', title: 'House Film Battle', date: 'March 20, 2026', description: 'Inter-house filmmaking competition.', image: 'https://picsum.photos/seed/housefilm/800/600', type: 'anveshan' }
    ],
    otherEvents: [
      { id: 'fps-o1', title: 'Filmmaking Workshop', date: 'Jan 10, 2026', description: 'Learn the basics of filmmaking.', image: 'https://picsum.photos/seed/filmworkshop/800/600', type: 'other' }
    ],
    gallery: ['https://picsum.photos/seed/fps_g1/800/600', 'https://picsum.photos/seed/fps_g2/800/600', 'https://picsum.photos/seed/fps_g3/800/600'],
    videos: [
      { id: 'v1', title: 'Meraz 2024 Aftermovie', thumbnail: 'https://picsum.photos/seed/fps_v1/800/450', youtubeId: 'dQw4w9WgXcQ' },
      { id: 'v2', title: 'Anveshan 2024 Highlights', thumbnail: 'https://picsum.photos/seed/fps_v2/800/450', youtubeId: 'dQw4w9WgXcQ' },
      { id: 'v3', title: 'Short Film: The Echo', thumbnail: 'https://picsum.photos/seed/fps_v3/800/450', youtubeId: 'dQw4w9WgXcQ' },
    ]
  },
  {
    id: 'goals',
    name: 'GOALS',
    type: 'society',
    tagline: 'The Power of Words',
    heroImage: goalsMain,
    aboutImage: goalsMain2,
    description: 'General Oratory & Literary Arts Society, where voices find their strength.',
    theme: {
      color: '#431407',
      accent: '#d97706',
      lighting: 'radial-gradient(circle at 50% 50%, rgba(217, 119, 6, 0.1) 0%, transparent 70%)',
      motion: 'book',
      bg: 'bg-[#1c1917]',
      glowColor: 'rgba(217, 119, 6, 0.4)'
    },
    about: 'GOALS is the literary and oratory society of IIT Bhilai, fostering skills in public speaking, creative writing, and debating.',
    clubMembers: [

      {
        name: "Utkarsh Chatterjee",
        role: "Secretary",
        image: utkarshImg,
        email: "mailto:utkarshchatt@iitbhilai.ac.in",
        instagram: "https://instagram.com/utkchatterjee",
        isCoordinator: true
      },

      {
        name: "Kanishka Yadav",
        role: "Secretary",
        image: kanishkaImg,
        email: "mailto:kanishka@iitbhilai.ac.in",
        instagram: "https://instagram.com/kanishka_y1210"
      },

      {
        name: "Sakshi Srivastava",
        role: "Outreach Core",
        image: sakshiImg,
        email: "mailto:sakshis@iitbhilai.ac.in"
      },

      {
        name: "Pooja Dange",
        role: "LitSoc Head (English)",
        image: poojaImg,
        email: "mailto:dangeps@iitbhilai.ac.in",
        instagram: "https://instagram.com/poojadange1364"
      },

      {
        name: "Ankan Mondal",
        role: "Designing Head",
        image: ankanImg,
        email: "mailto:ankanm@iitbhilai.ac.in",
        instagram: "https://instagram.com/mondalankan3004"
      },

      {
        name: "V Varshitha",
        role: "DebSoc Head",
        image: varshithaImg,
        email: "mailto:vadlamuruvk@iitbhilai.ac.in",
        instagram: "https://instagram.com/varshitha_411"
      },

      {
        name: "Madan Vishvakarma",
        role: "LitSoc Head (Hindi)",
        image: madanImg,
        email: "mailto:madanv@iitbhilai.ac.in"
      },

      {
        name: "Kushagra Katare",
        role: "Website Manager",
        image: kushagraImg,
        email: "mailto:kushagrak@iitbhilai.ac.in"
      }

    ],
    upcomingEvents: [
      { id: 'goals-u1', title: 'Poetry Slam', date: 'April 30, 2026', description: 'An evening of powerful poetry and spoken word.', image: 'https://picsum.photos/seed/poetry/800/600', type: 'upcoming' }
    ],
    interIITEvents: [
      { id: 'goals-i1', title: 'Inter IIT Literary Arts', date: 'Dec 2025', description: 'Our literary team competing at the national level.', image: 'https://picsum.photos/seed/interlit/800/600', type: 'inter-iit' }
    ],
    merazEvents: [
      { id: 'goals-m1', title: 'Literary Fest', date: 'Feb 14, 2026', description: 'A celebration of literature during Meraz.', image: 'https://picsum.photos/seed/litfest/800/600', type: 'meraz' }
    ],
    anveshanEvents: [
      { id: 'goals-a1', title: 'House Literary Shield', date: 'March 25, 2026', description: 'Inter-house literary competition.', image: 'https://picsum.photos/seed/houselit/800/600', type: 'anveshan' }
    ],
    otherEvents: [
      { id: 'goals-o1', title: 'Writing Workshop', date: 'Jan 5, 2026', description: 'Learn the art of creative writing.', image: 'https://picsum.photos/seed/writingworkshop/800/600', type: 'other' }
    ],
    gallery: ['https://picsum.photos/seed/goals_g1/800/600', 'https://picsum.photos/seed/goals_g2/800/600', 'https://picsum.photos/seed/goals_g3/800/600']
  }
];

export const INTER_IIT_STATS: InterIITStat[] = [
  { rank: '6th Place', event: 'Inter IIT Cultural Meet' },
  { rank: '7th Place', event: 'Film Making' },
  { rank: 'Top 10', event: 'Music' }
];

export const ALL_EVENTS: Event[] = [
  ...CLUBS.flatMap(c => [
    ...c.upcomingEvents,
    ...c.interIITEvents,
    ...c.merazEvents,
    ...c.anveshanEvents,
    ...c.otherEvents
  ]),
  {
    id: 'inter-iit-mime',
    title: 'Inter IIT Mime',
    date: 'Dec 2025',
    description: 'A silent but powerful performance at the Inter IIT Cultural Meet.',
    image: 'https://picsum.photos/seed/inter_iit_mime/800/600',
    type: 'inter-iit',
    year: 2025,
    fullDescription: 'The Mime contingent from IIT Bhilai delivered a captivating performance, exploring complex themes through the art of silent expression. The performance was highly praised for its precision and emotional depth.',
    highlights: ['Top 10 Finish', 'Best Choreography Nomination', 'Standing Ovation']
  },
  {
    id: 'inter-iit-filmmaking',
    title: 'Inter IIT Filmmaking',
    date: 'Dec 2025',
    description: 'Showcasing cinematic excellence on the national stage.',
    image: 'https://picsum.photos/seed/inter_iit_film/800/600',
    type: 'inter-iit',
    year: 2025,
    fullDescription: 'Our film production team competed against the best from all IITs, producing a short film that pushed the boundaries of student cinema. The project involved months of pre-production and intense shooting schedules.',
    highlights: ['7th Place Overall', 'Best Cinematography Award', 'Selected for Screening']
  },
  {
    id: 'meraz-2026',
    title: 'Meraz 2026',
    date: 'Feb 12-15, 2026',
    description: 'The annual cultural fest of IIT Bhilai.',
    image: 'https://picsum.photos/seed/meraz/800/600',
    type: 'meraz',
    fullDescription: 'Meraz is the flagship cultural festival of IIT Bhilai, bringing together talent from across the country for a four-day extravaganza of music, dance, drama, and art.'
  },
  {
    id: 'anveshan-2026',
    title: 'Anveshan 2026',
    date: 'March 10, 2026',
    description: 'The annual inter-house cultural competition.',
    image: 'https://picsum.photos/seed/anveshan/800/600',
    type: 'anveshan',
    fullDescription: 'Anveshan is where the houses of IIT Bhilai battle it out for cultural supremacy.'
  },
  {
    id: 'republic-day-2026',
    title: 'Republic Day Celebration',
    date: 'Jan 26, 2026',
    description: 'Celebrating the spirit of India.',
    image: 'https://picsum.photos/seed/republic/800/600',
    type: 'other',
    category: 'Special Events'
  }
];

export const UPCOMING_EVENTS: Event[] = ALL_EVENTS.filter(e => e.type === 'upcoming');
export const INTER_IIT_EVENTS: Event[] = ALL_EVENTS.filter(e => e.type === 'inter-iit');
export const MERAZ_EVENTS: Event[] = ALL_EVENTS.filter(e => e.type === 'meraz');
export const ANVESHAN_EVENTS: Event[] = ALL_EVENTS.filter(e => e.type === 'anveshan');
export const OTHER_EVENTS: Event[] = ALL_EVENTS.filter(e => e.type === 'other');
export const PAST_EVENTS: Event[] = ALL_EVENTS.filter(e => e.type === 'past').sort((a, b) => (b.year || 0) - (a.year || 0));
