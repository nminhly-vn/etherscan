export function formatEtherAddress (address = '') {
  const firstAddress = address.substr(0, 8)
  const lastAddress = address.substr(-8)
  return `${firstAddress}...${lastAddress}`
}

export function formatCrypto (value, digit = 6, options = {}) {
  return parseFloat(value).toFixed(digit)
}
