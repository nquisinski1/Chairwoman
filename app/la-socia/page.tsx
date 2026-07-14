import type { Metadata } from "next";
import { EditorialHero, PageShell, SourceLink } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "La Socia — StepUp & Company",
  description: "El rol empresarial de Nina Quisinski como COO y cofundadora de StepUp & Company.",
};

export default function PartnerPage() {
  return (
    <PageShell active="partner">
      <EditorialHero
        edition="NQ / 03"
        kicker="La Socia"
        title={<>La confianza abre la conversación. <em>La estrategia la convierte en crecimiento.</em></>}
        intro="El sitio institucional de StepUp & Company presenta a Nina Quisinski como COO y cofundadora dentro de una plataforma enfocada en liderazgo y crecimiento empresarial."
        image="/images/nina-business-speaking.jpg"
        imageAlt="Nina Quisinski participando en una conversación empresarial"
        imagePosition="50% 25%"
      />

      <section className="fact-banner fact-banner-light">
        <p>Rol corporativo</p>
        <strong>COO & Co-founder · StepUp & Company</strong>
        <span>Presentado por el sitio institucional de StepUp</span>
      </section>

      <section className="partner-thesis content-grid">
        <div>
          <p className="section-index">01 / Visión empresarial</p>
          <p className="section-kicker">Relaciones que sostienen decisiones</p>
        </div>
        <div className="manifesto-copy">
          <h2>El crecimiento también es una arquitectura de confianza.</h2>
          <p className="serif-lead">Una empresa avanza cuando estrategia, operación y relaciones se alinean.</p>
          <p>
            La dimensión empresarial de Nina reúne lectura de contexto, construcción de alianzas y una
            mirada sobre cómo las organizaciones convierten intención en movimiento. Este espacio describe
            su rol público; no atribuye clientes, resultados o métricas que no estén documentados.
          </p>
          <SourceLink href="https://site.stepup10x.com/">Conocer StepUp & Company</SourceLink>
        </div>
      </section>

      <section className="partner-framework">
        <div className="section-heading">
          <div><p className="section-index">02 / Marco</p><p className="section-kicker">Cómo Nina interpreta el crecimiento</p></div>
          <h2>Del vínculo a la ejecución.</h2>
        </div>
        <div className="framework-grid">
          <article><span>01</span><h3>Leer el contexto</h3><p>Entender el mercado, las personas y la decisión que realmente debe avanzar.</p></article>
          <article><span>02</span><h3>Construir confianza</h3><p>Alinear expectativas, reputación y propósito antes de activar una relación.</p></article>
          <article><span>03</span><h3>Crear una agenda</h3><p>Convertir conversaciones dispersas en prioridades y próximos pasos claros.</p></article>
          <article><span>04</span><h3>Sostener el movimiento</h3><p>Dar continuidad para que una oportunidad no termine en una presentación.</p></article>
        </div>
      </section>

      <section className="disclosure-panel">
        <p className="section-kicker">Transparencia de roles</p>
        <h2>La marca personal, la CCI Brasil–Panamá y StepUp & Company son plataformas distintas.</h2>
        <p>Cada conversación debe identificar con claridad desde qué rol participa Nina y cuál es su alcance.</p>
      </section>
    </PageShell>
  );
}
