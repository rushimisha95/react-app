function ListGroupe() {
  const items = ["kamembe", "rusizi", "kigali", "nairobi", "Uganda"];

  const Message = () => {
    return;
  };

  return (
    <>
      <h1>LIST</h1>
      {items.length === 0 && <p>no items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            onClick={() => console.log(item, index)}
            key={item}
          >
            {item}
          </li>
        ))}
        ;
      </ul>
    </>
  );
}
export default ListGroupe;
