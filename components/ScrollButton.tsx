import { useEffect, useState } from "react";

export default function ScrollButton() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        if (typeof window !== undefined)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
    };

    useEffect(() => {
        if (typeof window !== undefined) window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible)
        }
    })


    return (
        <button onClick={scrollToTop}
            style={{ display: visible ? 'inline' : 'none' }}
            className="fixed w-12 h-12 bottom-4 right-4 pt-2 bg-gray-100 border border-black rounded-md"
        > ^ </button>
    );
}
