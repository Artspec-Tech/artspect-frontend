import { getOrElse } from "@utils/nullOperations";
import { useRouter } from "next/router";

export const useNextPage = () => {
  const router = useRouter();
  const page = parseInt(getOrElse(router.query.page as string, "-1"));
  return () => {
    router.push({
      query: {
        page: page + 1,
      },
    });
  };
};
