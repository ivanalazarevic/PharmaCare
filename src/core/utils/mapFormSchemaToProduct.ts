import {FormSchemaType} from "@/components/forms/product-form";
import {generateGuid} from "@/core/utils/generateGuid";
import {Manufacturer} from "@/store/types";

export const  mapFormSchemaToProduct = (formSchema:FormSchemaType,manufacturers: Manufacturer[])=>{
    return{
        id: formSchema.id ?? generateGuid(),
        name: formSchema.name,
        price: Number(formSchema.price),
        expiryDate: formSchema.expiryDate,
        manufacturer: manufacturers.find((x) => x.name === formSchema.manufacturer),
    }
}