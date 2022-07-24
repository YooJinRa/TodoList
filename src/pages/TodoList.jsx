import Layout from '../components/layout/Layout';
import LogoImage from '../images/logo.png';

function TodoList() {
	return(
		<div>
				<p style={{textAlign:'center', margin:'20px 0'}}>
					<img src={LogoImage} alt="로고" style={{width:'100px', height:'100px'}} />
				</p>
				<Layout />
		</div>
	)
}
export default TodoList;