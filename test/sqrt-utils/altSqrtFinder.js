import {sDiv, sGetLR, sIs, sMul} from "../../src/zmath.js";

const sSqrt=(s1,dec)=>{
  let oddScalerMax = '31622776601683794'
  let [L,R]=sGetLR(s1,`sSqrt`)
  let length = L.length;
  let isEven = length % 2 === 0;
  //for odd lengths, Math.ceiling(length/2) scaled between 100xx and 31622776601683794
  // 999 becomes 3/2 (1.5) cieling -> 2 and we take substr(0,2) of 999 to get 99
  // 99 then scales between 10 and 31 to give us a best guess
  if(!isEven){

  }
  let LhalfOfLSubStr = L.substr(0,
    sMul(L.length,2))
  let t1 = sDiv(L.length,2),tH,tL;
  let goodEnough = false;
  while(!goodEnough){

  }
  if(HLE(t1)==='H'){
    tH = t1;
  }
  function HLE(test, base){
    let sq = sMul(test,test);
    return sIs(sq,'>',base)?'H':sIs(sq,'<',base)?'L'
      :sIs(sq,'==',base)?'E':null;
  }

}

//expect: 60.03434850150371
sSqrt('3604.123',18)
