import "./App.css";

import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import Login from "./pages/Login";

export default function App() {
	return (
		<div className="container">
			<SideMenu />
			<Header />
			<Login />
		</div>
	);
}
