import { Food } from "./app/shared/models/Food";
import { Tag } from "./app/shared/models/Tag";

export const sample_foods: Food[]= [
  {
    id:'1',
    name:'Nike Pegasus',
    price: 40,

    // cookTime
    favorite:false,
    origins:['pennsylvinia','usa'],
    stars: 4.0,
    imageUrl: 'assets/nike2.jpeg',
    tags: ['Shoes','Nike','Pegasus'],


  },
  {
    id: '2',
    name:'Nike AirJordan',
    price: 40,
    // cookTime
    favorite:false,
    origins:['pennsylvinia','usa'],
    stars: 4.0,
    imageUrl: 'assets/nike2.jpeg',
    tags: ['Shoes','Nike','Jordan','AirJordan'],
  },
  {
    id: '3',
    name:'Nike AirFlow',
    price: 40,
    // cookTime
    favorite:false,
    origins:['pennsylvinia','usa'],
    stars: 4.0,
    imageUrl: 'assets/nike2.jpeg',
    tags: ['Shoes','Nike','Airflow'],
  },
  {
    id: '4',
    name:'Nike AirJordan3',
    price: 40,
    // cookTime
    favorite:false,
    origins:['pennsylvinia','usa'],
    stars: 4.0,
    imageUrl: 'assets/nike2.jpeg',
    tags: ['Shoes','Nike','jordans','jordan3'],
  },
  {
    id: '5',
    name:'Nike Joyride',
    price: 40,
    // cookTime
    favorite:true,
    origins:['pennsylvinia','usa'],
    stars: 4.0,
    imageUrl: 'assets/nike5.jpeg',
    tags: ['Shoes','Nike','joyride','nike joyride'],
  },
  {
    id: '6',
    name:'Nike Air Force 1',
    price: 40,
    // cookTime
    favorite:false,
    origins:['pennsylvinia','usa'],
    stars: 4.0,
    imageUrl: 'assets/nike6.jpeg',
    tags: ['Shoes','Nike','airforce','airforce1','nike airforce1'],
  },
]



export const sample_tags:Tag[] = [
  { name: 'All', count: 6 },
  { name: 'Jordan', count: 2 },
  { name: 'Pegasus', count: 1 },
  { name: 'Airflow', count: 1 },
  { name: 'Joyride', count: 1 },
  { name: 'Airforce', count: 1 },
  { name: 'Jordan3', count: 1 },
//   { name: 'Soup', count: 1 },
 ]

