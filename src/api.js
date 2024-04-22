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

export function ALBUM_GET({ id_album }) {
  return {
    url: API_URL + `/albuns/${id_album}`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
  }
}

export function ALBUM_FAIXAS_GET({ id_album }) {
  return {
    url: API_URL + `/albuns/${id_album}/faixas`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
  }
}

export function FAIXA_DELETE({ id_faixa }) {
  return {
    url: API_URL + `/faixas/${id_faixa}`,
    options: {
      method: "DELETE",
    }
  }
}

export function FAIXA_POST(body) {
  return {
    url: API_URL + "/faixas",
    options: {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    }
  }
}

export function ALBUM_POST(body) {
  return {
    url: API_URL + "/albuns",
    options: {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    }
  }
}

export function ALBUM_DELETE(id_album) {
  return {
    url: API_URL + `/albuns/${id_album}`,
    options: {
      method: "DELETE",
    }
  }
}

export function ALBUNS_FAIXAS_GET() {
  return {
    url: API_URL + '/with-faixas',
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
  }
}