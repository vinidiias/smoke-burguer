import { Burger } from "../types/burger";
import smokeClassico from '../../public/images/smoke-classico.png'
import smokeBBQBacon from '../../public/images/smoke-bbq-bacon.png'
import smokePepperoni from '../../public/images/smoke-pepperoni.png'
import smokeVeggie from '../../public/images/smoke-veggie.png'
import smokeDuploCheddar from '../../public/images/smoke-duplo-cheddar.png'
import smokeHot from '../../public/images/smoke-hot.png'
import smokeFunghi from '../../public/images/smoke-funghi.png'
import smokeChickenCrisp from '../../public/images/smoke-chicken-crisp.png'
import smokePicanha from '../../public/images/smoke-picanha.png'
import smokeGarlic from '../../public/images/smoke-garlic.png'
import smokeBrieGeleia from '../../public/images/smoke-brie-geleia.png'
import smokeCalabresa from '../../public/images/smoke-calabresa.png'
import { Cart } from "@/types/cart";

export const isEqual = (a: Cart, b: Burger | Cart) => {
    return a.id === b.id
  }

export const burgers: Burger[] = [
 {
    id: 1,
    name: 'Smoke Clássico',
    description: 'Nosso blend especial defumado de 180g, queijo cheddar derretido, cebola caramelizada no Jack Daniel\'s e maionese defumada no pão brioche.',
    price: 34.90,
    imgUrl: smokeClassico,
    category: 'Clássicos Smoke',
  },
  {
    id: 2,
    name: 'Smoke BBQ Bacon',
    description: 'Hambúrguer de 180g com crosta de pimenta do reino, queijo muçarela, fatias generosas de bacon defumado e molho BBQ de fabricação própria no pão australiano.',
    price: 38.50,
    imgUrl: smokeBBQBacon,
    category: 'Especiais Smoke',
  },
  {
    id: 3,
    name: 'Smoke Pepperoni',
    description: 'Blend de carne com um toque de fumaça, queijo provolone, pepperoni crocante, rúcula e molho de pimenta defumada no pão de cerveja preta.',
    price: 39.90,
    imgUrl: smokePepperoni,
    category: 'Especiais Smoke',
  },
  {
    id: 4,
    name: 'Smoke Veggie',
    description: 'Hambúrguer de legumes defumado, queijo coalho grelhado, picles agridoce, alface americana e maionese de alho assado no pão de forma integral.',
    price: 31.00,
    imgUrl: smokeVeggie,
    category: 'Vegetarianos Smoke',
  },
  {
    id: 5,
    name: 'Smoke Duplo Cheddar',
    description: 'Dois hambúrgueres de 150g com tempero defumado, dobro de queijo cheddar, anéis de cebola crispy e molho especial da casa no pão de batata.',
    price: 42.00,
    imgUrl: smokeDuploCheddar,
    category: 'Clássicos Smoke',
  },
  {
    id: 6,
    name: 'Smoke Hot',
    description: 'Hambúrguer defumado de 180g, queijo monterey jack picante, geleia de pimenta com bacon e jalapeños frescos no pão de pimenta.',
    price: 41.50,
    imgUrl: smokeHot,
    category: 'Picantes Smoke',
  },
  {
    id: 7,
    name: 'Smoke Funghi',
    description: 'Nosso blend defumado de 180g, queijo suíço, cogumelos salteados no shoyu defumado e um toque de trufas brancas no pão de brioche com gergelim.',
    price: 43.50,
    imgUrl: smokeFunghi,
    category: 'Especiais Smoke',
  },
  {
    id: 8,
    name: 'Smoke Chicken Crisp',
    description: 'Filé de frango crocante marinado em especiarias defumadas, queijo prato, picles de pepino agridoce e molho ranch defumado no pão de milho.',
    price: 36.00,
    imgUrl: smokeChickenCrisp,
    category: 'Frango Smoke',
  },
  {
    id: 9,
    name: 'Smoke Picanha',
    description: 'Hambúrguer de picanha de 200g com leve defumação, queijo provolone derretido, farofa de bacon e vinagrete de pimenta biquinho no pão de pimenta biquinho.',
    price: 48.90,
    imgUrl: smokePicanha,
    category: 'Premium Smoke',
  },
  {
    id: 10,
    name: 'Smoke Garlic',
    description: 'Blend de carne defumado de 180g, queijo gouda, crisps de alho e uma generosa pasta de alho defumado no pão australiano.',
    price: 37.50,
    imgUrl: smokeGarlic,
    category: 'Clássicos Smoke',
  },
  {
    id: 11,
    name: 'Smoke Brie & Geleia',
    description: 'Hambúrguer de 180g defumado, queijo brie cremoso e geleia de pimenta com damasco defumada no pão de brioche.',
    price: 44.00,
    imgUrl: smokeBrieGeleia,
    category: 'Gourmet Smoke',
  },
  {
    id: 12,
    name: 'Smoke Calabresa',
    description: 'Blend de carne com tempero apimentado defumado, queijo muçarela, rodelas de calabresa artesanal e cebola roxa empanada no pão de cebola.',
    price: 35.50,
    imgUrl: smokeCalabresa,
    category: 'Tradicionais Smoke',
  },
]