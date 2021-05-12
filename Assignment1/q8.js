"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        this.total_balance = function (x, y) {
            var bbalance = x + y;
            return bbalance;
        };
        this.name = name;
        this.id = id;
        this.balance = balance;
    }
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(interest) {
        var _this = _super.call(this, interest) || this;
        console.log("Interest " + interest);
        return _this;
    }
    SavingAccount.prototype.calinterest = function (interest) {
        return interest;
    };
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(cash_credit) {
        var _this = _super.call(this, cash_credit) || this;
        console.log("cash credit" + cash_credit);
        return _this;
    }
    CurrentAccount.prototype.cash = function (cash_credit) {
        return cash_credit;
    };
    return CurrentAccount;
}(Account));
var a = new Account(3, "abc", 500);
var s = new SavingAccount(200);
var c = new CurrentAccount(100);
var val = s.calinterest(200);
var val2 = c.cash(100);
var y = c.total_balance(val, val2);
console.log(y);
