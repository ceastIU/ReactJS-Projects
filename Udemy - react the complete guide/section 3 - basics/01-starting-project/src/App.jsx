import reactImg from "./assets/react-core-concepts.png";

import { CORE_CONCEPTS } from "./data";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description =
    reactDescriptions[getRandomInt(reactDescriptions.length - 1)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts({ imgSrc, title, description }) {
  return (
    <li key={title}>
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
