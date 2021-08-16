import { verify } from "argon2";
import * as jwt from "jsonwebtoken";
import { client } from "../index";

export default async (_, { email, password }) => {
  const res = await client.query(
    "select id, password from users where email=$1",
    [email]
  );
  if (!res.rowCount || !(await verify(res.rows[0].password, password))) {
    throw new Error("Invalid email or password");
  }

  return await jwt.sign({ email: email }, process.env.JWT_SIGNING_KEY, {
    expiresIn: "1h",
    subject: res.rows[0].id.toString(),
    notBefore: "0s",
  });
};
