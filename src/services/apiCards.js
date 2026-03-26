const BASE_URL = 'https://api.myl.cl/static/cards/';


export async function getCard(ed_edid, edid) {
    
  const res = await fetch(`${BASE_URL}/${ed_edid}/${edid}.png`);
  if (!res.ok) throw new Error(`Error al obtener carta: ${ed_edid} - ${edid}`);
  const buffer = await res.arrayBuffer();
  return Buffer.from(buffer);
}