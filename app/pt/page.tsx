import { NinaLanding } from "../_components/NinaLanding";
import { metadataFor } from "../_content/landing";

export const metadata = metadataFor("pt", "/pt/");

export default function PortugueseHome() {
  return <NinaLanding language="pt" />;
}
