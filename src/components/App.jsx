import { CreateFeedback } from "./Feedback/Feedback";
import { Section } from "./Section";

export const App = () => {
  return (
    <Section title = {"Please leave feedback"}>
      <CreateFeedback />
    </Section>
  );
};
