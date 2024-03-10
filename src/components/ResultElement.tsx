import { ResultBox, LeftDiv, TextDiv, ImageBox } from "./styles/ResultElement.style"
import BlobIcon from '../assets/Blob.svg';
import BlobIcon2 from '../assets/Blob1.svg';
import GoTo from '../assets/GoTo.svg';
import { details, myUser } from "../types";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../fetch";
import { Details } from "./Details";



export const ResultElement = ({ myUser }: myUser) => {
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


    return (
        <>
            <ResultBox>
                <LeftDiv>
                    <ImageBox>
                        {
                            myUser.id % 2 == 0 ?
                                <img src={BlobIcon} alt="Image blob background" />
                                :
                                <img src={BlobIcon2} alt="Image blob background" />
                        }
                        <img src={myUser.avatar_url} alt="User Image" />
                    </ImageBox>
                    <TextDiv>
                        <h1>{myUser.login}</h1>
                        <p onClick={handleClick}>{isVisible ? "Close Details" : "See Full Profile"}</p>
                    </TextDiv>
                </LeftDiv>

                <a href={myUser.html_url} target="_blank" ><img src={GoTo} alt="Go to Icon" /></a>

            </ResultBox>
            {
                isVisible && detailedData ?
                    <Details userInfo={detailedData} />
                    :
                    null
            }
        </>
    )
}
