import { ContainerHome } from "./containerHome";

export const About = () => {
    return (
      <ContainerHome title="Nossa Empresa">
        <p className="text-md text-start font-light tracking-tight leading-7 max-sm:text-center">
          Quem Somos Na Smoke Burger, somos apaixonados por hambúrgueres
          artesanais que elevam a experiência gastronômica a um novo nível.
          Nascemos em Foz do Iguaçu com a missão de trazer um sabor único e
          inesquecível para os amantes de carne. Nosso segredo está na defumação
          lenta e cuidadosa, um processo que confere aos nossos blends de carne
          um aroma e sabor incomparáveis. Selecionamos apenas os melhores
          ingredientes, garantindo a qualidade em cada mordida: desde a carne
          suculenta e defumada, passando pelos pães fresquinhos e feitos na
          casa, até os acompanhamentos que complementam perfeitamente cada
          sanduíche. Mais do que apenas hambúrgueres, criamos experiências.
          Venha nos visitar e descubra por que a Smoke Burger é a escolha certa
          para quem busca sabor, qualidade e um toque defumado que você só
          encontra aqui!
        </p>
      </ContainerHome>
    );
}