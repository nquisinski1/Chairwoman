import { NinaLanding } from "./_components/NinaLanding";
import { metadataFor } from "./_content/landing";

export const metadata = metadataFor("es", "/");

export default function Home() {
  return <NinaLanding language="es" />;
}
