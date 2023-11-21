# zmath
Wrapper for exact-math purposed for use with Solidity!

### Problem - Solution
The general idea here is that it can be preferable to avoid BigInt, BigNumber, 
and *even* the number datatype when working with or simulating smart contract code.  

We would instead favor string representation for all numbers and mathematical operation.
This results in less conversion code and a greater degree of **human-readability** and
**debug-ability** while authoring and debugging our projects.  
We like the simplicity and predictability afforded us by working with strings.

When we begin to work this way, we tend to discover a propensity to lean all the way in to it.

Zmath aims to be the perfect utility for leaning completely into string math dependency.


### Tersity
To reduce cognitive load in our implementations, zmath's function names are short and 
shorthandy, and import individually rather than under a namespace.

### Sanitization
Zmath internally applies a custom sanitizer to most operations which automatically handles basic 
type/format conversions, and prettifies and corrects values, within reason. This lends to a 
graceful DX that keeps us moving.

For example: 
- 0 becomes "0" (numbers and BigNumbers always convert to string)
- ".0" becomes "0.0" (leading decimal prefixed with 0)
- "0." becomes "0" (trailing decimal removed)
- "00100.00100" becomes "100.001"
- "11.22.33" throws an error
- ,_$% characters are always removed

### Error Reporting
Zmath has pretty good error reporting when it decides we've gone too far off the rails, and the solidity series of functions adds more checks and reporting on top.

## Include
Zmath supports both CommonJS require() and ESM imports

```javascript
import {
  sAdd,sSub,sMul,sDiv,sAddRay,_Add,_Sub,_Mul,_Div,_AddRay,_Chk,sSanitize,
  sRnd,sAbs,_Flr,sFlr,sPow,sFla,sExp,sHR,hrExp,sNewtonSqRt,sChg,sScaleToPcts,
  sIs,sIs0,sIsGT,sIsLT,sIsGTorEq,sIsLTorEq,sIsEq,sIsNotEq,
  k0,num,sEthToWei,first4,last4,surr4s,inTenMinutes,weiToUSD,usdToWei,
  sGetLR,abbrvNum,balToHrTuple,getAmountOut,adjustBrightness,
  sUint256max,sPpow2_128,sJsMaxSafeInt,
} from '@tdurica/zmath';

/* - OR - */

const {
  sAdd,sSub,sMul,sDiv,sAddRay,_Add,_Sub,_Mul,_Div,_AddRay,_Chk,sSanitize,
  sRnd,sAbs,_Flr,sFlr,sPow,sFla,sExp,sHR,hrExp,sNewtonSqRt,sChg,sScaleToPcts,
  sIs,sIs0,sIsGT,sIsLT,sIsGTorEq,sIsLTorEq,sIsEq,sIsNotEq,
  k0,num,sEthToWei,first4,last4,surr4s,inTenMinutes,weiToUSD,usdToWei,
  sGetLR,abbrvNum,balToHrTuple,getAmountOut,adjustBrightness,
  sUint256max,sPpow2_128,sJsMaxSafeInt,
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
inTenMinutes(); // string epoch timestamp 10 minutes from Date.now()

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
//_Chk - checks a number for solidity boundary violations
_Chk('12345.12345') // "12345.12345"
_Chk('-12345.12345') // throws math underflow warning
_Chk(sAdd(sUint256max,'1')) // throws math overflow warning

// eccentric series
sRnd('1.23456', -2); // "1.23" //TODO: expand explanation
sAbs('-7.89'); // "7.89"
sPow('2', '3'); // "8"
//sFla: "formula" same as exactMath.formula() with config matching rest of zmath
sFla('2e+3'); // "2000"
//sFlr: "floor" 
sFlr('1.23456', -3) // 
_Flr('1.23456') //1 (solidity 
//sExp (expand x by y^10) moves decimal left or right 
// TODO: perhaps rename to sDec
// "expand 10 negatively by 2 powers of 10" 
sExp('10', '-2'); // "0.1"
// "expand 10 positively by 2 powers of 10" 
sExp('10', '2'); // "1000"

// "hr" shorthand denotes "human readable" formatting
sHR('1234567890.123456'); // "1_234_567_890.1234"
sExpHR('1234567890.123456', 3); // "1_234_567_890.123"
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
sChg('10', '15'); // "-5"
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

## TODOs:
#### v1 patches
- new utilities for BigNumber, BigInt, and Hex
- existing function support for BigInt
- add jsdoc and/or typescript for all functions
- expand color operations support
- support more uniswap router operations Eg. getAmountOut et al
- support chaining of operations
#### for 2.0
- rethink some naming conventions
