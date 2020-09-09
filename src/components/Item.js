import React from 'react';

const Item = (props)=>{
  console.log(props.categories);
  console.log(props.match)

let item =props.categories.find(category=>category.name==props.match.params.itemname);

return (<div>
 <h3>{item.name}</h3> 
</div>)


}

export default Item;