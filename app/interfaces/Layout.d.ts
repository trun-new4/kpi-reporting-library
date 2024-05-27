export interface LayoutApiResponseItem {
  id: string;
  name: string;
  thumbnail: string;
  slots: number;
}

export interface LayoutApiResponse {
  items: LayoutApiResponseItem[];
}

export interface ResponseError {
  message: string;
}
