export const getUserDetails = async (serverID: string, userID: string) => {
    const response = await fetch(`/api/get-user-detail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            serverID,
            userID,
        }),
    });
    console.log(response);
    if (response.status == 200) {
        const data = await response.json();
        return data;
    } else {
        return undefined;
    }
};

export const editUserDetails = async (ethHot: string, ethCold: string, btc: string, sol: string) => {
    const response = await fetch(`/api/edit-user-details`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ethHot,
            ethCold,
            btc,
            sol,
        }),
    });
    console.log(response);
    if (response.status == 200) {
        const data = await response.json();
        return data;
    } else {
        return undefined;
    }
}