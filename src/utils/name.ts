// icon => Icon el-icon => ElIcon
export function parseName(name: string): string {
  const parts = name.split('-')
  const transformedParts = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1))
  return transformedParts.join('')
}
