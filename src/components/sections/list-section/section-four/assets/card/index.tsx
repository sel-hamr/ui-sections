import { motion } from "framer-motion";
import { CardType } from "../columns";
import DropIndicator from "../drop-indicator";

export const Card = ({ column, id, title }: CardType) => {
  const handleDragStart = (e: DragEvent, card: CardType) => {
    if (e.dataTransfer) e.dataTransfer.setData("cardId", card.id);
  };
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        data-id={id}
        onDragStart={(e: DragEvent) =>
          handleDragStart(e, { title, id, column })
        }
        draggable="true"
        className="cursor-grab rounded border border-neutral-700 bg-[#22272B] p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  );
};
