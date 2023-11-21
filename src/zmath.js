// import { ethers } from 'ethers';
import exactMath from './exact-math-dist/exact-math.js';
import {adjustBrightness} from './zcolor.js'

const sUint256max='115792089237316195423570985008687907853269984665640564039457584007913129639935';
const diff       ='31319569545912321281247414944698969706902316100102552102633584007913129639836';
const sPpow2_128='340282366920938463463374607431768211456';
const sJsMaxSafeInt='9007199254740991';

const _eMsanitize=(v,label)=>{
  if(typeof(v)==='number'){v=v.toString();}
  if(typeof(v)==='object'&&v._isBigNumber){v=v.toString();}
  if(['string'].indexOf(typeof(v))<0){console.error(`${typeof(v)} in ${label}: `,v);throw new Error;}
  if(v.indexOf('.')!==v.lastIndexOf('.')){console.error(`2+ decimals in ${label}: `,v);throw new Error;}
  v=v.replace(/[,_$%]/g,'');
  v=v.indexOf('.')>-1?v.replace(/^0+|0+$/g,''):v.replace(/^0+/g,'');
  v=(typeof(v)==='string'&&/.*[1-9].*/.test(v))?v:'0';
  if(v.indexOf('.')===0){v='0'+v;}
  if(v.indexOf('.')===v.length-1){v=v.slice(0,-1);}
  return v;
}
const sSanitize = _eMsanitize
const eMcfg=(mDec=18)=>({returnString:true,eMinus:Infinity,ePlus:Infinity,maxDecimal:mDec})
const _eMdo=(m,s1,s2,mDec=18,solmode)=>{
  s1=_eMsanitize(s1,`s${m.charAt(0).toUpperCase()+m.slice(1)} arg1`)
  s2=_eMsanitize(s2,`s${m.charAt(0).toUpperCase()+m.slice(1)} arg2`)
  if(solmode)return solHandler(s1,s2,m,solmode);
  else return exactMath[m](s1,s2,eMcfg());
};
const solHandler=(s1,s2='',m='',sol='',rv='')=>{
  function label(){return `${m} ${s1}, ${s2} = ${rv}`}
  if(m==='div'&&sIs0(s2)){
    rv='0';console.error(`math divided by zero! ${label()}`);return rv;}
  if(m==='div'&&sIs0(s1)){
    rv='0';console.warn(`math divided zero by! ${label()}`);return rv;}
  if(m==='mul'&&(sIs0(s1)||sIs0(s2))){
    rv='0';console.warn(`math multiplied by zero! ${label()}`);return rv;}
  [s1,s2,rv].forEach(v=>{if(!v)return
    if(sIsGT(v,sUint256max)){console.warn(`math overflow! ${label()}`)}
    if(sIsLT(v,'1')&&sIsGT(v,'0')){console.warn(`math fractional! ${label()}`)}
    if(sIsLT(v,'0')){console.warn(`math underflow! ${label()}`)}
  })
  if(m&&s2)rv=exactMath[m](s1,s2,eMcfg())
  return rv;
}
const _Chk = (s1)=>solHandler(s1);

const __AddRay=(solmode,array)=>{
  let rv='0';if(array.length<2){array=array[0]}
  for(let s of array){
    rv=solmode?_Add(rv,s):sAdd(rv,s);
  }
  return rv;
}

const sAdd=(s1,s2,maxDec)=>_eMdo('add',s1,s2,maxDec,0)
const sSub=(s1,s2,maxDec)=>_eMdo('sub',s1,s2,maxDec,0)
const sMul=(s1,s2,maxDec)=>_eMdo('mul',s1,s2,maxDec,0)
const sDiv=(s1,s2,maxDec)=>_eMdo('div',s1,s2,maxDec,0)
const _Add=(s1,s2)=>_eMdo('add',s1,s2,0,1)
const _Sub=(s1,s2)=>_eMdo('sub',s1,s2,0,1)
const _Mul=(s1,s2)=>_eMdo('mul',s1,s2,0,1)
const _Div=(s1,s2)=>_eMdo('div',s1,s2,0,1)

