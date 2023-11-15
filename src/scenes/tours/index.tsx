import Htext from "@/shared/Htext";
import { TourType, SelectedPage } from "@/shared/types";
import {
  TruckIcon,
  PencilSquareIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Tour from "./Tours";
import ActionButton from "@/shared/ActionButton";
import Trees from "@/assets/Trees.png";

const tours: Array<TourType> = [
  {
    icon: <TruckIcon className="h-6 w-6" />,
    title: "Travel by your Own Car",
    description:
      "If you feel better in your own car you have the chance join to a group of people who have the same passion for this kind of trip.",
  },
  {
    icon: <PencilSquareIcon className="h-6 w-6" />,
    title: "Route Adjustment",
    description:
      "If you dreamt of visiting some special place and it's near the main route you'll be able to offer to attend it for all the trip participants.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Together All of the Time",
    description:
      "If your home pet is a member of your family and you're sad every time you leave it at home...so, don't do it...just pick it up to travel :)",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Tours = ({ setSelectedPage }: Props) => {
  return (
    <section id="tours" className="mx-auto min-h-screen w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Tours)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext> COMFORT TRAVELS. </Htext>
          <p className="my-5 text-sm">
            We offer you comfortable travel, where you have the ability to
            travel in your own car, plan your own route and bring your pets with
            you.
          </p>
        </motion.div>

        {/* TOURS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {tours.map((tour: TourType) => (
            <Tour
              key={tour.title}
              icon={tour.icon}
              title={tour.title}
              description={tour.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAFICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAFIC */}
          <img
            className="mx-auto"
            alt="tours-page-grafic"
            src={Trees}
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    TRAVEL TO THE MOUNTAINS. EVERYTHING YOU SHOULD{" "}
                    <span className="text-primary-500">KNOW ABOUT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                The mountains influence people magically. Mountains have
                powerful landscapes that take you but be careful there are some
                things in this unbelievable world that you should remember.
                Please, remember that the weather changes often in the mountains
                that's why your clothes must be comfortable and protect you from
                the cold and rain.
              </p>
              <p className="mb-5">
                When nature is around you there is a chance to meet insects,
                sometimes they're not really polite so don't forget about insect
                protection. For people who are suffering from pressure change,
                highly recommended to bring some appropriate medicine to make it
                better. Enjoy your trip and be safe.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tours;
