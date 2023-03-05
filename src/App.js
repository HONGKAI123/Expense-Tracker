import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: 6,
      title: "firest",
      amount: 95,
      date: new Date(),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title1={expense[0].title}
        date={expense[0].date}
        amount={expense[0].amount}
      ></ExpenseItem>
      <p></p>
    </div>
  );
}

export default App;
