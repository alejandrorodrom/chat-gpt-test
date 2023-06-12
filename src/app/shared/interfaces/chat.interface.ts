export interface Message {
  type: 'response' | 'request'
  message: string;
}

export interface ChatResponse {
  response: string;
  timestamp: string;
}
