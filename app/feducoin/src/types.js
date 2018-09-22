export const REGISTER_NEW_USER = 'REGISTER_NEW_USER'
export const SET_USER_DATA = 'SET_USER_DATA'


export function registerNewUser(data) {
  return {
    type: REGISTER_NEW_USER,
    data
  }
}


export function setUserData(data) {
  return {
    type: SET_USER_DATA,
    data
  }
}
