import Image from "next/image";
import Button from "./_components/Button";
import Questions from "./_components/Questions";
import Pagination from "./_components/Pagination";
import { csQuestions } from "./_lib/constants";

export default function Home() {
  return (
    <div>
      <Questions />
      <Pagination />
    </div>
  );
}
