import Header from "./components/Header/Header";
import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
  function handleClick(selectedButton) {
    // selectedButton => 'components','jsx','props','state'
    console.log("I was clicked", selectedButton);
  }

  const coreConcepts = CORE_CONCEPTS.map((item) => (
    <CoreConcepts
      title={item.title}
      imgSrc={item.image}
      description={item.description}
    />
  ));
  console.log(CORE_CONCEPTS);

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>{coreConcepts}</ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          {/* Dynamic Content */}
        </section>
      </main>
    </div>
  );
}

export default App;
