export const formatMoney= cantidad => {
  return cantidad.toLocaleString('es-CO',{
    style: 'currency',
    currency: 'COP'
  })
}
