const menus = []
const addMenu = (menu) => {
	menus.push(menu)
}

const addSubMenu = (label, subMenu, menu = menus) => {
	for (const item of menu) {
		if (item.label === label) {
			item.subMenus.push(subMenu);
			return;
		}
		if (item.subMenus) {
			addSubMenu(label, subMenu, item.subMenus);
		}
	}
}

export const settingsMenu = [
	{
		route: '#',
		label: 'Pengaturan',
		permission: 'administrator',
		subMenus: [
			{
				route: '/settings/appearance',
				label: 'Pengaturan Tampilan',
				permission: 'administrator',
			},
			{
				route: '/settings/role',
				label: 'Pengaturan Role',
				permission: 'administrator',
			},
			{
				route: '/settings/user',
				label: 'Pengaturan User',
				permission: 'administrator',
			},
		]
	},
]

export default menus
addMenu({
	route: '/blog',
    label: 'Blog',
    permission: '',
	subMenus: []
})

addMenu({
	route: '/order',
    label: 'Order',
    permission: '',
	subMenus: []
})

addMenu({
	route: '/cart',
    label: 'Cart',
    permission: '',
	subMenus: []
})

addMenu({
	route: '/hotel',
    label: 'Booking',
    permission: '',
	subMenus: []
})

addMenu({
	route: '/wishlist/collections',
    label: 'Wishlist',
    permission: '',
	subMenus: []
})
