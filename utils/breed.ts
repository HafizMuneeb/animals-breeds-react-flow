
import { getBreeds } from ".";

export default async function breeds(breed, parentId, yPosition) {
  const breedList = await getBreeds(breed);
  
  const nodes = breedList.map((breed, index) => (
    {
        id: breed,
        data: {label:  breed},
        sourcePosition: 'right',
        targetPosition: 'left',
        position: { x: 400, y: yPosition+((index+1)*50) },
        type: '',
    }
  ))
  
  const edges = breedList.map((breed) => (
    {id: breed, source: String(parentId), target: breed, sourcePosition: 'right', targetPosition: 'left'}
  ));

  return [nodes, edges]

}


