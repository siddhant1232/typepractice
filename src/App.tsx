import CounterComp from "../components/counterComp";
import ExpenseTracker from "../components/expenseTracker";
import Weathercomp from "../components/Weathercomp"

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="flex w-full max-w-4xl gap-6">

        <div className="w-1/2 bg-white p-6 shadow-lg rounded-lg">
          <CounterComp />
        </div>

        <div className="w-1/2 bg-white p-6 shadow-lg rounded-lg">
          <ExpenseTracker />
        </div>
        <div className="w-1/2 bg-white p-6 shadow-lg rounded-lg">
          <Weathercomp/>
        </div>

      </div>
    </div>
  );
};

export default App;
