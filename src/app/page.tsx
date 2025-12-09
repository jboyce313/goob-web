import Store from "./components/store";
import storesData from "./data.json";

export default function Home() {
  const stores = storesData;

  return (
    <div>
      {stores.map((store) => (
        <Store
          key={store.id}
          id={store.id}
          name={store.name}
          address={store.address}
          phoneNumber={store.phoneNumber}
          website={store.website}
          closingDate={store.closingDate}
        />
      ))}
    </div>
  );
}
