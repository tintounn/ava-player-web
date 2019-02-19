import io from 'socket.io-client';
import { isProd, getApiBaseUrl } from './utils';

let socket: any = null;

export function connect() {
  socket = io(`${getApiBaseUrl()}/ws`)
}

export function disconnect() {
  socket.close();
}

export default socket;