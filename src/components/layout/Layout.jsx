import Layoutbox from "./style.jsx";
import Header from '../header/Header';
import Form from '../form/Form';

function Layout() {
	console.log("layout ::")
	
	return (
		<Layoutbox>
			<Header />
			<Form />
		</Layoutbox>
	)
}

export default Layout;