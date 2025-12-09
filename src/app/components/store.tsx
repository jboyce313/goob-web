interface StoreProps {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  website: string;
  closingDate: string;
}

export default function Store({
  id,
  name,
  address,
  phoneNumber,
  website,
  closingDate,
}: Readonly<StoreProps>) {
  return (
    <div key={id} className="mt-5 bg-blue-300 p-4 rounded-lg m-6 text-white">
      <h2 className="text-lg">{name}</h2>
      <p>{address}</p>
      <p>{phoneNumber}</p>
      <p>
        <a href={website} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      </p>
      <p>Closing Date: {closingDate}</p>
    </div>
  );
}
