import { InvitationData } from './types';

/**
 * ============================================================================
 * ARCHIVO DE CONFIGURACIÓN PRINCIPAL DE LA INVITACIÓN DE EMELY
 * (Estilo Moon Agencia Creativa - Mis 15)
 * ============================================================================
 * Todos los campos son fácilmente editables:
 * - Fechas, horas y direcciones de Ceremonia y Recepción
 * - Cronograma / Itinerario de la fiesta
 * - Código de vestimenta y sugerencia de regalo (Lluvia de sobres)
 * - WhatsApp de confirmación
 * - Álbum fotográfico
 * ============================================================================
 */

export const INITIAL_INVITATION_DATA: InvitationData = {
  // Nombre de la quinceañera
  celebrantName: "Emely Gised Cadena",

  // Título de la celebración
  celebrationTitle: "XV Años",

  // Ubicación general
  locationCity: "Suárez",
  locationRegion: "Tolima",
  locationCountry: "Colombia",

  // ========================================================================
  // FECHA Y LUGAR DE LA CELEBRACIÓN
  // ========================================================================
  eventDate: "1 de Noviembre de 2026",
  eventIsoDate: "2026-11-01T19:00:00",
  eventTime: "7:00 PM",
  eventAddress: "3529+R76 Suárez, Tolima",

  // CEREMONIA (No hay ceremonia religiosa por solicitud)
  ceremonyTitle: "",
  ceremonyTime: "",
  ceremonyPlace: "",
  ceremonyAddress: "",

  // RECEPCIÓN (Celebración y Fiesta)
  receptionTitle: "Recepción & Fiesta de Gala",
  receptionTime: "7:00 PM",
  receptionPlace: "3529+R76 Suárez, Tolima",
  receptionAddress: "3529+R76 Suárez, Tolima",

  // ITINERARIO DE LA VELADA (Estilo Moon Agencia Creativa)
  itinerary: [
    {
      time: "07:00 PM",
      title: "Recepción de Invitados",
      description: "Bienvenida con cóctel y asignación de mesas.",
      icon: "reception",
    },
    {
      time: "08:00 PM",
      title: "Entrada Triunfal de Emely",
      description: "Momento estelar de presentación de la quinceañera.",
      icon: "sparkles",
    },
    {
      time: "08:30 PM",
      title: "El Vals Solemne",
      description: "Vals tradicional y baile especial con la familia.",
      icon: "waltz",
    },
    {
      time: "09:00 PM",
      title: "Brindis de Honor",
      description: "Palabras emotivas y brindis por sus 15 primaveras.",
      icon: "toast",
    },
    {
      time: "09:30 PM",
      title: "Cena de Gala",
      description: "Banquete especial preparado para los invitados.",
      icon: "dinner",
    },
    {
      time: "10:30 PM",
      title: "Apertura de la Pista de Baile",
      description: "Música, hora loca y celebración hasta el final.",
      icon: "party",
    },
  ],

  // CÓDIGO DE VESTIMENTA (DRESS CODE)
  dressCodeTitle: "Dress Code",
  dressCodeDescription: "Ellas: Divinas   Ellos: Elegantes",
  dressCodeColorNote:
    "Para esta noche tan especial nos reservamos el color Fucsia y dorado",

  // SUGERENCIA DE REGALO (REGALO O LLUVIA DE SOBRES)
  giftTitle: "Regalo o Lluvia de Sobres",
  giftDescription:
    "Tu presencia es mi mayor y más hermoso regalo. Si deseas tener un detalle conmigo, puedes hacerme un obsequio o participar en la lluvia de sobres. ¡Ambas opciones las recibiré con todo mi cariño!",

  // WHATSAPP DE CONFIRMACIÓN (Editable)
  whatsappNumber: "573138431700",

  // TEXTOS DE PRESENTACIÓN Y FAMILIA
  parentsTitle: "MIS PADRES",
  parentsNames: "Manuel Cadena y Yaneth Tafur",
  inviteCallToAction: "Te invitamos a acompañarnos el día:",
  romanticMessage:
    "Hay momentos que se convierten en recuerdos para toda la vida. Hoy quiero compartir contigo uno de los días más especiales de mi vida.",

  familyMessage:
    "Con la bendición de Dios y el amor de mi familia, tengo el honor de invitarte a celebrar mis quince años.",

  // CIERRE
  closingMessage:
    "Tu presencia hará que este día sea aún más especial.",

  // FOTOGRAFÍAS
  photos: [
    {
      id: "photo-1",
      url: "",
      caption: "Soñando con este gran día",
      moment: "Recuerdo Especial 01",
    },
    {
      id: "photo-2",
      url: "",
      caption: "Una nueva etapa comienza",
      moment: "Recuerdo Especial 02",
    },
    {
      id: "photo-3",
      url: "",
      caption: "Momentos mágicos e inolvidables",
      moment: "Recuerdo Especial 03",
    },
    {
      id: "photo-4",
      url: "",
      caption: "Creciendo rodeada de amor",
      moment: "Recuerdo Especial 04",
    },
    {
      id: "photo-5",
      url: "",
      caption: "Rumbo a mis quince primaveras",
      moment: "Recuerdo Especial 05",
    },
    {
      id: "photo-6",
      url: "",
      caption: "La magia de celebrar la vida",
      moment: "Recuerdo Especial 06",
    },
  ],
};
