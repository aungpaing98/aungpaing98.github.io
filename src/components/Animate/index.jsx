import { useState } from "react";

import { AnimateSharedLayout, motion } from "framer-motion";

export default function Animate(props) {
  const { project } = props;
  const [selectedId, setSelectedId] = useState(null);

  return (
    <AnimateSharedLayout type="crossfade">
      {project.map((item) => (
        <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
          <motion.h5>{item.description}</motion.h5>
          <motion.h2>{item.img}</motion.h2>
        </motion.div>
      ))}
    </AnimateSharedLayout>
  );
}
