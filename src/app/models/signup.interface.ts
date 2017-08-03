/**
 * Created by Carlo on 03.08.2017.
 */
export interface User {
  name: string;
  account: {
    email: string;
    confirm: string;
  };
}
