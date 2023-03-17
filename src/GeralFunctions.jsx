// PATTERNS 
export const formatToCurrency = (item) =>{
  return Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(item)
}

// API
export const api = 'https://my-json-server.typicode.com/roberiof/spicers'
export const getProducts = async() =>{
  const resp = await fetch( api ).then(data => data.json())
  return resp
}
export const updateApi = async(product) => {
  await fetch(`${api}/${product.id}`, {
    method: "PUT",
    body: JSON.stringify(product),
    headers:{
      "Content-Type": "application/json"
    },
  })
}

// LOCAL STORAGE 
export const localStorageKey = 'productsCartSpicers'

export const setLocalStorage = (item) =>{
  localStorage.setItem(localStorageKey, JSON.stringify(item))
}
export const getLocalStorage = () =>{
  return JSON.parse(localStorage.getItem(localStorageKey)) ?? []
}

export const clearLocalStorage = () =>{
  localStorage.removeItem(localStorageKey)
}

// ALERT USER ABOUT UNC
export const unavailableFeature = (e) =>{
  e.preventDefault()
  alert("I'm sorry. This feature is still in progress!")
}