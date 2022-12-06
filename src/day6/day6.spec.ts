import { findPacket } from "./day6";

const exampleData = [
    'mjqjpqmgbljsphdztnvjfqwrcgsmlb',
    'bvwbjplbgvbhsrlpgdmjqwftvncz',
    'nppdvjthqldpwncqszvftbrmjlhg',
    'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg',
    'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'
]

const expectedMarkersByFour = [
  7,5,6,10,11
]

const expectedMarkersByFourteen = [
    19,23,23,29,26
]
describe('finding the start of packet', () => {
    it('finds the packet in the lasts stream', () => {
        const result = findPacket(exampleData[3], 4);
        expect(result).toBe(expectedMarkersByFour[3]);
    });
    it('finds the packet in the first stream', () => {
        const result = findPacket(exampleData[0], 4);
        expect(result).toBe(expectedMarkersByFour[0]);
    })
    it('finds the packet in the seconds stream', () => {
        const result = findPacket(exampleData[1], 4);
        expect(result).toBe(expectedMarkersByFour[1]);
    })
    it('finds the packet in all streams', () => {
        exampleData.forEach((data, i) => {
            const result = findPacket(data, 4);
            expect(result).toBe(expectedMarkersByFour[i]);
        });
    })
    it('handles 14 char messages', () => {
        exampleData.forEach((data, i) => {
            const result = findPacket(data, 14);
            expect(result).toBe(expectedMarkersByFourteen[i]);
        });
    })
})