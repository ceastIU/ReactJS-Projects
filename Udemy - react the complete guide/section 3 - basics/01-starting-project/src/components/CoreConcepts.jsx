export default function CoreConcepts({ imgSrc, title, description }) {
  return (
    <li key={title}>
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
