import { NinaLanding } from "../_components/NinaLanding";
import { metadataFor } from "../_content/landing";

export const metadata = metadataFor("en", "/en/");

export default function EnglishHome() {
  return <NinaLanding language="en" />;
}
