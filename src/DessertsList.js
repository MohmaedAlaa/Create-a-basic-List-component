function DessertsList(props) {
  const dessertsLesser = props.data.filter(prop => prop.calories < 500);

  dessertsLesser.sort(( a, b ) => a.calories - b.calories);

  const desserts = dessertsLesser.map(dessert => {
    return <li key={dessert.createdAt}>{`${dessert.name} - ${dessert.calories} cal`} </li>
  });

  return (
    <div>
      <ul>{desserts}</ul>
    </div>
  )
}
export default DessertsList;


// ideal answer

// export default DessertsList

// const DessertsList = (props) => {
//   const lowCaloriesDesserts = props.data
//     .filter((dessert) => {
//       return dessert.calories < 500;
//     })
//     .sort((a, b) => {
//       return a.calories - b.calories;
//     })
//     .map((dessert) => {
//       return (
//         <li>
//           {dessert.name} - {dessert.calories} cal
//         </li>
//       );
//     });
//   return <ul>{lowCaloriesDesserts}</ul>;

//  }
//  export default DessertsList;