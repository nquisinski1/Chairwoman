import { StepUpLanding } from "../../_components/StepUpLanding";
import { stepUpMetadata } from "../../_content/stepup";

export const metadata = stepUpMetadata("en");

export default function StepUpCompanyEnglishPage() {
  return <StepUpLanding language="en" />;
}
