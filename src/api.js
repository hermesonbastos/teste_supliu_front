export const API_URL = "http://127.0.0.1:8000/api";

export function ALBUNS_GET() {
  return {
    url: API_URL + "/albuns",
    options: {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  }
}