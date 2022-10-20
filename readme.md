return (
<>
{data &&
data.map((item) => {
return <p key={item.id}>{item.title}</p>;
})}
</>
);

// koristi se s fetch.api i useState u kojem se inicijalno nalazi null. neće ništa prikazati ukoliko je data null
