'use client';
import { SaveData } from "../serverActions";
import { useActionState } from "react";

const NewsLetter = () => {
    const [state, formAction, pending] = useActionState(SaveData, { msg: "Nothing" });
    console.log("Form before Submit :", state);

    return (
        <>
            <div className="newsletter-left text-white font-bold capitalize">
                <h3 className="text-[1.2em] sm:text-[1.4em]">Sign Up For Our Newsletter</h3>
            </div>
            <div className="newsletter-right ml-0 sm:ml-[2em] w-full sm:w-[50%] mt-4 sm:mt-0">
                <form action={formAction} className="flex">
                    <input type="email" name="email" required pattern="^[a-z0-9._]+@[a-z]+\.[a-z]{2,4}$" />
                    <input type="submit" disabled={pending} value="Subscribe Now" />
                </form>
            </div>
        </>
    );
}

export default NewsLetter;