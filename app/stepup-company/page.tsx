import { StepUpLanding } from "../_components/StepUpLanding";
import { stepUpMetadata } from "../_content/stepup";

export const metadata = stepUpMetadata("es");

export default function StepUpCompanyPage() {
  return <StepUpLanding language="es" />;
}
