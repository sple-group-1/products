const isSelectedFeature = (item) => selectedFeatures.some(x => x.includes(item))

export default isSelectedFeature

var selectedFeatures = Array.from(new Set ([

"Blog",


"Order",


"Cart",


"Booking",


"Wishlist",


"Home",
]))
