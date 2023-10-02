import { app, db } from "@/lib/firebase/index";
import { collection, addDoc } from "firebase/firestore";

export const dbInstance = collection(db, "surveySettings");
