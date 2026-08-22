export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('bestolex_admin_token')

  if (to.path.startsWith('/dashboard') && to.path !== '/dashboard/login') {
    if (!token.value) {
      return navigateTo('/dashboard/login')
    }
  }

  if (to.path === '/dashboard/login' && token.value) {
    return navigateTo('/dashboard')
  }
})
