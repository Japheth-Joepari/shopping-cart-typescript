import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasTitle,
  Stack,
} from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components/CartItem";
import { StoreItem } from "./StoreItem";
import { currencyFormatter } from "../utilities/currencyFormatter";
import storeItems from "../data/data.json";

type shoppingcartProp = {
  isOpen: boolean;
};
export const ShoppingCart = ({ isOpen }: shoppingcartProp) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <OffcanvasHeader closeButton>
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </OffcanvasHeader>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem {...item} key={item.id} />
          ))}

          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {currencyFormatter(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
