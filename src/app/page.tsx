import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizza" size="lg" className="font-extrabold"/>
      </Container>

      <TopBar/>

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">

          {/* Filtration */}
          <div className="w-[250px]">
            <Filters/>
          </div>

          {/* List of Goods */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              List of Goods
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
