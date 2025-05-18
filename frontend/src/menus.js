const menus = [];
const addMenu = (menu) => {
  menus.push(menu);
};

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
};

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

export default menus;

addMenu({
	route: '/blog',
    label: 'Blog',
    permission: 'ReadBlog',
	subMenus: []
})

addMenu({
	route: '/order',
    label: 'Order',
    permission: 'ReadOrder',
	subMenus: []
})

addMenu({
	route: '/cart',
    label: 'Cart',
    permission: 'ReadCart',
	subMenus: []
})

addSubMenu('Booking', {
	route: '/hotel',
	label: 'Booking Hotel',
    permission: '',
	
})
addMenu({
	route: '#',
    label: 'Booking',
    permission: '',
	subMenus: []
})


addSubMenu('Booking', {
	route: '/event',
	label: 'Booking Event',
    permission: 'ReadEvent',
	
})

// addMenu({
// 	route: '/wishlist/collections',
//     label: 'Wishlist',
//     permission: 'ReadWishList',
// 	subMenus: []
// })
