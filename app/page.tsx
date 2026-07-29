import { ChairwomanLanding } from "./_components/ChairwomanLanding";
import { chairwomanMetadata } from "./_content/chairwoman";

export const metadata = chairwomanMetadata("es");

export default function Home() {
  return <ChairwomanLanding language="es" />;
}
