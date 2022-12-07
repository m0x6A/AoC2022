
export function findPacket(stream: string, distinct:number): number {
  return stream.split('').map((_, index) => {
    return (index > 0 && new Set([...stream.slice(index, index + distinct)]).size === distinct) 
      ? index + distinct : 0;
  }).find((x) => x > 0) ?? 0;
}