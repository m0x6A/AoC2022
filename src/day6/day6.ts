
export function findPacket(stream: string, distinct:number): number {
  const chars = stream.split('');
  return chars.map((_, index) => {
    const packet = chars.slice(index, index + distinct);    
    return (index > 0 && packet.filter((p,i) => i === packet.indexOf(p))?.length === distinct) ? index + distinct : 0;
  }).find((x) => x > 0) ?? 0;
}
