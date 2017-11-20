import {server} from '../../config'

export const login = (ref, param) => ({
  type: 'LOGIN',
  ref : ref,
  param : param
})

export const navbar = (ref, param) => ({
  type: 'NAVBAR',
  ref: ref,
  param: param
})

export const root = (ref, param) => ({
  type: 'ROOT',
  ref: ref,
  param: param
})

export function fetchLogin(value) {
  return function (dispatch) {
    dispatch(login('REQUESTED'))
    return fetch(server.ip + '/api/authenticate', {
      method: 'POST', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          //'Origin': '',
          //'Host': 'api.producthunt.com'
        },
        body: 'name='+value[0]+'&password='+value[1]
      }).then(function(res, error) {
          console.log(error)
          console.log(res)
          return res.json();
      }).then(function(json) {
          console.log(json);
          if (json.success===true){
            dispatch(login('SUCCEEDED', json.token))
            dispatch(fetchInfo(json.token))
          }
          else
            dispatch(login('FAILED', json.message))
      })
  }
}

export function fetchRegister(value) {
  return function (dispatch) {
    dispatch(login('REG_REQUESTED'))
    return fetch(server.ip + '/api/register', {
      method: 'POST', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          //'Origin': '',
          //'Host': 'api.producthunt.com'
        },
        body: 'name='+value[0]+'&password='+value[1]
      }).then(function(res, error) {
          console.log(error)
          console.log(res)
          return res.json();
      }).then(function(json) {
          console.log(json);
          if (json.success===true){
            dispatch(login('REG_SUCCEEDED'))
          }
          else
            dispatch(login('REG_FAILED', json.message))
      })
  }
}

export function fetchInfo(token) {
  console.log('that works')
  return function (dispatch) {
    dispatch(login('INFO_REQUESTED'))
    return fetch(server.ip+'/api/info', {
      method: 'POST', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: 'token='+token
    })
    .then(function(res, error) {
        console.log(error)
        console.log(res)
        return res.json();
    }).then(function(json) {
        console.log(json);
        if (json.success===true){
          dispatch(login('INFO_SUCCEEDED', json))
        }
        else
          dispatch(login('INFO_FAILED', json.message))
    });
  }
}
