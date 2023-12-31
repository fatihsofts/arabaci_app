import { Schema, models, model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  reservatedCars: Schema.Types.ObjectId[];
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    isAdmin: { type: Boolean, default: false },
    reservatedCars: [{ type: Schema.Types.ObjectId, ref: 'Car' }],
  },
  { timestamps: true }
);

const User = models.User || model('User', UserSchema);

export default User;
