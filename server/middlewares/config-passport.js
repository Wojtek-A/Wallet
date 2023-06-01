import { ExtractJwt, Strategy } from "passport-jwt";
import passport from "passport";
import dotenv from "dotenv";
import { User } from "../models/Users.js";
dotenv.config();
const { SECRET } = process.env;
const params = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET,
};

passport.use(
  new Strategy(params, (payload, done) => {
    User.find({ _id: payload.id })
      .then(([user]) => {
        if (!user) {
          return done(new Error("User not found"));
        }
        return done(null, user);
      })
      .catch((err) => done(err));
  })
);

passport.initialize();

export { passport };
