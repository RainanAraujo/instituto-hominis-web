import { Container } from "@/styles/components/ButtonToTop";
import { CaretUp } from "phosphor-react";
export default function ButtonToTop() {
    return (
        <Container href="#header" target="_self">
            <CaretUp size={24} />
        </Container>
    );
}
