'use server';

import { z } from "zod";

type FormState = {
    msg: string
};

const formSchema = z.object({
    email: z.string().email("Invalid email. Please Check Again")
});

export const SaveData = async (_is: FormState, formData: FormData): Promise<FormState> => {
    const email = formData.get("email") as string;


    const result = formSchema.safeParse({ email });
    if (!result.success) {
        for (const row of result.error.issues) {
            console.log(row.message);
        }
        return { msg: 'Something Went Wrong' };
    }
    else {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Subscribed Successful : ", result.data);
        return { msg: 'Done' };
    }
}