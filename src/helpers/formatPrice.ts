const formatPrice = (price: number) => {
  const formattedPrice = price.toFixed(2);

  const [partInt, partDec] = formattedPrice.split(".");

  const partIntFormatted = partInt.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `R$ ${partIntFormatted},${partDec}`;
};

export default formatPrice;
