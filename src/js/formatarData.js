export const formatarData = (data) => {
  const dia = data.slice(0, 2);
  const mes = data.slice(2, 4);
  const ano = data.slice(4, 6);
  return `${dia}/${mes}/${ano}`;
};
