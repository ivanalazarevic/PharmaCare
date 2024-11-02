import {cn} from "@/lib/utils";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {z} from "zod"
import {Product} from "@/store/types";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    number: z.number().min(1),
})
type FormSchemaType = z.infer<typeof formSchema>;

function CreateUpdateProduct(props) {
    const title = 'Create new product'
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            number: 0
        }
    })

    return (
        <div className={cn('flex flex-col w-full gap-5')}>
            <div className={'flex flex-row justify-between'}>
                <h1 className={'text-4xl font-bold'}>{title}</h1>
            </div>
            <Form {...form}>
                <FormField control={form.control}
                           name="name"
                           render={({field}) => (
                               <FormItem>
                                   <FormLabel htmlFor={'Name'}>Pool name</FormLabel>
                                   <FormControl>
                                       <Input placeholder="Enter a name"
                                              name={'poolName'}
                                              id={'poolName'}
                                              {...field}
                                       />
                                   </FormControl>
                                   <FormMessage/>
                               </FormItem>)}/>
            </Form>

        </div>
    );
}

export default CreateUpdateProduct;