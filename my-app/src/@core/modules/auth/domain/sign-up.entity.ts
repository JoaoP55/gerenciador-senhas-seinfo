import z from "zod";
import { signUptimeSchema } from "../schema/sign-up.schema";

export type TsignUpInputSchema = z.input<typeof signUptimeSchema>;
export type TsignUpOutputSchema = z.output<typeof signUptimeSchema>;


