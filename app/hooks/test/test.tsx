export const test = async () => {
    console.log("====================fetching raffles");

    const response = await fetch(`/api/administration`, {
        method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({
        //     inscriptionId,
        //     paymentAddress,
        //     ordinalPublicKey,
        //     walletType,
        //   }),
    });
    console.log(response);
    if (response.status == 200) {
        const data = await response.json();
        return data;
    } else {
        return undefined;
    }
};
