import shopItems from "../data/data.json"
import {Row, Col} from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"

export const Store = () => {
    return (
        <>
            <h1>Store Page</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {shopItems.map(item => (
                    <Col key={item.id}> <StoreItem  {...item}/> </Col>
                ))}
            </Row>
        </>
    )
}  