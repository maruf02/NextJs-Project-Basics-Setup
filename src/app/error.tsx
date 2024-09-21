"use client";

const errorPage = ({ error, reset }) => {
  return (
    <div>
      <h1>something wrong</h1>
      <h1>{error.message}</h1>
      <button
        className="bg-green-400 text-black p-3 rounded-2xl"
        onClick={() => reset()}
      >
        try again
      </button>
    </div>
  );
};

export default errorPage;
