export function fibonacciSum(n: number, updateVisualsFunction: any): number {
  if (n === 2) return 1;
  if (n === 1) return 0;

  // Only saving in a const so I can use the value for visualization
  const result =
    fibonacciSum(n - 1, updateVisualsFunction) +
    fibonacciSum(n - 2, updateVisualsFunction);

  updateVisualsFunction(result);
  return result;
}
