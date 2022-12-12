import { Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import StoreItems from "../data/data.json"
import { currencyFormatter } from "../utilities/currencyFormatter"
import { Button } from "react-bootstrap"

type cartItemProp = {
    id: number
    quantity: number
}

export const CartItem = ({ id, quantity }: cartItemProp) => {
    const { removeFromCrt } = useShoppingCart()
    const item = StoreItems.find(i => i.id === id)
    if (item == null) return null
    const styles = {
        objectFit: "cover",
        height: "75px",
        width: "125px",
        align: "center",
    }

    return (
        <>
            <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                <img
                    src={item.imgUrl}
                    style={{ width: "125px", height: "75px", objectFit: "cover" }}
                />
                <div className="me-auto">
                    <div>
                        {item.name}{" "}
                        {quantity > 1 && (
                            <span className="text-muted" style={{ fontSize: ".65rem" }}>
                                x{quantity}
                            </span>
                        )}
                    </div>
                    <div className="text-muted" style={{ fontSize: ".75rem" }}>
                        {currencyFormatter(item.price)}
                    </div>
                </div>
                <div> {currencyFormatter(item.price * quantity)}</div>
                <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeFromCrt(item.id)}
                >
                    &times;
                </Button>
            </Stack>
        </>
    )
}