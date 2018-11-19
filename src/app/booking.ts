export class Booking {
  public constructor(
    public id: string,
    public check_in: Date,
    public check_out: Date,
    public room_id: string,
    public user_id: string
  ) {}
}
