export function getNumbersOnlyArray(items: any) {
  let newArray: Array<number> = [];

  for (let index = 0; index < items.length; index++) {
    newArray.push(items[index].value);
  }

  return newArray;
}

export function newRandomArray(length: number) {
  let newArray = [];
  for (let index = 0; index < length; index++) {
    newArray.push({ id: index, value: Math.floor(Math.random() * 100 + 1) });
  }

  return newArray;
}

export function convertNumbersOnlyArrayToObjectArray(items: Array<number>){
    const newItems: Array<{ id: number; value: number }> = [];
    for (let index=0; index < items.length; index++){
        newItems.push({ id: index, value:items[index]});
    }
    return newItems;
}