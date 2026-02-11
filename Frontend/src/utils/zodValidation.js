import { z } from "zod";

const forbiddenDomains = [
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "yopmail.com",
  "fakeinbox.com",
  "trashmail.com"
];


const formSchema = (t)=> z.object({
    names: z.string().min(1, t("form.errors.nameRequired")),
    email: z.email(t("form.errors.emailInvalid"))
            .refine((email)=>{
                const domain = email.split("@")[1];
                return !forbiddenDomains.includes(domain);
            },{
                message: t("form.errors.emailTemp")
            })
            .min(1, t("form.errors.emailRequired")),
    message: z.string().min(5, t("form.errors.messageTooShort"))
})

export default formSchema;