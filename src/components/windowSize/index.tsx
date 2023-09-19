import { useEffect, useState } from "react";

interface WindowSizeProps {
    widthWanted: number;
    children: React.ReactNode
    className?: string;
}

export function WindowSize({ widthWanted, children, className }: WindowSizeProps) {

    const [desktopSize, setDesktopSize] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= widthWanted) {
                setDesktopSize(true);
            } else {
                setDesktopSize(false);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    },[widthWanted]);

    return(
        <div className={ className }> { desktopSize && children } </div>
    )
}