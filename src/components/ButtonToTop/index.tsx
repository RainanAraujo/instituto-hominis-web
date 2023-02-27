import { Container } from "@/styles/components/ButtonToTop";
import { CaretUp } from "phosphor-react";
import React, { useState, useEffect } from "react";
interface ButtonToTopProps extends React.HTMLAttributes<HTMLAnchorElement> {}
export default function ButtonToTop(props: ButtonToTopProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // cleanup function to remove the event listener when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    return (
        <Container
            href="#header"
            target="_self"
            {...props}
            style={{ display: isVisible ? "flex" : "none" }}
        >
            <CaretUp size={24} />
        </Container>
    );
}
