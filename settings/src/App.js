import DashboardContextProvider from "./contexts/DashboardContextProvider";
import Page from "./Page";

const App = () => {
    return (
        <DashboardContextProvider>
            <Page />
        </DashboardContextProvider>
    )
}

export default App;