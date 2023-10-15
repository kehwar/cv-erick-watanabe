export function getDomain(url: string) {
    return url.replace(/(https?:\/\/)?(www.)?/i, "").split("/")[0];
}

export default getDomain;
