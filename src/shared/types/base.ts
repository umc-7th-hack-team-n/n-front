export interface BaseResponse<T> {
  resultType: string;
  error?: Error;
  success?: T;
}

interface Error {
  errorCode: string;
  reason: string;
}
