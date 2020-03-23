import Vue from 'vue'

// 判断数据是否为空
Vue.prototype.isblank = function(chr) {
	if (chr == null || chr == '' || chr == undefined || chr == 'undefined' || chr == 'null' || chr.length == 0) {
		return true;
	};
	var chr = chr.toString();
	var chr = chr.replace(/(^\s*)|\s*$/g, '');
	if (chr == null || chr == '' || chr == undefined || chr == 'undefined' || chr == 'null' || chr.length == 0) {
		return true;
	};
	return false;
}

// 提示信息（用于给与用户反馈的情况弹窗）
Vue.prototype.$msg = function (str) {
	// message.info(content, [duration], onClose)  string, number, function
	this.$message.info(str, 3)
}

// 错误提示（当用户操作出错、服务器报错、后端等原因报错情况弹窗）
Vue.prototype.$error = function (str) {
	// message.error(content, [duration], onClose)
	this.$message.error(str, 3)
}

