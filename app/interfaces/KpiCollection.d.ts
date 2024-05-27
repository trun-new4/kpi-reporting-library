import { KPIApiResponseItem } from '@interfaces/Kpi.d';

export interface KPICollectionApiResponse {
  items: KPICollectionApiResponseItem[];
}

export interface KPICollectionApiResponseItem {
  id: string;
  name: string;
  description: string;
  kpi: KPICollectionApiResponseItemRef;
  visual: KPICollectionApiResponseItemRef;
  restricted?: boolean;
}

export interface KPICollectionApiResponseItemRef {
  id: string;
  href: string;
  modal?: KPIApiResponseItem | VisualsApiResponseItem;
}

export interface ResponseError {
  message: string;
}
