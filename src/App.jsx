import { AppContainer, ExchangeInterface } from "./components/Index";

function App() {
  return (
    <>
      <AppContainer>
        <header className="block text-center">
          <h1 className="m-t-10 m-b-10">BTC Exchange</h1>
        </header>

        <main className="flex flex-col flex-1-sm">
          <ExchangeInterface />
        </main>
      </AppContainer>
    </>
  );
}

export default App;
