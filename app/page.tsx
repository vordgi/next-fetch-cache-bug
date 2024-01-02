export default async function Page() {
  console.log('render page');

  const resp = await fetch(`http://localhost:${process.env.PORT || 3000}/api/mock`, { next: { revalidate: 1 } });
  const data = await resp.json();

  return (
    <p id="content">{data.content}</p>
  )
}
