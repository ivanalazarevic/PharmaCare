import  {ReactNode} from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
interface ModalProps{
    title: string,
    message: string,
    trigger: ReactNode,
    action:()=>void,
    actionTitle: string
}
function Modal({title,message,trigger,action,actionTitle}: ModalProps) {
    return (
        <Dialog>
            <DialogTrigger>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {message}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={action}>{actionTitle}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default Modal;