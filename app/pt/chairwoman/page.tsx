import { ChairwomanLanding } from "../../_components/ChairwomanLanding";
import { chairwomanMetadata } from "../../_content/chairwoman";

export const metadata = chairwomanMetadata("pt");

export default function PortugueseChairwomanPage() {
  return <ChairwomanLanding language="pt" />;
}
