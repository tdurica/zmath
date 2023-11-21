import {
  sAdd,sSub,sMul,sDiv,sAddRay,_Add,_Sub,_Mul,_Div,_AddRay,_Chk,
  sRnd,sAbs,_Flr,sFlr,sPow,sFla,sExp,sHR,hrExp,sNewtonSqRt,sChg,sScaleToPcts,nScaleToPcts,
  sIs,sIs0,sIsGT,sIsLT,sIsGTorEq,sIsLTorEq,sIsEq,sIsNotEq,
  k0,num,sEthToWei,first4,last4,surr4s,inTenMinutes,weiToUSD,usdToWei,
  abbrvNum,balToHrTuple,getAmountOut,adjustBrightness,sUint256max,sPpow2_128,sJsMaxSafeInt,
} from '../src/zmath.js';

// let exp1 = sExp('0001111222233334444180000',-18)  //expect 1111.22
// debugger;

// let hrc3 = sHR('1157920935.00011579200039935000000')
// let hrc4 = sHR(sExp('1157920935.00011579200039935000000',-18))
// let hrc5 = sHR('00777111222111222111000.00099911188811188877700')
// let hrc6 = sHR(sExp('-00777111222111222111000.00099911188811188877700',18))
// let f3 = sHR('1157920935.000011579203993500000000000')
// let f5 = sHR('650003000.0003000')
// debugger;

_Chk('12345.12345') // "12345.12345"
_Chk('-1') // throws math underflow warning
_Chk(sAdd(sUint256max,'1')) // throws math overflow warning


/*
let findSqrtOf = '6788688645866844'
let findSqrtdec2 =  '82393498.80826061873665927'
let findSqrtdec6 =  '82393498.808261'
let findSqrtdec8 =  '82393498.80826062'

let ss = sNewtonSqRt(findSqrtOf)
console.log(ss);
console.log(`orig: ${findSqrtOf}`);
console.log(`mul:  ${sMul(ss,ss)}`);
console.log(`exp:  ${sPow(ss,2)}`);
*/


// let s111 = _AddRay('1','1','1');
// let s222 = _AddRay(['1','1','1']);
// debugger;

// let hrc3 = sIs0('00.34')
// let hrc34 = sIs0('340')
// let hrc35 = sIs0('034')
// let hrc36 = sIs0('034.0')
// let hrc37 = sIs0('-0.0')
// let hrc38 = sIs0('-0.10')
// let hrc39 = sIs0('-.0')
// let hrc30 = sIs0('-0.')
// let hrc322 = sIs0('-0')
// let hrc4 = sIs0('3.4')
// let hrc5 = sIs0('3.')
// let hrc6 = sIs0('0.')
// let hrc31 = sIs0('0')
// let hrc41 = sIs0('.0')
// let hrc51 = sIs0('0.0')
// let hrc61 = sIs0('0000.0000')
// debugger;

// let hr2 = sPowE('43',5)
// let f2 = sFla('43e+5')
//
// let hr2b = sPowE('-43',5)
// let f2b = sFla('-43e+5')

// let hrc3 = sExp('43',-5)
// let f3 = sFla('43e-5')
// let h52 = sIs('6','<','5601678.685')
// let h52 = sIs('.00001','>=','0')
// let h53 = sIs('.01','>=','0')
// let h54 = sIs('0.00000','>=','0')
// let h55 = sIs('-0.0100','>=','0')
// debugger;
// let hr3c =sIs('-115792089237316195423570985008687907853269984665640564039457584007913129639935','>','115792089237316195423570985008687907853269984665640564039457584007913129639935');
// let hgc = sIs('-115792089237316195423570985008687907853269984665640564039457584007913129639935','<','115792089237316195423570985008687907853269984665640564039457584007913129639935');
// let h2 =  sIs( '1157920935.115792039935','<=', '1157920935.115792039935')
// let h22 = sIs( '1157920935.115792039935','==', '1157920935.115792039935')
// let h32 = sIs('-1157920935.115792039935','>=','-1157920935.115792039935')
// let h42 = sIs( '1157920935.115792039935','<', '-1157920935.115792039935')
// let h52 = sIs('-0935','>',sMul('9',-(10**18)))
// let herc = sIs('0003000.0003000','<','0003000.0003001')
// let erc = sIs('0003000.0003000','<=','0003000.0003000')
// let hc = sIs('-0003000.0003000','<','0003000.0003000')
// let h = sIs('-0003000.0003000','>','0003000.0003000')
// let h4c = sIs('0003000.0003','>=','00003000.000300')
// let h5gr = sIs('10003000.0003000','>','0003000.0003001')
// let h3gr = sIs('0003000.0003000','!=','0003000.000300000000')
// let h7gr = sIs('00003000.0003000','==','0003000.00030000')
// let hr4 = sPowE('004000.000300',5)
// let f4 = sFla('004000.000300e+5')
// let hr5 = sPowE('0040.0300',-5)
// let f5 = sFla('0040.0300e-5')
//
