import { CreateFeedback } from "./Feedback/Feedback";
import { Section } from "./Section/Section";

export const App = () => {
  return (
    <Section title = {"Please leave feedback"}>
      <CreateFeedback />
    </Section>
  );
};
