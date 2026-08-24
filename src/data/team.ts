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
  founder: 'Wendy',
  mission: 'Nos dedicamos al cuidado y rescate de animales en situaciones extremas, así mismo, a la educación y concientización de la comunidad ayacuchana sobre la tenencia responsable de mascotas, incluyendo procesos de rehabilitación y reubicación',
  vision: 'Lograr la calidad de vida de los animales domésticos en la región Ayacucho.',
  values: [
    { title: 'Amor', description: 'Cada animal merece ser amado y cuidado.' },
    { title: 'Transparencia', description: 'Tu confianza es nuestra responsabilidad.' },
    { title: 'Compromiso', description: 'No abandonamos a quienes nos necesitan.' },
    { title: 'Comunidad', description: 'Juntos podemos cambiar más vidas.' },
  ],
  story: `En la histórica ciudad de Huamanga, lamentablemente es común encontrar animales en las calles, mercados y pasajes, luchando cada día por sobrevivir frente al hambre, las enfermedades, el abandono y, muchas veces, el maltrato. Detrás de cada uno de ellos hay una historia importante, una vida que merece ser escuchada y, sobre todo, una oportunidad para comenzar de nuevo.

Conciencia y Rescate Animal Ayacucho es un grupo de voluntarios que decidió no mirar hacia otro lado. Nosotros rescatamos con nuestros propios medios animales que se encuentran en situaciones de vulnerabilidad, les brindamos alimento, atención y los cuidados necesarios, trabajando constantemente para encontrarles un hogar donde puedan sentirse seguros, queridos y protegidos.
`,
};
