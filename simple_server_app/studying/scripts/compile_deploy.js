const hre = require("hardhat");

/**
 * Вопросы к Павлу:
 * 1. Что делать с этими параметрами??? @param {constructor params} params - их же много
*/

class compile_deploy {

    /**
     * compile and deploy contract from contracts folder
     * @param {File name of contract: string} contract_name 
     * @param {constructor params} params - constructor(string memory something, etc) {}
     * @param {File name of contract} contract_name 
     */
    async compile_deploy_method(contract_name, params) {

      await hre.run('compile');

      const contract = await hre.ethers.getContractFactory(contract_name);
      const contract_to_deploy = await contract.deploy(params);

      await contract_to_deploy.deployed();

      console.log(`${contract_to_deploy} deployed address:`, contract_to_deploy.address);

      return contract_to_deploy.address
    
    }    

}

module.exports = compile_deploy



/** Вызов функции
 * compile_deploy()
      .then(() => process.exit(0))
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });
 */
