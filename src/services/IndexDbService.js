let request = null
let db = null
const version = 1

const Stores = {
	Cart: 'cart'
}

request = indexedDB.open('food_sell', 1)

request.onupgradeneeded = () => {
	db = request.result

	if (!db.objectStoreNames.contains(Stores.Users)) {
		db.createObjectStore(Stores.Cart, { keyPath: 'id' })
	}
} 

request.onerror = () => {
	// eslint-disable-next-line no-console
	console.error('Why didn\'t you allow my web app to use IndexedDB?!')
}

// request.onsuccess = () => {
// 	db = request.result

// 	version = db.version
// }

const handleAddProductToCart = async (storeName = 'cart', data) => {
	return new Promise((resolve, reject) => { 
		// if (!db) {
		// 	return 'IndexedDB connection is not initialized.'
		// }

		request = indexedDB.open('food_sell', version)

		request.onsuccess = () => {
			db = request.result
			const tx = db.transaction(storeName, 'readwrite')
			const store = tx.objectStore(storeName)

			const getRequest = store.get(data.id)

			getRequest.onsuccess = () => {
				const existingItem = getRequest.result

				if (existingItem) {
					const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 }

					store.put(updatedItem)

					const countRequest = store.count()	
		
					countRequest.onsuccess = () => {
						resolve(countRequest.result)
					}
				} else {
					store.add(data)

					const countRequest = store.count()	
		
					countRequest.onsuccess = () => {
						resolve(countRequest.result)
					}
				}
			}
		}

		request.onerror = () => {
			const error = request.error?.message
			if (error) {
				resolve(error)
			} else {
				resolve('Unknown error')
			}
		}
	
	})
}

const getListCartItem = (storeName = 'cart') => {
	// if (!db) {
	// 	return 'IndexedDB connection is not initialized.'
	// }

	return new Promise((resolve) => {
		
		request = indexedDB.open('food_sell', version)

		request.onsuccess = () => {
			db = request.result
			const tx = db.transaction(storeName, 'readonly')
			const store = tx.objectStore(storeName)
			const res = store.getAll()
			res.onsuccess = () => {
				resolve(res.result)
			}
		}
		
		request.onerror = () => {
			resolve(null)
		}
		
	})
}

const updateCartItem = (storeName = 'cart', data) => {
	const key = data.id

	return new Promise((resolve) => {
		request = indexedDB.open('food_sell', version)

		request.onsuccess = () => {
			db = request.result
			const tx = db.transaction(storeName, 'readwrite')
			const store = tx.objectStore(storeName)
			const res = store.get(key)
			res.onsuccess = () => {
				const newData = { ...res.result, ...data }
				store.put(newData)
				resolve(newData)
			}
			res.onerror = () => {
				resolve(null)
			}
		}

		request.onerror = () => {
			resolve(null)
		}
	})
}
 
const deleteCartItem = (storeName = 'cart', id) => {
	return new Promise((resolve) => {
		request = indexedDB.open('food_sell', version)

		request.onsuccess = () => {
			db = request.result
			const tx = db.transaction(storeName, 'readwrite')
			const store = tx.objectStore(storeName)
			const res = store.delete(id)

			res.onsuccess = () => {
				resolve(true)
			}
			
			res.onerror = () => {
				resolve(false)
			}
		}
	})
}

const countCartItem = (storeName = 'cart') => { 
	return new Promise((resolve) => {
		request = indexedDB.open('food_sell', version)

		request.onsuccess = () => {
			db = request.result
			const tx = db.transaction(storeName, 'readonly')	
			const store = tx.objectStore(storeName)
			const countRequest = store.count()	

			countRequest.onsuccess = () => {
				resolve(countRequest.result)
			}
		}
	})
}

const clearData = (storeName = 'cart') => {
	return new Promise((resolve) => {
		request = indexedDB.open('food_sell', version)

		request.onsuccess = () => {
			db = request.result
			const tx = db.transaction(storeName, 'readwrite')
			const store = tx.objectStore(storeName)
			const clearRequest = store.clear()	

			clearRequest.onsuccess = () => {
				resolve('Clear success !!!')
			}
		}
	})
}

const IndexDBService = {
	handleAddProductToCart,
	getListCartItem,
	updateCartItem,
	deleteCartItem,
	countCartItem,
	clearData
}

export default IndexDBService
