export interface PhotoItem {
  id: string;
  url: string;
  caption: string;
  moment: string;
}

export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
  icon: string;
}

export interface InvitationData {
  celebrantName: string;
  celebrationTitle: string;
  locationCity: string;
  locationRegion: string;
  locationCountry: string;
  eventDate: string; // e.g. "1 de Noviembre de 2026"
  eventIsoDate?: string; // ISO date string for countdown e.g. "2026-11-01T19:00:00"
  eventTime: string; // e.g. "HORA POR CONFIRMAR" or "07:00 PM"
  eventAddress: string; // e.g. "LUGAR/DIRECCIÓN POR CONFIRMAR"
  
  // Ceremonia y Recepción (Estilo Moon Agencia Creativa)
  ceremonyTitle: string;
  ceremonyTime: string;
  ceremonyPlace: string;
  ceremonyAddress: string;
  
  receptionTitle: string;
  receptionTime: string;
  receptionPlace: string;
  receptionAddress: string;

  // Itinerario de la celebración
  itinerary: ItineraryItem[];

  // Código de vestimenta y sugerencia de regalo
  dressCodeTitle: string;
  dressCodeDescription: string;
  dressCodeColorNote: string;
  
  giftTitle: string;
  giftDescription: string;

  whatsappNumber: string; // e.g. "573000000000" (sin el +, para WhatsApp API)
  parentsTitle?: string;
  parentsNames?: string;
  inviteCallToAction?: string;
  romanticMessage: string;
  familyMessage: string;
  closingMessage: string;
  photos: PhotoItem[];
}

