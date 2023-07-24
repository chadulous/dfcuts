export async function GET() {
    rtAPI.onev(() => {
        console.log("A");
    });
    return new Response("OK")
}