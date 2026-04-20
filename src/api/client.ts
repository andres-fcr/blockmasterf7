const BASE_URL = import.meta.env.VITE_BASE_URL || ''
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN || ''

const headers = {
  Authorization: `Bearer ${ACCESS_TOKEN}`,
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export async function fetchApi<T>(url: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`, { headers })
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  
  return response.json()
}