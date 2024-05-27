export interface VisualsApiResponse {
  items: VisualsApiResponseItem[];
}

export interface VisualsApiResponseItem {
  id: string;
  name: string;
  description: string;
  ref: string;
  preview: string;
}

export interface ResponseError {
  message: string;
}
