import { data } from "../data"

export default function ProductList() {
    return (
        <>
            <div className="container-icons">
                {data.map(product =>(
                    <div className="item">
                        
                    </div>
                ))}
            </div>
        </>
    )
}