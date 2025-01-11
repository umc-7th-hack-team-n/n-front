export interface JudgeResponse {
  couple_id: number;
  c_text: string;
  score: string;
}

export interface JudgeRequest {
  couple_id: number;
  m_text: string;
  f_text: string;
}
