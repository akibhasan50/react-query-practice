import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Characters from "./components/Characters";

// Create a client
const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Characters></Characters>
      </QueryClientProvider>
    </div>
  );
}

export default App;
