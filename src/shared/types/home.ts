export interface HomeResponse {
  couple_id: number;
  m_nickname: string;
  f_nickname: string;
  couple_date: string;
}

export interface CoupleResponse {
  message: string;
  data: HomeResponse;
}
