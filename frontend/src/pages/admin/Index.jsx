import { Admin, Resource, ShowGuesser } from "react-admin";
import dataProvider from "./dataProvider"; // Импорт вашего dataProvider

import { authProvider } from "./authProvider";
import AdminLayout from "./Layout";
import List from "./List";
import Detail from "./Detail";
import { useEffect, useState } from "react";
import { checkIp } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const App = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		// const fetch = async () => {
		// 	const data = await checkIp();
		// 	if(!data) {
		// 		navigate('/')
		// 	}
		// 	console.log(data)
		// 	setLoading(false)
		// }
		// fetch();
	})


	return loading ? <></> : <Admin
		layout={AdminLayout}
		basename="/admin"
		dataProvider={dataProvider}
		authProvider={authProvider}>
		<Resource name="appeals" label="Обращения" list={List} edit={Detail} />
	</Admin>
};

export default App;
