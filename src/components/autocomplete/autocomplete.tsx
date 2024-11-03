import {Button} from "@/components/ui/button"
import {useState} from "react";
import {CaretSortIcon, CheckIcon} from "@radix-ui/react-icons"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command";
import {cn} from "@/lib/utils";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
export type SelectItemType<T> = {
    value: T;
    label: string;
    key: string | number;
}
export type AutoCompleteProps = {
    id?: string
    items: SelectItemType<string>[]
    placeholder: string
    searchPlaceholder: string
    emptyMessage?: string
    onValueChange: (value: string) => void,
    initialValue?: string
}

export function AutoComplete({
                                 id,
                                 items,
                                 placeholder,
                                 searchPlaceholder,
                                 emptyMessage,
                                 onValueChange,
                                 initialValue
                             }: AutoCompleteProps) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(initialValue)

    const onSelect = (currentValue: string) => {
        setValue(currentValue)
        setOpen(false)
        onValueChange(currentValue)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    id={id}
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between"
                >
                    {value
                        ? items?.find((x) => x.value === value)?.label
                        : placeholder}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Command>
                    <CommandInput placeholder={searchPlaceholder} className="h-9"/>
                    <CommandList>
                        <CommandEmpty>{emptyMessage ?? "Not Found"}</CommandEmpty>
                        <CommandGroup>
                            {items?.map((item) => (
                                <CommandItem
                                    key={item.key}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                        onSelect(currentValue)
                                    }}
                                >
                                    {item.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value === item.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}