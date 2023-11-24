import axios from 'axios';
import { MethodEnum } from '../../../enums/methods.enum';
export type MethodTypes = 'get' | 'post' | 'put' | 'patch' | 'delete';

export default class ConnectionAPI {
  static async call<T>(url: string, method: MethodTypes, body?: unknown): Promise<T> {
    switch (method) {
      case MethodEnum.GET:
      case MethodEnum.DELETE:
        return (await axios[method]<T>(url))?.data;
      case MethodEnum.POST:
      case MethodEnum.PUT:
      case MethodEnum.PATCH:
      default:
        return (await axios[method]<T>(url, body))?.data;
    }
  }

  static async connect<T>(url: string, method: MethodTypes, body?: unknown): Promise<T> {
    return this.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        // O servidor respondeu com um status de erro (por exemplo, 404, 500)
        throw new Error(`Erro de resposta do servidor: ${error.response.data}`);
      } else if (error.request) {
        // A solicitação foi feita, mas não houve resposta do servidor
        throw new Error(`Erro de requisição: ${error.request}`);
      } else {
        // Ocorreu um erro durante o processamento da solicitação
        throw new Error(`Erro: ${error.message}`);
      }
    });
  }
}

export const ConnectionAPIGet = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.GET);
};

export const ConnectionAPIDelete = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.DELETE);
};

export const ConnectionAPIPost = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.POST, body);
};

export const ConnectionAPIPut = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PUT, body);
};

export const ConnectionAPIOPatch = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PATCH, body);
};
