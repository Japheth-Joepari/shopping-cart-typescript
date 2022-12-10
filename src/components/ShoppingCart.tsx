import { Offcanvas, OffcanvasHeader, OffcanvasTitle, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { CartItem } from "../components/CartItem"

type shoppingcartProp = {
    isOpen : boolean
}
export const ShoppingCart = ({isOpen}: shoppingcartProp) => {
    const {closeCart, cartItems} = useShoppingCart()
    return (
        <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
            <OffcanvasHeader closeButton>
                <OffcanvasTitle>Cart</OffcanvasTitle>
            </OffcanvasHeader>
                <Offcanvas.Body>
                    <Stack gap={3}>
                        {cartItems.map(item => (
                             <CartItem {...item} key={item.id}/>
                        ))}
                    </Stack>
                </Offcanvas.Body>
        </Offcanvas>
    )
}