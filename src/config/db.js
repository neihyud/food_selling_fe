
let request = null
let db = null
let version = 1

const Stores = {
	Cart: 'cart'
}

request = indexedDB.open('food_sell', 1)

request.onupgradeneeded = () => {
	db = request.result

	if (!db.objectStoreNames.contains(Stores.Users)) {
		db.createObjectStore(Stores.Cart, { keyPath: 'id' })
	}
	// no need to resolve here
} 

request.onerror = () => {
	console.error('Why didn\'t you allow my web app to use IndexedDB?!')
}

request.onsuccess = () => {
	db = request.result

	version = db.version
}

export { request, db, version }
