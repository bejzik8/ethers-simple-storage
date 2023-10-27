import { ethers } from 'ethers'
import { writeFileSync } from 'fs-extra'
import 'dotenv/config'

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!)

    const encryptedJsonKey = await wallet.encrypt(
        process.env.PRIVATE_KEY_PASSWORD!
    )

    writeFileSync('./.encryptedKey.json', encryptedJsonKey)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
