import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import Htext from "@/shared/Htext";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>
            <span className="text-primary-500"> BECOME A MEMBER</span> OF A
            TRAVEL CLUB
          </Htext>
          <p className="my-5">
            Join our club you will be able first to get to know new information
            about tourism and travel life hacks. Take part in the random
            lotteries and get a chance to win a free trip for all your family.
            Club members can accumulate bonuses and points that they'll able to
            spend during future trips. Choosing to become a member of our club
            you become a part of the nature world.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              className="text-black"
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/54f119df20956c0274f0677738427c1f"
              method="POST"
            >
              {errors.firstName && (
                <p className="mt-1 text-red-500">
                  {errors.firstName.type === "required" &&
                    "This field is required."}
                  {errors.firstName.type === "maxLength" &&
                    "Max length is a 100 char."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="FIRST NAME"
                {...register("firstName", {
                  required: true,
                  maxLength: 100,
                })}
              />

              {errors.lastName && (
                <p className="mt-1 text-red-500">
                  {errors.lastName.type === "required" && 
                  "This field is required."}
                  {errors.lastName.type === "maxLength" &&
                    "Max length is a 100 char."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="LAST NAME"
                {...register("lastName", {
                  required: true,
                  maxLength: 100,
                })}
              />

              {errors.email && (
                <p className="mt-1 text-red-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email adress."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />

              {errors.message && (
                <p className="mt-1 text-red-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is a 2000 char."}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full"
                alt="contuct-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
