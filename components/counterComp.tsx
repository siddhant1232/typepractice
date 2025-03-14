import useCounter from "../store/counter";

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Ram Ram 🙏</h1>
      

      <p className="text-3xl font-semibold text-blue-600 mb-4">Count: {count}</p>


      <div className="flex gap-4">
        <button
          onClick={increment}
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
        >
          +1
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
        >
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
