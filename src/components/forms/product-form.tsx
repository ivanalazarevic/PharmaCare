import { cn } from "@/lib/utils";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/date-picker/date-picker";
import { AutoComplete, SelectItemType } from "@/components/autocomplete/autocomplete";
import { Manufacturer } from "@/store/types";
import React from "react";

const formSchema = z.object({
    id:z.string().nullable().optional(),
    name: z.string().min(2).max(50),
    price: z.string().min(1),
    manufacturer: z.string(),
    expiryDate: z.date(),
});

export type FormSchemaType = z.infer<typeof formSchema>;

interface ProductFormProps {
    initialValues: FormSchemaType;
    manufacturers: Manufacturer[];
    onSubmit: (value: FormSchemaType) => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({ initialValues, manufacturers, onSubmit }) => {
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
    });

    const mapToSelectItemOption = (manufacturers: Manufacturer[]): SelectItemType<string>[] => {
        return manufacturers.map((item) => ({
            value: item.name,
            label: item.name,
            key: item.id,
        }));
    };

    return (
        <div className={cn("flex flex-col w-full gap-5")}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor={"name"}>Product Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter product name" name={"name"} id={"name"} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor={"price"}>Price</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter a price" name={"price"} id={"price"} type={"number"} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="manufacturer"
                        render={({ field }) => (
                            <FormItem className={"flex flex-col"}>
                                <FormLabel htmlFor={"manufacturer"}>Choose a Manufacturer</FormLabel>
                                <FormControl>
                                    <AutoComplete
                                        id={"manufacturer"}
                                        items={mapToSelectItemOption(manufacturers)}
                                        placeholder="Select manufacturer..."
                                        searchPlaceholder="Search manufacturer..."
                                        emptyMessage={"No manufacturer found"}
                                        onValueChange={field.onChange}
                                        initialValue={field.value}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="expiryDate"
                        render={({ field }) => (
                            <FormItem className={"flex flex-col"}>
                                <FormLabel htmlFor={"expiryDate"}>Expiry Date</FormLabel>
                                <FormControl>
                                    <DatePicker value={field.value} onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
};

export default ProductForm;
