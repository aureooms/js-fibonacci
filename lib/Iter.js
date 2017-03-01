"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__Iter__ = __Iter__;
function __Iter__(add) {

	var Iter = function Iter(a, b) {

		this.a = a;
		this.b = b;
	};

	Iter.prototype.next = function () {

		var t;

		t = this.a;
		this.a = this.b;
		this.b = add(t, this.b);

		return { value: t, done: false };
	};

	return Iter;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JdGVyLmpzIl0sIm5hbWVzIjpbIl9fSXRlcl9fIiwiYWRkIiwiSXRlciIsImEiLCJiIiwicHJvdG90eXBlIiwibmV4dCIsInQiLCJ2YWx1ZSIsImRvbmUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQ2dCQSxRLEdBQUFBLFE7QUFBVCxTQUFTQSxRQUFULENBQW9CQyxHQUFwQixFQUEwQjs7QUFFaEMsS0FBSUMsT0FBTyxTQUFQQSxJQUFPLENBQVdDLENBQVgsRUFBZUMsQ0FBZixFQUFtQjs7QUFFN0IsT0FBS0QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBRUEsRUFMRDs7QUFPQUYsTUFBS0csU0FBTCxDQUFlQyxJQUFmLEdBQXNCLFlBQWE7O0FBRWxDLE1BQUlDLENBQUo7O0FBRUFBLE1BQUksS0FBS0osQ0FBVDtBQUNBLE9BQUtBLENBQUwsR0FBUyxLQUFLQyxDQUFkO0FBQ0EsT0FBS0EsQ0FBTCxHQUFTSCxJQUFLTSxDQUFMLEVBQVMsS0FBS0gsQ0FBZCxDQUFUOztBQUVBLFNBQU8sRUFBRUksT0FBUUQsQ0FBVixFQUFjRSxNQUFPLEtBQXJCLEVBQVA7QUFFQSxFQVZEOztBQVlBLFFBQU9QLElBQVA7QUFFQSIsImZpbGUiOiJJdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gX19JdGVyX18gKCBhZGQgKSB7XG5cblx0dmFyIEl0ZXIgPSBmdW5jdGlvbiAoIGEgLCBiICkge1xuXG5cdFx0dGhpcy5hID0gYSA7XG5cdFx0dGhpcy5iID0gYiA7XG5cblx0fSA7XG5cblx0SXRlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICggKSB7XG5cblx0XHR2YXIgdCA7XG5cblx0XHR0ID0gdGhpcy5hIDtcblx0XHR0aGlzLmEgPSB0aGlzLmIgO1xuXHRcdHRoaXMuYiA9IGFkZCggdCAsIHRoaXMuYiApIDtcblxuXHRcdHJldHVybiB7IHZhbHVlIDogdCAsIGRvbmUgOiBmYWxzZSB9IDtcblxuXHR9IDtcblxuXHRyZXR1cm4gSXRlciA7XG5cbn1cblxuIl19