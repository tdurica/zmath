# zmath
Wrapper for exact-math purposed for use with Solidity!

## Include
zmath supports both CommonJS require() and ESM imports

```javascript
import {
  sUint256max,sPpow2_128,sJsMaxSafeInt,
  k0,num,sEthToWei,first4,last4,surr4s,inTenMinutes,weiToUSD,usdToWei,
  sAdd,sSub,sMul,sDiv,sAddRay,_Add,_Sub,_Mul,_Div,_AddRay,sScaleToPcts,
  sRnd,sAbs,sPow,sFla,sExp,sHR,hrExp,sNewtonSqRt,sChg,_Chk,lightenDarkenColor,
  sIs,sIs0,_F,sIsGT,sIsLT,sIsGTorEq,sIsLTorEq,sIsEq,sIsNotEq,abbrvNum,balToHrTuple, getAmountOut
} from '@tdurica/zmath';

/* - OR - */

const {
  sUint256max,sPpow2_128,sJsMaxSafeInt,
  k0,num,sEthToWei,first4,last4,surr4s,inTenMinutes,weiToUSD,usdToWei,
  sAdd,sSub,sMul,sDiv,sAddRay,_Add,_Sub,_Mul,_Div,_AddRay,sScaleToPcts,
  sRnd,sAbs,sPow,sFla,sExp,sHR,hrExp,sNewtonSqRt,sChg,_Chk,lightenDarkenColor,
  sIs,sIs0,_F,sIsGT,sIsLT,sIsGTorEq,sIsLTorEq,sIsEq,sIsNotEq,abbrvNum,balToHrTuple,getAmountOut
} = require('@tdurica/zmath');
```

## Usages
```javascript

// useful constants
sUint256max; // "115792089237316195423570985008687907853269984665640564039457584007913129639935"
sPpow2_128; // "340282366920938463463374607431768211456" //TODO: doublecheck or explain var name
sJsMaxSafeInt; // "9007199254740991"

// general utilities
k0({ key: 'value' }); // "key" //TODO: rename, extend implementation
num('42'); // 42
sEthToWei('1.5'); // "1500000000000000000"
first4('123456789'); // "1234"
last4('123456789'); // "6789"
surr4s('1234567890'); // "1234...7890"
inTenMinutes(); // a string representing the epoch timestamp 10 minutes from Date.now()

// core series
sAdd('1.01', '1.02'); // "2.03"
sSub('5', '2'); // "3"
sMul('2.5', '1.5'); // "3.75"
sDiv('6', '2'); // "3"
sAddRay('1', '2', '3'); // "6"

// underscore series adds Solidity boundary checking & reporting
_Add('1.5', '2.3'); // "3.8"
_Sub('5', '2'); // "3"
_Mul('2.5', '1.5'); // "3.75"
_Div('6', '2'); // "3"
_AddRay('1', '2', '3'); // "6"

// eccentric series
sRnd('1.23456', -2); // "1.23" //TODO: expand explanation
sAbs('-7.89'); // "7.89"
sPow('2', '3'); // "8"
//sFla same as exactMath.formula() with config matching rest of zmath
sFla('2e+3'); // "2000"

//sExp (expand x by y^10) moves decimal left or right 
// TODO: perhaps rename to sDec
// "expand 10 negatively by 2 powers of 10" 
sExp('10', '-2'); // "0.1"
// "expand 10 positively by 2 powers of 10" 
sExp('10', '2'); // "1000"

// "hr" shorthand denotes "human readable" formatting
sHR('1234567890.123456'); // "1_234_567_890.1234"
hrExp('1234567890.123456', 3); // "1_234_567_890.123"//TODO: rename as sExpHR?
sNewtonSqRt('25'); // "5"

// comparator series
sIs('5', '>', '3'); // true
sIs0('0'); // true
sIsGT('5', '3'); // true
sIsLT('2', '4'); // true
sIsGTorEq('5', '5'); // true
sIsLTorEq('3', '3'); // true
sIsEq('7', '7'); // true
sIsNotEq('6', '7'); // true

// change series - track change between values
sChg('10', '15'); // "5"
sChg.ba('10', '15'); // { before: "10", after: "15", change: "5" }
sChg.hr('10', '15', 2); // "5.00"
sChg.pct('10', '15'); // "+50%"
sChg.pct('10', '5'); // "-50%"
sChg.bahr('10', '15', 2); // { before: "10.00 (10)", after: "15.00 (15)", change: "5.00 (5)", changePct: "+50%" }
sChg.full('10', '15', 2); // { before: "10.00 (10)", after: "15.00 (15)", change: "5.00 (5)", changePct: "+50%" }

// color utils
lightenDarkenColor('#00F', 10); // "#a0a190"
lightenDarkenColor('00F', 10); // "a0a190"
```
