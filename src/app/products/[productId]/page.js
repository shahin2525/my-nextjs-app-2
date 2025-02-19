const page = async ({ params, searchParams }) => {
  const param = await params;
  const query = await searchParams;
  console.log(param, query);
  return (
    <div>
      <h1>dynamic page {param.productId}</h1>
      <h1>dynamic page category {query?.category}</h1>
      <h1>dynamic page price {query?.price}</h1>
    </div>
  );
};

export default page;
