export const INC_COUNT = 'INC_COUNT';

export function showMoreItems(count, listLength) {
  return {
    type: INC_COUNT,
    count,
    listLength,
  };
}
