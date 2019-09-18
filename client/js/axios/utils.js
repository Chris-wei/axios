//深拷贝
function deepClone (source) {
	let target = Array.isArray(source) ? [] : {};

	for ( let key in source ) {
		if ( typeof source[key] === 'object' && source[key] !== null ) {
			target[key] = deepClone(source[key])
		} else {
			target[key] = source[key]
		}
	}
	return target
}

//合并
function mergeConfig (obj1, obj2) {
	let target = deepClone(obj1),
		source = deepClone(obj2);

	return Object.keys(source).reduce((t,k)=>{
		if(['url','baseURL','method'].includes(k)){
			t[k] = source[k]
		}
		if(['headers','data','params'].includes(k)){
			t[k] = Object.assign({},source[k],t[k])
		}
		return t;
	},target)
}


export {
	deepClone ,
	mergeConfig
};
