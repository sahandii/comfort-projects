import { CONFIG_API_SERVER } from "../../config"

const check = async () => {
    const data = await fetch(CONFIG_API_SERVER + "/test", {
        method: "GET",
       credentials: 'include'
    }).then(d => d.json());
    console.log("Server has accessToken???", !data.error);
};

export default function ClientPage()
{
    return <div>
        <button onClick={check}>Check</button>
    </div>
}