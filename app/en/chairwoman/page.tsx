import { ChairwomanLanding } from "../../_components/ChairwomanLanding";
import { chairwomanMetadata } from "../../_content/chairwoman";

export const metadata = chairwomanMetadata("en");

export default function EnglishChairwomanPage() {
  return <ChairwomanLanding language="en" />;
}
