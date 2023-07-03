export enum Status {
  Active = "active",
}

export interface Bond {
  company:                  string;
  image_url:                string;
  preview_small_url:        string;
  preview_url:              string;
  loan_id:                  number;
  loan_class:               number;
  loan_isin:                string;
  loan_name:                string;
  loan_order:               number;
  term:                     number;
  term_left:                number;
  interest_rate:            number;
  rating:                   string;
  status:                   Status;
  borrower_type?:            string;
  end_date:                 string;
  progress?:                 number;
  amount?:                   number;
  principal_debt?:           number;
  ytm?:                      number;
  min_price?:                number;
  invested_contracts_count?: number;
  invested_debt?:            number;
  invested_company_debt?:    number;
}
