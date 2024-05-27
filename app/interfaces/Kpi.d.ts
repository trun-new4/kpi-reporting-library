export interface KPIApiResponse {
  items: KPIApiResponseItem[];
}

export interface KPIApiResponseItem {
  id: string;
  name: string;
  questions: KPIApiResponseItemQuestion[];
  visuals: KPIApiResponseItemVisual[];
}

export interface KPIApiResponseItemQuestion {
  title: string;
  description: string;
}

export interface KPIApiResponseItemVisual {
  name: string;
  href: string;
  preview: string;
}

export interface ResponseError {
  message: string;
}
