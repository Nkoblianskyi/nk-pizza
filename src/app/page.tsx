import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductList } from "@/components/shared/product-list";
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
        <div className="flex gap-[80px]">

          {/* Filtration */}
          <div className="w-[250px]">
            <Filters/>
          </div>

          {/* List of Goods */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductList title={"Pizzas"} items={[
                {
                id: 1,
                name: '4 Cheeses',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE873ED9C21CE2A2D71C0FEE8462CB.avif',
                price: 12,
                items: [{price: 12}],
              },
              {
                id: 2,
                name: '4 Cheeses',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE873ED9C21CE2A2D71C0FEE8462CB.avif',
                price: 12,
                items: [{price: 12}],
              },
              {
                id: 3,
                name: '4 Cheeses',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE873ED9C21CE2A2D71C0FEE8462CB.avif',
                price: 12,
                items: [{price: 12}],
              },
              {
                id: 4,
                name: '4 Cheeses',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE873ED9C21CE2A2D71C0FEE8462CB.avif',
                price: 12,
                items: [{price: 12}],
              },
              ]} 
              categoryId={1}/>
              <ProductList title={"Combo"} items={[
                {
                id: 1,
                name: '4 Cheeses',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF427A78AA6FCFB1229F936E6C4D91.avif',
                price: 12,
                items: [{price: 12}],
              },
              {
                id: 2,
                name: '4 Cheeses',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF427A78AA6FCFB1229F936E6C4D91.avif',
                price: 12,
                items: [{price: 12}],
              },
              {
                id: 3,
                name: '4 Cheeses',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF427A78AA6FCFB1229F936E6C4D91.avif',
                price: 12,
                items: [{price: 12}],
              },
              {
                id: 4,
                name: '4 Cheeses',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF427A78AA6FCFB1229F936E6C4D91.avif',
                price: 12,
                items: [{price: 12}],
              },
              ]} 
              categoryId={2}/>
              <ProductList title={"Appetizer"} items={[
                {
                id: 1,
                name: '4 Cheeses',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE873486BA6B87A5B66FA1A67995AD.avif',
                price: 12,
                items: [{price: 12}],
              },
              {
                id: 2,
                name: '4 Cheeses',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE873486BA6B87A5B66FA1A67995AD.avif',
                price: 12,
                items: [{price: 12}],
              },
              {
                id: 3,
                name: '4 Cheeses',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE873486BA6B87A5B66FA1A67995AD.avif',
                price: 12,
                items: [{price: 12}],
              },
              {
                id: 4,
                name: '4 Cheeses',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE873486BA6B87A5B66FA1A67995AD.avif',
                price: 12,
                items: [{price: 12}],
              },
              ]} 
              categoryId={3}/>
              <ProductList title={"Drinks"} items={[
                {
                id: 1,
                name: '4 Cheeses',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEC4008D5B0F13BA77A62320A339DF.avif',
                price: 12,
                items: [{price: 12}],
              },
              ]} 
              categoryId={4}/>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
