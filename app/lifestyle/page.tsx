import type { Metadata } from "next";
import { EditorialHero, PageShell, StatusTag } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Lifestyle",
  description: "El journal editorial de Nina Quisinski sobre presencia, cultura, hospitalidad y colaboraciones con intención.",
};

export default function LifestylePage() {
  return (
    <PageShell active="lifestyle">
      <EditorialHero
        edition="NQ / 04"
        kicker="Lifestyle"
        title={<>El poder también se expresa en <em>cómo elegimos estar presentes.</em></>}
        intro="Una mirada editorial a presencia, estilo, cultura y experiencias elegidas con intención."
        image="/images/nina-lifestyle-dinner.jpg"
        imageAlt="Retrato editorial de Nina Quisinski durante una cena"
        imagePosition="50% 35%"
      />

      <section className="lifestyle-intro content-grid">
        <div>
          <p className="section-index">01 / El journal</p>
          <StatusTag>Plataforma editorial</StatusTag>
        </div>
        <div className="manifesto-copy">
          <h2>Presencia sin exceso. Criterio sin ruido.</h2>
          <p className="serif-lead">Lo que elegimos vestir, conocer y recomendar también cuenta una historia.</p>
          <p>
            Lifestyle es el espacio para cultura, hospitalidad, diseño, bienestar, viajes y marcas que
            comparten una visión de calidad, intención y largo plazo. El criterio será siempre editorial:
            pocas colaboraciones, contexto claro y transparencia.
          </p>
        </div>
      </section>

      <section className="journal-grid">
        <article className="journal-card journal-image-card">
          <img src="/images/nina-network.jpg" alt="Nina Quisinski en un encuentro empresarial y social" />
          <div><span>Conversaciones</span><h3>Los lugares donde una relación comienza.</h3><p>Hospitalidad, encuentros y cultura como infraestructura de confianza.</p></div>
        </article>
        <article className="journal-card journal-text-card">
          <span>Estilo</span>
          <h3>Elegancia es saber qué no necesita explicación.</h3>
          <p>Una edición sobre presencia, códigos culturales y el valor de la sobriedad.</p>
          <StatusTag>Próximamente</StatusTag>
        </article>
        <article className="journal-card journal-text-card journal-dark">
          <span>Colaboraciones</span>
          <h3>Marcas con propósito, historias con contexto.</h3>
          <p>Las colaboraciones comerciales se identificarán de forma expresa cuando existan y estén autorizadas.</p>
          <a className="text-link text-link-light" href="/press">Proponer una colaboración <span>↗</span></a>
        </article>
      </section>

      <section className="editorial-policy">
        <p className="section-index">Política editorial</p>
        <h2>Ninguna marca aparece aquí por insinuación.</h2>
        <p>Las colaboraciones, invitaciones y experiencias patrocinadas serán identificadas con claridad. La afinidad estética nunca sustituye una relación real.</p>
      </section>
    </PageShell>
  );
}
