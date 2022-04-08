const ADD_URL = new URL('http://localhost:3003/add')
const DELETE_URL = new URL('http://localhost:3003/delete')


const addFace = async (name) => {
  console.log(name)
  var requestOptions = {
    body: JSON.stringify({username: name}),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    redirect: 'follow'
  };
  console.log(requestOptions);
  const resp = await fetch(ADD_URL , requestOptions)//url
  if (resp.status != 200) {
    return Error(resp.statusText)
  }
  const body = await resp.json()
  return body
}

const deleteFace = async (name) => {
  var requestOptions = {
    body: JSON.stringify({name: name}),
    method: 'POST',
    redirect: 'follow'
  };
  console.log(requestOptions);
  const resp = await fetch(DELETE_URL , requestOptions)//url
  if (resp.status != 200) {
    return Error(resp.statusText)
  }
  const body = await resp.json()
  return body
}

export {addFace, deleteFace}