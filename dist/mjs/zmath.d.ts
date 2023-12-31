export function sAdd(s1: any, s2: any, maxDec: any): any;
export function sSub(s1: any, s2: any, maxDec: any): any;
export function sMul(s1: any, s2: any, maxDec: any): any;
export function sDiv(s1: any, s2: any, maxDec: any): any;
export function sAddRay(...rest: any[]): string;
export function _Add(s1: any, s2: any): any;
export function _Sub(s1: any, s2: any): any;
export function _Mul(s1: any, s2: any): any;
export function _Div(s1: any, s2: any): any;
export function _AddRay(...rest: any[]): string;
export function _Chk(s1: any): string;
export function sSanitize(v: any, label: any): any;
export function sRnd(s1: any, dec: number | undefined, cfg: any): any;
export function sAbs(s1: any): any;
export function _Flr(s1: any): any;
export function sFlr(s1: any, dec?: number): any;
export function sPow(s1: any, pow: any): any;
export function sFla(formula: any): any;
export function sExp(s1: any, dec: any, esign?: string): any;
export function sHR(val: any): string;
export function hrExp(val: any, exp: any): string;
export function sNewtonSqRt(n: any, precision?: string): any;
export function sChg(v1: any, v2: any): any;
export namespace sChg {
    function ba(v1: any, v2: any): {
        before: any;
        after: any;
        change: any;
    };
    function hr(v1: any, v2: any, dec?: number): string;
    function pct(v1: any, v2: any): string;
    function bahr(v1: any, v2: any, _hrExp?: number): "0->0" | {
        before: string;
        after: string;
        change: string;
    };
    function full(v1: any, v2: any, _hrExp?: number): any;
}
export function sScaleToPcts(...args: any[]): any[];
export function sIs(a: any, op: any, b: any): boolean | null;
export function sIs0(a: any): boolean | null;
export function sIsGT(a: any, b: any): boolean | null;
export function sIsLT(a: any, b: any): boolean | null;
export function sIsGTorEq(a: any, b: any): boolean | null;
export function sIsLTorEq(a: any, b: any): boolean | null;
export function sIsEq(a: any, b: any): boolean | null;
export function sIsNotEq(a: any, b: any): boolean | null;
export function k0(obj: any): string;
export function num(string: any): number;
export function sEthToWei(eth: any): any;
export function first4(val: any): any;
export function last4(val: any): any;
export function surr4s(val: any): string;
export function inTenMinutes(): string;
export function weiToUSD(inputWei: any, ethPrice: any): any;
export function usdToWei(inputUSD: any, ethPrice: any): any;
export function sGetLR(s1: any, label: any, rv?: any[]): any[];
export function abbrvNum(num: any, fixed: any): string;
export function balToHrTuple(rawBal: any, decimal: any, usdPrice: any): any[];
export function getAmountOut(amountIn: any, reserveIn: any, reserveOut: any): any;
import { adjustBrightness } from './zcolor.js';
export const sUint256max: "115792089237316195423570985008687907853269984665640564039457584007913129639935";
export const sPpow2_128: "340282366920938463463374607431768211456";
export const sJsMaxSafeInt: "9007199254740991";
export { adjustBrightness };
