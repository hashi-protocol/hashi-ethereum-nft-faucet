async function main() {
    const Nft = await ethers.getContractFactory("Nft")
    const nft = await Nft.deploy()
    console.log("Contract deployed to address:", nft.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
