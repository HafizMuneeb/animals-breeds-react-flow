// @ts-nocheck


import {  getAnimals } from '@/utils';
import breeds from '@/utils/breed';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';


export default async function Animals() {

    const animals = await getAnimals();
    
    const nodes =  [
        {
          id: '514',
          type: 'input',
          data: { label: 'Animals' },
          sourcePosition: 'right',
          targetPosition: 'left',
          position: { x: 0, y: 500 },
        }
    ];

    
    const animalNodes = animals.map((animal: any, index: any) => (
    {
        id: animal,
        data: {label: animal},
        sourcePosition: 'right',
        targetPosition: 'left',
        position: { x: 200, y: (index+2.9)*100 },
        type: ''
    }
));


const animalEdges = animals.map((animal: any) => (
    {id: animal, source: '514', target: animal, sourcePosition: 'right', targetPosition: 'left'}
));

let mergeNodes = nodes.concat(animalNodes);
let mergeEdges = animalEdges;

for( let i = 0; i< animalNodes.length; i++){
    const [node, edges] =  await breeds(animalNodes[i].data.label, animalNodes[i].id, (i*180));
  
    mergeNodes = mergeNodes.concat(node);
    mergeEdges = mergeEdges.concat(edges);
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
        <ReactFlow nodes={mergeNodes} edges={mergeEdges}>
            <Background />
            <Controls />
        </ReactFlow>
  </div>
  )
}
