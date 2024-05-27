import { KPICollectionApiResponseItem } from "./KpiCollection";
import { LayoutApiResponseItem } from "./Layout";

export interface LayoutCollectionApiResponse {
  items: LayoutCollectionApiResponseItem[];
}

export interface LayoutApiResponseItemContent {
  id: string;
  href: string;
  modal: KPICollectionApiResponseItem;
};

export interface LayoutCollectionApiResponseItem {

  id: string;
  name: string;
  description: string;
  layout: {
    id: string;
    href: string;
    modal?: LayoutApiResponseItem;
  },
  content: {
    [key: string]: LayoutApiResponseItemContent[];
  };
}

export interface ResponseError {
  message: string;
}
