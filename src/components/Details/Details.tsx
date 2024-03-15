import { userInfo } from "../../types"
import { LeftDiv, MainDiv, RightDiv, LocationDiv, PortfolioButton } from "./Details.style"
import LocationIcon from '../../assets/Location.svg'
import { timeAgo } from './useDetails'
export const Details = ({ userInfo }: userInfo) => {

    const lastActivity = timeAgo(userInfo?.updated_at);


    return (
        <MainDiv>
            <LeftDiv>
                <h3>{userInfo?.name}</h3>
                {
                    userInfo?.bio ?
                        <p style={{ fontSize: '10px' }}>{userInfo?.bio}</p>
                        :
                        null
                }
                {
                    userInfo?.location ?
                        <LocationDiv>
                            <img src={LocationIcon} alt="Location Icon" />
                            <p>{userInfo?.location}</p>
                        </LocationDiv>
                        :
                        null
                }
                {
                    userInfo?.blog ?
                        <PortfolioButton>
                            <a href={userInfo?.blog} target="_blank" >Portfolio</a>
                        </PortfolioButton>
                        :
                        null
                }

            </LeftDiv>

            <RightDiv>
                <h3>On Github Since:<span>{userInfo?.created_at.slice(0, 4)}</span></h3>
                <h3>Last Activity:<span>{lastActivity}</span></h3>
                <h3>Public Repositories:<span>{userInfo?.public_repos}</span></h3>
                <h4>Following <span>{userInfo?.following}</span> <span style={{ color: "#279df2" }}>/\</span> <span>{userInfo?.followers}</span> Followers</h4>
            </RightDiv>
        </MainDiv>
    )
}
