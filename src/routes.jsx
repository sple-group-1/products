import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import blogRoutes from "@/blog/routes";
import orderRoutes from "@/order/routes";
import cartRoutes from "@/cart/routes";
import bookingRoutes from "@/booking/routes";
import wishlistRoutes from "@/wishlist/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...blogRoutes, 
	...orderRoutes, 
	...cartRoutes, 
	...bookingRoutes, 
	...wishlistRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
