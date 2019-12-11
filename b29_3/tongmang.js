var sumArr = {
	add: function (Arr) {
		var tong = 0;
		for (var i = 0; i < Arr.length; i++) {
			tong += Arr[i];
		}
		return tong;
	}
}

module.exports = sumArr;