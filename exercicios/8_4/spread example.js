// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'mel', 'açai'];

const fruitSalad = (fruit, additional) => {
  const salad = [...fruit, ...additional];
  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));