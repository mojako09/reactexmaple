function Animals(props) {
    return <li>Use the map function to render them in an unordered list: { props.id }</li>;
  }
  
  function ListItem() {
    const animalname = [
      {id:"dog"},
      {id:"cat"},
      {id:"chicken"},
      {id:"cow"},
      {id:"horse"}
      
    ];
    return (
      <>
          <ul>
          {animalname.map((Animals) => <Animals key={Animals.id} />)}
        </ul>
      </>
    );
  }
  
  export default ListItem;


  