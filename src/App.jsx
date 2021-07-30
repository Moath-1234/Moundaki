import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Router from "./Router";
import { store, persistor } from "./redux/store/configureStore";
import "./assets/styles/main.scss";
function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router />
            </PersistGate>
        </Provider>
    );
}

export default App;
