// 数字正则
export const numberReg = /^[0-9]*$/;
// 身份证正则
export const idCardReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/;
// 男性身份证正则
export const menIdCardReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[1|3|5|7|9][0-9Xx]$)/;
// 女性身份证正则
export const womenIdCardReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0|2|4|6|8][0-9Xx]$)/;
// 出生证正则
export const birthCertificate = /^[A-Z][0-9]{9}$/;
// 联系方式验证
// export const mobileReg = /(^$)|(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
export const mobileReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
export const phoneCodeReg = /^0\d{2,3}$/;//座机区号
export const phoneCodeReg2 = /^\d{7,8}$/;//电话号码
// 输入其他补充信息验证
export const otherWordReg = {type: "string", min: 1, max: 100, message: "最多可输入100个字"};

export const numberRegFn = function (min, max) {
	return {
		validator: function (rule, value, callback) {
			let reg = /^[0-9]*$/;
			if (!value&&value+''!='0') {
				callback();
				return;
			}

			if (!reg.test(value.toString())) {
				callback(new Error("请输入数字"));
				return;
			}

			if (min && max && (value < min || value > max)) {
				callback(new Error(`请输入数字，输入范围为:${min}~${max}`));
				return false;
			}
			if (min && value < min) {
				callback(new Error(`请输入数字，最小值为${min}`));
				return false;
			}
			if (max && value > max) {
				callback(new Error(`请输入数字，最大值为${max}`));
				return false;
			}
			callback()
		}
	}
};
// 单精度正则
export const floatReg = function (min, max) {
	return {
		validator: function (rule, value, callback) {
			let reg = /^([0-9]*|[0-9]*.[0-9]{1})$/;
			if (!value&&value+''!='0') {
				callback();
				return;
			}
			if (!reg.test(value.toString())) {
				callback(new Error("请输入数字，且最多可输入一位小数"));
				return;
			}
			if (min && max && (value < min || value > max)) {
				callback(new Error(`请输入数字，输入范围为:${min}~${max}`));
				return false;
			}
			if (min && value < min) {
				callback(new Error(`请输入数字，最小值为${min}`));
				return false;
			}
			if (max && value > max) {
				callback(new Error(`请输入数字，最大值为${max}`));
				return false;
			}
			callback()
		}
	}
};
// 双精度正则
export const doubleReg = function (min, max) {
	return {
		validator: function (rule, value, callback) {
			let reg = /^([0-9]*|[0-9]*.[0-9]{1,2})$/;
			if (!value&&value+''!='0') {
				callback();
				return;
			}
			if (!reg.test(value)) {
				callback("请输入数字，且最多可输入两位小数");
				return;
			}
			if (min && max && (value < min || value > max)) {
				callback(`请输入数字，输入范围为:${min}~${max}`);
				return false;
			}
			if (min && value < min) {
				callback(`请输入数字，最小值为${min}`);
				return false;
			}
			if (max && value > max) {
				callback(`请输入数字，最大值为${max}`);
				return false;
			}
			callback()
		}
	}
};
