const ethers = require('ethers')
const fs = require('fs')

async function main() {
    // compile contracts in our code
    // compile contracts separately
    // http://127.0.0.1:7545

    const provider = new ethers.JsonRpcProvider('http://127.0.0.1:7545')

    const wallet = new ethers.Wallet(
        '0xb1b6c9a04067280f5db566732cf3bc7418f4eadb58710477d242e03498f608bf',
        provider
    )

    const abi = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.abi', 'utf8')
    const bynary = fs.readFileSync(
        './SimpleStorage_sol_SimpleStorage.bin',
        'utf-8'
    )

    const contractFactory = new ethers.ContractFactory(abi, bynary, wallet)

    const contract = await contractFactory.deploy()

    const transactionReceipt = await contract.deploymentTransaction().wait(1)

    console.log('Deployment transaction:')
    console.log(contract.deploymentTransaction())

    console.log('Transaction receipt:')
    console.log(transactionReceipt)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
