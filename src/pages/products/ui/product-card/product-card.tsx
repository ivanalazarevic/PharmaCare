import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {Product} from "@/store/types";
import {formatDate} from "@/core/utils/format-date";
import {cn} from "@/lib/utils";
import {Pencil, Trash2} from "lucide-react";
import './product-card.scss'
import Modal from "@/components/modal/modal";

interface ProductCardProps {
    product: Product;
    onDelete: ()=>void,
    onEdit:()=>void
}

function ProductCard({product,onDelete,onEdit}: ProductCardProps) {

    return (
        <Card className={'card-container'}>
            <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription className={cn('flex flex-row gap-2')}>
                    <span>Manufacturer:</span>
                    <span>{product.manufacturer.name}</span>
                </CardDescription>
            </CardHeader>
            <CardContent className={cn('flex flex-col gap-2')}>
                <div className={cn('flex flex-row gap-2')}>
                    <span>Price:</span>
                    <span>{product.price}</span>
                    <span>$</span>
                </div>
                <div className={cn('flex flex-row gap-2')}>
                    <span>Expiration date:</span>
                    <span>{formatDate(product.expiryDate)}</span>
                </div>
            </CardContent>
            <CardFooter className={'flex flex-row justify-between'}>
                <Pencil className={'edit-icon'}
                        onClick={onEdit}
                />
                <Modal title={'Are you absolutely sure?'}
                       action={() => onDelete()}
                       actionTitle={'Confirm'}
                       message={'This action cannot be undone. This will permanently delete the product and remove it\'s data from our servers.'}
                       trigger={<Trash2 className={'delete-icon'}/>}>
                </Modal>
            </CardFooter>
        </Card>

    );
}

export default ProductCard;