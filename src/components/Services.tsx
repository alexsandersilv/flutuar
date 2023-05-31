import { ContainerServices } from "./ContainerServices"

export function Services() {
  return (
    <section className="container mx-auto p-10">
      <h2 className="my-20 text-center text-4xl font-bold">Our Service</h2>
      <div className="flex justify-between gap-24">
        <ContainerServices title="Ticket Booking" icon="ticket" style="bg-app-gray bg-opacity-10">
          We book all kind of national or international
          ticket for your destinaion.
        </ContainerServices>

        <ContainerServices title="Hotel Booking" icon="hotel" style="bg-app-white border shadow-2xl">
          You can easily book your according to your
          budget hotel by our website.
        </ContainerServices>

        <ContainerServices title="Tour Plan" icon="paper-plane" style="bg-app-gray  bg-opacity-10">
          We provide you the best plan within a short
          time explore more.
        </ContainerServices>
      </div>
    </section>
  );
}