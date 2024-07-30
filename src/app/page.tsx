"use client"

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Page = () => {

    return (
        <ThemeProvider>
            <Container>
                <header className="py-5">
                    <h1 className="text-3xl">Título da pagina</h1>
                </header>
                <section>
                    <p className="my-5">Conteudo da Pagina</p>
                    <Button label="Clique Aqui" onClick={() => {}}></Button>
                </section>
                <ThemeSwitch />
            </Container>
        </ThemeProvider>
   );
}
export default Page;