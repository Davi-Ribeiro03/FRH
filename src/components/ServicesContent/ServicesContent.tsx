import { ComponentProps } from "react";
import "./ServicesContent.css";
import { motion } from "framer-motion";

type ServicesContentType = ComponentProps<typeof motion.div> & {
  nome: string;
  img: string;
};

const ServicesContent = ({
  nome,
  img,
  ...props
}: ServicesContentType): JSX.Element => {
  return (
    <motion.div className="servicesContent" {...props}>
      <img src={img} alt={nome} />
      <p>{nome}</p>
    </motion.div>
  );
};

export default ServicesContent;
