import {cn} from "@/lib/utils";
import {z} from "zod"
import {useDispatch, useSelector} from "react-redux";
import {addProduct, selectManufacturersList} from "@/store/products.slice";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "@/core/consts/routes";
import {mapFormSchemaToProduct} from "@/core/utils/mapFormSchemaToProduct";
import ProductForm from "@/components/forms/product-form";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    price: z.string().min(1),
    manufacturer: z.string(),
    expiryDate: z.date()
})
type FormSchemaType = z.infer<typeof formSchema>;

function CreateProduct() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const manufacturers = useSelector(selectManufacturersList)

    const createProduct = (product: FormSchemaType) => {
        const newProduct = mapFormSchemaToProduct(product,manufacturers)
        dispatch(addProduct(newProduct))
        navigate(ROUTES.HOME)
    }

    return (
        <div className={cn('flex flex-col w-full gap-5')}>
            <div className={'flex flex-row justify-between'}>
                <h1 className={'text-4xl font-bold'}>{'Create new product'}</h1>
            </div>
            <ProductForm
                initialValues={{
                    name: "",
                    price: "0",
                    manufacturer: "",
                    expiryDate: null,
                }}
                manufacturers={manufacturers}
                onSubmit={createProduct}
            />

        </div>
    );
}

export default CreateProduct;