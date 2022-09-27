import ErrorBoundary from "../ErrorBoundaries/ErrorBoundaries";
import AddNewUser from "./AddNewUser";

function App() {
  return (
    <ErrorBoundary>
      <AddNewUser/>
    </ErrorBoundary>
  );
}

export default App;
