import { z } from "zod";

const formSchema = (t)=> z.object({
    nombres: z.string().min(1, t("form.errors.nameRequired")),
    email: z.email(t("form.errors.emailInvalid")).min(1, t("form.errors.emailRequired")),
    message: z.string().min(5, t("form.errors.messageTooShort"))
})

export default formSchema;