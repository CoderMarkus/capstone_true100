function MyComponent({ data }) {
  // Render die Komponente mit den Daten
  return (
    <div>
      {data.resources.map((resource) => (
        <img src={resource.url} key={resource.public_id} />
      ))}
    </div>
  );
}

export default MyComponent;
