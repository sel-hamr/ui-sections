import { Dispatch } from "react";
import { Column } from "./item";
import { Card } from "../card";
import { moveCard } from "../utilis";
import DropIndicator from "../drop-indicator";
import AddCard from "../addCard";

export type CardType = {
  title: string;
  id: string;
  column: string;
};

export type ColumnType = {
  id: string;
  title: string;
  headingColor: string;
  column: string;
  columnIndex: number;
};
type ColumnCardsProps = {
  columns: ColumnType[];
  cards: CardType[];
  setCards: Dispatch<React.SetStateAction<CardType[]>>;
};

export function Columns({ columns, cards, setCards }: ColumnCardsProps) {
  return (
    <>
      {columns.map((column) => {
        const columnCards = cards.filter((card) => card.column === column.id);
        return (
          <Column
            key={column.id}
            title={column.title}
            headingColor={column.headingColor}
            column={column.id}
            length={columnCards.length}
            handleDrag={(e) => {
              const copyCard = moveCard(e, column.id, cards);
              if (copyCard) setCards(copyCard);
              console.log("handleDrag");
            }}
          >
            {columnCards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
            <DropIndicator beforeId={null} column={column.id} />
            <AddCard column={column.id} setCards={setCards} />
          </Column>
        );
      })}
    </>
  );
}
