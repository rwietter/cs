const dates = {
  January: "Janeiro",
  February: "Fevereiro",
  March: "Março",
  April: "Abril",
  May: "Maio",
  June: "Junho",
  July: "Julho",
  August: "Agosto",
  September: "Setembro",
  October: "Outubro",
  November: "Novembro",
  December: "Dezembro",
}

const getBrDate = (date) => {
  if (!date) return;
  
  const month = date?.split(" ")
  const rgx = /([A-Z])\w+/i

  const [currentMonth] = month[1]?.match(rgx)
  const brDate = date?.replace(currentMonth, dates[currentMonth])
  return brDate || "";
}


export { getBrDate }
