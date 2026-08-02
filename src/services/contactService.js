// Frontend-only placeholder. Replace with `return api.post('/contact', payload)` after Spring Boot is ready.
export async function submitContact(payload) {
  console.info('Contact payload:', payload)
  return Promise.resolve({ data: payload })
}
