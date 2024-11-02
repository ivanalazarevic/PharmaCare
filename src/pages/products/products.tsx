import {cn} from "@/lib/utils";
import ProductCard from "@/pages/products/ui/product-card/product-card";
import {useDispatch, useSelector} from "react-redux";
import {removeProduct, selectProductList, setSelectProduct} from "@/store/products.slice";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "@/core/consts/routes";
import {AppDispatch} from "@/store/store";


function Products() {
    const products = useSelector(selectProductList)
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()

    const onDelete = (id: string) => {
        dispatch(removeProduct(id));
    };

    function onEdit(id: string) {
        dispatch(setSelectProduct(id))
      navigate(ROUTES.UPDATE_PRODUCT)
    }

    return (
        <div className={cn('flex flex-col w-full gap-5')}>
            <div className={'flex flex-row justify-between'}>
                <h1 className={'text-4xl font-bold'}>Products</h1>
                <Button onClick={()=>navigate(ROUTES.CREATE_PRODUCT)}
                        size='icon'>
                    <Plus/>
                </Button>
            </div>
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 scrollable-container'}>
                {products.map((product) => (
                    <ProductCard key={product.id}
                                 onEdit={()=>onEdit(product.id)}
                                 onDelete={()=>onDelete(product.id)}
                                 product={product}/>
                ))}
            </div>
        </div>
    );
}

export default Products;