import CounterComp from "../components/counterComp";
import ExpenseTracker from "../components/expenseTracker";
import Weathercomp from "../components/Weathercomp";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">


        <div className="bg-white p-6 shadow-lg rounded-lg">
          <CounterComp />
        </div>


        <div className="bg-white p-6 shadow-lg rounded-lg">
          <ExpenseTracker />
        </div>


        <div className="bg-white p-6 shadow-lg rounded-lg">
          <Weathercomp />
        </div>

      </div>
    </div>
  );
};

export default App;
