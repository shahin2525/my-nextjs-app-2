"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="my-4 text-center">
      <h1 className="text-4xl text-red-500">something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()} className="text-4xl text-red-500">
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
