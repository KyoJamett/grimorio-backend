const BASE_URL = 'https://grimorio-4af23-default-rtdb.firebaseio.com';

export async function getEdition(ed) {
  const res = await fetch(`${BASE_URL}/${ed}.json`);
  if (!res.ok) throw new Error(`Error al obtener edición: ${ed}`);
  return res.json();
}