const sAddRay=(...rest)=>{return __AddRay(0,rest)}
const _AddRay=(...rest)=>{return __AddRay(1,rest)}

const sFlr=(s1,dec=1)=>{s1=_eMsanitize(s1,`_F`);return exactMath.floor(s1,Number(dec),eMcfg())}
const _Flr=(s1)=>{s1=_eMsanitize(s1,`_F`);return exactMath.floor(s1,eMcfg())}

const sRnd=(s1,dec=1,cfg)=>{s1=_eMsanitize(s1,`sRnd`);
  return exactMath.round(s1.toString(),Number(dec),eMcfg())
}
const sAbs=(s1)=>{s1=_eMsanitize(s1,`sAbs`);return s1.replace(/-/,'')}
//__ prefix denotes internal use only

const sPow=(s1, pow)=>exactMath.pow(s1.toString(),Number(pow),eMcfg())

const sFla=(formula)=>exactMath.formula(formula,eMcfg())

const sExp=(s1,dec,esign='+')=>{
  s1=_eMsanitize(s1,`sExp`);
  if(dec.toString().indexOf('-')>-1){esign='-';}
  return sFla(`${s1}e${esign}${sAbs(dec)}`)
}
// sGetLR - returns array of values left and right of decimal
const sGetLR=(s1, label, rv=[])=>{
  s1=_eMsanitize(s1,label);let idx = s1.indexOf('.');
  return idx<0?[s1,'0']:[s1.slice(0, idx),s1.slice(idx+1, s1.length)];
}

const sHR=(val)=>{
  let [L,R]=sGetLR(val,`sHR`)
  let left=L.replace(/\B(?=(\d{3})+(?!\d))/g, '_');
  let right = R.replace(/([0-9]*[1-9]|[0]?)[0]*/, '$1')
  return left+'.'+right
}
const hrExp=(val,exp)=>{
  return sHR(sExp(val,exp))
}


function k0(obj){return Object.keys(obj)[0];}
function num(string){return parseInt(string);}
function sEthToWei(eth){return sExp(eth,18);}
function last4(val){return val.slice(-4)}
function first4(val){return val.slice(0,4)}
function surr4s(val){return `${val.slice(0,4)}...${val.slice(-4)}`}
// function _toBN(val){return ethers.BigNumber.from(val)}
// function _toHex(val){return ethers.utils.hexValue(parseInt(val))}
function inTenMinutes(){return (Math.floor(Date.now() / 1000) + 60 * 10).toString()}

