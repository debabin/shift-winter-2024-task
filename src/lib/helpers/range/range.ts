export function range(n: number | string) {
  const a = []
  for (let i = 0; i < Number(n); i++) {
    a.push(i)
  }

  return a
}
