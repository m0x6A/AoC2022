
export function findPacket(stream: string, distinct:number): number {
  return stream.split('').map((_, index) => {
    const packet = [...stream.slice(index, index + distinct)];    
    return (index > 0 && packet.filter((p,i) => i === packet.indexOf(p))?.length === distinct) 
      ? index + distinct : 0;
  }).find((x) => x > 0) ?? 0;
}

