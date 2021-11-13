export function format(first: string, middle: string, last: string): string {
  return (first || '') + (Boolean(middle) ? ` ${middle}` : '') + (Boolean(last) ? ` ${last}` : '');
}
