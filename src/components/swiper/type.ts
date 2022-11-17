export interface Attributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  path: string;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface SwiperData {
  data: Datum[];
  meta: Meta;
}
