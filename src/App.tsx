import React, { useState } from 'react';
import { FloatingPetalsCanvas } from './components/FloatingPetalsCanvas';
import { HeroEditorial } from './components/HeroEditorial';
import { EventPresentation } from './components/EventPresentation';
import { CeremonyAndReception } from './components/CeremonyAndReception';
import { DressCodeAndGifts } from './components/DressCodeAndGifts';
import { CountdownSection } from './components/CountdownSection';
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

      {/* 1. Portada: Imagen, Nombre y Mis XV Años */}
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

      {/* Contenido Editorial con estricto orden jerárquico */}
      <main className="relative z-10 space-y-2 pb-8">
        {/* 2. Momento Especial / Presentación de los Padres */}
        <EventPresentation
          celebrantName={data.celebrantName}
          romanticMessage={data.romanticMessage}
          parentsTitle={data.parentsTitle}
          parentsNames={data.parentsNames}
          inviteCallToAction={data.inviteCallToAction}
        />

        {/* 3. Dónde y Cuándo: Lugar de la Celebración (Recepción & Fiesta) */}
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

        {/* 4. Código de Vestimenta y Detalle / Lluvia de Sobres */}
        <DressCodeAndGifts
          dressCodeTitle={data.dressCodeTitle}
          dressCodeDescription={data.dressCodeDescription}
          dressCodeColorNote={data.dressCodeColorNote}
          giftTitle={data.giftTitle}
          giftDescription={data.giftDescription}
        />

        {/* 5. Cuenta Regresiva (Colocada abajo, antes de la confirmación) */}
        <CountdownSection
          eventDate={data.eventDate}
          eventIsoDate={data.eventIsoDate}
        />

        {/* 6. Confirmación de Asistencia (RSVP directo por WhatsApp) */}
        <RsvpSection
          celebrantName={data.celebrantName}
          whatsappNumber={data.whatsappNumber}
        />

        {/* 7. Despedida y Agradecimiento */}
        <ClosingSection
          celebrantName={data.celebrantName}
          closingMessage={data.closingMessage}
        />
      </main>
    </div>
  );
}
