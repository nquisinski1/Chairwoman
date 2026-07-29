import { ChairwomanLanding } from "../_components/ChairwomanLanding";
import { chairwomanMetadata } from "../_content/chairwoman";

export const metadata = chairwomanMetadata("pt");

export default function PortugueseHome() {
  return <ChairwomanLanding language="pt" />;
}
