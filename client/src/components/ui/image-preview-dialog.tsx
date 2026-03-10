import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ImagePreviewDialogProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    altText?: string;
    title?: string;
    className?: string; // Additional classes for the image
}

export function ImagePreviewDialog({
    isOpen,
    onClose,
    imageSrc,
    altText = "Preview",
    title,
    className,
}: ImagePreviewDialogProps) {
    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-0 shadow-none">
                {/* Hidden Accessible Title */}
                <DialogHeader className="sr-only">
                    <DialogTitle>{title || altText}</DialogTitle>
                </DialogHeader>

                <div className="relative flex items-center justify-center w-full h-full p-4 pointer-events-none">
                    <img
                        src={imageSrc}
                        alt={altText}
                        className={cn(
                            "max-h-[85vh] w-auto h-auto rounded-lg shadow-2xl object-contain pointer-events-auto bg-background",
                            className
                        )}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
