/**
 * Created by Carlo on 29.07.2017.
 */
export class Heating {
  constructor(
    public name: string,
    public manufacturer: string,
    public modelVariant: string,
    public serialnumber: string,
    public currentTemperature: number,
    public actionMode: string
  ) {}
}
