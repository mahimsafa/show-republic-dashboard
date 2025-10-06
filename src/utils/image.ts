export function getImgURL(url: string | null) {
    if(!url) {
      return "/images/avatar.webp";
    }
    if(url?.startsWith("http")) {
      return url;
    }
    return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
}