import {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import styles from './index.module.scss'
import App from './App';
const root = createRoot(document.getElementById("app"))
root.render(
    <StrictMode>
        <Router>
            <App/>
        </Router>
    </StrictMode>
)