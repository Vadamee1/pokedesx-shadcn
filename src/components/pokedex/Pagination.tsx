import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PokemonResponse } from "@/types/pokemon";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  data: PokemonResponse;
  offset: number;
}

export default function PokemonPagination({ data, offset }: Props) {
  const newNextOffset = (offset ? offset : 0) + 15;
  const newPreviousOffset = (offset ? offset : 0) - 15;

  return (
    <Pagination className="sm:mt-0 md:mt-4 sm:mb-6 mb-0">
      <PaginationContent className="space-x-4">
        {data.previous ? (
          <PaginationItem>
            <Link href={`?offset=${newPreviousOffset}`}>
              <Button variant="ghost">Previous</Button>
            </Link>
          </PaginationItem>
        ) : (
          ""
        )}
        {data.next ? (
          <PaginationItem>
            <Link href={`?offset=${newNextOffset}`}>
              <Button variant="ghost">Next</Button>
            </Link>
          </PaginationItem>
        ) : (
          ""
        )}
      </PaginationContent>
    </Pagination>
  );
}
