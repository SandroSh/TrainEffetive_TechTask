import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../fetch";
import { details, myUser } from "../../types";
export const useResultElement = ({myUser}: myUser) => {
  const [detailedData, setDetailedData] = useState<details | null>();
  const [isVisible, setIsVisible] = useState(false);

  const { data: fetchedData } = useQuery({
    queryFn: () => fetchUser(`https://api.github.com/user/${myUser.id}`),
    queryKey: ['user', myUser.id],
    enabled: !!isVisible,
    initialData: null,
  });

  useEffect(() => {
    if (fetchedData) {
      setDetailedData(fetchedData);
    }
  }, [fetchedData]);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return { isVisible, handleClick, detailedData };
};
