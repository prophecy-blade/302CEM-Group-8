export class History {
  public constructor(
    public id: string,
    public user_id: string,
    public room_id: string,
    public amount: number,
    public check_in_date: Date,
    public check_out_date: Date
  ) {}
}
