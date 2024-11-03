import {useDispatch, useSelector} from "react-redux";
import {editProduct, selectManufacturersList, selectProduct} from "@/store/products.slice";
import {cn} from "@/lib/utils";
import ProductForm, {FormSchemaType} from "@/components/forms/product-form";
import {ROUTES} from "@/core/consts/routes";
import {useNavigate} from "react-router-dom";
import {mapFormSchemaToProduct} from "@/core/utils/mapFormSchemaToProduct";

function UpdateProduct() {
    const manufacturers = useSelector(selectManufacturersList);
    const selectedProduct = useSelector(selectProduct)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const updateProduct=(product: FormSchemaType )=>{
        const updatedProduct = mapFormSchemaToProduct(product,manufacturers)
        dispatch(editProduct(updatedProduct))
        navigate(ROUTES.HOME)
    }
    if (!selectedProduct) {
        return <div>Product not found</div>;
    }
    return (
        <div className={cn('flex flex-col w-full gap-5')}>
            <div className={'flex flex-row justify-between'}>
                <h1 className={'text-4xl font-bold'}>{'Update product'}</h1>
            </div>
            <ProductForm
                initialValues={{
                    id: selectedProduct.id,
                    name: selectedProduct.name,
                    price: selectedProduct.price.toString(),
                    manufacturer: selectedProduct.manufacturer?.name || "",
                    expiryDate: selectedProduct.expiryDate,
                }}
                manufacturers={manufacturers}
                onSubmit={updateProduct}
            />
        </div>
    );
}

export default UpdateProduct;