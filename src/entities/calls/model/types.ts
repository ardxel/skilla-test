export type CallListRequest = {
  /* date format in YYYY-MM-DD */
  /* start date */
  date_start: string;

  /* end date */
  date_end: string;

  /* sign of an incoming or outgoing call */
  in_out?: number;

  /* size limit, default is 50 */
  limit?: number
}

export type Filter = {
  id: number;
  title: string
}

type PartnerData = {
  id: string;
  name: string;
  phone: string
}

type Results = {
  type: string;
  title: string;
  tooltip: string;
}

export interface Call {
  id: number,
  partnership_id: string,
  partner_data: PartnerData,
  date: string;
  date_notime: string;
  time: number;
  from_number: string;
  from_extension: string;
  to_number: string;
  to_extension: string;
  is_skilla: number;
  status: string;
  record: string;
  line_number: string;
  in_out: 1;
  from_site: 0;
  source: string;
  errors: string[];
  disconnect_reason: string;
  results: Results[];
  stages: string[];
  abuse: string[];
  contact_name: string;
  contact_company: string;
  person_id: number;
  person_name: string;
  person_surname: string;
  person_avatar: string;
}

export type CallWithResult = Call & {
  fake_call_result: number;
}