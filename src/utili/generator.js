export function generator(charset, length){
    const values = new Uint32Array(length);
		window.crypto.getRandomValues(values);		
		let res = "";
		for (let i = 0; i < length; i++) {
			res += charset[values[i] % charset.length];
		}
        return res;
}