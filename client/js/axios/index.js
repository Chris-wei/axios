import Axios from './Axios'
import config from './config'

const axios = new Axios(config);

axios.create = function (config) {
	return new Axios(config)
}

export default axios;
