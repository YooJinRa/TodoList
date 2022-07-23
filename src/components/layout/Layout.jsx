import './style.css';
import Header from '../header/Header';
import Form from '../form/Form';

function Layout() {
	return (
		<div className="wrapLayout">
			레이아웃페이지
			<Header />
			<Form />
		</div>
	)
}

export default Layout;