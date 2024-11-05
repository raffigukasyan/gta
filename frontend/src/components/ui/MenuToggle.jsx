import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

export const MenuToggle= ({
                        isOpen = false,
                        width = 29,
                        height = 26,
                        strokeWidth = 1,
                        color = "#000",
                        transition = null,
                        lineProps = null,
                        setOpen,
                              className,
                        ...props
                    }) => {
    const variant = isOpen ? "opened" : "closed";
    const top = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: 45,
            translateY: 2
        }
    };
    const center = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    };
    const bottom = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: -45,
            translateY: -2
        }
    };
    lineProps = {
        stroke: color,
        strokeWidth: strokeWidth,
        vectorEffect: "non-scaling-stroke",
        initial: "closed",
        animate: variant,
        strokeLinecap: 'round',
        transition,
        
    };
    const unitHeight = 4;
    const unitWidth = (unitHeight * (width)) / (height);

    return (
        <Hamburger toggled={isOpen} toggle={setOpen} />
    );
};