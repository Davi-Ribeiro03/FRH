
import "./ContatosContent.css";
import { motion } from "framer-motion";

const ContatosContent = ({
  icone,
  texto,
}: {
  icone: string;
  texto: string;
}) => {
  return (
    <motion.div
      className="contatosContent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src={icone} alt="" />
      <p>{texto}</p>
    </motion.div>
  );
};

export default ContatosContent;
