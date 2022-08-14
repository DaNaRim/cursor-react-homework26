
const USERS_KEY = "users"
const LOGGED_USER_KEY = "logged-user"

export function getLocalUsers() {
  let users = localStorage.getItem(USERS_KEY)
  return users ? JSON.parse(users) : []
}

export function addLocalUser(user) {
  let users = getLocalUsers()
  users.push(user)
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function getLocalLoggedUser() {
  let user = localStorage.getItem(LOGGED_USER_KEY)
  return user ? JSON.parse(user) : null
}

export function setLocalLoggedUser(user) {
  localStorage.setItem(LOGGED_USER_KEY, JSON.stringify(user))
}