const sIs=(a,op,b)=>{
  let aGTb=null, splitA, splitB;
  if(['>','>=','<','<=','==','!='].indexOf(op)<0){throw new Error(`invalid operator in sIs: ${op}`)}
  a=_eMsanitize(a,`sIs arg1`);b=_eMsanitize(b,`sIs arg2`);
  if(['==','!='].indexOf(op)>-1){return op==='=='?a===b:a!==b}
  if(a===b && ['>=','<='].indexOf(op)>-1){return true;}
  if(a===b && ['>','<'].indexOf(op)>-1){return false;}
  //with equality ruled out, remainder tests for Greater Than
  if(['<','<='].indexOf(op)>-1){[a,b]=[b,a];}
  let aIsNeg = a.indexOf('-')>-1, bIsNeg = b.indexOf('-')>-1;
  if(!aIsNeg && bIsNeg){return true;}if(aIsNeg && !bIsNeg){return false;}
  let bothNeg=aIsNeg&&bIsNeg
    ,[aL,aR]=sGetLR(a,`sIs arg1`)
    ,[bL,bR]=sGetLR(b,`sIs arg1`);
  if (aL.length!==bL.length){return !bothNeg?aL.length>bL.length:bL.length>aL.length}
  splitA=aL.split('');splitB=bL.split('');
  for (let i=0;i<splitA.length;i++){
    if (splitA[i]>splitB[i]){aGTb=true;break;}
    if (splitA[i]<splitB[i]){aGTb=false;break;}
  }
  if(aGTb!==null){return bothNeg?!aGTb:aGTb;}
  if(aR.length<bR.length){aR+='0'.repeat(bR.length-aR.length)}
  if(bR.length<aR.length){bR+='0'.repeat(aR.length-bR.length)}
  // console.log(aR,bR);
  splitA=aR.split('');splitB=bR.split('');
  for (let i=0; i<splitA.length; i++){
    if (splitA[i] > splitB[i]){aGTb=true;break;}
    if (splitA[i] < splitB[i]){aGTb=false;break;}
  }return bothNeg?!aGTb:aGTb;
}
const sIs0=(a)=>sIs(a,'==','0');
const sIsGT=(a,b)=>sIs(a,'>',b);
const sIsLT=(a,b)=>sIs(a,'<',b);
const sIsGTorEq=(a,b)=>sIs(a,'>=',b);
const sIsLTorEq=(a,b)=>sIs(a,'<=',b);
const sIsEq=(a,b)=>sIs(a,'==',b);
const sIsNotEq=(a,b)=>sIs(a,'!=',b);



function sNewtonSqRt(n,precision='40') {
  n=_eMsanitize(n,'sNewtonSqRt');
  // let dec2=sAdd(dec, n.length)
  let bigDec=precision;
  let bigDecNeg='-'+precision;
  let prec1= sExp(1,bigDecNeg)
  // let prec2= sExp(sExp(1,sMul(bigDec,'-1')),sMul(n.length,-1))
  // console.log(`dec: ${dec}`);
  // console.log(`dec2: ${dec2}`);
  // console.log(`prec1: ${prec1}`);
  // console.log(`prec2: ${prec2}`);
  // Assuming the sqrt of n as n only
  let x = n;
  let root;
  let count = 0;
  while (true) {
    count++;
    let _divNX = sDiv(n,x,bigDec)
    let _addX = sAdd(x,_divNX,bigDec)
    let div2 = sDiv(_addX,'2',bigDec)
    root = div2
    // Check for closeness
    let diff = sSub(root,x,bigDec);
    let diffAbs = diff.replace(/-/,'');
    if (sIsLT(diffAbs,prec1)){
      break;
    }
    x = root;
  }
  let rv = root;
  console.log(`sNewtonSqRt(n='${n}',precision='${bigDec}'):`);
  console.log(`count:`,count);
  console.log(`n         : ${n}`);
  console.log(`rv        : ${rv}`);
  console.log(`rv*rv     : ${sMul(rv,rv)}`);
  console.log(`diff rv   : ${sSub(sMul(rv,rv),n)}`);
  return rv;
}

const sChg = function(v1,v2){
  return sSub(v2,v1);
}
//before/after
sChg.ba=(v1,v2)=>({before:v1, after:v2, change:sSub(v2,v1)});
//human-readable
sChg.hr=(v1,v2,dec=0)=>hrExp(sSub(v2,v1),dec);
//percent
sChg.pct=(v1,v2)=>{
  let pct=sRnd(sMul(sMul(sSub('1',sDiv(v2,v1)),'100'),-1),-3)
  return sIsEq(v1,v2)?'0%':sIs0(v1)?'100%':sIs0(v2)?'-100%'
    :`${/-/.test(pct)?pct:'+'+pct}%`;
};
//before/after human-readable
sChg.bahr=(v1,v2,_hrExp=0)=>(sIs0(v1)&&sIs0(v2)?'0->0':{
  before:`${hrExp(v1,_hrExp)} (${v1})`,
  after :`${hrExp(v2,_hrExp)} (${v2})`,
  change:`${hrExp(sSub(v2,v1),_hrExp)} (${sSub(v2,v1)})`,
});
//everything
sChg.full=(v1,v2,_hrExp=0)=>(sIs0(v1)&&sIs0(v2)?'0->0':{
  ...sChg.bahr(v1,v2,_hrExp), changePct:sChg.pct(v1,v2)
});
// console.log(sChg('100','009.00'))





