const isSelectedFeature = (item) => selectedFeatures.some(x => x.includes(item))

export default isSelectedFeature

var selectedFeatures = Array.from(new Set ([

"Order",


"Cart",


"Booking",


"Booking Flight",


"Wishlist",


"Home",
]))
