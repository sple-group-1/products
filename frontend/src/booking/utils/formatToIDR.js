function formatToIDR(amount) {
  if (typeof amount !== 'number') {
    return "Invalid input";
  }

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  let formattedAmount = formatter.format(amount);

  formattedAmount = formattedAmount.replace(/^IDR\s*/, 'Rp');
  if (!formattedAmount.startsWith('Rp')) {
    const numberPart = new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
    formattedAmount = `Rp${numberPart}`;
  }

  formattedAmount = formattedAmount.replace(/\s+/g, ' ').replace(/^Rp\s/, 'Rp');
  return formattedAmount;
}

export { formatToIDR };