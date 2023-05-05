const getAllMobileNo =async (contract , CSPName)=>{
    if(!contract ) return false;

    const res= await contract.methods.getAllMobileNo(CSPName).call();
    return await Promise.all(
        res.map(async (item)=>{
          const {tokenId,mobileNo,owner,user}=await contract.methods.getMobileNoDetails(item).call(); 
          return {tokenId,mobileNo,user,owner}; 
    }));

}

const getAllCSP =async (contract)=>{
    if(!contract) return false;
    
    const res= await contract.methods.getAllCSPIds().call();
    return await Promise.all(
        res.map(async (item)=>{
            
            const {CSPId,CSPName,CSPAddress}=await contract.methods.getCSPDetails(item).call(); 
            return {CSPId,CSPName,CSPAddress};
        })
    );
    
}


const getCSPByAddress =async (contract , address)=>{
    if(!contract ) return false;

    const res= await contract.methods.getCSPByAddress(address).call();
    const {CSPId,CSPName,CSPAddress}=await contract.methods.getCSPDetails(res).call(); 
    return {CSPId,CSPName,CSPAddress};
}

const getCSPByID =async (contract , _CSPId)=>{
    if(!contract) return false;

    const {CSPId,CSPName,CSPAddress}=await contract.methods.getCSPDetails(_CSPId).call();
    return {CSPId,CSPName,CSPAddress};
}

const getCSPIdFromName = async (contract , CSPName)=>{
    if(!contract ) return false;
    const res= await contract.methods.getCSPIdByName(CSPName).call();
    return res;
}

const getCSPNameById = async (contract , CSPId)=>{
    if(!contract ) return false;
    const res= await contract.methods.getCSPNameById(CSPId).call();
    return res;
}

const getCSPIdByAddress = async (contract , address)=>{
    if(!contract) return false;
    const res= await contract.methods.getCSPIdByAddress(address).call();
    return res;
}


export {getAllMobileNo,
        getAllCSP,
        getCSPByAddress,
        getCSPByID,
        getCSPIdFromName,
        getCSPNameById,
        getCSPIdByAddress
    }