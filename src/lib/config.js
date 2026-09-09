export const WHATSAPP_NUMBER = "21626653690";
export const WHATSAPP_DISPLAY = "+216 26653690";
export const BRAND_NAME = "ÉLÉGANCE";

export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
