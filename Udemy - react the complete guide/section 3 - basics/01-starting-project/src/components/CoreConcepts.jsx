import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcpets() {
  const coreConcepts = CORE_CONCEPTS.map((item) => (
    <CoreConcept key={item.title} {...item} />
  ));

  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>{coreConcepts}</ul>
    </section>
  );
}
