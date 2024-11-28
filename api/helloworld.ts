export function GET(request) {
    console.log(request);
    return new Response('hello world');
}

export const config = {
    runtime: 'edge',
};
