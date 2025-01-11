export interface BaseResponse<T> {
  resultType: string;
  error?: Error;
  data?: T;
}

interface Error {
  errorCode: string;
  reason: string;
}
