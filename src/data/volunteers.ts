import { VolunteerType, FridayCampaign } from '@/types';

export const volunteerTypes: VolunteerType[] = [
  {
    id: 'presencial',
    title: 'Voluntariado Presencial',
    description: 'Ven al albergue y ayúdanos directamente con el cuidado, socialización y alimentación de los animales.',
    icon: '🐾',
    requirements: ['Amor por los animales', 'Disponibilidad de tiempo', 'Responsabilidad'],
    commitment: 'Mínimo 4 horas por semana',
  },
  {
    id: 'estudiantes',
    title: 'Prácticas Estudiantiles',
    description: 'Si estudias veterinaria, zootecnia, comunicaciones, diseño u otras carreras afines, pon en práctica tus conocimientos con nosotros.',
    icon: '🎓',
    requirements: ['Estar cursando carrera universitaria o técnica', 'Carta de presentación de tu institución', 'Compromiso mínimo de 3 meses'],
    commitment: 'Según acuerdo con la institución',
  },
  {
    id: 'empresas',
    title: 'Voluntariado Corporativo',
    description: 'Trae a tu equipo de trabajo y realicen una jornada solidaria en el albergue. Ideal para actividades de team building con propósito.',
    icon: '🏢',
    requirements: ['Grupo mínimo de 5 personas', 'Coordinación previa', 'Respeto por los animales'],
    commitment: 'Jornadas de 1 día o más',
  },
];

export const fridayCampaign: FridayCampaign = {
  location: 'Atrio San Agustín',
  address: 'Primera cuadra de Jr. Asamblea, Ayacucho',
  day: 'Todos los viernes',
  hours: '15:00 – 19:00',
  description: 'Todos los viernes nos encontramos presencialmente para compartir nuestra labor, conocer a nuestros animales que buscan una familia y ofrecer productos solidarios que ayudan a seguir adelante.',
  activities: [
    {
      icon: '🐶',
      title: 'Adopciones',
      description: 'Conoce a los animales disponibles y descubre cómo puedes brindarles un hogar.',
    },
    {
      icon: '🛍️',
      title: 'Venta Solidaria',
      description: 'Encuentra ropa, accesorios y productos para mascotas. Tus compras financian nuestro trabajo.',
    },
    {
      icon: '❤️',
      title: 'Conoce nuestra labor',
      description: 'Conversa con nuestro equipo, conoce historias de rescate y únete a nuestra comunidad.',
    },
    {
      icon: '📋',
      title: 'Proceso de adopción',
      description: 'Inicia el proceso formal de adopción con orientación de nuestros coordinadores.',
    },
  ],
};
