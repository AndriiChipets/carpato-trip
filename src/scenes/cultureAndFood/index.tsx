import { CultureAndFoodType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import CultureFood from "./CultureAndFood";

const classes: Array<CultureAndFoodType> = [
  {
    name: "Magic Carpathians",
    description:
      "There are only two ways to live your life. The first one is as if no magic exists in our life and the second way there is only magic around us.",
    image: image1,
  },
  {
    name: "Better for Mountains can be Only Mountains",
    description:
      "The tour is for people who appreciate long walking on the mountain landscapes.",
    image: image2,
  },
  {
    name: "Gifts of a Forest",
    description:
      "The tour is for people who enjoy tasty, healthy, and natural food.",
    image: image3,
  },
  {
    name: "Tale Cities",
    description:
      "The chance to be surrounded by an old city, touch a past, and feel yourself as in a tale.",
    image: image4,
  },
  {
    name: "Majestic Castles",
    description:
    "Strength, power, bravery, indomitable spirit, and struggle. We have a lot to be proud of!",
    image: image5,
  },
  {
    name: "Better Together",
    description:
      "Travel is the best approach to get rid of solitude.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const CultureAndFood = ({ setSelectedPage }: Props) => {
  return (
    <section id="cultureandfood" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.CultureAndFood)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext>OUR TOURS</Htext>
            <p className="py-5 ">
              Everyone chooses exactly what they enjoy. In a certain life
              period, we need to be alone whether communicate a lot, want to be
              active or get relaxed, be emotional, or be calm. Anyway, we are
              able to offer you whatever you enjoy.
            </p>
          </div>
        </motion.div>
        {/* SIDE SCROLLING */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: CultureAndFoodType, index) => (
              <CultureFood
                key={`{item.name} -${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default CultureAndFood;
