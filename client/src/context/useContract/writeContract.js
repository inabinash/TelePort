//create CSP
const createCSP= async(contract,account , CSPName ,CSPId)=>{
    if(!contract) 
    return false;
    console.log("contract",contract);
    //console.log("contract Address",contract._address);
    const res= await contract.methods.createCSP(CSPName,CSPId)
    .send({from:account});
    console.log(res);
    return res;

}

//create MobileNo
const createMobileNo= async(
    contract,
    account,
    mobileNo,
    CSPName,
    
    user
    )=>{
    if(!contract)
        return false;

    const res= await contract.methods.createMobileNo(CSPName,mobileNo,user)
    .send({from:account});
    return res;
    }


// Transfer MobileNo
const transferMobileNo= async(
    contract,
    account,
    _cspName,
    _mobileNo,
    _newOwner,
    tokenId
    )=>{
    if(!contract) 
    return false;
    const res= await contract.methods.transferMobileNo(_cspName,_mobileNo,_newOwner,tokenId)
    .send({from:account});
    return res;
}

export {createCSP,createMobileNo,transferMobileNo};




