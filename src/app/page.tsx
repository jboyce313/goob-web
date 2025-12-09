import storesData from "./data.json";

export default function Home() {
  const stores = storesData;

  return (
    <div>
      {stores.map((store) => (
        <div key={store.id} className="mt-5">
          <h2>{store.name}</h2>
          <p>{store.address}</p>
          <p>{store.phoneNumber}</p>
          <p>
            <a href={store.website} target="_blank" rel="noopener noreferrer">
              {store.website}
            </a>
          </p>
          <p>Closing Date: {store.closingDate}</p>
        </div>
      ))}
    </div>
  );
}
