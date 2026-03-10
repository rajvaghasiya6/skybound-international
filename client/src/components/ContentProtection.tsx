import { useEffect } from "react";

export function ContentProtection() {
    useEffect(() => {
        // Disable right-click context menu
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
            return false;
        };

        // Disable image dragging
        const handleDragStart = (e: DragEvent) => {
            if (e.target instanceof HTMLImageElement) {
                e.preventDefault();
            }
        };

        // Disable specific keyboard shortcuts (Copy, Save, Print, View Source, Inspect)
        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                (e.ctrlKey || e.metaKey) &&
                (e.key === 'c' || e.key === 'C' || // Copy
                    e.key === 's' || e.key === 'S' || // Save
                    e.key === 'p' || e.key === 'P' || // Print
                    e.key === 'u' || e.key === 'U')   // View Source
            ) {
                e.preventDefault();
                return false;
            }

            // Prevent F12 (DevTools)
            if (e.key === "F12") {
                e.preventDefault();
                return false;
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("dragstart", handleDragStart);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("dragstart", handleDragStart);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return null;
}
