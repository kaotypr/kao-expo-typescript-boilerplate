class Fetcher {
  #baseUrl: string;
  #config: Partial<RequestInit> = {};

  constructor(baseUrl: string = "", config: Partial<RequestInit> = {}) {
    this.#baseUrl = baseUrl;
    this.#config = config;
  }

  get = async (path: string, params?: { [keys: string]: any }): Promise<any> => {
    try {
      const queryParams = new URLSearchParams(params).toString();
      const url = params ? `${this.#baseUrl}${path}?${queryParams}` : `${this.#baseUrl}${path}`;
      return fetch(url, { ...this.#config }).then((res) => res.json());
    } catch (error) {
      return Promise.reject(error);
    }
  };

  post = async (path: string, data?: BodyInit): Promise<any> => {
    try {
      const url = `${this.#baseUrl}${path}`;
      return fetch(url, { ...this.#config, method: "POST", body: data }).then((res) => res.json());
    } catch (error) {
      return Promise.reject(error);
    }
  };

  put = async (path: string, data?: BodyInit): Promise<any> => {
    try {
      const url = `${this.#baseUrl}${path}`;
      return fetch(url, { ...this.#config, method: "PUT", body: data }).then((res) => res.json());
    } catch (error) {
      return Promise.reject(error);
    }
  };

  patch = async (path: string, data?: BodyInit): Promise<any> => {
    try {
      const url = `${this.#baseUrl}${path}`;
      return fetch(url, { ...this.#config, method: "PATCH", body: data }).then((res) => res.json());
    } catch (error) {
      return Promise.reject(error);
    }
  };

  delete = async (path: string, data?: BodyInit): Promise<any> => {
    try {
      const url = `${this.#baseUrl}${path}`;
      return fetch(url, { ...this.#config, method: "DELETE", body: data }).then((res) =>
        res.json()
      );
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export default Fetcher;
