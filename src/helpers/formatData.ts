const formatData = (date: Date) => {
  // Cria um objeto Date com a data fornecida
  const dateFormatted = new Date(date);

  // Obtém o dia, mês e ano da data
  const day = String(dateFormatted.getDate()).padStart(2, "0");
  const mounth = String(dateFormatted.getMonth() + 1).padStart(2, "0");
  const year = dateFormatted.getFullYear();

  // Retorna a data formatada
  return `${day}/${mounth}/${year}`;
};

export default formatData;
