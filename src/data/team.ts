import { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: 'maria',
    name: 'María Quispe Huamán',
    role: 'Fundadora y Directora',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'María fundó CRAA en 2018 después de rescatar a su primera perra en las calles de Ayacucho. Hoy lidera un equipo apasionado por el bienestar animal.',
    social: {
      instagram: '@mariacraa',
      facebook: 'Maria CRAA',
    },
  },
  {
    id: 'carlos',
    name: 'Dr. Carlos Palomino',
    role: 'Médico Veterinario',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    bio: 'Con más de 10 años de experiencia, Carlos brinda atención veterinaria de primer nivel a todos nuestros rescatados.',
    social: {
      instagram: '@drcarlosvet',
    },
  },
  {
    id: 'ana',
    name: 'Ana Condori',
    role: 'Coordinadora de Adopciones',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Ana gestiona el proceso de adopción y se asegura de que cada animal encuentre la familia perfecta.',
    social: {
      instagram: '@anaadopciones',
      facebook: 'Ana CRAA',
    },
  },
  {
    id: 'luis',
    name: 'Luis Ccahuantico',
    role: 'Coordinador de Rescates',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Luis coordina los operativos de rescate en toda la región de Ayacucho, disponible las 24 horas.',
    social: {
      instagram: '@luisrescates',
    },
  },
];

export const shelterHistory = {
  founded: 2018,
  founder: 'María Quispe Huamán',
  mission: 'Rescatar, rehabilitar y reubicar a animales en situación de abandono o maltrato en la región de Ayacucho, promoviendo una cultura de respeto y amor hacia los animales.',
  vision: 'Ser el referente de bienestar animal en la región, construyendo una comunidad consciente donde ningún animal sufra por abandono o maltrato.',
  values: [
    { title: 'Amor', description: 'Cada animal merece ser amado y cuidado.' },
    { title: 'Transparencia', description: 'Tu confianza es nuestra responsabilidad.' },
    { title: 'Compromiso', description: 'No abandonamos a quienes nos necesitan.' },
    { title: 'Comunidad', description: 'Juntos podemos cambiar más vidas.' },
  ],
  story: `Todo comenzó en 2018, cuando María Quispe encontró a "Negrita", una perra abandonada y herida en el Jr. Arequipa. Sin pensarlo dos veces, la recogió, la llevó al veterinario y comenzó a buscarle una familia. Esa experiencia le mostró que el problema era enorme: cientos de animales en las calles de Ayacucho sin nadie que los ayudara.

Con voluntad, amor y muy pocos recursos, María comenzó a rescatar animales de manera informal. Pronto se le unieron amigos, vecinos y voluntarios que compartían su visión. En 2019, CRAA se formalizó como asociación civil y comenzó a operar con un pequeño albergue en la periferia de la ciudad.

Hoy, años después, CRAA cuenta con un equipo de dedicados voluntarios, un médico veterinario permanente, y ha rescatado a más de 1,200 animales. Pero sobre todo, cuenta con una comunidad de personas que creen que cada vida importa.`,
};
