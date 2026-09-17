import React, { useState } from 'react';
import { FloatingPetalsCanvas } from './components/FloatingPetalsCanvas';
import { HeroEditorial } from './components/HeroEditorial';
import { EventPresentation } from './components/EventPresentation';
import { CountdownSection } from './components/CountdownSection';
import { CeremonyAndReception } from './components/CeremonyAndReception';
import { ItinerarySection } from './components/ItinerarySection';
import { DressCodeAndGifts } from './components/DressCodeAndGifts';
import { RsvpSection } from './components/RsvpSection';
import { ClosingSection } from './components/ClosingSection';
import { INITIAL_INVITATION_DATA } from './config';
import { InvitationData } from './types';

export default function App() {
  const [data] = useState<InvitationData>(INITIAL_INVITATION_DATA);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50/90 via-pink-50/40 to-rose-100/60 text-slate-800 overflow-x-hidden">
      {/* Fondo delicado con pétalos y partículas suaves */}
      <FloatingPetalsCanvas intensity="gentle" />

      {/* Portada Principal Compacta estilo Moon Agencia Creativa */}
      <HeroEditorial
        celebrantName={data.celebrantName}
        celebrationTitle={data.celebrationTitle}
        eventDate={data.eventDate}
        eventTime={data.eventTime}
        eventAddress={data.eventAddress}
        locationCity={data.locationCity}
        locationRegion={data.locationRegion}
        locationCountry={data.locationCountry}
      />

      {/* Contenido Editorial de la Invitación */}
      <main className="relative z-10 space-y-1 pb-6">
        {/* Presentación Romántica y Familiar */}
        <EventPresentation
          celebrantName={data.celebrantName}
          romanticMessage={data.romanticMessage}
          familyMessage={data.familyMessage}
        />

        {/* Cuenta Regresiva Dinámica */}
        <CountdownSection
          eventDate={data.eventDate}
          eventIsoDate={data.eventIsoDate}
        />

        {/* Lugar de la Celebración (Recepción & Fiesta) */}
        <CeremonyAndReception
          ceremonyTitle={data.ceremonyTitle}
          ceremonyTime={data.ceremonyTime}
          ceremonyPlace={data.ceremonyPlace}
          ceremonyAddress={data.ceremonyAddress}
          receptionTitle={data.receptionTitle}
          receptionTime={data.receptionTime}
          receptionPlace={data.receptionPlace}
          receptionAddress={data.receptionAddress}
          locationCity={data.locationCity}
          locationRegion={data.locationRegion}
          locationCountry={data.locationCountry}
          eventDate={data.eventDate}
        />

        {/* Itinerario / Cronograma de la Noche */}
        <ItinerarySection
          items={data.itinerary}
          celebrantName={data.celebrantName}
        />

        {/* Código de Vestimenta y Lluvia de Sobres */}
        <DressCodeAndGifts
          dressCodeTitle={data.dressCodeTitle}
          dressCodeDescription={data.dressCodeDescription}
          dressCodeColorNote={data.dressCodeColorNote}
          giftTitle={data.giftTitle}
          giftDescription={data.giftDescription}
        />

        {/* Confirmación de Asistencia (RSVP por WhatsApp) */}
        <RsvpSection
          celebrantName={data.celebrantName}
          whatsappNumber={data.whatsappNumber}
        />

        {/* Cierre y Despedida */}
        <ClosingSection
          celebrantName={data.celebrantName}
          closingMessage={data.closingMessage}
        />
      </main>
    </div>
  );
}