function scaleUtil(argArray, rangeMin, rangeMax){
  //Find the total sum of all the values in the array
  let arraySum = args.reduce((a,b)=>a+b);
  // Divide each value by the total sum
  let mapDivBySum = args.map(v=>v/arraySum)
  // Multiply each value by 100
  return mapDivBySum.map(v=>v*100)
}

function _sScaleToPcts(...args){
  scaleUtil([args],0,100)
}


function sScaleToPcts(...args){
  //Find the total sum of all the values in the array
  let arraySum = args.reduce((a,b)=>sAdd(a,b));
  // Divide each value by the total sum
  let mapDivBySum = args.map(v=>sDiv(v,arraySum))
  // Multiply each value by 100
  return mapDivBySum.map(v=>sMul(v,100))
}
// let r2 = sScaleToPcts('300',900,200)


const abbrvNum = (num, fixed) => {
  if (num === null) { return ''; }
  if (num <= 0) { return '0'; }
  fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
  let b = (num).toPrecision(2).split("e"), // get power
    k = b.length === 1 ? 0 : Math.floor(Math.min(Number(b[1].slice(1)), 14) / 3),
    c = k < 1 ? num.toFixed(fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed),
    d = Number(c) < 0 ? c : Math.abs(Number(c)); // append power
  return d + ['', 'K', 'M', 'B', 'T'][k];
}

const hrWeiToEth=(s1)=>{
  s1=_eMsanitize(s1,`hrWeiToEth`);
  solHandler(s1)
  sExp(s1,-18)
}
const weiToUSD = (inputWei, ethPrice)=>{
  let weiPrice = sExp(ethPrice,-18);
  return sRnd(sMul(sAbs(inputWei), weiPrice),-9)
}
const usdToWei = (inputUSD, ethPrice)=>{
  let weiPrice = sExp(ethPrice,-18);
  let usdAsWei = _Flr(sDiv(inputUSD,weiPrice),0)
  return usdAsWei
}
function getAmountOut(amountIn, reserveIn, reserveOut)  {
  //((x^fee * Y) / (X + x^fee)
  let amountInWithFee = _Mul(amountIn,997);
  let numerator = _Mul(amountInWithFee,reserveOut);
  let denominator = _Add(_Mul(reserveIn,1000),amountInWithFee);
  let amountOut = _Div(numerator, denominator);
  return amountOut;
}

function balToHrTuple(rawBal, decimal, usdPrice) {
  //@returns [rawBal, decimalAdjustedBal, usdEquivalent]
  const decimalAdjustedBal = sRnd(sExp(rawBal, -decimal), -4);
  const usdEquivalent = sRnd(sMul(decimalAdjustedBal, usdPrice), -2);
  return [rawBal, decimalAdjustedBal, usdEquivalent];
}

export {
  sAdd,sSub,sMul,sDiv,sAddRay,_Add,_Sub,_Mul,_Div,_AddRay,_Chk,sSanitize,
  sRnd,sAbs,_Flr,sFlr,sPow,sFla,sExp,sHR,hrExp,sNewtonSqRt,sChg,sScaleToPcts,
  sIs,sIs0,sIsGT,sIsLT,sIsGTorEq,sIsLTorEq,sIsEq,sIsNotEq,
  k0,num,sEthToWei,first4,last4,surr4s,inTenMinutes,weiToUSD,usdToWei,
  sGetLR,abbrvNum,balToHrTuple,getAmountOut,adjustBrightness,
  sUint256max,sPpow2_128,sJsMaxSafeInt,
}
// zcolor exports
// export {adjustBrightness}


