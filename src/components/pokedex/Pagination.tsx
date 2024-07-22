import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PokemonResponse } from "@/types/pokemon";

interface Props {
  data: PokemonResponse;
  offset: number;
}

export default function PokemonPagination({ data, offset }: Props) {
  const newNextOffset = (offset ? offset : 0) + 15;
  const newPreviousOffset = (offset ? offset : 0) - 15;

  return (
    <Pagination className="sm:mt-0 md:mt-4 sm:mb-6 mb-0">
      <PaginationContent>
        {data.previous ? (
          <PaginationItem>
            <PaginationPrevious href={`?offset=${newPreviousOffset}`} />
          </PaginationItem>
        ) : (
          ""
        )}
        {data.next ? (
          <PaginationItem>
            <PaginationNext href={`?offset=${newNextOffset}`} />
          </PaginationItem>
        ) : (
          ""
        )}
      </PaginationContent>
    </Pagination>
  );
}
