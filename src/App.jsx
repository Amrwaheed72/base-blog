import { Posts } from "./Posts";
import "./App.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const quryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        // staleTime:0
      },
    },
  });
  return (
    <QueryClientProvider client={quryClient}>
      <ReactQueryDevtools />
      <div className="App">
        <h1>Blog &apos;em Ipsum</h1>
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

export default App;
