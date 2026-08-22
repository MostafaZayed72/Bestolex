export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const adminEmail = process.env.ADMIN_EMAIL || 'bestolex.qa@gmail.com'
  const adminPassword = process.env.ADMIN_PASSWORD || '123456'

  if (body.email === adminEmail && body.password === adminPassword) {
    return {
      success: true,
      token: 'bestolex_secure_session_token_' + Date.now(),
      user: {
        email: adminEmail,
        role: 'admin'
      }
    }
  }

  throw createError({
    statusCode: 401,
    statusMessage: 'Invalid credentials'
  })
})
